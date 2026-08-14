"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = require("tslib");
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const client_1 = require("@aws-sdk/core/client");
const client_2 = require("@smithy/core/client");
const config_1 = require("@smithy/core/config");
const retry_1 = require("@smithy/core/retry");
const serde_1 = require("@smithy/core/serde");
const node_http_handler_1 = require("@smithy/node-http-handler");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const getRuntimeConfig = (config) => {
    (0, client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, config_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(client_2.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger,
    };
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? serde_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, client_1.createDefaultUserAgentProvider)({ clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, config_1.loadConfig)(retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0, config_1.loadConfig)({
                ...retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || retry_1.DEFAULT_RETRY_MODE,
            }, config),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        userAgentAppId: config?.userAgentAppId ?? (0, config_1.loadConfig)(client_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig),
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
