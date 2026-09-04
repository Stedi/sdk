/**
 * Read an event back by ID.
 *
 *   STEDI_API_KEY=<api-key> tsx get-event-destination-event.ts
 *
 * Reads the newest event in the account: events come from account activity, so no call here creates one.
 */

import { Stedi } from "@stedi/sdk";

const apiKey = process.env["STEDI_API_KEY"];
if (!apiKey) {
  throw new Error("STEDI_API_KEY is not set");
}

const client = new Stedi({ apiKey: { apiKey } });

const [newest] = (await client.listEventDestinationEvents({ pageSize: 1 })).items ?? [];
if (!newest?.id) {
  throw new Error("this account has no events yet — nothing to read back by ID");
}

const event = await client.getEventDestinationEvent({ eventId: newest.id });

console.log(`event ${event.id}`);
console.log(`  type:       ${event.eventType}`);
console.log(`  status:     ${event.status}`);
console.log(`  created at: ${event.createdAt?.toISOString()}`);

const payload = event.eventPayload;
if (payload?.v1Event) {
  const { account, environment, resource, relatedResources } = payload.v1Event;
  console.log(`  account:     ${account} (${environment})`);
  console.log(`  resource:    ${resource?.type} ${resource?.id}`);
  console.log(`  related:     ${relatedResources?.length ?? 0} resource(s)`);
}
