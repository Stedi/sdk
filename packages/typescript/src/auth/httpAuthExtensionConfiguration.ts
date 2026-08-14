// smithy-typescript generated code
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
export const getHttpAuthExtensionConfiguration = (
  runtimeConfig: HttpAuthRuntimeConfig
): HttpAuthExtensionConfiguration => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  let _apiKey = runtimeConfig.apiKey;
  return {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes(): HttpAuthScheme[] {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: StediHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): StediHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
    setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void {
      _apiKey = apiKey;
    },
    apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined {
      return _apiKey;
    },
  };
};

/**
 * @internal
 */
export const resolveHttpAuthRuntimeConfig = (config: HttpAuthExtensionConfiguration): HttpAuthRuntimeConfig => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    apiKey: config.apiKey(),
  };
};
