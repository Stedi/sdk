import { StediServiceException as __BaseException } from "./StediServiceException";
export class AuthenticationFailedException extends __BaseException {
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
export class ConflictException extends __BaseException {
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
export class ForbiddenException extends __BaseException {
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
export class InternalServerException extends __BaseException {
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
export class InvalidRequestException extends __BaseException {
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
export class TooManyRequestsException extends __BaseException {
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
export class NotFoundException extends __BaseException {
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
export class EligibilityCheckInvalidParticipantException extends __BaseException {
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
export class EligibilityCheckNonUsOriginException extends __BaseException {
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
export class EligibilityCheckSerializationException extends __BaseException {
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
export class EligibilityCheckThrottledException extends __BaseException {
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
export class ContentTooLargeException extends __BaseException {
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
export class EventDestinationsLimitExceededException extends __BaseException {
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
