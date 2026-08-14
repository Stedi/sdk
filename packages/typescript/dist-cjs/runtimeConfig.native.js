"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const runtimeConfig_browser_1 = require("./runtimeConfig.browser");
const getRuntimeConfig = (config) => {
    const browserDefaults = (0, runtimeConfig_browser_1.getRuntimeConfig)(config);
    return {
        ...browserDefaults,
        ...config,
        runtime: "react-native",
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
