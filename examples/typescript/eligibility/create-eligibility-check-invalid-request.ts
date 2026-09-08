/**
 * Handle an eligibility check that fails request validation.
 *
 *   STEDI_API_KEY=<test-api-key> tsx create-eligibility-check-invalid-request.ts
 *
 * An NPI that isn't ten digits fails validation before anything is sent to the payer. Stedi
 * answers with an InvalidRequestException whose `errors` point at each rejected part of the
 * request, so the caller can fix it and retry.
 */

import { readFile } from "node:fs/promises";

import {
  InvalidRequestException,
  Stedi,
  type CreateEligibilityCheckCommandInput,
} from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/eligibility-check.json`;
const INVALID_NPI = "12345";

/** Reads the mock request and swaps in an NPI that validation will reject. */
async function loadRequestWithInvalidNpi(): Promise<CreateEligibilityCheckCommandInput> {
  const request = JSON.parse(await readFile(FIXTURE, "utf8")) as CreateEligibilityCheckCommandInput;

  if (!request.provider) {
    throw new Error("input must include a provider.");
  }

  return { ...request, provider: { ...request.provider, npi: INVALID_NPI } };
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}
if (!apiKey.startsWith("test_")) {
  throw new Error("this example sends a mock request; use a test-mode API key (test_ prefix).");
}

const client = new Stedi({ apiKey: { apiKey } });

let rejection: InvalidRequestException;
try {
  await client.createEligibilityCheck(await loadRequestWithInvalidNpi());
  throw new Error(`expected Stedi to reject NPI ${INVALID_NPI}`);
} catch (error) {
  if (!(error instanceof InvalidRequestException)) {
    throw error;
  }
  rejection = error;
}

console.log(`rejected: ${rejection.message}`);
for (const failure of rejection.errors ?? []) {
  console.log(`  ${failure.path ?? "(request)"}: ${failure.message}`);
}
