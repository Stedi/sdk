import { ServiceException as __ServiceException, } from "@smithy/core/client";
export { __ServiceException };
export class StediServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, StediServiceException.prototype);
    }
}
