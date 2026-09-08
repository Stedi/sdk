# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Handle a claim that fails Stedi's edits.

    STEDI_API_KEY=<api-key> uv run --script create_professional_claim_submission_edit_failure.py

An ICD-10 code that doesn't exist trips Stedi's clearinghouse edits. The submission still
succeeds: Stedi stores the claim and a 277CA acknowledging the rejection, never sends the
claim to the payer, and returns the reasons in `errors`.

See https://www.stedi.com/docs/healthcare/claim-edits-and-repairs for more.
"""

import asyncio
import os
from pathlib import Path
from uuid import uuid4

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import CreateProfessionalClaimSubmissionInput

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
        submission = await client.create_professional_claim_submission(
            load_claim_with_invalid_diagnosis()
        )

    errors = submission.errors or []
    if not errors:
        raise SystemExit(f"expected Stedi's edits to reject {INVALID_DIAGNOSIS_CODE}")

    print(f"claim {submission.claim_id} rejected with {len(errors)} error(s):")
    for error in errors:
        print(f"  {error.description}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
