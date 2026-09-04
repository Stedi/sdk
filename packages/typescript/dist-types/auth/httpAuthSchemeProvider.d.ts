import { type ApiKeyIdentity, type ApiKeyIdentityProvider, type HandlerExecutionContext, type HttpAuthScheme, type HttpAuthSchemeParameters, type HttpAuthSchemeParametersProvider, type HttpAuthSchemeProvider, type Provider, TokenIdentity, TokenIdentityProvider } from "@smithy/types";
import type { StediClientResolvedConfig } from "../StediClient";
/**
 * @internal
 */
export interface StediHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
}
/**
 * @internal
 */
export interface StediHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<StediClientResolvedConfig, HandlerExecutionContext, StediHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultStediHttpAuthSchemeParametersProvider: (config: StediClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<StediHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface StediHttpAuthSchemeProvider extends HttpAuthSchemeProvider<StediHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultStediHttpAuthSchemeProvider: StediHttpAuthSchemeProvider;
/**
 * @public
 */
export interface HttpAuthSchemeInputConfig {
    /**
     * A comma-separated list of case-sensitive auth scheme names.
     * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
     * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
     * @public
     */
    authSchemePreference?: string[] | Provider<string[]>;
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: StediHttpAuthSchemeProvider;
    /**
     * The API key to use when making requests.
     */
    apiKey?: ApiKeyIdentity | ApiKeyIdentityProvider;
    /**
     * The token used to authenticate requests.
     */
    token?: TokenIdentity | TokenIdentityProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig {
    /**
     * A comma-separated list of case-sensitive auth scheme names.
     * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
     * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
     * @public
     */
    readonly authSchemePreference: Provider<string[]>;
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: StediHttpAuthSchemeProvider;
    /**
     * The API key to use when making requests.
     */
    readonly apiKey?: ApiKeyIdentityProvider;
    /**
     * The token used to authenticate requests.
     */
    readonly token?: TokenIdentityProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig) => T & HttpAuthSchemeResolvedConfig;
