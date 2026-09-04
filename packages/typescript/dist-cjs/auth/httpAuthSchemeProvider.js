"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHttpAuthSchemeConfig = exports.defaultStediHttpAuthSchemeProvider = exports.defaultStediHttpAuthSchemeParametersProvider = void 0;
const core_1 = require("@smithy/core");
const client_1 = require("@smithy/core/client");
const types_1 = require("@smithy/types");
const defaultStediHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0, client_1.getSmithyContext)(context).operation,
    };
};
exports.defaultStediHttpAuthSchemeParametersProvider = defaultStediHttpAuthSchemeParametersProvider;
function createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#httpApiKeyAuth",
        signingProperties: {
            name: "Authorization",
            in: types_1.HttpApiKeyAuthLocation.HEADER,
            scheme: "Key",
        },
    };
}
function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#httpBearerAuth",
    };
}
const defaultStediHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        default: {
            options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
            options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
        }
    }
    return options;
};
exports.defaultStediHttpAuthSchemeProvider = defaultStediHttpAuthSchemeProvider;
const resolveHttpAuthSchemeConfig = (config) => {
    const apiKey = (0, core_1.memoizeIdentityProvider)(config.apiKey, core_1.isIdentityExpired, core_1.doesIdentityRequireRefresh);
    const token = (0, core_1.memoizeIdentityProvider)(config.token, core_1.isIdentityExpired, core_1.doesIdentityRequireRefresh);
    return Object.assign(config, {
        authSchemePreference: (0, client_1.normalizeProvider)(config.authSchemePreference ?? []),
        apiKey,
        token,
    });
};
exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
