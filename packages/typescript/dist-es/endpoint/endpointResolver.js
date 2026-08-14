import { decideEndpoint, EndpointCache } from "@smithy/core/endpoints";
import { bdd } from "./bdd";
const cache = new EndpointCache({
    size: 50,
    params: ["Endpoint", "ServiceComponent"],
});
export const defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => decideEndpoint(bdd, {
        endpointParams: endpointParams,
        logger: context.logger,
    }));
};
