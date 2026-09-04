/**
 * Handle a claim that fails Stedi's edits.
 *
 *   STEDI_API_KEY=<api-key> tsx create-professional-claim-submission-edit-failure.ts
 *
 * An ICD-10 code that doesn't exist trips Stedi's clearinghouse edits. The submission still
 * succeeds: Stedi stores the claim and a 277CA acknowledging the rejection, never sends the
 * claim to the payer, and returns the reasons in `errors`.
 *
 * See https://www.stedi.com/docs/healthcare/claim-edits-and-repairs for more.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import { Stedi, type CreateProfessionalClaimSubmissionInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;
const INVALID_DIAGNOSIS_CODE = "FZ9888";

/** Reads the sample claim and swaps in a diagnosis code the edits will reject. */
async function loadClaimWithInvalidDiagnosis(): Promise<CreateProfessionalClaimSubmissionInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as CreateProfessionalClaimSubmissionInput;

  if (claim.payer?.id !== "STEDITEST" || !claim.billing || !claim.encounter) {
    throw new Error("input must be complete and bill the Stedi test payer.");
  }

  return {
    ...claim,
    encounter: { ...claim.encounter, primaryDiagnosisCode: INVALID_DIAGNOSIS_CODE },
    serviceLines: claim.serviceLines?.map((line) => ({
      ...line,
      diagnosisCodes: [INVALID_DIAGNOSIS_CODE],
    })),
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
const submission = await client.createProfessionalClaimSubmission(
  await loadClaimWithInvalidDiagnosis(),
);
const errors = submission.errors ?? [];

if (errors.length === 0) {
  throw new Error(`expected Stedi's edits to reject ${INVALID_DIAGNOSIS_CODE}`);
}

console.log(`claim ${submission.claimId} rejected with ${errors.length} error(s):`);
for (const error of errors) {
  console.log(`  ${error.description}`);
}
