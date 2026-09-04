/**
 * Create, read and delete an event destination.
 *
 *   STEDI_API_KEY=<api-key> tsx event-destination-lifecycle.ts
 *
 * Runs one destination's whole life in a single pass, leaving nothing behind.
 */

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";

import { Stedi, type CreateEventDestinationInput } from "@stedi/sdk";

const FIXTURE = `${import.meta.dirname}/fixtures/test-destination.json`;

/** Reads the sample destination, giving it a unique name and idempotency key. */
async function loadDestination(): Promise<CreateEventDestinationInput> {
  const destination = JSON.parse(await readFile(FIXTURE, "utf8")) as CreateEventDestinationInput;

  return {
    ...destination,
    name: `${destination.name} ${randomUUID().slice(0, 8)}`,
    idempotencyKey: randomUUID(),
  };
}

/** A signing secret is a credential: print enough to recognise it, never the whole value. */
function mask(secret: string | undefined): string {
  return secret ? `${secret.slice(0, 12)}… (${secret.length} chars)` : "(none)";
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const created = await client.createEventDestination(await loadDestination());
console.log(`created ${created.id}`);
console.log(`  name:        ${created.name}`);
console.log(`  url:         ${created.destinationUrl}`);
console.log(`  event types: ${created.eventTypes?.join(", ")}`);
console.log(`  status:      ${created.status}`);
console.log(`  secret:      ${mask(created.signingSecret)}`);

try {
  const destination = await client.getEventDestination({ destinationId: created.id });
  console.log(`read back ${destination.id}`);
  console.log(`  description:       ${destination.description}`);
  console.log(`  concurrency limit: ${destination.concurrencyLimit}`);
  console.log(`  created at:        ${destination.createdAt?.toISOString()}`);
  console.log(
    `  last delivery:     ${destination.lastDeliveryTime?.toISOString() ?? "(none yet)"}`,
  );
} finally {
  await client.deleteEventDestination({
    destinationId: created.id,
    idempotencyKey: randomUUID(),
  });
  console.log(`deleted ${created.id}`);
}
