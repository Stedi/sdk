import { NodeHttpHandler as RequestHandler } from "@smithy/node-http-handler";
import type { StediClientConfig } from "./StediClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: StediClientConfig) => {
    runtime: string;
    defaultsMode: import("@smithy/types").Provider<import("@smithy/core/client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@smithy/types").BodyLengthCalculator;
    defaultUserAgentProvider: (config?: import("@aws-sdk/core/client").PreviouslyResolved) => Promise<import("@smithy/types").UserAgent>;
    maxAttempts: number | import("@smithy/types").Provider<number>;
    requestHandler: RequestHandler | import("@smithy/protocol-http").HttpHandler<any>;
    retryMode: string | import("@smithy/types").Provider<string>;
    streamCollector: (stream: import("stream").Readable | import("stream/web").ReadableStream | ReadableStream | Blob) => Promise<Uint8Array>;
    userAgentAppId: string | import("@smithy/types").Provider<string | undefined>;
    cacheMiddleware?: boolean | undefined;
    protocol: import("@smithy/types").ClientProtocol<any, any> | import("@smithy/types").ClientProtocolCtor<any, any> | typeof import("./protocol/stediRestJsonProtocol").StediRestJsonProtocol;
    protocolSettings: {
        defaultNamespace?: string;
        [setting: string]: unknown;
    };
    apiVersion: string;
    sha256: import("@smithy/types").HashConstructor;
    urlParser: import("@smithy/types").UrlParser;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: Uint8Array | string) => string;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: Uint8Array | string) => string;
    disableHostPrefix: boolean;
    profile?: string;
    logger: import("@smithy/types").Logger;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    customUserAgent?: string | import("@smithy/types").UserAgent;
    retryStrategy?: import("@smithy/types").RetryStrategy | import("@smithy/types").RetryStrategyV2;
    endpoint?: ((string | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@smithy/types").EndpointV2 | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>) & (string | import("@smithy/types").Provider<string> | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@smithy/types").EndpointV2 | import("@smithy/types").Provider<import("@smithy/types").EndpointV2>)) | undefined;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@smithy/types").Logger;
    }) => import("@smithy/types").EndpointV2;
    tls?: boolean;
    useDualstackEndpoint?: boolean | import("@smithy/types").Provider<boolean | undefined>;
    useFipsEndpoint?: boolean | import("@smithy/types").Provider<boolean | undefined>;
    serviceConfiguredEndpoint?: never;
    authSchemePreference?: string[] | import("@smithy/types").Provider<string[]>;
    httpAuthSchemes: {
        schemeId: string;
        identityProvider: (ipc: import("@smithy/types").IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | undefined;
        signer: import("@smithy/core").HttpApiKeyAuthSigner;
    }[];
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").StediHttpAuthSchemeProvider;
    apiKey?: import("@smithy/types").ApiKeyIdentity | import("@smithy/types").ApiKeyIdentityProvider;
};
