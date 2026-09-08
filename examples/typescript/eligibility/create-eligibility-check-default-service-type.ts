/**
 * Run an eligibility check without naming a service.
 *
 *   STEDI_API_KEY=<test-api-key> tsx create-eligibility-check-default-service-type.ts
 *
 * `encounter` is optional. When it is omitted, Stedi asks the payer about service type code
 * 30 (Health Benefit Plan Coverage), the general "is this patient covered" inquiry that every
 * payer supports. Start here unless you need benefits for a specific service.
 */

import { readFile } from "node:fs/promises";

import { Stedi, type CreateEligibilityCheckCommandInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/eligibility-check.json`;

/** Reads the mock request and drops the encounter, so Stedi applies the default service type. */
async function loadRequestWithoutEncounter(): Promise<CreateEligibilityCheckCommandInput> {
  const request = JSON.parse(await readFile(FIXTURE, "utf8")) as CreateEligibilityCheckCommandInput;
  delete request.encounter;
  return request;
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}
if (!apiKey.startsWith("test_")) {
  throw new Error("this example sends a mock request; use a test-mode API key (test_ prefix).");
}

const client = new Stedi({ apiKey: { apiKey } });

const response = await client.createEligibilityCheck(await loadRequestWithoutEncounter());

console.log(`eligibility search ${response.eligibilitySearchId} against payer ${response.payerId}`);
for (const plan of response.plans ?? []) {
  for (const status of plan.benefits?.statuses ?? []) {
    const service = status.service
      ? `${status.service.value} ${status.service.definition ?? ""}`
      : "";
    console.log(`  ${status.status} (${status.coverageLevel}) ${service}`);
  }
}
