# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""List every event destination in the account.

    STEDI_API_KEY=<api-key> uv run --script list_event_destinations.py

Pages until the token runs out; creates and deletes nothing.
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import (
    EventDestinationsDestinationSummary,
    ListEventDestinationsInput,
)


async def main(api_key: str) -> None:
    destinations: list[EventDestinationsDestinationSummary] = []
    pages = 0

    async with Stedi(Config(api_key=api_key)) as client:
        page_token: str | None = None
        while True:
            page = await client.list_event_destinations(
                ListEventDestinationsInput(page_size=25, page_token=page_token),
            )
            destinations.extend(page.items or [])
            pages += 1
            page_token = page.next_page_token
            if not page_token:
                break

    print(f"{len(destinations)} destination(s) across {pages} page(s):")
    for destination in destinations:
        print(f"  {destination.id} [{destination.status}] {destination.name}")
        print(f"    {destination.destination_url} — {', '.join(destination.event_types or [])}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
