// SDK identity middleware — generated, do not edit.
// On every request, sets the User-Agent and browser-safe Stedi-Agent headers to the SDK's branded
// identity: stedi-sdk-typescript/<version> <runtime> (runtime: node/<v>, react-native, or browser).
// @ts-ignore: package.json is imported from the dist folders at runtime.
import packageInfo from "../../package.json"; // eslint-disable-line
import { HttpRequest } from "@smithy/protocol-http";

export function getStediUserAgentPlugin(config: { runtime?: string }) {
  return {
    applyToStack: (stack: any) => {
      stack.addRelativeTo(
        (next: any) => async (args: any) => {
          if (HttpRequest.isInstance(args.request)) {
            // config.runtime is resolved at bundle time (node / browser / react-native) by the
            // client's conditional runtimeConfig; the Node branch appends the Node version.
            const runtime = config.runtime ?? "unknown";
            const onNode = runtime === "node" && typeof process !== "undefined" && !!process.versions?.node;
            const runtimeTag = onNode ? `node/${process.versions.node}` : runtime;
            const stediAgent = `stedi-sdk-typescript/${packageInfo.version} ${runtimeTag}`;
            args.request.headers["stedi-agent"] = stediAgent;
            args.request.headers["user-agent"] = stediAgent;
            delete args.request.headers["x-amz-user-agent"];
          }
          return next(args);
        },
        { relation: "after", toMiddleware: "getUserAgentMiddleware", name: "stediUserAgentMiddleware", override: true },
      );
    },
  };
}
