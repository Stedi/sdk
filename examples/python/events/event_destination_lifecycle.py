# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.10"]
# ///

"""Create, read and delete an event destination.

    STEDI_API_KEY=<api-key> uv run --script event_destination_lifecycle.py

Runs one destination's whole life in a single pass, leaving nothing behind.
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
    GetEventDestinationInput,
)

FIXTURE = Path(__file__).parent / "fixtures" / "test-destination.json"


def load_destination() -> CreateEventDestinationInput:
    """Read the sample destination, giving it a unique name and idempotency key."""
    destination = JSONCodec().deserialize(FIXTURE.read_bytes(), CreateEventDestinationInput)
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
            print(f"created {created.id}")
            print(f"  name:        {created.name}")
            print(f"  url:         {created.destination_url}")
            print(f"  event types: {', '.join(created.event_types or [])}")
            print(f"  status:      {created.status}")
            print(f"  secret:      {mask(created.signing_secret)}")

            destination = await client.get_event_destination(
                GetEventDestinationInput(destination_id=created.id),
            )
            last_delivery = destination.last_delivery_time
            print(f"read back {destination.id}")
            print(f"  description:       {destination.description}")
            print(f"  concurrency limit: {destination.concurrency_limit}")
            print(f"  created at:        {destination.created_at:%Y-%m-%d %H:%M:%S}")
            print(f"  last delivery:     {last_delivery or '(none yet)'}")
        finally:
            await client.delete_event_destination(
                DeleteEventDestinationInput(destination_id=created.id, idempotency_key=str(uuid4())),
            )
            print(f"deleted {created.id}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
