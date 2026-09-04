# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.10"]
# ///

"""Read a destination's current signing secret.

    STEDI_API_KEY=<api-key> uv run --script get_event_destination_secret.py

Creates a destination first, since reading a secret needs one, and deletes it before exiting.
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
    GetEventDestinationSecretInput,
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
            secret = await client.get_event_destination_secret(
                GetEventDestinationSecretInput(destination_id=created.id),
            )

            expires_at = secret.previous_secret_expires_at
            print(f"destination {created.id}")
            print(f"  signing secret:  {mask(secret.signing_secret)}")
            print(
                f"  previous secret: "
                f"{f'valid until {expires_at}' if expires_at else '(no rotation in progress)'}"
            )
        finally:
            await client.delete_event_destination(
                DeleteEventDestinationInput(destination_id=created.id),
            )
            print(f"deleted {created.id}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
