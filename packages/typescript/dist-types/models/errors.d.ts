import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";
import type { ClaimEditError, ValidationFailure } from "./models_0";
import { StediServiceException as __BaseException } from "./StediServiceException";
/**
 * Exception returned when the claim fails one or more pre-submission edits.
 * @public
 */
export declare class ClaimEditException extends __BaseException {
    readonly name: "ClaimEditException";
    readonly $fault: "client";
    /**
     * The edits the claim failed.
     * @public
     */
    errors: ClaimEditError[] | undefined;
    /**
     * A synthetic 277CA acknowledging the rejection, with one STC segment per failed edit.
     * @public
     */
    x12?: string | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ClaimEditException, __BaseException>);
}
/**
 * The server response when an unexpected error occurred while processing request.
 * @public
 */
export declare class InternalFailureException extends __BaseException {
    readonly name: "InternalFailureException";
    readonly $fault: "server";
    $retryable: {};
    /**
     * Error classification code
     * @public
     */
    code?: string | undefined;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>);
}
/**
 * The request credentials are missing or not valid.
 * @public
 */
export declare class AuthenticationFailedException extends __BaseException {
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
    readonly name: "NotFoundException";
    readonly $fault: "client";
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>);
}
