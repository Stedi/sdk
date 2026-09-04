import { type ApiKeyIdentity, type ApiKeyIdentityProvider, type HttpAuthScheme, TokenIdentity, TokenIdentityProvider } from "@smithy/types";
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
    setToken(token: TokenIdentity | TokenIdentityProvider): void;
    token(): TokenIdentity | TokenIdentityProvider | undefined;
}
/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
    httpAuthSchemes: HttpAuthScheme[];
    httpAuthSchemeProvider: StediHttpAuthSchemeProvider;
    apiKey: ApiKeyIdentity | ApiKeyIdentityProvider;
    token: TokenIdentity | TokenIdentityProvider;
}>;
/**
 * @internal
 */
export declare const getHttpAuthExtensionConfiguration: (runtimeConfig: HttpAuthRuntimeConfig) => HttpAuthExtensionConfiguration;
/**
 * @internal
 */
export declare const resolveHttpAuthRuntimeConfig: (config: HttpAuthExtensionConfiguration) => HttpAuthRuntimeConfig;
