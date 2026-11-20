import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";
import type { EligibilityCheckDependent, EligibilityCheckMeta, EligibilityCheckPayer, EligibilityCheckPlan, EligibilityCheckProvider, EligibilityCheckResponseError, EligibilityCheckSubscriber, EligibilityCheckWarning, ValidationFailure } from "./models_0";
import { StediServiceException as __BaseException } from "./StediServiceException";
/**
 * The request credentials are missing or not valid.
 * @public
 */
export declare class AuthenticationFailedException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "AuthenticationFailedException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<AuthenticationFailedException, __BaseException>);
}
/**
 * The request conflicts with the current state of the resource.
 * @public
 */
export declare class ConflictException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "ConflictException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>);
}
/**
 * The caller is authenticated but lacks permission for this resource or action.
 * @public
 */
export declare class ForbiddenException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "ForbiddenException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>);
}
/**
 * The service failed unexpectedly. Retry with backoff.
 * @public
 */
export declare class InternalServerException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "InternalServerException";
    readonly $fault: "server";
    $retryable: {};
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>);
}
/**
 * The request is not valid. Fix the request before retrying.
 * @public
 */
export declare class InvalidRequestException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "InvalidRequestException";
    readonly $fault: "client";
    /**
     * Each part of the request that was rejected. Absent when the failure is not specific to any part.
     * @public
     */
    errors?: ValidationFailure[] | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>);
}
/**
 * The caller has exceeded a rate limit. Retry with backoff.
 * @public
 */
export declare class TooManyRequestsException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "TooManyRequestsException";
    readonly $fault: "client";
    $retryable: {
        throttling: boolean;
    };
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>);
}
/**
 * The requested resource does not exist.
 * @public
 */
export declare class NotFoundException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "NotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>);
}
/**
 * The request resulted in a AAA-79 "Invalid Participant" response.
 * @public
 */
export declare class EligibilityCheckInvalidParticipantException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "EligibilityCheckInvalidParticipantException";
    readonly $fault: "client";
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
    constructor(opts: __ExceptionOptionType<EligibilityCheckInvalidParticipantException, __BaseException>);
}
/**
 * The request was not sent to the payer because the originating IP address or an `X-Forwarded-For` IP address is outside the United States. This applies to payers that require US-origin traffic, such as CMS. The body carries the same properties as a successful response, with a synthesized 271 whose `AAA` error reports the rejection.
 * @public
 */
export declare class EligibilityCheckNonUsOriginException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "EligibilityCheckNonUsOriginException";
    readonly $fault: "client";
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
    constructor(opts: __ExceptionOptionType<EligibilityCheckNonUsOriginException, __BaseException>);
}
/**
 * The request body could not be parsed.
 * @public
 */
export declare class EligibilityCheckSerializationException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "EligibilityCheckSerializationException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EligibilityCheckSerializationException, __BaseException>);
}
/**
 * The request was not sent to the payer because your account's real-time concurrency limit was exceeded. Retry with backoff. The body carries the same properties as a successful response, with a synthesized 271 whose `AAA` error reports the rejection.
 * @public
 */
export declare class EligibilityCheckThrottledException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "EligibilityCheckThrottledException";
    readonly $fault: "client";
    $retryable: {
        throttling: boolean;
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
    constructor(opts: __ExceptionOptionType<EligibilityCheckThrottledException, __BaseException>);
}
/**
 * The request payload is larger than the service accepts. Send less in one request.
 * @public
 */
export declare class ContentTooLargeException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "ContentTooLargeException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ContentTooLargeException, __BaseException>);
}
/**
 * The account has reached its maximum number of event destinations. Delete an existing destination or request a limit increase before creating another. Not retryable — the caller must change account state before retrying.
 * @public
 */
export declare class EventDestinationsLimitExceededException extends __BaseException {
    static readonly shapeId: string;
    readonly name: "EventDestinationsLimitExceededException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EventDestinationsLimitExceededException, __BaseException>);
}
