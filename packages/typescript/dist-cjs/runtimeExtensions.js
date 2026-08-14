"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRuntimeExtensions = void 0;
const client_1 = require("@smithy/core/client");
const protocols_1 = require("@smithy/core/protocols");
const httpAuthExtensionConfiguration_1 = require("./auth/httpAuthExtensionConfiguration");
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign((0, client_1.getDefaultExtensionConfiguration)(runtimeConfig), (0, protocols_1.getHttpHandlerExtensionConfiguration)(runtimeConfig), (0, httpAuthExtensionConfiguration_1.getHttpAuthExtensionConfiguration)(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, client_1.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, protocols_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), (0, httpAuthExtensionConfiguration_1.resolveHttpAuthRuntimeConfig)(extensionConfiguration));
};
exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
