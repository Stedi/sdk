import type { ApiKeyIdentity, ApiKeyIdentityProvider, HttpAuthScheme } from "@smithy/types";
import type { StediHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";
/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
    httpAuthSchemes(): HttpAuthScheme[];
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: StediHttpAuthSchemeProvider): void;
    httpAuthSchemeProvider(): StediHttpAuthSchemeProvider;
    setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void;
    apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined;
}
/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
    httpAuthSchemes: HttpAuthScheme[];
    httpAuthSchemeProvider: StediHttpAuthSchemeProvider;
    apiKey: ApiKeyIdentity | ApiKeyIdentityProvider;
}>;
/**
 * @internal
 */
export declare const getHttpAuthExtensionConfiguration: (runtimeConfig: HttpAuthRuntimeConfig) => HttpAuthExtensionConfiguration;
/**
 * @internal
 */
export declare const resolveHttpAuthRuntimeConfig: (config: HttpAuthExtensionConfiguration) => HttpAuthRuntimeConfig;
