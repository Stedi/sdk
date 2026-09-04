/**
 * Handle a destination ID that doesn't exist.
 *
 *   STEDI_API_KEY=<api-key> tsx get-event-destination-not-found.ts
 *
 * Asks for an ID that was never created, and fails if the 404 never arrives.
 */

import { randomUUID } from "node:crypto";

import { NotFoundException, Stedi } from "@stedi/sdk";

const MISSING_DESTINATION_ID = `dst_${randomUUID()}`;

/** Fetches the missing destination and returns the 404; anything else is a real failure. */
async function getExpectingNotFound(client: Stedi): Promise<NotFoundException> {
  try {
    await client.getEventDestination({ destinationId: MISSING_DESTINATION_ID });
  } catch (err) {
    if (err instanceof NotFoundException) {
      return err;
    }
    throw err;
  }
  throw new Error(`expected ${MISSING_DESTINATION_ID} not to exist`);
}

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });
const notFound = await getExpectingNotFound(client);

console.log(`${MISSING_DESTINATION_ID} is not a destination in this account:`);
console.log(`  ${notFound.name}: ${notFound.message}`);
