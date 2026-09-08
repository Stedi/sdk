# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Handle an eligibility check that fails request validation.

    STEDI_API_KEY=<test-api-key> uv run --script create_eligibility_check_invalid_request.py

An NPI that isn't ten digits fails validation before anything is sent to the payer. Stedi
answers with an InvalidRequestException whose `errors` point at each rejected part of the
request, so the caller can fix it and retry.
"""

import asyncio
import os
from pathlib import Path

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import CreateEligibilityCheckInput, InvalidRequestException

FIXTURE = Path(__file__).parent / "fixtures" / "eligibility-check.json"
INVALID_NPI = "12345"


def load_request_with_invalid_npi() -> CreateEligibilityCheckInput:
    """Read the mock request and swap in an NPI that validation will reject."""
    request = JSONCodec().deserialize(FIXTURE.read_bytes(), CreateEligibilityCheckInput)

    if not request.provider:
        raise SystemExit("input must include a provider.")

    request.provider.npi = INVALID_NPI
    return request


async def main(api_key: str) -> None:
    if not api_key.startswith("test_"):
        raise SystemExit("this example sends a mock request; use a test-mode API key (test_ prefix).")

    async with Stedi(Config(api_key=api_key)) as client:
        try:
            await client.create_eligibility_check(load_request_with_invalid_npi())
        except InvalidRequestException as rejection:
            print(f"rejected: {rejection.message}")
            for failure in rejection.errors or []:
                print(f"  {failure.path or '(request)'}: {failure.message}")
            return

    raise SystemExit(f"expected Stedi to reject NPI {INVALID_NPI}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
