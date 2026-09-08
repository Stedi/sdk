# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Run a real-time eligibility check (270/271).

    STEDI_API_KEY=<test-api-key> uv run --script create_eligibility_check.py

The request comes from fixtures/eligibility-check.json, one of Stedi's documented mock
requests. With a test-mode API key Stedi answers it from mock data, so no payer is
contacted. See https://www.stedi.com/docs/healthcare/api-reference/mock-requests-eligibility-checks.
"""

import asyncio
import os
from pathlib import Path

from smithy_json import JSONCodec
from stedi import Config, Stedi
from stedi.models import CreateEligibilityCheckInput

FIXTURE = Path(__file__).parent / "fixtures" / "eligibility-check.json"


def load_request() -> CreateEligibilityCheckInput:
    """Read the mock request."""
    return JSONCodec().deserialize(FIXTURE.read_bytes(), CreateEligibilityCheckInput)


async def main(api_key: str) -> None:
    if not api_key.startswith("test_"):
        raise SystemExit("this example sends a mock request; use a test-mode API key (test_ prefix).")

    async with Stedi(Config(api_key=api_key)) as client:
        response = await client.create_eligibility_check(load_request())

    print(f"eligibility search {response.eligibility_search_id} against payer {response.payer_id}")
    for plan in response.plans or []:
        print(f"plan: {plan.name or '(unnamed)'}")
        for status in plan.benefits.statuses or []:
            service = (status.service.definition or status.service.value) if status.service else ""
            print(f"  {status.status} ({status.coverage_level}) {service}")
            if status.plan_coverage_description:
                print(f"    {status.plan_coverage_description}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
