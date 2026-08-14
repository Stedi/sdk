// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ClaimEditError, ValidationFailure } from "./models_0";
import { StediServiceException as __BaseException } from "./StediServiceException";

/**
 * Exception returned when the claim fails one or more pre-submission edits.
 * @public
 */
export class ClaimEditException extends __BaseException {
  readonly name = "ClaimEditException" as const;
  readonly $fault = "client" as const;
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
  constructor(opts: __ExceptionOptionType<ClaimEditException, __BaseException>) {
    super({
      name: "ClaimEditException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClaimEditException.prototype);
    this.errors = opts.errors;
    this.x12 = opts.x12;
  }
}

/**
 * The server response when an unexpected error occurred while processing request.
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * Error classification code
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.code = opts.code;
  }
}

/**
 * The request credentials are missing or not valid.
 * @public
 */
export class AuthenticationFailedException extends __BaseException {
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
