/**
 * Retrieve a paginated list of claim records, ordered by most recent submission first.
 *
 *   STEDI_API_KEY=<api-key> tsx list-claims.ts
 */

import { Stedi } from "@stedi/sdk";

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });
const { items = [] } = await client.listClaims({ pageSize: 10 });

if (items.length === 0) {
  console.log("no claims found");
}

for (const claim of items) {
  console.log(`${claim.id}  ${claim.status}  ${claim.patientControlNumber}`);
}
