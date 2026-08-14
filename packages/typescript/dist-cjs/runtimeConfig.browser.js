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
const fetch_http_handler_1 = require("@smithy/fetch-http-handler");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const getRuntimeConfig = (config) => {
    const defaultsMode = (0, config_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(client_2.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? serde_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, client_1.createDefaultUserAgentProvider)({ clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? retry_1.DEFAULT_MAX_ATTEMPTS,
        requestHandler: fetch_http_handler_1.FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || retry_1.DEFAULT_RETRY_MODE),
        streamCollector: config?.streamCollector ?? fetch_http_handler_1.streamCollector,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
