"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDestinationsLimitExceededException = exports.ContentTooLargeException = exports.EligibilityCheckThrottledException = exports.EligibilityCheckSerializationException = exports.EligibilityCheckNonUsOriginException = exports.EligibilityCheckInvalidParticipantException = exports.NotFoundException = exports.TooManyRequestsException = exports.InvalidRequestException = exports.InternalServerException = exports.ForbiddenException = exports.ConflictException = exports.AuthenticationFailedException = void 0;
const StediServiceException_1 = require("./StediServiceException");
class AuthenticationFailedException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.smithy.model.errors#AuthenticationFailedException";
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
    static shapeId = "com.stedi.smithy.model.errors#ConflictException";
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
    static shapeId = "com.stedi.smithy.model.errors#ForbiddenException";
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
    static shapeId = "com.stedi.smithy.model.errors#InternalServerException";
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
    static shapeId = "com.stedi.smithy.model.errors#InvalidRequestException";
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
    static shapeId = "com.stedi.smithy.model.errors#TooManyRequestsException";
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
    static shapeId = "com.stedi.smithy.model.errors#NotFoundException";
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
class EligibilityCheckInvalidParticipantException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.eligibility.v4.errors#EligibilityCheckInvalidParticipantException";
    name = "EligibilityCheckInvalidParticipantException";
    $fault = "client";
    meta;
    payerId;
    x12;
    payer;
    provider;
    subscriber;
    dependent;
    plans;
    id;
    eligibilitySearchId;
    warnings;
    errors;
    constructor(opts) {
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
exports.EligibilityCheckInvalidParticipantException = EligibilityCheckInvalidParticipantException;
class EligibilityCheckNonUsOriginException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.eligibility.v4.errors#EligibilityCheckNonUsOriginException";
    name = "EligibilityCheckNonUsOriginException";
    $fault = "client";
    meta;
    payerId;
    x12;
    payer;
    provider;
    subscriber;
    dependent;
    plans;
    id;
    eligibilitySearchId;
    warnings;
    errors;
    constructor(opts) {
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
exports.EligibilityCheckNonUsOriginException = EligibilityCheckNonUsOriginException;
class EligibilityCheckSerializationException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.eligibility.v4.errors#EligibilityCheckSerializationException";
    name = "EligibilityCheckSerializationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EligibilityCheckSerializationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EligibilityCheckSerializationException.prototype);
    }
}
exports.EligibilityCheckSerializationException = EligibilityCheckSerializationException;
class EligibilityCheckThrottledException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.eligibility.v4.errors#EligibilityCheckThrottledException";
    name = "EligibilityCheckThrottledException";
    $fault = "client";
    $retryable = {
        throttling: true,
    };
    meta;
    payerId;
    x12;
    payer;
    provider;
    subscriber;
    dependent;
    plans;
    id;
    eligibilitySearchId;
    warnings;
    errors;
    constructor(opts) {
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
exports.EligibilityCheckThrottledException = EligibilityCheckThrottledException;
class ContentTooLargeException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.smithy.model.errors#ContentTooLargeException";
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
class EventDestinationsLimitExceededException extends StediServiceException_1.StediServiceException {
    static shapeId = "com.stedi.events#EventDestinationsLimitExceededException";
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
