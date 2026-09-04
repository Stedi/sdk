# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.10"]
# ///

"""Submit a professional claim.

    STEDI_API_KEY=<api-key> uv run --script create_professional_claim_submission.py

The claim comes from fixtures/test-claim.json, which bills the Stedi test payer, so no
real payer is contacted.
"""

import asyncio
import os
from pathlib import Path
from uuid import uuid4

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import CreateProfessionalClaimSubmissionInput

FIXTURE = Path(__file__).parent / "fixtures" / "test-claim.json"


def load_claim() -> CreateProfessionalClaimSubmissionInput:
    """Read the sample claim, stamping the values that must be unique per submission."""
    claim = JSONCodec().deserialize(FIXTURE.read_bytes(), CreateProfessionalClaimSubmissionInput)

    if not claim.payer or claim.payer.id != "STEDITEST" or not claim.billing:
        raise SystemExit("input must be complete and bill the Stedi test payer.")

    claim.idempotency_key = str(uuid4())
    claim.billing.patient_control_number = new_patient_control_number()

    return claim


def new_patient_control_number() -> str:
    """Your own identifier for the claim (CLM01), unique per claim; payers echo it back."""
    return f"SDKTEST-{uuid4().hex[:8].upper()}"


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        submission = await client.create_professional_claim_submission(load_claim())

    print(f"claim {submission.claim_id}, submission {submission.submission_id}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
