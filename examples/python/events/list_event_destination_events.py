# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""List the most recent events in the account.

    STEDI_API_KEY=<api-key> uv run --script list_event_destination_events.py

Reads a single page; creates and deletes nothing.
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import ListEventDestinationEventsInput

PAGE_SIZE = 5


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        page = await client.list_event_destination_events(
            ListEventDestinationEventsInput(page_size=PAGE_SIZE),
        )

    events = page.items or []
    print(f"{len(events)} of the most recent event(s):")
    for event in events:
        print(f"  {event.id} [{event.status}] {event.event_type}")
        print(f"    created {event.created_at:%Y-%m-%d %H:%M:%S}")
    print("more pages available" if page.next_page_token else "no further pages")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
