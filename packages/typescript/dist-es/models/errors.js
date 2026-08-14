import { StediServiceException as __BaseException } from "./StediServiceException";
export class ClaimEditException extends __BaseException {
    name = "ClaimEditException";
    $fault = "client";
    errors;
    x12;
    constructor(opts) {
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
export class InternalFailureException extends __BaseException {
    name = "InternalFailureException";
    $fault = "server";
    $retryable = {};
    code;
    constructor(opts) {
        super({
            name: "InternalFailureException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalFailureException.prototype);
        this.code = opts.code;
    }
}
export class AuthenticationFailedException extends __BaseException {
    name = "AuthenticationFailedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AuthenticationFailedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AuthenticationFailedException.prototype);
    }
}
export class ConflictException extends __BaseException {
    name = "ConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
export class ForbiddenException extends __BaseException {
    name = "ForbiddenException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ForbiddenException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ForbiddenException.prototype);
    }
}
export class InternalServerException extends __BaseException {
    name = "InternalServerException";
    $fault = "server";
    $retryable = {};
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
export class InvalidRequestException extends __BaseException {
    name = "InvalidRequestException";
    $fault = "client";
    errors;
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.errors = opts.errors;
    }
}
export class TooManyRequestsException extends __BaseException {
    name = "TooManyRequestsException";
    $fault = "client";
    $retryable = {
        throttling: true,
    };
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
export class NotFoundException extends __BaseException {
    name = "NotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
