# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.10"]
# ///

"""Read an event back by ID.

    STEDI_API_KEY=<api-key> uv run --script get_event_destination_event.py

Reads the newest event in the account: events come from account activity, so no call here creates one.
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import (
    EventDestinationsEventPayloadV1Event,
    GetEventDestinationEventInput,
    ListEventDestinationEventsInput,
)


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        newest = await client.list_event_destination_events(
            ListEventDestinationEventsInput(page_size=1),
        )
        if not newest.items:
            raise SystemExit("this account has no events yet — nothing to read back by ID")

        event = await client.get_event_destination_event(
            GetEventDestinationEventInput(event_id=newest.items[0].id),
        )

    print(f"event {event.id}")
    print(f"  type:       {event.event_type}")
    print(f"  status:     {event.status}")
    print(f"  created at: {event.created_at:%Y-%m-%d %H:%M:%S}")

    if isinstance(event.event_payload, EventDestinationsEventPayloadV1Event):
        payload = event.event_payload.value
        resource = payload.resource
        print(f"  account:     {payload.account} ({payload.environment})")
        print(f"  resource:    {resource.type if resource else None} {resource.id if resource else None}")
        print(f"  related:     {len(payload.related_resources or [])} resource(s)")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
