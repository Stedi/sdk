# Changelog

All notable changes to the Stedi SDK are documented here.

## 1.1.0 — 2026-11-18

### Added

#### Eligibility

- Adds three error types for `create_eligibility_check`. Each one subclasses the unmodeled error the operation used to return in these cases (`CallError`), so existing handlers still match. Each one also has the same properties as a successful response.
  - `EligibilityCheckThrottledException` (HTTP `429`): Stedi returns this error when your account goes over its [concurrency limit](https://www.stedi.com/docs/healthcare/api-reference#concurrency-limits) and doesn't send the request to the payer. The SDK automatically retries throttled requests with backoff and returns this error only if every attempt is throttled.
  - `EligibilityCheckInvalidParticipantException` (HTTP `400`): Stedi returns this error when the check results in an AAA `79` (Invalid Participant Identification) error. Don't automatically retry it, unless `errors` also contains an AAA `42` (Unable to Respond at Current Time). In that case, follow the [payer connectivity issues](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#payer-connectivity-issues) guidance. Visit [Other common error cases](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#other-common-error-cases) for causes and resolutions.
  - `EligibilityCheckNonUsOriginException` (HTTP `451`): Stedi returns this error when you send a check to the Centers for Medicare & Medicaid Services (CMS) and the originating IP address or an `X-Forwarded-For` IP address is outside the United States. Visit [CMS traceability requirements](https://www.stedi.com/docs/healthcare/send-eligibility-checks#cms-traceability-requirements) for details.
- Adds `birth_sequence_number` to `EligibilityCheckRequestSubscriber` and `EligibilityCheckRequestDependent`. Use it to set the birth order for twins and other multiple births. On the dependent, you must also include `relation_to_subscriber`, or Stedi rejects the request.
- Adds the place of service codes `02`, `09`, `10`, `16`, `17`, `18`, `19`, `27`, `58`, and `66` to `EligibilityCheckPlaceOfServiceCode`. Stedi used to reject requests that sent these codes in `encounter.place_of_service`. Visit the Centers for Medicare & Medicaid Services (CMS) [Place of Service Code Set](https://www.cms.gov/medicare/coding-billing/place-of-service-codes/code-sets) for each code's name.

### Changed

#### Eligibility

- Makes `name` optional on `EligibilityCheckRequestProvider`, and `last_name` optional on `EligibilityCheckRequestProviderPersonName`. When you omit the provider's name, Stedi uses the name on the provider's National Plan and Provider Enumeration System (NPPES) record for its `npi`. If you send `first_name` without `last_name`, Stedi treats the name as missing and uses the NPPES name in its place. We recommend omitting it unless you believe the payer has a different name on file for the provider. Visit [Provider name](https://www.stedi.com/docs/healthcare/send-eligibility-checks#provider-name) for details.
- Raises the maximum length of `payer_name` in `create_eligibility_check` requests from 60 to 120 characters. Stedi used to reject requests with a longer `payer_name`.
- Improves documentation for the following properties and enum values:
  - `personal_identification_number` in the provider's `additional_information`: Required for Medicaid California, AltaMed, and Kern Family Health Care, where it's the password the provider uses to log in to the payer's portal. Visit [Portal credentials](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#portal-credentials) for details.
  - `plan_coverage_description` on each benefit in the response: Stedi omits it when it matches the plan's `name`. When a plan has no `name`, check this property for the payer's plan information.
  - `subscriber` and `dependent` in the response: Some payers truncate names to fit their own limits, so the name in the response isn't always the full legal name.
  - `EligibilityCheckPlaceOfServiceCode.OUTPATIENT_HOSPITAL` (`22`): Now described as On Campus-Outpatient Hospital, the current Centers for Medicare & Medicaid Services (CMS) name for the code.
