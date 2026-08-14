/**
 * Handle a claim that fails Stedi's edits.
 *
 *   tsx create-professional-claim-submission-edit-failure.ts <api-key>
 *
 * An ICD-10 code that doesn't exist trips Stedi's clearinghouse edits, so the submission
 * rejects with a typed ClaimEditException (HTTP 400) listing what failed.
 *
 * See https://www.stedi.com/docs/healthcare/claim-edits-and-repairs for more.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import {
  StediClient,
  CreateProfessionalClaimSubmissionCommand,
  ClaimEditException,
  type CreateProfessionalClaimSubmissionCommandInput,
} from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;
const INVALID_DIAGNOSIS_CODE = "FZ9888";

/** Reads the sample claim and swaps in a diagnosis code the edits will reject. */
async function loadClaimWithInvalidDiagnosis(): Promise<CreateProfessionalClaimSubmissionCommandInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as CreateProfessionalClaimSubmissionCommandInput;

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

/** Submits the bad claim and returns the rejection; anything else is a real failure. */
async function submitExpectingRejection(client: StediClient): Promise<ClaimEditException> {
  try {
    await client.send(
      new CreateProfessionalClaimSubmissionCommand(await loadClaimWithInvalidDiagnosis()),
    );
  } catch (err) {
    if (err instanceof ClaimEditException) return err;
    throw err;
  }
  throw new Error(`expected Stedi's edits to reject ${INVALID_DIAGNOSIS_CODE}`);
}

const apiKey = process.argv[2];
if (!apiKey) throw new Error("usage: create-professional-claim-submission-edit-failure.ts <api-key>");

const client = new StediClient({ apiKey: { apiKey } });
const rejection = await submitExpectingRejection(client);
const edits = rejection.errors ?? [];

console.log(`rejected with ${edits.length} edit failure(s):`);
for (const edit of edits) {
  console.log(`  [${edit.code}] ${edit.description}`);
}
