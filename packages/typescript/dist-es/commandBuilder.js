import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "./endpoint/EndpointParameters";
export const command = makeBuilder(commonParams, "Stedi", "StediClient", getEndpointPlugin);
export const _ep0 = {
    ServiceComponent: { type: "staticContextParams", value: `SdkEligibilityCheckService` },
};
export const _ep1 = {
    ServiceComponent: { type: "staticContextParams", value: `EventsService` },
};
export const _ep2 = {
    ServiceComponent: { type: "staticContextParams", value: `SdkClaimsService` },
};
export const _mw0 = (Command, cs, config, o) => [];
