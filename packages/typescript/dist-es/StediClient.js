import { getHostHeaderPlugin, getLoggerPlugin, getRecursionDetectionPlugin, getUserAgentPlugin, resolveHostHeaderConfig, resolveUserAgentConfig, } from "@aws-sdk/core/client";
import { DefaultIdentityProviderConfig, getHttpAuthSchemeEndpointRuleSetPlugin, getHttpSigningPlugin, } from "@smithy/core";
import { Client as __Client, } from "@smithy/core/client";
import { resolveEndpointConfig } from "@smithy/core/endpoints";
import { getContentLengthPlugin } from "@smithy/core/protocols";
import { getRetryPlugin, resolveRetryConfig, } from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { defaultStediHttpAuthSchemeParametersProvider, resolveHttpAuthSchemeConfig, } from "./auth/httpAuthSchemeProvider";
import { resolveClientEndpointParameters, } from "./endpoint/EndpointParameters";
import { getStediUserAgentPlugin } from "./middleware/stediUserAgentMiddleware";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions } from "./runtimeExtensions";
export { __Client };
export class StediClient extends __Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = __getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveHostHeaderConfig(_config_3);
        const _config_5 = resolveEndpointConfig(_config_4);
        const _config_6 = resolveHttpAuthSchemeConfig(_config_5);
        const _config_7 = resolveRuntimeExtensions(_config_6, configuration?.extensions || []);
        this.config = _config_7;
        this.middlewareStack.use(getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getStediUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: defaultStediHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
                "smithy.api#httpApiKeyAuth": config.apiKey,
            }),
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}
