# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Read a submission back as Stedi JSON.

    STEDI_API_KEY=<api-key> uv run --script get_professional_claim_submission.py

Submits the sample claim, then fetches it by submission ID. ``data`` holds the claim in the
same shape it was submitted in; the fields around it are metadata Stedi added while
processing, such as the resolved payer and any mapping discrepancies.
"""

import asyncio
import os
from pathlib import Path
from uuid import uuid4

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import (
    CreateProfessionalClaimSubmissionInput,
    GetProfessionalClaimSubmissionInput,
)

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
        created = await client.create_professional_claim_submission(load_claim())
        submission = await client.get_professional_claim_submission(
            GetProfessionalClaimSubmissionInput(id=created.submission_id),
        )

    claim = submission.data
    print(f"submission {submission.submission_id} for claim {submission.claim_id}")
    print(f"  processed at:       {submission.processed_at:%Y-%m-%d %H:%M:%S}")
    print(f"  purpose:            {claim.purpose}")
    print(f"  payer:              {claim.payer.id}")
    print(f"  patient control no: {claim.billing.patient_control_number}")
    print(f"  total charge:       {claim.billing.total_charge}")
    print(f"  service lines:      {len(claim.service_lines)}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
