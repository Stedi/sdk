# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.10"]
# ///

"""Handle a destination ID that doesn't exist.

    STEDI_API_KEY=<api-key> uv run --script get_event_destination_not_found.py

Asks for an ID that was never created, and fails if the 404 never arrives.
"""

import asyncio
import os
from uuid import uuid4

from stedi import Config, Stedi
from stedi.models import GetEventDestinationInput, NotFoundException

MISSING_DESTINATION_ID = f"dst_{uuid4()}"


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        try:
            await client.get_event_destination(
                GetEventDestinationInput(destination_id=MISSING_DESTINATION_ID),
            )
        except NotFoundException as not_found:
            print(f"{MISSING_DESTINATION_ID} is not a destination in this account:")
            print(f"  {type(not_found).__name__}: {not_found.message}")
        else:
            raise SystemExit(f"expected {MISSING_DESTINATION_ID} not to exist")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
