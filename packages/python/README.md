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

You must authenticate every request with a Stedi API key. Set the API key on the `Config` you use to construct the client:

```python
from stedi import Config, Stedi

client = Stedi(Config(api_key="..."))
```

Visit the [Stedi documentation][apikeydocs] for how to obtain and manage API keys.

## Quickstart

The client is async and acts as a context manager. To send a typed operation,
pass its input model:

```python
import asyncio

from stedi import Config, Stedi


async def main() -> None:
    # Submit a complete CMS-1500 claim. See the runnable claims example for a full payload.
    claim = load_claim()

    async with Stedi(Config(api_key="...")) as client:
        response = await client.create_professional_claim_submission(claim)

        print(f"{response.status}: {response.claim_id}")


asyncio.run(main())
```

> Operation **input models** are under `stedi.models`.

## One client for every Stedi API

A single client routes each operation to the correct Stedi host automatically. This lets you use one client and one set of credentials for the entire SDK.

```python
from stedi import Config, Stedi


async def main() -> None:
    async with Stedi(Config(api_key="...")) as client:
        # The client routes each operation to the correct Stedi host automatically.
        # `claim` is a CreateProfessionalClaimSubmissionInput, as built in the Quickstart above.
        await client.create_professional_claim_submission(claim)
```

## Available operations

| Method | Input model | Description |
| --- | --- | --- |
| `create_professional_claim_submission` | `CreateProfessionalClaimSubmissionInput` | Submit a professional claim using the Stedi JSON format. |
| `get_professional_claim_submission` | `GetProfessionalClaimSubmissionInput` | Fetch a professional claim submission by ID. |
| `validate_professional_claim_submission` | `ValidateProfessionalClaimSubmissionInput` | Validate a professional claim in the Stedi JSON format without submitting it. |

This list grows as Stedi releases more APIs through the SDK.

## Configuration

Configure everything through the `Config`, including the API key:

```python
from stedi import Config, Stedi
from smithy_core.retries import RetryStrategyOptions


async def main() -> None:
    config = Config(
        api_key="...",
        # Retry policy — defaults to StandardRetryStrategy(max_attempts=3).
        retry_strategy=RetryStrategyOptions(max_attempts=8),
    )

    async with Stedi(config) as client:
        ...
```

`Config` also accepts `interceptors` (hooks around each request) and other
low-level transport options. See the `Config` constructor for complete details.

## Error handling

Service errors are raised as `CallError`:

```python
from smithy_core.exceptions import CallError

from stedi import Config, Stedi


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

Apache-2.0

<!-- Reference links — swap these in one place if URLs change. -->
[docs]: https://www.stedi.com/docs
[examples]: https://github.com/Stedi/sdk/tree/main/examples/python
[issues]: https://github.com/Stedi/sdk/issues
[license]: https://github.com/Stedi/sdk/blob/main/LICENSE
[python]: https://www.python.org/downloads/
[signup]: https://portal.stedi.com/auth/sign-up-intent
[apikeydocs]: https://www.stedi.com/docs/healthcare/api-reference#authentication
