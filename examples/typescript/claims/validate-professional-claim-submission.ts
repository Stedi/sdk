/**
 * Check a professional claim without submitting it.
 *
 *   STEDI_API_KEY=<api-key> tsx validate-professional-claim-submission.ts
 *
 * Runs the same payer checks, claim edits, and X12 mapping as
 * CreateProfessionalClaimSubmission, but persists and delivers nothing — so you can
 * validate a claim while a user is still filling out a form. A response with no errors
 * means the claim would be accepted.
 */

import { readFile } from "node:fs/promises";

import { Stedi, type ValidateProfessionalClaimSubmissionInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;

/** Reads the sample claim. Nothing is persisted, so no per-run stamping is needed. */
async function loadClaim(): Promise<ValidateProfessionalClaimSubmissionInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as ValidateProfessionalClaimSubmissionInput;

  if (claim.payer?.id !== "STEDITEST") {
    throw new Error("input must bill the Stedi test payer.");
  }

  return claim;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });
const validation = await client.validateProfessionalClaimSubmission(await loadClaim());
const errors = validation.errors ?? [];

if (errors.length === 0) {
  console.log("valid: the claim would be accepted for submission");
} else {
  console.log(`invalid: ${errors.length} error(s) would reject the claim:`);
  for (const error of errors) {
    console.log(`  ${error.description}`);
  }
}
