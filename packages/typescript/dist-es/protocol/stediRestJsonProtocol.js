import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
const REQUEST_ID_HEADERS = [
    "stedi-request-id",
    "x-amzn-requestid",
    "x-amzn-request-id",
    "x-amz-request-id",
];
function readHeader(headers, name) {
    const lowercaseName = name.toLowerCase();
    const direct = headers[lowercaseName];
    if (direct !== undefined) {
        return direct;
    }
    for (const key of Object.keys(headers)) {
        if (key.toLowerCase() === lowercaseName) {
            return headers[key];
        }
    }
    return undefined;
}
function readRequestId(headers) {
    for (const name of REQUEST_ID_HEADERS) {
        const value = readHeader(headers, name);
        if (value) {
            return value;
        }
    }
    return undefined;
}
export class StediRestJsonProtocol extends AwsRestJsonProtocol {
    deserializeMetadata(response) {
        const metadata = super.deserializeMetadata(response);
        const requestId = readRequestId(response.headers) ?? metadata.requestId;
        return { ...metadata, requestId: requestId || undefined };
    }
    async deserializeResponse(operationSchema, context, response) {
        try {
            return await super.deserializeResponse(operationSchema, context, response);
        }
        catch (error) {
            const bearer = error;
            bearer.$metadata = { ...this.deserializeMetadata(response), ...bearer.$metadata };
            if (bearer.$metadata.requestId === undefined) {
                bearer.$metadata.requestId = readRequestId(response.headers);
            }
            throw error;
        }
    }
}
