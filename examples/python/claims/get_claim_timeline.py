# /// script
# requires-python = ">=3.12"
# dependencies = ["stedi==1.0.0"]
# ///

"""Retrieve a paginated history of a claim's submissions, 277CA acknowledgments, and 835 ERAs.

    STEDI_API_KEY=<api-key> uv run --script get_claim_timeline.py
"""

import asyncio
import os

from stedi import Config, Stedi
from stedi.models import (
    ClaimSummary,
    ClaimTimelineEvent,
    ClaimTimelineEventClaimAcknowledgment,
    ClaimTimelineEventClaimPaymentInformation,
    ClaimTimelineEventDentalClaimSubmission,
    ClaimTimelineEventInstitutionalClaimSubmission,
    ClaimTimelineEventProfessionalClaimSubmission,
    GetClaimTimelineInput,
    ListClaimsInput,
)


async def existing_claim(client: Stedi) -> ClaimSummary:
    """A claim already on your account; Stedi lists claims by most recent submission first."""
    claims = await client.list_claims(ListClaimsInput(page_size=1))

    if not claims.items:
        raise SystemExit("your account has no claims yet.")

    return claims.items[0]


def describe(event: ClaimTimelineEvent) -> str:
    """Name the artifact an event points at."""
    match event:
        case ClaimTimelineEventProfessionalClaimSubmission():
            return f"837P submission {event.value.id}"
        case ClaimTimelineEventDentalClaimSubmission():
            return f"837D submission {event.value.id}"
        case ClaimTimelineEventInstitutionalClaimSubmission():
            return f"837I submission {event.value.id}"
        case ClaimTimelineEventClaimAcknowledgment():
            return f"277CA {event.value.id}, {event.value.status}"
        case ClaimTimelineEventClaimPaymentInformation():
            return f"835 {event.value.id}, paid {event.value.claim_payment_amount}"
        case _:
            return f"event this SDK version does not know: {event.tag}"


async def main(api_key: str) -> None:
    async with Stedi(Config(api_key=api_key)) as client:
        claim = await existing_claim(client)
        timeline = await client.get_claim_timeline(GetClaimTimelineInput(id=claim.id))

    print(f"claim {claim.id} has {len(timeline.items)} event(s):")
    for event in timeline.items:
        print(f"  {describe(event)}")


api_key = os.environ.get("STEDI_API_KEY")
if not api_key:
    raise SystemExit("STEDI_API_KEY is not set")

asyncio.run(main(api_key))
