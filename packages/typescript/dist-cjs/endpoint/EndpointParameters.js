"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonParams = exports.resolveClientEndpointParameters = void 0;
const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        defaultSigningName: "",
    });
};
exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
exports.commonParams = {
    Endpoint: { type: "builtInParams", name: "endpoint" },
};
