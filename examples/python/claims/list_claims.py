# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Retrieve a paginated list of claim records, ordered by most recent submission first.

    STEDI_API_KEY=<api-key> uv run --script list_claims.py
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import ListClaimsInput


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        claims = await client.list_claims(ListClaimsInput(page_size=10))

    if not claims.items:
        print("no claims found")

    for claim in claims.items:
        print(f"{claim.id}  {claim.status}  {claim.patient_control_number}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
