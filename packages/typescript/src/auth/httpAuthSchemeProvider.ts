// smithy-typescript generated code
import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import { getSmithyContext, normalizeProvider } from "@smithy/core/client";
import {
  type ApiKeyIdentity,
  type ApiKeyIdentityProvider,
  type HandlerExecutionContext,
  type HttpAuthOption,
  type HttpAuthScheme,
  type HttpAuthSchemeParameters,
  type HttpAuthSchemeParametersProvider,
  type HttpAuthSchemeProvider,
  type Provider,
  HttpApiKeyAuthLocation,
} from "@smithy/types";

import type { StediClientResolvedConfig } from "../StediClient";

/**
 * @internal
 */
export interface StediHttpAuthSchemeParameters extends HttpAuthSchemeParameters {}

/**
 * @internal
 */
export interface StediHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    StediClientResolvedConfig,
    HandlerExecutionContext,
    StediHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultStediHttpAuthSchemeParametersProvider = async (
  config: StediClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<StediHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters: StediHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpApiKeyAuth",
    signingProperties: {
      name: "Authorization",
      in: HttpApiKeyAuthLocation.HEADER,
      scheme: "Key",
    },
  };
}

/**
 * @internal
 */
export interface StediHttpAuthSchemeProvider extends HttpAuthSchemeProvider<StediHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultStediHttpAuthSchemeProvider: StediHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
    }
  }
  return options;
};

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
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig
): T & HttpAuthSchemeResolvedConfig => {
  const apiKey = memoizeIdentityProvider(config.apiKey, isIdentityExpired, doesIdentityRequireRefresh);
  return Object.assign(config, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
    apiKey,
  }) as T & HttpAuthSchemeResolvedConfig;
};
