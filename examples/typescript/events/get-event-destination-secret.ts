/**
 * Read a destination's current signing secret.
 *
 *   STEDI_API_KEY=<api-key> tsx get-event-destination-secret.ts
 *
 * Creates a destination first, since reading a secret needs one, and deletes it before exiting.
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
try {
  const secret = await client.getEventDestinationSecret({ destinationId: created.id });

  console.log(`destination ${created.id}`);
  console.log(`  signing secret:  ${mask(secret.signingSecret)}`);
  console.log(
    `  previous secret: ${
      secret.previousSecretExpiresAt
        ? `valid until ${secret.previousSecretExpiresAt.toISOString()}`
        : "(no rotation in progress)"
    }`,
  );
} finally {
  await client.deleteEventDestination({ destinationId: created.id });
  console.log(`deleted ${created.id}`);
}
