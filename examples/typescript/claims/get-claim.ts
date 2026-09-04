/**
 * Retrieve a claim record, with summary information about its most recent submission.
 *
 *   STEDI_API_KEY=<api-key> tsx get-claim.ts
 */

import { Stedi, type ClaimSummary } from "@stedi/sdk";

/** A claim already on your account; Stedi lists claims by most recent submission first. */
async function existingClaim(client: Stedi): Promise<ClaimSummary> {
  const { items = [] } = await client.listClaims({ pageSize: 1 });
  const [claim] = items;

  if (!claim) {
    throw new Error("your account has no claims yet.");
  }

  return claim;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });
const existing = await existingClaim(client);
const claim = await client.getClaim({ id: existing.id });

console.log(`claim ${claim.id}`);
console.log(`  status:             ${claim.status} (reported by ${claim.statusReportedBy})`);
console.log(`  type:               ${claim.type}`);
console.log(`  patient control no: ${claim.patientControlNumber}`);
console.log(`  total charge:       ${claim.totalClaimChargeAmount}`);
console.log(`  total paid:         ${claim.totalClaimPaidAmount ?? "nothing reported yet"}`);
console.log(`  submitted at:       ${claim.submittedAt?.toISOString()}`);
