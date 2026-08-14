# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.9"]
# ///

"""Check a professional claim without submitting it.

    uv run --script validate_professional_claim_submission.py <api-key>

Runs the same payer checks, claim edits, and X12 mapping as
create_professional_claim_submission, but persists and delivers nothing — so you can
validate a claim while a user is still filling out a form. An empty success response
means the claim would be accepted.
"""

import asyncio
import sys
from pathlib import Path

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import ValidateProfessionalClaimSubmissionInput

FIXTURE = Path(__file__).parent / "fixtures" / "test-claim.json"


def load_claim() -> ValidateProfessionalClaimSubmissionInput:
    """Read the sample claim. Nothing is persisted, so no per-run stamping is needed."""
    claim = JSONCodec().deserialize(FIXTURE.read_bytes(), ValidateProfessionalClaimSubmissionInput)

    if not claim.payer or claim.payer.id != "STEDITEST":
        raise SystemExit("input must bill the Stedi test payer.")

    return claim


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        await client.validate_professional_claim_submission(load_claim())

    print("valid: the claim would be accepted for submission")


asyncio.run(main(sys.argv[1]))
