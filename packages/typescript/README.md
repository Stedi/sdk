# @stedi/sdk

[![npm](https://img.shields.io/npm/v/@stedi/sdk.svg)](https://www.npmjs.com/package/@stedi/sdk)
[![node](https://img.shields.io/node/v/@stedi/sdk.svg)](https://www.npmjs.com/package/@stedi/sdk)
[![License](https://img.shields.io/npm/l/@stedi/sdk.svg)][license]

The Stedi SDK for TypeScript / Node.js — unified, typed access to Stedi's
APIs from a single client.

## Requirements

- Node.js ≥ 20 [download][nodejs]
- Stedi account [sign up free][signup]
- Stedi API key: [docs][apikeydocs]

## Installing

```sh
npm install @stedi/sdk
# or: yarn add @stedi/sdk
# or: pnpm add @stedi/sdk
```

## Authentication

You must authenticate every request with a Stedi API key. You pass the API key once when you construct the client:

```ts
import { StediClient } from "@stedi/sdk";

const client = new StediClient({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });
```

Visit the [Stedi documentation][apikeydocs] for instructions on creating and managing API keys.

## Quickstart

Create one `StediClient` with your API key and send typed commands:

```ts
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";

import {
  StediClient,
  CreateProfessionalClaimSubmissionCommand,
  type CreateProfessionalClaimSubmissionCommandInput,
} from "@stedi/sdk";

const client = new StediClient({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });

// Submit a complete CMS-1500 claim. See the runnable claims example for a full payload.
const claim = JSON.parse(readFileSync("claim.json", "utf8")) as CreateProfessionalClaimSubmissionCommandInput;

const response = await client.send(
  new CreateProfessionalClaimSubmissionCommand({ ...claim, idempotencyKey: randomUUID() }),
);

console.log(`${response.status}: ${response.claimId}`);
```

## One client for every Stedi API

A single client routes each command to the correct Stedi host automatically. This lets you use one client and one set of credentials for the entire SDK.

```ts
import { StediClient, CreateProfessionalClaimSubmissionCommand } from "@stedi/sdk";

const client = new StediClient({ apiKey: { apiKey: process.env.STEDI_API_KEY! } });

// The client routes each command to the correct Stedi host automatically.
// `claim` is a CreateProfessionalClaimSubmissionCommandInput, as built in the Quickstart above.
await client.send(new CreateProfessionalClaimSubmissionCommand(claim));
```

## Available operations

| Command | Description |
| --- | --- |
| `CreateProfessionalClaimSubmissionCommand` | Submit a professional claim using the Stedi JSON format. |
| `GetProfessionalClaimSubmissionCommand` | Fetch a professional claim submission by ID. |
| `ValidateProfessionalClaimSubmissionCommand` | Validate a professional claim in the Stedi JSON format without submitting it. |

This list grows as Stedi releases more APIs through the SDK.

## Error handling

Stedi throws service errors as `StediServiceException`:

```ts
import { StediServiceException, CreateProfessionalClaimSubmissionCommand } from "@stedi/sdk";

try {
  await client.send(new CreateProfessionalClaimSubmissionCommand(claim));
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

Apache-2.0

<!-- Reference links — swap these in one place if URLs change. -->
[docs]: https://www.stedi.com/docs
[examples]: https://github.com/Stedi/sdk/tree/main/examples
[issues]: https://github.com/Stedi/sdk/issues
[license]: https://github.com/Stedi/sdk/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/download
[signup]: https://portal.stedi.com/auth/sign-up-intent
[apikeydocs]: https://www.stedi.com/docs/healthcare/api-reference#authentication
