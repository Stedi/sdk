// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, StediClientResolvedConfig } from "./StediClient";


/**
 * @internal
 */
export const command = makeBuilder<StediClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Stedi", "StediClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  ServiceComponent: { type: "staticContextParams", value: `SdkEligibilityCheckService` },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  ServiceComponent: { type: "staticContextParams", value: `EventsService` },
};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  ServiceComponent: { type: "staticContextParams", value: `SdkClaimsService` },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
