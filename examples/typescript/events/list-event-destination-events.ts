/**
 * List the most recent events in the account.
 *
 *   STEDI_API_KEY=<api-key> tsx list-event-destination-events.ts
 *
 * Reads a single page; creates and deletes nothing.
 */

import { Stedi } from "@stedi/sdk";

const PAGE_SIZE = 5;

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const page = await client.listEventDestinationEvents({ pageSize: PAGE_SIZE });
const events = page.items ?? [];

console.log(`${events.length} of the most recent event(s):`);
for (const event of events) {
  console.log(`  ${event.id} [${event.status}] ${event.eventType}`);
  console.log(`    created ${event.createdAt?.toISOString()}`);
}
console.log(page.nextPageToken ? "more pages available" : "no further pages");
