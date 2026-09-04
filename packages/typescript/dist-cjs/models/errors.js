"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTooLargeException = exports.EventDestinationsLimitExceededException = exports.NotFoundException = exports.TooManyRequestsException = exports.InvalidRequestException = exports.InternalServerException = exports.ForbiddenException = exports.ConflictException = exports.AuthenticationFailedException = void 0;
const StediServiceException_1 = require("./StediServiceException");
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
class EventDestinationsLimitExceededException extends StediServiceException_1.StediServiceException {
    name = "EventDestinationsLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EventDestinationsLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EventDestinationsLimitExceededException.prototype);
    }
}
exports.EventDestinationsLimitExceededException = EventDestinationsLimitExceededException;
class ContentTooLargeException extends StediServiceException_1.StediServiceException {
    name = "ContentTooLargeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ContentTooLargeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ContentTooLargeException.prototype);
    }
}
exports.ContentTooLargeException = ContentTooLargeException;
