import { ServiceException as __ServiceException, } from "@smithy/core/client";
export { __ServiceException };
export class StediServiceException extends __ServiceException {
    static shapeId = "smithy.ts.sdk.synthetic.com.stedi.sdk#StediServiceException";
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, StediServiceException.prototype);
    }
}
