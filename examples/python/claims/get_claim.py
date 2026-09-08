# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Retrieve a claim record, with summary information about its most recent submission.

    STEDI_API_KEY=<api-key> uv run --script get_claim.py
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import ClaimSummary, GetClaimInput, ListClaimsInput


async def existing_claim(client: Stedi) -> ClaimSummary:
    """A claim already on your account; Stedi lists claims by most recent submission first."""
    claims = await client.list_claims(ListClaimsInput(page_size=1))

    if not claims.items:
        raise SystemExit("your account has no claims yet.")

    return claims.items[0]


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        existing = await existing_claim(client)
        claim = await client.get_claim(GetClaimInput(id=existing.id))

    print(f"claim {claim.id}")
    print(f"  status:             {claim.status} (reported by {claim.status_reported_by})")
    print(f"  type:               {claim.type}")
    print(f"  patient control no: {claim.patient_control_number}")
    print(f"  total charge:       {claim.total_claim_charge_amount}")
    print(f"  total paid:         {claim.total_claim_paid_amount or 'nothing reported yet'}")
    print(f"  submitted at:       {claim.submitted_at:%Y-%m-%d %H:%M:%S}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
