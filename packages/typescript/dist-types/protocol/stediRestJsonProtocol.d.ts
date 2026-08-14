import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import type { HttpResponse } from "@smithy/protocol-http";
import type { HandlerExecutionContext, MetadataBearer, OperationSchema, ResponseMetadata, SerdeFunctions } from "@smithy/types";
export declare class StediRestJsonProtocol extends AwsRestJsonProtocol {
    /** `HttpProtocol` calls this on both the success and the error path. */
    protected deserializeMetadata(response: HttpResponse): ResponseMetadata;
    /**
     * The body is parsed before it reaches `handleError`, so a body that is not valid JSON throws
     * before any metadata is attached. Attach it on the way out.
     */
    deserializeResponse<Output extends MetadataBearer>(operationSchema: OperationSchema, context: HandlerExecutionContext & SerdeFunctions, response: HttpResponse): Promise<Output>;
}
