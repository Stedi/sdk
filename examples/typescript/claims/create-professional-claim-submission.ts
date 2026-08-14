/**
 * Submit a professional claim.
 *
 *   tsx create-professional-claim-submission.ts <api-key>
 *
 * The claim comes from fixtures/test-claim.json, which bills the Stedi test payer, so no
 * real payer is contacted.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import {
  StediClient,
  CreateProfessionalClaimSubmissionCommand,
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
if (!apiKey) throw new Error("usage: create-professional-claim-submission.ts <api-key>");

const client = new StediClient({ apiKey: { apiKey } });

const submission = await client.send(
  new CreateProfessionalClaimSubmissionCommand(await loadClaim()),
);

console.log(`claim ${submission.claimId}, submission ${submission.submissionId}`);
