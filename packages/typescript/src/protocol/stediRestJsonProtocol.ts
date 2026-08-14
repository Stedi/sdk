// Request-ID metadata — generated, do not edit.
// Surfaces the Stedi-Request-Id response header as `$metadata.requestId`, on success and failure.
import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import type { HttpResponse } from "@smithy/protocol-http";
import type {
  HandlerExecutionContext,
  MetadataBearer,
  OperationSchema,
  ResponseMetadata,
  SerdeFunctions,
} from "@smithy/types";

/**
 * Preferred first. The AWS names are read here rather than left to `super`, whose raw lowercase
 * lookups only work on the success path, where `HttpBindingProtocol` has normalised the headers.
 */
const REQUEST_ID_HEADERS = [
  "stedi-request-id",
  "x-amzn-requestid",
  "x-amzn-request-id",
  "x-amz-request-id",
];

/** Case-insensitive header read. */
function readHeader(headers: Record<string, string | undefined>, name: string): string | undefined {
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

/**
 * An empty header value carries no ID, so it must not short-circuit the chain — nor be reported
 * as `""`, which reads like a captured value but correlates to nothing.
 */
function readRequestId(headers: Record<string, string | undefined>): string | undefined {
  for (const name of REQUEST_ID_HEADERS) {
    const value = readHeader(headers, name);
    if (value) {
      return value;
    }
  }
  return undefined;
}

export class StediRestJsonProtocol extends AwsRestJsonProtocol {
  /** `HttpProtocol` calls this on both the success and the error path. */
  protected deserializeMetadata(response: HttpResponse): ResponseMetadata {
    const metadata = super.deserializeMetadata(response);
    const requestId = readRequestId(response.headers) ?? metadata.requestId;
    return { ...metadata, requestId: requestId || undefined };
  }

  /**
   * The body is parsed before it reaches `handleError`, so a body that is not valid JSON throws
   * before any metadata is attached. Attach it on the way out.
   */
  async deserializeResponse<Output extends MetadataBearer>(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: HttpResponse,
  ): Promise<Output> {
    try {
      return await super.deserializeResponse<Output>(operationSchema, context, response);
    } catch (error) {
      const bearer = error as Partial<MetadataBearer>;
      bearer.$metadata = { ...this.deserializeMetadata(response), ...bearer.$metadata };
      if (bearer.$metadata.requestId === undefined) {
        bearer.$metadata.requestId = readRequestId(response.headers);
      }
      throw error;
    }
  }
}
