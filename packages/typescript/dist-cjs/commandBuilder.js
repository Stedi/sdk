"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mw0 = exports._ep2 = exports._ep1 = exports._ep0 = exports.command = void 0;
const client_1 = require("@smithy/core/client");
const endpoints_1 = require("@smithy/core/endpoints");
const EndpointParameters_1 = require("./endpoint/EndpointParameters");
exports.command = (0, client_1.makeBuilder)(EndpointParameters_1.commonParams, "Stedi", "StediClient", endpoints_1.getEndpointPlugin);
exports._ep0 = {
    ServiceComponent: { type: "staticContextParams", value: `SdkEligibilityCheckService` },
};
exports._ep1 = {
    ServiceComponent: { type: "staticContextParams", value: `EventsService` },
};
exports._ep2 = {
    ServiceComponent: { type: "staticContextParams", value: `SdkClaimsService` },
};
const _mw0 = (Command, cs, config, o) => [];
exports._mw0 = _mw0;
