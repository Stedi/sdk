/**
 * Submit a professional claim.
 *
 *   STEDI_API_KEY=<api-key> tsx create-professional-claim-submission.ts
 *
 * The claim comes from fixtures/test-claim.json, which bills the Stedi test payer, so no
 * real payer is contacted.
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

const submission = await client.createProfessionalClaimSubmission(await loadClaim());

console.log(`claim ${submission.claimId}, submission ${submission.submissionId}`);
