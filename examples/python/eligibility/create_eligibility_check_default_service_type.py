# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Run an eligibility check without naming a service.

    STEDI_API_KEY=<test-api-key> uv run --script create_eligibility_check_default_service_type.py

``encounter`` is optional. When it is omitted, Stedi asks the payer about service type code
30 (Health Benefit Plan Coverage), the general "is this patient covered" inquiry that every
payer supports. Start here unless you need benefits for a specific service.
"""

import asyncio
import os
from pathlib import Path

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import CreateEligibilityCheckInput

FIXTURE = Path(__file__).parent / "fixtures" / "eligibility-check.json"


def load_request_without_encounter() -> CreateEligibilityCheckInput:
    """Read the mock request and drop the encounter, so Stedi applies the default service type."""
    request = JSONCodec().deserialize(FIXTURE.read_bytes(), CreateEligibilityCheckInput)
    request.encounter = None
    return request


async def main(api_key: str) -> None:
    if not api_key.startswith("test_"):
        raise SystemExit("this example sends a mock request; use a test-mode API key (test_ prefix).")

    async with Stedi(Config(api_key=api_key)) as client:
        response = await client.create_eligibility_check(load_request_without_encounter())

    print(f"eligibility search {response.eligibility_search_id} against payer {response.payer_id}")
    for plan in response.plans or []:
        for status in plan.benefits.statuses or []:
            service = f"{status.service.value} {status.service.definition or ''}" if status.service else ""
            print(f"  {status.status} ({status.coverage_level}) {service}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
