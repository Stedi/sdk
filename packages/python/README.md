# stedi

[![PyPI](https://img.shields.io/pypi/v/stedi.svg)](https://pypi.org/project/stedi/)
[![Python versions](https://img.shields.io/pypi/pyversions/stedi.svg)](https://pypi.org/project/stedi/)
[![License](https://img.shields.io/pypi/l/stedi.svg)][license]

The Stedi SDK for Python — unified, typed access to Stedi's APIs from a single
client.

## Requirements

- Python ≥ 3.12 [download][python]
- Stedi account [sign up free][signup]
- Stedi API key: [docs][apikeydocs]

## Installing

```sh
pip install stedi
# or: uv add stedi
# or: poetry add stedi
```

## Authentication

You must authenticate every request with a Stedi API key. Set the API key on the `Config` you use to construct the client. The client is async, so build it inside a running event loop:

```python
import asyncio

from stedi import Config, Stedi


async def main() -> None:
    async with Stedi(Config(api_key="...")) as client:
        ...  # send operations here — see the Quickstart below


asyncio.run(main())
```

An API key is the only credential the Python client accepts; OAuth access tokens are
supported in the TypeScript SDK. Visit the [Stedi documentation][apikeydocs] for how to
obtain and manage API keys.

## Quickstart

The client is async and acts as a context manager. To send a typed operation,
pass its input model:

```python
import asyncio

from stedi import Config, Stedi


async def main() -> None:
    # Submit a complete CMS-1500 claim. See the runnable claims example for a full payload.
    # `load_claim` is your own function — the runnable examples read a JSON fixture.
    claim = load_claim()

    async with Stedi(Config(api_key="...")) as client:
        response = await client.create_professional_claim_submission(claim)

        print(f"claim {response.claim_id}, submission {response.submission_id}")


asyncio.run(main())
```

> Operation **input models** are under `stedi.models`.

## One client for every Stedi API

A single client routes each operation to the correct Stedi host automatically. This lets you use one client and one set of credentials for the entire SDK.

```python
from stedi import Config, Stedi


async def main() -> None:
    async with Stedi(Config(api_key="...")) as client:
        # `claim` is a CreateProfessionalClaimSubmissionInput, as built in the Quickstart above.
        await client.create_professional_claim_submission(claim)
```

## Available operations

### Claims

| Method | Description |
| --- | --- |
| `create_professional_claim_submission` | Submit a professional claim in JSON modeled after the CMS-1500 form structure |
| `get_claim` | Retrieve summary information for a claim, including current processing status and key details from its most recent submission |
| `get_claim_timeline` | Retrieve a paginated list of a claim's timeline entries, newest first. Timeline entries include submissions, acknowledgments, and claim payment information |
| `get_professional_claim_submission` | Retrieve a claim's data and map it to Stedi's CMS-1500 JSON format |
| `list_claims` | Retrieve a paginated list of claim records, newest first. Filter by status, patient control numbers, or submission time |
| `validate_professional_claim_submission` | Validate a professional claim in the Stedi JSON format without submitting it |

### Eligibility Check

| Method | Description |
| --- | --- |
| `create_eligibility_check` | Submit a real-time 270/271 eligibility check in JSON format |

### Event Destinations

| Method | Description |
| --- | --- |
| `create_event_destination` | Creates an event destination. Returns destination details and a signing secret for verifying event payloads. |
| `delete_event_destination` | Deletes an existing destination. This action is irreversible. Deleting a destination that is already deleted succeeds with the same response (idempotent). |
| `get_event_destination` | Retrieves details for an existing event destination. |
| `get_event_destination_event` | Retrieves the details of an existing event by its identifier. |
| `get_event_destination_secret` | Retrieves the current signing secret for a destination. Use this secret to verify the authenticity of event payloads. |
| `list_event_destination_events` | Lists all events for your account. Results are paginated. |
| `list_event_destinations` | Lists all destinations configured for your account. Results are paginated. |
| `rotate_event_destination_secret` | Rotates the signing secret for a destination. The previous secret remains valid for the period specified by `previousSecretExpiryHours` (or `0` for immediate invalidation) to allow for a graceful transition. |
| `update_event_destination` | Updates an existing destination configuration. |

This list grows as Stedi releases more APIs through the SDK.

## Configuration

Configure everything through the `Config`, including the API key:

```python
import asyncio

from stedi import Config, RetryStrategyOptions, Stedi


async def main() -> None:
    config = Config(
        api_key="...",
        # Retry policy — the client defaults to StandardRetryStrategy(max_attempts=3).
        retry_strategy=RetryStrategyOptions(max_attempts=4),
    )

    async with Stedi(config) as client:
        ...


asyncio.run(main())
```

## Error handling

Service errors are raised as `CallError`. Every error class under `stedi.models` is a
subclass, so catch `CallError` for any of them, or a specific class for one:

```python
from stedi import CallError, Config, Stedi


async def main() -> None:
    async with Stedi(Config(api_key="...")) as client:
        try:
            await client.create_professional_claim_submission(claim)
        except CallError as exc:
            print(f"{type(exc).__name__}: {exc}")
            raise
```

## Examples

Access runnable, end-to-end examples for every operation in the
[`examples/python/`][examples] directory.

## Documentation & support

- Stedi documentation: [stedi.com/docs][docs]
- Issues: [github.com/Stedi/sdk/issues][issues]

## License

[Apache-2.0][license]

<!-- Reference links — swap these in one place if URLs change. -->
[docs]: https://www.stedi.com/docs
[examples]: https://github.com/Stedi/sdk/tree/main/examples/python
[issues]: https://github.com/Stedi/sdk/issues
[license]: https://github.com/Stedi/sdk/blob/main/LICENSE
[python]: https://www.python.org/downloads/
[signup]: https://portal.stedi.com/auth/sign-up-intent
[apikeydocs]: https://www.stedi.com/docs/healthcare/api-reference#authentication
