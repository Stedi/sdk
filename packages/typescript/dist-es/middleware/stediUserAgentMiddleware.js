import packageInfo from "../../package.json";
import { HttpRequest } from "@smithy/protocol-http";
export function getStediUserAgentPlugin(config) {
    return {
        applyToStack: (stack) => {
            stack.addRelativeTo((next) => async (args) => {
                if (HttpRequest.isInstance(args.request)) {
                    const runtime = config.runtime ?? "unknown";
                    const onNode = runtime === "node" && typeof process !== "undefined" && !!process.versions?.node;
                    const runtimeTag = onNode ? `node/${process.versions.node}` : runtime;
                    const stediAgent = `stedi-sdk-typescript/${packageInfo.version} ${runtimeTag}`;
                    args.request.headers["stedi-agent"] = stediAgent;
                    args.request.headers["user-agent"] = stediAgent;
                    delete args.request.headers["x-amz-user-agent"];
                }
                return next(args);
            }, { relation: "after", toMiddleware: "getUserAgentMiddleware", name: "stediUserAgentMiddleware", override: true });
        },
    };
}
