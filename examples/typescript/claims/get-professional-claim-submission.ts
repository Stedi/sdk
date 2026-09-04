/**
 * Read a submission back as Stedi JSON.
 *
 *   STEDI_API_KEY=<api-key> tsx get-professional-claim-submission.ts
 *
 * Submits the sample claim, then fetches it by submission ID. `data` holds the claim in the
 * same shape it was submitted in; the fields around it are metadata Stedi added while
 * processing, such as the resolved payer and any mapping discrepancies.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import { Stedi, type CreateProfessionalClaimSubmissionInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;

/** Reads the sample claim, stamping the values that must be unique per submission. */
async function loadClaim(): Promise<CreateProfessionalClaimSubmissionInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as CreateProfessionalClaimSubmissionInput;

  if (claim.payer?.id !== "STEDITEST" || !claim.billing) {
    throw new Error("input must be complete and bill the Stedi test payer.");
  }

  return {
    ...claim,
    billing: { ...claim.billing, patientControlNumber: newPatientControlNumber() },
    idempotencyKey: randomUUID(),
  };
}

/** Your own identifier for the claim (CLM01), unique per claim; payers echo it back. */
function newPatientControlNumber(): string {
  return `SDKTEST-${randomUUID().slice(0, 8).toUpperCase()}`;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const created = await client.createProfessionalClaimSubmission(await loadClaim());
const submission = await client.getProfessionalClaimSubmission({ id: created.submissionId });

const claim = submission.data;
console.log(`submission ${submission.submissionId} for claim ${submission.claimId}`);
console.log(`  processed at:       ${submission.processedAt?.toISOString()}`);
console.log(`  purpose:            ${claim?.purpose}`);
console.log(`  payer:              ${claim?.payer?.id}`);
console.log(`  patient control no: ${claim?.billing?.patientControlNumber}`);
console.log(`  total charge:       ${claim?.billing?.totalCharge}`);
console.log(`  service lines:      ${claim?.serviceLines?.length ?? 0}`);
