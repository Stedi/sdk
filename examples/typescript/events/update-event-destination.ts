/**
 * Change an event destination's configuration.
 *
 *   STEDI_API_KEY=<api-key> tsx update-event-destination.ts
 *
 * Creates a destination first, since an update needs one, and deletes it before exiting.
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

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const created = await client.createEventDestination(await loadDestination());
console.log(`created ${created.id}: ${created.name} [${created.status}]`);

try {
  const updated = await client.updateEventDestination({
    destinationId: created.id,
    name: `${created.name} (paused)`,
    status: "DISABLED",
    idempotencyKey: randomUUID(),
  });

  console.log(`updated ${updated.id}: ${updated.name} [${updated.status}]`);
  console.log(`  url:         ${updated.destinationUrl}`);
  console.log(`  event types: ${updated.eventTypes?.join(", ")}`);
  console.log(`  updated at:  ${updated.updatedAt?.toISOString()}`);
} finally {
  await client.deleteEventDestination({ destinationId: created.id });
  console.log(`deleted ${created.id}`);
}
