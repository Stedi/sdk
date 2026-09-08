# Stedi SDK examples

Runnable end-to-end samples for every operation, in TypeScript and Python.

## Layout

```
examples/
  typescript/
    <product>/
      <operation-kebab>.ts
      fixtures/                  the payloads the examples load
      package.json               the example package's dependencies
      tsconfig.json
  python/
    <product>/
      <operation_snake>.py       standalone PEP 723 scripts
      fixtures/
```

Every operation is a method on the one `Stedi` client, in both languages, in the single published package — with input models exported flat (`@stedi/sdk`, `stedi.models`). The subdirectories group examples by API area; they do not mirror an import path.

## Using these in your own project

Each example is self-contained. To drop one into your own codebase:

**TypeScript** — install the SDK, then copy the `.ts` file body. The imports are already
correct. Examples that send a payload read it from `fixtures/`, so copy that file too, or
inline the payload.

```sh
npm install @stedi/sdk
```

**Python** — install the SDK, then copy the `.py` file body, and the `fixtures/` file it
reads if it sends a payload.

```sh
pip install stedi
# or: uv add stedi
```

The `# /// script` PEP 723 inline-metadata header at the top of each Python example is optional — keep it to run with `uv run --script`, or remove it once `stedi` is installed in your environment.

## Auth

Every example reads its API key from `STEDI_API_KEY`:

```sh
STEDI_API_KEY=<api-key> tsx event-destination-lifecycle.ts
STEDI_API_KEY=<api-key> uv run --script event_destination_lifecycle.py
```

The SDK itself reads no environment variable — the examples pass the key to the client
explicitly, which is where your own code passes whatever your secret manager hands it. Get a
key from [your Stedi account](https://www.stedi.com/app):

- **Test keys** (`test_*`) return free mocked responses for the requests [test mode](https://www.stedi.com/docs/healthcare/test-mode) supports. The `eligibility/` examples send one of the documented [mock eligibility requests](https://www.stedi.com/docs/healthcare/api-reference/mock-requests-eligibility-checks), so they take a test key and never reach a payer. Test keys cannot submit claims.
- **Production keys** are required for claim submission. Combined with payloads billing the Stedi test payer (`payer.id: "STEDITEST"`), the `claims/` examples exercise the [Stedi Test Payer](https://www.stedi.com/docs/healthcare/test-claims-workflow) for free, with no real payer contact.

## See also

- [docs.stedi.com](https://docs.stedi.com) — full API reference and guides.
- [Test mode](https://www.stedi.com/docs/healthcare/test-mode)
- [Mock eligibility requests](https://www.stedi.com/docs/healthcare/api-reference/mock-requests-eligibility-checks)
- [Test claims workflow](https://www.stedi.com/docs/healthcare/test-claims-workflow)
- [Claim edits and repairs](https://www.stedi.com/docs/healthcare/claim-edits-and-repairs)
- [Event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) — what a destination can subscribe to
- [Verifying event deliveries](https://www.stedi.com/docs/healthcare/event-destinations-message-handling#verify-authenticity-and-receipt-time)
