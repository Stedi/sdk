/**
 * Retrieve a paginated history of a claim's submissions, 277CA acknowledgments, and 835 ERAs.
 *
 *   STEDI_API_KEY=<api-key> tsx get-claim-timeline.ts
 */

import { Stedi, type ClaimSummary, type ClaimTimelineEvent } from "@stedi/sdk";

/** A claim already on your account; Stedi lists claims by most recent submission first. */
async function existingClaim(client: Stedi): Promise<ClaimSummary> {
  const { items = [] } = await client.listClaims({ pageSize: 1 });
  const [claim] = items;

  if (!claim) {
    throw new Error("your account has no claims yet.");
  }

  return claim;
}

/** Names the artifact an event points at. */
function describe(event: ClaimTimelineEvent): string {
  const {
    professionalClaimSubmission,
    dentalClaimSubmission,
    institutionalClaimSubmission,
    claimAcknowledgment,
    claimPaymentInformation,
  } = event;

  if (professionalClaimSubmission) {
    return `837P submission ${professionalClaimSubmission.id}`;
  }
  if (dentalClaimSubmission) {
    return `837D submission ${dentalClaimSubmission.id}`;
  }
  if (institutionalClaimSubmission) {
    return `837I submission ${institutionalClaimSubmission.id}`;
  }
  if (claimAcknowledgment) {
    return `277CA ${claimAcknowledgment.id}, ${claimAcknowledgment.status}`;
  }
  if (claimPaymentInformation) {
    return `835 ${claimPaymentInformation.id}, paid ${claimPaymentInformation.claimPaymentAmount}`;
  }
  return `event this SDK version does not know: ${event.$unknown?.[0]}`;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });
const claim = await existingClaim(client);
const timeline = await client.getClaimTimeline({ id: claim.id });
const events = timeline.items ?? [];

console.log(`claim ${claim.id} has ${events.length} event(s):`);
for (const event of events) {
  console.log(`  ${describe(event)}`);
}
