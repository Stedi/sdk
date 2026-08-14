# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==0.0.9"]
# ///

"""Handle a claim that fails Stedi's edits.

    uv run --script create_professional_claim_submission_edit_failure.py <api-key>

An ICD-10 code that doesn't exist trips Stedi's clearinghouse edits, so the submission
raises a typed ClaimEditException (HTTP 400) listing what failed.

See https://www.stedi.com/docs/healthcare/claim-edits-and-repairs for more.
"""

import asyncio
import sys
from pathlib import Path
from uuid import uuid4

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import ClaimEditException, CreateProfessionalClaimSubmissionInput

FIXTURE = Path(__file__).parent / "fixtures" / "test-claim.json"
INVALID_DIAGNOSIS_CODE = "FZ9888"


def load_claim_with_invalid_diagnosis() -> CreateProfessionalClaimSubmissionInput:
    """Read the sample claim and swap in a diagnosis code the edits will reject."""
    claim = JSONCodec().deserialize(FIXTURE.read_bytes(), CreateProfessionalClaimSubmissionInput)

    if not claim.payer or claim.payer.id != "STEDITEST" or not claim.billing or not claim.encounter:
        raise SystemExit("input must be complete and bill the Stedi test payer.")

    claim.idempotency_key = str(uuid4())
    claim.billing.patient_control_number = new_patient_control_number()
    claim.encounter.primary_diagnosis_code = INVALID_DIAGNOSIS_CODE
    for line in claim.service_lines or []:
        line.diagnosis_codes = [INVALID_DIAGNOSIS_CODE]
    return claim


def new_patient_control_number() -> str:
    """Your own identifier for the claim (CLM01), unique per claim; payers echo it back."""
    return f"SDKTEST-{uuid4().hex[:8].upper()}"


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        try:
            await client.create_professional_claim_submission(load_claim_with_invalid_diagnosis())
        except ClaimEditException as rejection:
            edits = rejection.errors or []
            print(f"rejected with {len(edits)} edit failure(s):")
            for edit in edits:
                print(f"  [{edit.code}] {edit.description}")
        else:
            raise SystemExit(f"expected Stedi's edits to reject {INVALID_DIAGNOSIS_CODE}")


asyncio.run(main(sys.argv[1]))
