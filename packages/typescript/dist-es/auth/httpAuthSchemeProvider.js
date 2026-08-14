import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import { getSmithyContext, normalizeProvider } from "@smithy/core/client";
import { HttpApiKeyAuthLocation, } from "@smithy/types";
export const defaultStediHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: getSmithyContext(context).operation,
    };
};
function createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#httpApiKeyAuth",
        signingProperties: {
            name: "Authorization",
            in: HttpApiKeyAuthLocation.HEADER,
            scheme: "Key",
        },
    };
}
export const defaultStediHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        default: {
            options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
        }
    }
    return options;
};
export const resolveHttpAuthSchemeConfig = (config) => {
    const apiKey = memoizeIdentityProvider(config.apiKey, isIdentityExpired, doesIdentityRequireRefresh);
    return Object.assign(config, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
        apiKey,
    });
};
