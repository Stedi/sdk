import { HttpApiKeyAuthSigner } from "@smithy/core";
import type { IdentityProviderConfig } from "@smithy/types";
import { StediRestJsonProtocol } from "./protocol/stediRestJsonProtocol";
import type { StediClientConfig } from "./StediClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: StediClientConfig) => {
    apiVersion: string;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: (_input: Uint8Array | string) => string;
    disableHostPrefix: boolean;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@smithy/types").Logger;
    }) => import("@smithy/types").EndpointV2;
    extensions: import("./runtimeExtensions").RuntimeExtension[];
    httpAuthSchemeProvider: import("./auth/httpAuthSchemeProvider").StediHttpAuthSchemeProvider;
    httpAuthSchemes: {
        schemeId: string;
        identityProvider: (ipc: IdentityProviderConfig) => import("@smithy/types").IdentityProvider<import("@smithy/types").Identity> | undefined;
        signer: HttpApiKeyAuthSigner;
    }[];
    logger: import("@smithy/types").Logger;
    protocol: import("@smithy/types").ClientProtocol<any, any> | import("@smithy/types").ClientProtocolCtor<any, any> | typeof StediRestJsonProtocol;
    protocolSettings: {
        [setting: string]: unknown;
        defaultNamespace?: string;
    };
    sha256: import("@smithy/types").HashConstructor;
    urlParser: import("@smithy/types").UrlParser;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: (input: Uint8Array | string) => string;
};
