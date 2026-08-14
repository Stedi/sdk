import type { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";
/**
 * @public
 */
export interface ClientInputEndpointParameters {
    endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}
/**
 * @public
 */
export type ClientResolvedEndpointParameters = Omit<ClientInputEndpointParameters, "endpoint"> & {
    defaultSigningName: string;
};
/**
 * @internal
 */
export declare const resolveClientEndpointParameters: <T>(options: T & ClientInputEndpointParameters) => T & ClientResolvedEndpointParameters;
/**
 * @internal
 */
export declare const commonParams: {
    readonly Endpoint: {
        readonly type: "builtInParams";
        readonly name: "endpoint";
    };
};
/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
    Endpoint?: string | undefined;
    ServiceComponent: string;
}
