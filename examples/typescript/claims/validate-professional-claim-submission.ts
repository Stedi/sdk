/**
 * Check a professional claim without submitting it.
 *
 *   tsx validate-professional-claim-submission.ts <api-key>
 *
 * Runs the same payer checks, claim edits, and X12 mapping as
 * CreateProfessionalClaimSubmission, but persists and delivers nothing — so you can
 * validate a claim while a user is still filling out a form. An empty success response
 * means the claim would be accepted.
 */

import { readFile } from "node:fs/promises";

import {
  StediClient,
  ValidateProfessionalClaimSubmissionCommand,
  type ValidateProfessionalClaimSubmissionCommandInput,
} from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-claim.json`;

/** Reads the sample claim. Nothing is persisted, so no per-run stamping is needed. */
async function loadClaim(): Promise<ValidateProfessionalClaimSubmissionCommandInput> {
  const claim = JSON.parse(
    await readFile(FIXTURE, "utf8"),
  ) as ValidateProfessionalClaimSubmissionCommandInput;

  if (claim.payer?.id !== "STEDITEST") {
    throw new Error("input must bill the Stedi test payer.");
  }

  return claim;
}

const apiKey = process.argv[2];
if (!apiKey) throw new Error("usage: validate-professional-claim-submission.ts <api-key>");

const client = new StediClient({ apiKey: { apiKey } });

await client.send(new ValidateProfessionalClaimSubmissionCommand(await loadClaim()));

console.log("valid: the claim would be accepted for submission");
