// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type {
  EligibilityCheckDependent,
  EligibilityCheckMeta,
  EligibilityCheckPayer,
  EligibilityCheckPlan,
  EligibilityCheckProvider,
  EligibilityCheckResponseError,
  EligibilityCheckSubscriber,
  EligibilityCheckWarning,
  ValidationFailure,
} from "./models_0";
import { StediServiceException as __BaseException } from "./StediServiceException";

/**
 * The request credentials are missing or not valid.
 * @public
 */
export class AuthenticationFailedException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#AuthenticationFailedException";
  readonly name = "AuthenticationFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationFailedException, __BaseException>) {
    super({
      name: "AuthenticationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationFailedException.prototype);
  }
}

/**
 * The request conflicts with the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * The caller is authenticated but lacks permission for this resource or action.
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * The service failed unexpectedly. Retry with backoff.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * The request is not valid. Fix the request before retrying.
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * Each part of the request that was rejected. Absent when the failure is not specific to any part.
   * @public
   */
  errors?: ValidationFailure[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.errors = opts.errors;
  }
}

/**
 * The caller has exceeded a rate limit. Retry with backoff.
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * The requested resource does not exist.
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * The request resulted in a AAA-79 "Invalid Participant" response.
 * @public
 */
export class EligibilityCheckInvalidParticipantException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.eligibility.v4.errors#EligibilityCheckInvalidParticipantException";
  readonly name = "EligibilityCheckInvalidParticipantException" as const;
  readonly $fault = "client" as const;
  /**
   * Metadata about the response. Stedi uses this data for tracking and troubleshooting.
   * @public
   */
  meta?: EligibilityCheckMeta | undefined;

  /**
   * The primary payer ID from the [Stedi Payer Network](https://www.stedi.com/healthcare/network). This ID is consistent across eligibility and claims systems and matches the payer ID printed on the member's ID card. You can use it as the `payerId` in subsequent eligibility check requests.
   * @public
   */
  payerId?: string | undefined;

  /**
   * Typically this property contains the raw X12 EDI [271 Eligibility Benefit Response](https://portal.stedi.com/app/guides/view/hipaa/health-care-eligibility-benefit-response-x279a1/01GS66YHZPB37ABF34DBPSR213) from the payer.
   *
   * In some circumstances, this property may contain a [999 Implementation Acknowledgment](https://portal.stedi.com/app/guides/view/hipaa/implementation-acknowledgment-x231a1/01HMRQV0N8SPHG58M4ZG1CRHH0) instead of a 271. A 999 indicates validation errors in the X12 EDI transaction, such as improper formatting or missing or invalid values.
   *
   * If this property contains a 999, many of the other response properties will be empty, as Stedi populates them with information from the 271.
   * @public
   */
  x12: string | undefined;

  /**
   * Information about the payer providing the benefits information. The response will always include the payer's business name and an identifier, such as the payer's tax ID. Most payers also include contact information.
   * @public
   */
  payer: EligibilityCheckPayer | undefined;

  /**
   * Information about the entity that submitted the original eligibility check request. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider. This object will always include at least one identifier, such as the provider's [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier), tax ID, or EIN. If you left the provider name out of the request, this object typically contains the name that Stedi filled in from the provider's National Plan and Provider Enumeration System (NPPES) record, or `PROVIDER`.
   * @public
   */
  provider?: EligibilityCheckProvider | undefined;

  /**
   * Information about the primary policyholder for the insurance plan listed in the original eligibility check request. The response will always include either the subscriber's name or member ID for identification, but most payers will also return the subscriber's date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the subscriber's full legal name.
   * @public
   */
  subscriber?: EligibilityCheckSubscriber | undefined;

  /**
   * Information about the dependent from the eligibility check request. Note that the payer may return the dependent in the subscriber object instead. When present, this object will always include the dependent's name for identification, but many payers also include the date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the dependent's full legal name.
   * @public
   */
  dependent?: EligibilityCheckDependent | undefined;

  /**
   * The patient's insurance plans, grouped by plan name. Each plan contains the benefits that apply to the patient.
   * @public
   */
  plans?: EligibilityCheckPlan[] | undefined;

  /**
   * A globally unique identifier for this eligibility check across all Stedi accounts. It's formatted as `ec_<uuid>`. For example: `ec_550e8400-e29b-41d4-a716-446655440000`. You can use this ID to track this eligibility check and to construct deep links to eligibility checks in the Stedi portal.
   * @public
   */
  id: string | undefined;

  /**
   * An identifier that allows Stedi to group eligibility checks for the same patient into a unified record in the Stedi portal called an [eligibility search](https://www.stedi.com/docs/healthcare/eligibility-views).
   *
   * This property is for use by Stedi tools only, such as Stedi's MCP server.
   * @public
   */
  eligibilitySearchId?: string | undefined;

  /**
   * Issues with your eligibility request that could affect the results, or information about the response. For example, warnings can help explain why the request was rejected.
   * @public
   */
  warnings?: EligibilityCheckWarning[] | undefined;

  /**
   * `AAA` rejection errors from the payer. [`AAA` errors](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#payer-aaa-errors) specify the reasons for the rejection and any recommended follow-up actions.
   * @public
   */
  errors?: EligibilityCheckResponseError[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EligibilityCheckInvalidParticipantException, __BaseException>) {
    super({
      name: "EligibilityCheckInvalidParticipantException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EligibilityCheckInvalidParticipantException.prototype);
    this.meta = opts.meta;
    this.payerId = opts.payerId;
    this.x12 = opts.x12;
    this.payer = opts.payer;
    this.provider = opts.provider;
    this.subscriber = opts.subscriber;
    this.dependent = opts.dependent;
    this.plans = opts.plans;
    this.id = opts.id;
    this.eligibilitySearchId = opts.eligibilitySearchId;
    this.warnings = opts.warnings;
    this.errors = opts.errors;
  }
}

/**
 * The request was not sent to the payer because the originating IP address or an `X-Forwarded-For` IP address is outside the United States. This applies to payers that require US-origin traffic, such as CMS. The body carries the same properties as a successful response, with a synthesized 271 whose `AAA` error reports the rejection.
 * @public
 */
export class EligibilityCheckNonUsOriginException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.eligibility.v4.errors#EligibilityCheckNonUsOriginException";
  readonly name = "EligibilityCheckNonUsOriginException" as const;
  readonly $fault = "client" as const;
  /**
   * Metadata about the response. Stedi uses this data for tracking and troubleshooting.
   * @public
   */
  meta?: EligibilityCheckMeta | undefined;

  /**
   * The primary payer ID from the [Stedi Payer Network](https://www.stedi.com/healthcare/network). This ID is consistent across eligibility and claims systems and matches the payer ID printed on the member's ID card. You can use it as the `payerId` in subsequent eligibility check requests.
   * @public
   */
  payerId?: string | undefined;

  /**
   * Typically this property contains the raw X12 EDI [271 Eligibility Benefit Response](https://portal.stedi.com/app/guides/view/hipaa/health-care-eligibility-benefit-response-x279a1/01GS66YHZPB37ABF34DBPSR213) from the payer.
   *
   * In some circumstances, this property may contain a [999 Implementation Acknowledgment](https://portal.stedi.com/app/guides/view/hipaa/implementation-acknowledgment-x231a1/01HMRQV0N8SPHG58M4ZG1CRHH0) instead of a 271. A 999 indicates validation errors in the X12 EDI transaction, such as improper formatting or missing or invalid values.
   *
   * If this property contains a 999, many of the other response properties will be empty, as Stedi populates them with information from the 271.
   * @public
   */
  x12: string | undefined;

  /**
   * Information about the payer providing the benefits information. The response will always include the payer's business name and an identifier, such as the payer's tax ID. Most payers also include contact information.
   * @public
   */
  payer: EligibilityCheckPayer | undefined;

  /**
   * Information about the entity that submitted the original eligibility check request. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider. This object will always include at least one identifier, such as the provider's [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier), tax ID, or EIN. If you left the provider name out of the request, this object typically contains the name that Stedi filled in from the provider's National Plan and Provider Enumeration System (NPPES) record, or `PROVIDER`.
   * @public
   */
  provider?: EligibilityCheckProvider | undefined;

  /**
   * Information about the primary policyholder for the insurance plan listed in the original eligibility check request. The response will always include either the subscriber's name or member ID for identification, but most payers will also return the subscriber's date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the subscriber's full legal name.
   * @public
   */
  subscriber?: EligibilityCheckSubscriber | undefined;

  /**
   * Information about the dependent from the eligibility check request. Note that the payer may return the dependent in the subscriber object instead. When present, this object will always include the dependent's name for identification, but many payers also include the date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the dependent's full legal name.
   * @public
   */
  dependent?: EligibilityCheckDependent | undefined;

  /**
   * The patient's insurance plans, grouped by plan name. Each plan contains the benefits that apply to the patient.
   * @public
   */
  plans?: EligibilityCheckPlan[] | undefined;

  /**
   * A globally unique identifier for this eligibility check across all Stedi accounts. It's formatted as `ec_<uuid>`. For example: `ec_550e8400-e29b-41d4-a716-446655440000`. You can use this ID to track this eligibility check and to construct deep links to eligibility checks in the Stedi portal.
   * @public
   */
  id: string | undefined;

  /**
   * An identifier that allows Stedi to group eligibility checks for the same patient into a unified record in the Stedi portal called an [eligibility search](https://www.stedi.com/docs/healthcare/eligibility-views).
   *
   * This property is for use by Stedi tools only, such as Stedi's MCP server.
   * @public
   */
  eligibilitySearchId?: string | undefined;

  /**
   * Issues with your eligibility request that could affect the results, or information about the response. For example, warnings can help explain why the request was rejected.
   * @public
   */
  warnings?: EligibilityCheckWarning[] | undefined;

  /**
   * `AAA` rejection errors from the payer. [`AAA` errors](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#payer-aaa-errors) specify the reasons for the rejection and any recommended follow-up actions.
   * @public
   */
  errors?: EligibilityCheckResponseError[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EligibilityCheckNonUsOriginException, __BaseException>) {
    super({
      name: "EligibilityCheckNonUsOriginException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EligibilityCheckNonUsOriginException.prototype);
    this.meta = opts.meta;
    this.payerId = opts.payerId;
    this.x12 = opts.x12;
    this.payer = opts.payer;
    this.provider = opts.provider;
    this.subscriber = opts.subscriber;
    this.dependent = opts.dependent;
    this.plans = opts.plans;
    this.id = opts.id;
    this.eligibilitySearchId = opts.eligibilitySearchId;
    this.warnings = opts.warnings;
    this.errors = opts.errors;
  }
}

/**
 * The request body could not be parsed.
 * @public
 */
export class EligibilityCheckSerializationException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.eligibility.v4.errors#EligibilityCheckSerializationException";
  readonly name = "EligibilityCheckSerializationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EligibilityCheckSerializationException, __BaseException>) {
    super({
      name: "EligibilityCheckSerializationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EligibilityCheckSerializationException.prototype);
  }
}

/**
 * The request was not sent to the payer because your account's real-time concurrency limit was exceeded. Retry with backoff. The body carries the same properties as a successful response, with a synthesized 271 whose `AAA` error reports the rejection.
 * @public
 */
export class EligibilityCheckThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.eligibility.v4.errors#EligibilityCheckThrottledException";
  readonly name = "EligibilityCheckThrottledException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * Metadata about the response. Stedi uses this data for tracking and troubleshooting.
   * @public
   */
  meta?: EligibilityCheckMeta | undefined;

  /**
   * The primary payer ID from the [Stedi Payer Network](https://www.stedi.com/healthcare/network). This ID is consistent across eligibility and claims systems and matches the payer ID printed on the member's ID card. You can use it as the `payerId` in subsequent eligibility check requests.
   * @public
   */
  payerId?: string | undefined;

  /**
   * Typically this property contains the raw X12 EDI [271 Eligibility Benefit Response](https://portal.stedi.com/app/guides/view/hipaa/health-care-eligibility-benefit-response-x279a1/01GS66YHZPB37ABF34DBPSR213) from the payer.
   *
   * In some circumstances, this property may contain a [999 Implementation Acknowledgment](https://portal.stedi.com/app/guides/view/hipaa/implementation-acknowledgment-x231a1/01HMRQV0N8SPHG58M4ZG1CRHH0) instead of a 271. A 999 indicates validation errors in the X12 EDI transaction, such as improper formatting or missing or invalid values.
   *
   * If this property contains a 999, many of the other response properties will be empty, as Stedi populates them with information from the 271.
   * @public
   */
  x12: string | undefined;

  /**
   * Information about the payer providing the benefits information. The response will always include the payer's business name and an identifier, such as the payer's tax ID. Most payers also include contact information.
   * @public
   */
  payer: EligibilityCheckPayer | undefined;

  /**
   * Information about the entity that submitted the original eligibility check request. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider. This object will always include at least one identifier, such as the provider's [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier), tax ID, or EIN. If you left the provider name out of the request, this object typically contains the name that Stedi filled in from the provider's National Plan and Provider Enumeration System (NPPES) record, or `PROVIDER`.
   * @public
   */
  provider?: EligibilityCheckProvider | undefined;

  /**
   * Information about the primary policyholder for the insurance plan listed in the original eligibility check request. The response will always include either the subscriber's name or member ID for identification, but most payers will also return the subscriber's date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the subscriber's full legal name.
   * @public
   */
  subscriber?: EligibilityCheckSubscriber | undefined;

  /**
   * Information about the dependent from the eligibility check request. Note that the payer may return the dependent in the subscriber object instead. When present, this object will always include the dependent's name for identification, but many payers also include the date of birth and other identifying information. Some payers truncate names to fit their own technical limits, so the payer may not return the dependent's full legal name.
   * @public
   */
  dependent?: EligibilityCheckDependent | undefined;

  /**
   * The patient's insurance plans, grouped by plan name. Each plan contains the benefits that apply to the patient.
   * @public
   */
  plans?: EligibilityCheckPlan[] | undefined;

  /**
   * A globally unique identifier for this eligibility check across all Stedi accounts. It's formatted as `ec_<uuid>`. For example: `ec_550e8400-e29b-41d4-a716-446655440000`. You can use this ID to track this eligibility check and to construct deep links to eligibility checks in the Stedi portal.
   * @public
   */
  id: string | undefined;

  /**
   * An identifier that allows Stedi to group eligibility checks for the same patient into a unified record in the Stedi portal called an [eligibility search](https://www.stedi.com/docs/healthcare/eligibility-views).
   *
   * This property is for use by Stedi tools only, such as Stedi's MCP server.
   * @public
   */
  eligibilitySearchId?: string | undefined;

  /**
   * Issues with your eligibility request that could affect the results, or information about the response. For example, warnings can help explain why the request was rejected.
   * @public
   */
  warnings?: EligibilityCheckWarning[] | undefined;

  /**
   * `AAA` rejection errors from the payer. [`AAA` errors](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#payer-aaa-errors) specify the reasons for the rejection and any recommended follow-up actions.
   * @public
   */
  errors?: EligibilityCheckResponseError[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EligibilityCheckThrottledException, __BaseException>) {
    super({
      name: "EligibilityCheckThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EligibilityCheckThrottledException.prototype);
    this.meta = opts.meta;
    this.payerId = opts.payerId;
    this.x12 = opts.x12;
    this.payer = opts.payer;
    this.provider = opts.provider;
    this.subscriber = opts.subscriber;
    this.dependent = opts.dependent;
    this.plans = opts.plans;
    this.id = opts.id;
    this.eligibilitySearchId = opts.eligibilitySearchId;
    this.warnings = opts.warnings;
    this.errors = opts.errors;
  }
}

/**
 * The request payload is larger than the service accepts. Send less in one request.
 * @public
 */
export class ContentTooLargeException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.smithy.model.errors#ContentTooLargeException";
  readonly name = "ContentTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContentTooLargeException, __BaseException>) {
    super({
      name: "ContentTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContentTooLargeException.prototype);
  }
}

/**
 * The account has reached its maximum number of event destinations. Delete an existing destination or request a limit increase before creating another. Not retryable — the caller must change account state before retrying.
 * @public
 */
export class EventDestinationsLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.stedi.events#EventDestinationsLimitExceededException";
  readonly name = "EventDestinationsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDestinationsLimitExceededException, __BaseException>) {
    super({
      name: "EventDestinationsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDestinationsLimitExceededException.prototype);
  }
}
