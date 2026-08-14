/**
 * Read a submission back as Stedi JSON.
 *
 *   tsx get-professional-claim-submission.ts <api-key>
 *
 * Submits the sample claim, then fetches it by submission ID. `data` holds the claim in the
 * same shape it was submitted in; the fields around it are metadata Stedi added while
 * processing, such as the resolved payer and any mapping discrepancies.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import {
  StediClient,
  CreateProfessionalClaimSubmissionCommand,
  GetProfessionalClaimSubmissionCommand,
  type CreateProfessionalClaimSubmissionCommandInput,
} from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;

/** Reads the sample claim, stamping the values that must be unique per submission. */
async function loadClaim(): Promise<CreateProfessionalClaimSubmissionCommandInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as CreateProfessionalClaimSubmissionCommandInput;

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

const apiKey = process.argv[2];
if (!apiKey) throw new Error("usage: get-professional-claim-submission.ts <api-key>");

const client = new StediClient({ apiKey: { apiKey } });

const created = await client.send(new CreateProfessionalClaimSubmissionCommand(await loadClaim()));
const submission = await client.send(
  new GetProfessionalClaimSubmissionCommand({ id: created.submissionId }),
);

const claim = submission.data;
console.log(`submission ${submission.submissionId} for claim ${submission.claimId}`);
console.log(`  processed at:       ${submission.processedAt?.toISOString()}`);
console.log(`  purpose:            ${claim?.purpose}`);
console.log(`  payer:              ${claim?.payer?.id}`);
console.log(`  patient control no: ${claim?.billing?.patientControlNumber}`);
console.log(`  total charge:       ${claim?.billing?.totalCharge}`);
console.log(`  service lines:      ${claim?.serviceLines?.length ?? 0}`);
