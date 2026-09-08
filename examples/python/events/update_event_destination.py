# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Change an event destination's configuration.

    STEDI_API_KEY=<api-key> uv run --script update_event_destination.py

Creates a destination first, since an update needs one, and deletes it before exiting.
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
    EventDestinationsDestinationInputStatus,
    UpdateEventDestinationInput,
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


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        created = await client.create_event_destination(load_destination())

        try:
            print(f"created {created.id}: {created.name} [{created.status}]")

            updated = await client.update_event_destination(
                UpdateEventDestinationInput(
                    destination_id=created.id,
                    name=f"{created.name} (paused)",
                    status=EventDestinationsDestinationInputStatus.DISABLED,
                    idempotency_key=str(uuid4()),
                ),
            )

            print(f"updated {updated.id}: {updated.name} [{updated.status}]")
            print(f"  url:         {updated.destination_url}")
            print(f"  event types: {', '.join(updated.event_types or [])}")
            print(f"  updated at:  {updated.updated_at:%Y-%m-%d %H:%M:%S}")
        finally:
            await client.delete_event_destination(
                DeleteEventDestinationInput(destination_id=created.id),
            )
            print(f"deleted {created.id}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
