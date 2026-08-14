# Stedi SDK examples

Runnable end-to-end samples for every operation, exercised by CI on every PR.

## Layout

```
examples/
  typescript/
    claims/
      create-professional-claim-submission.ts
      create-professional-claim-submission-edit-failure.ts
      validate-professional-claim-submission.ts
      get-professional-claim-submission.ts
      fixtures/
  python/
    claims/
      create_professional_claim_submission.py
      create_professional_claim_submission_edit_failure.py
      validate_professional_claim_submission.py
      get_professional_claim_submission.py
      fixtures/
```

Every operation is reachable from one client in the single published package — `StediClient` in TypeScript, `Stedi` in Python — with commands and input models exported flat (`@stedi/sdk`, `stedi.models`). The subdirectories group examples by API area; they do not mirror an import path.

## Using these in your own project

Each example is self-contained. To drop one into your own codebase:

**TypeScript** — install the SDK, then copy the `.ts` file body. The imports are already correct.

```sh
npm install @stedi/sdk
```

**Python** — install the SDK, then copy the `.py` file body.

```sh
pip install stedi
# or: uv add stedi
```

The `# /// script` PEP 723 inline-metadata header at the top of each Python example is optional — keep it to run with `uv run --script`, or remove it once `stedi` is installed in your environment.

## Auth

Every example takes the API key as its first command-line argument — the SDK does no environment-variable resolution. Get a key from [your Stedi account](https://www.stedi.com/app):

- **Test keys** (`test_*`) return free mocked responses for the requests [test mode](https://www.stedi.com/docs/healthcare/test-mode) supports. They cannot submit claims.
- **Production keys** are required for claim submission. Combined with payloads billing the Stedi test payer (`payer.id: "STEDITEST"`), you exercise the [Stedi Test Payer](https://www.stedi.com/docs/healthcare/test-claims-workflow) for free — no real payer contact.

## See also

- [docs.stedi.com](https://docs.stedi.com) — full API reference and guides.
- [Test mode](https://www.stedi.com/docs/healthcare/test-mode)
- [Test claims workflow](https://www.stedi.com/docs/healthcare/test-claims-workflow)
- [Claim edits and repairs](https://www.stedi.com/docs/healthcare/claim-edits-and-repairs)
