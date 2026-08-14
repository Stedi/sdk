"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = exports.TooManyRequestsException = exports.InvalidRequestException = exports.InternalServerException = exports.ForbiddenException = exports.ConflictException = exports.AuthenticationFailedException = exports.InternalFailureException = exports.ClaimEditException = void 0;
const StediServiceException_1 = require("./StediServiceException");
class ClaimEditException extends StediServiceException_1.StediServiceException {
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
exports.ClaimEditException = ClaimEditException;
class InternalFailureException extends StediServiceException_1.StediServiceException {
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
exports.InternalFailureException = InternalFailureException;
class AuthenticationFailedException extends StediServiceException_1.StediServiceException {
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
exports.AuthenticationFailedException = AuthenticationFailedException;
class ConflictException extends StediServiceException_1.StediServiceException {
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
exports.ConflictException = ConflictException;
class ForbiddenException extends StediServiceException_1.StediServiceException {
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
exports.ForbiddenException = ForbiddenException;
class InternalServerException extends StediServiceException_1.StediServiceException {
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
exports.InternalServerException = InternalServerException;
class InvalidRequestException extends StediServiceException_1.StediServiceException {
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
exports.InvalidRequestException = InvalidRequestException;
class TooManyRequestsException extends StediServiceException_1.StediServiceException {
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
exports.TooManyRequestsException = TooManyRequestsException;
class NotFoundException extends StediServiceException_1.StediServiceException {
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
exports.NotFoundException = NotFoundException;
