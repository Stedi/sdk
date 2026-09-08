# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Check a professional claim without submitting it.

    STEDI_API_KEY=<api-key> uv run --script validate_professional_claim_submission.py

Runs the same payer checks, claim edits, and X12 mapping as
create_professional_claim_submission, but persists and delivers nothing — so you can
validate a claim while a user is still filling out a form. A response with no errors
means the claim would be accepted.
"""

import asyncio
import os
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
        validation = await client.validate_professional_claim_submission(load_claim())

    errors = validation.errors or []
    if not errors:
        print("valid: the claim would be accepted for submission")
        return

    print(f"invalid: {len(errors)} error(s) would reject the claim:")
    for error in errors:
        print(f"  {error.description}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
