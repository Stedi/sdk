"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStediUserAgentPlugin = getStediUserAgentPlugin;
const tslib_1 = require("tslib");
const package_json_1 = tslib_1.__importDefault(require("../../package.json"));
const protocol_http_1 = require("@smithy/protocol-http");
function getStediUserAgentPlugin(config) {
    return {
        applyToStack: (stack) => {
            stack.addRelativeTo((next) => async (args) => {
                if (protocol_http_1.HttpRequest.isInstance(args.request)) {
                    const runtime = config.runtime ?? "unknown";
                    const onNode = runtime === "node" && typeof process !== "undefined" && !!process.versions?.node;
                    const runtimeTag = onNode ? `node/${process.versions.node}` : runtime;
                    const stediAgent = `stedi-sdk-typescript/${package_json_1.default.version} ${runtimeTag}`;
                    args.request.headers["stedi-agent"] = stediAgent;
                    args.request.headers["user-agent"] = stediAgent;
                    delete args.request.headers["x-amz-user-agent"];
                }
                return next(args);
            }, { relation: "after", toMiddleware: "getUserAgentMiddleware", name: "stediUserAgentMiddleware", override: true });
        },
    };
}
