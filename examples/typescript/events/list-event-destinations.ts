/**
 * List every event destination in the account.
 *
 *   STEDI_API_KEY=<api-key> tsx list-event-destinations.ts
 *
 * Pages until the token runs out; creates and deletes nothing.
 */

import { Stedi, type EventDestinationsDestinationSummary } from "@stedi/sdk";

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const destinations: EventDestinationsDestinationSummary[] = [];
let pageToken: string | undefined;
let pages = 0;

do {
  const page = await client.listEventDestinations({ pageSize: 25, pageToken });
  destinations.push(...(page.items ?? []));
  pageToken = page.nextPageToken;
  pages += 1;
} while (pageToken);

console.log(`${destinations.length} destination(s) across ${pages} page(s):`);
for (const destination of destinations) {
  console.log(`  ${destination.id} [${destination.status}] ${destination.name}`);
  console.log(`    ${destination.destinationUrl} — ${destination.eventTypes?.join(", ")}`);
}
