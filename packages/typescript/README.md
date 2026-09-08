# @stedi/sdk

[![npm](https://img.shields.io/npm/v/@stedi/sdk.svg)](https://www.npmjs.com/package/@stedi/sdk)
[![node](https://img.shields.io/node/v/@stedi/sdk.svg)](https://www.npmjs.com/package/@stedi/sdk)
[![License](https://img.shields.io/npm/l/@stedi/sdk.svg)][license]

The Stedi SDK for TypeScript / Node.js — unified, typed access to Stedi's
APIs from a single client.

## Requirements

- Node.js ≥ 22 [download][nodejs]
- Stedi account [sign up free][signup]
- Stedi API key: [docs][apikeydocs]

## Installing

```sh
npm install @stedi/sdk
# or: yarn add @stedi/sdk
# or: pnpm add @stedi/sdk
```

## Authentication

You must authenticate every request, either with a Stedi API key or with an OAuth access token. You pass the credential once when you construct the client.

With an API key:

```ts
import { Stedi } from "@stedi/sdk";

const client = new Stedi({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });
```

Visit the [Stedi documentation][apikeydocs] for instructions on creating and managing API keys.

### OAuth access tokens

If your app authenticates through a Stedi OAuth app, pass a `token` instead. Stedi's access tokens are short-lived, so supply a function rather than a fixed string — the client calls it for the first request and again once the token is close to expiring:

```ts
import { Stedi } from "@stedi/sdk";

const client = new Stedi({
  // `getAccessToken` is your own function — see below.
  token: async () => {
    const { access_token, expires_in } = await getAccessToken();
    // Include `expiration`, or the client keeps this token for its lifetime and never calls you again.
    return { token: access_token, expiration: new Date(Date.now() + expires_in * 1000) };
  },
});
```

Obtaining and refreshing the token is your app's job — `getAccessToken` above is yours to write, and an OAuth client library such as [`openid-client`][openidclient] does most of it. Supply exactly one of `apiKey` or `token`; if you set both, the API key is used.

## Quickstart

Create one `Stedi` client with your API key. Every operation is a method on it that
takes the operation's typed input:

```ts
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";

import { Stedi, type CreateProfessionalClaimSubmissionInput } from "@stedi/sdk";

const client = new Stedi({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });

// Submit a complete CMS-1500 claim. See the runnable claims example for a full payload.
// `claim.json` is your own payload; the runnable examples ship one.
const claim = JSON.parse(readFileSync("claim.json", "utf8")) as CreateProfessionalClaimSubmissionInput;

const response = await client.createProfessionalClaimSubmission({ ...claim, idempotencyKey: randomUUID() });

console.log(`claim ${response.claimId}, submission ${response.submissionId}`);
```

## One client for every Stedi API

A single client routes each operation to the correct Stedi host automatically. This lets you use one client and one set of credentials for the entire SDK.

```ts
import { Stedi } from "@stedi/sdk";

const client = new Stedi({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });

// `claim` is a CreateProfessionalClaimSubmissionInput, as built in the Quickstart above.
await client.createProfessionalClaimSubmission(claim);
```

## Available operations

### Claims

| Method | Description |
| --- | --- |
| `createProfessionalClaimSubmission` | Submit a professional claim in JSON modeled after the CMS-1500 form structure |
| `getClaim` | Retrieve summary information for a claim, including current processing status and key details from its most recent submission |
| `getClaimTimeline` | Retrieve a paginated list of a claim's timeline entries, newest first. Timeline entries include submissions, acknowledgments, and claim payment information |
| `getProfessionalClaimSubmission` | Retrieve a claim's data and map it to Stedi's CMS-1500 JSON format |
| `listClaims` | Retrieve a paginated list of claim records, newest first. Filter by status, patient control numbers, or submission time |
| `validateProfessionalClaimSubmission` | Validate a professional claim in the Stedi JSON format without submitting it |

### Eligibility Check

| Method | Description |
| --- | --- |
| `createEligibilityCheck` | Submit a real-time 270/271 eligibility check in JSON format |

### Event Destinations

| Method | Description |
| --- | --- |
| `createEventDestination` | Creates an event destination. Returns destination details and a signing secret for verifying event payloads. |
| `deleteEventDestination` | Deletes an existing destination. This action is irreversible. Deleting a destination that is already deleted succeeds with the same response (idempotent). |
| `getEventDestination` | Retrieves details for an existing event destination. |
| `getEventDestinationEvent` | Retrieves the details of an existing event by its identifier. |
| `getEventDestinationSecret` | Retrieves the current signing secret for a destination. Use this secret to verify the authenticity of event payloads. |
| `listEventDestinationEvents` | Lists all events for your account. Results are paginated. |
| `listEventDestinations` | Lists all destinations configured for your account. Results are paginated. |
| `rotateEventDestinationSecret` | Rotates the signing secret for a destination. The previous secret remains valid for the period specified by `previousSecretExpiryHours` (or `0` for immediate invalidation) to allow for a graceful transition. |
| `updateEventDestination` | Updates an existing destination configuration. |

This list grows as Stedi releases more APIs through the SDK.

## Configuration

Every client option goes in the same object as the credential:

```ts
import { Stedi } from "@stedi/sdk";

const client = new Stedi({
  apiKey: { apiKey: process.env.STEDI_API_KEY! },
  // Retry policy — the client defaults to 3 attempts.
  maxAttempts: 4,
  // A request has no time limit by default. Without `throwOnRequestTimeout`, exceeding the
  // limit is logged as a warning and the request keeps going.
  requestHandler: { requestTimeout: 30_000, throwOnRequestTimeout: true },
});
```

## Error handling

Stedi throws service errors as `StediServiceException`:

```ts
import { StediServiceException } from "@stedi/sdk";

try {
  await client.createProfessionalClaimSubmission(claim);
} catch (err) {
  if (err instanceof StediServiceException) {
    console.error(`[${err.name}] ${err.$metadata.httpStatusCode}: ${err.message}`);
  }
  throw err;
}
```

## Examples

Access runnable, end-to-end examples for every operation in the
[`examples/`][examples] directory.

## Documentation & support

- Stedi documentation: [stedi.com/docs][docs]
- Issues: [github.com/Stedi/sdk/issues][issues]

## License

[Apache-2.0][license]

<!-- Reference links — swap these in one place if URLs change. -->
[docs]: https://www.stedi.com/docs
[examples]: https://github.com/Stedi/sdk/tree/main/examples
[issues]: https://github.com/Stedi/sdk/issues
[license]: https://github.com/Stedi/sdk/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/download
[openidclient]: https://github.com/panva/openid-client
[signup]: https://portal.stedi.com/auth/sign-up-intent
[apikeydocs]: https://www.stedi.com/docs/healthcare/api-reference#authentication
