# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Rotate a destination's signing secret.

    STEDI_API_KEY=<api-key> uv run --script rotate_event_destination_secret.py

Creates a destination, rotates its signing secret, then deletes the destination it made.
Deliveries are signed with the new secret straight away; the previous one stays valid for
``previous_secret_expiry_hours`` — one hour below, 24 when you omit it — so payloads already
in flight still verify. Keep both secrets in your verification code until that grace period
ends; you cannot rotate again until it does.
"""

import asyncio
import os
from pathlib import Path
from uuid import uuid4

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import (
    CreateEventDestinationInput,
    DeleteEventDestinationInput,
    RotateEventDestinationSecretInput,
)

FIXTURE = Path(__file__).parent / "fixtures" / "test-destination.json"


def load_destination() -> CreateEventDestinationInput:
    """Read the sample destination, giving it a unique name and idempotency key."""
    destination = JSONCodec().deserialize(
        FIXTURE.read_bytes(), CreateEventDestinationInput
    )
    destination.name = f"{destination.name} {uuid4().hex[:8]}"
    destination.idempotency_key = str(uuid4())
    return destination


def mask(secret: str | None) -> str:
    """A signing secret is a credential: print enough to recognise it, never the whole value."""
    return f"{secret[:12]}… ({len(secret)} chars)" if secret else "(none)"


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        created = await client.create_event_destination(load_destination())

        try:
            print(f"destination {created.id}")
            print(f"  secret before: {mask(created.signing_secret)}")

            rotated = await client.rotate_event_destination_secret(
                RotateEventDestinationSecretInput(
                    destination_id=created.id,
                    previous_secret_expiry_hours=1,
                    idempotency_key=str(uuid4()),
                ),
            )

            print(f"  secret after:  {mask(rotated.signing_secret)}")
            print(f"  previous secret valid until: {rotated.previous_secret_expires_at}")
        finally:
            await client.delete_event_destination(
                DeleteEventDestinationInput(destination_id=created.id),
            )
            print(f"deleted {created.id}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
