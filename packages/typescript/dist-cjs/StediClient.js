"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StediClient = exports.__Client = void 0;
const client_1 = require("@aws-sdk/core/client");
const core_1 = require("@smithy/core");
const client_2 = require("@smithy/core/client");
Object.defineProperty(exports, "__Client", { enumerable: true, get: function () { return client_2.Client; } });
const endpoints_1 = require("@smithy/core/endpoints");
const protocols_1 = require("@smithy/core/protocols");
const retry_1 = require("@smithy/core/retry");
const schema_1 = require("@smithy/core/schema");
const httpAuthSchemeProvider_1 = require("./auth/httpAuthSchemeProvider");
const EndpointParameters_1 = require("./endpoint/EndpointParameters");
const stediUserAgentMiddleware_1 = require("./middleware/stediUserAgentMiddleware");
const runtimeConfig_1 = require("./runtimeConfig");
const runtimeExtensions_1 = require("./runtimeExtensions");
class StediClient extends client_2.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, client_1.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, retry_1.resolveRetryConfig)(_config_2);
        const _config_4 = (0, client_1.resolveHostHeaderConfig)(_config_3);
        const _config_5 = (0, endpoints_1.resolveEndpointConfig)(_config_4);
        const _config_6 = (0, httpAuthSchemeProvider_1.resolveHttpAuthSchemeConfig)(_config_5);
        const _config_7 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_6, configuration?.extensions || []);
        this.config = _config_7;
        this.middlewareStack.use((0, schema_1.getSchemaSerdePlugin)(this.config));
        this.middlewareStack.use((0, client_1.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, stediUserAgentMiddleware_1.getStediUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, protocols_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, client_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, client_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, client_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, core_1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider_1.defaultStediHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core_1.DefaultIdentityProviderConfig({
                "smithy.api#httpApiKeyAuth": config.apiKey,
            }),
        }));
        this.middlewareStack.use((0, core_1.getHttpSigningPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}
exports.StediClient = StediClient;
