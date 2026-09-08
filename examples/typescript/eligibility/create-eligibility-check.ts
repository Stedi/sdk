/**
 * Run a real-time eligibility check (270/271).
 *
 *   STEDI_API_KEY=<test-api-key> tsx create-eligibility-check.ts
 *
 * The request comes from fixtures/eligibility-check.json, one of Stedi's documented mock
 * requests. With a test-mode API key Stedi answers it from mock data, so no payer is
 * contacted. See https://www.stedi.com/docs/healthcare/api-reference/mock-requests-eligibility-checks.
 */

import { readFile } from "node:fs/promises";

import { Stedi, type CreateEligibilityCheckCommandInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/eligibility-check.json`;

/** Reads the mock request. */
async function loadRequest(): Promise<CreateEligibilityCheckCommandInput> {
  return JSON.parse(await readFile(FIXTURE, "utf8")) as CreateEligibilityCheckCommandInput;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}
if (!apiKey.startsWith("test_")) {
  throw new Error("this example sends a mock request; use a test-mode API key (test_ prefix).");
}

const client = new Stedi({ apiKey: { apiKey } });

const response = await client.createEligibilityCheck(await loadRequest());

console.log(`eligibility search ${response.eligibilitySearchId} against payer ${response.payerId}`);
for (const plan of response.plans ?? []) {
  console.log(`plan: ${plan.name ?? "(unnamed)"}`);
  for (const status of plan.benefits?.statuses ?? []) {
    const service = status.service?.definition ?? status.service?.value ?? "";
    console.log(`  ${status.status} (${status.coverageLevel}) ${service}`);
    if (status.planCoverageDescription) {
      console.log(`    ${status.planCoverageDescription}`);
    }
  }
}
