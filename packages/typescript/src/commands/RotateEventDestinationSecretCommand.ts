// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { RotateEventDestinationSecretInput, RotateEventDestinationSecretOutput } from "../models/models_0";
import { RotateEventDestinationSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RotateEventDestinationSecretCommand}.
 */
export interface RotateEventDestinationSecretCommandInput extends RotateEventDestinationSecretInput {}
/**
 * @public
 *
 * The output of {@link RotateEventDestinationSecretCommand}.
 */
export interface RotateEventDestinationSecretCommandOutput extends RotateEventDestinationSecretOutput, __MetadataBearer {}

/**
 * Rotates the signing secret for a destination. The previous secret remains valid for the period specified by `previousSecretExpiryHours` (or `0` for immediate invalidation) to allow for a graceful transition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, RotateEventDestinationSecretCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, RotateEventDestinationSecretCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // RotateEventDestinationSecretInput
 *   destinationId: "STRING_VALUE", // required
 *   previousSecretExpiryHours: Number("int"),
 *   idempotencyKey: "STRING_VALUE",
 * };
 * const command = new RotateEventDestinationSecretCommand(input);
 * const response = await client.send(command);
 * // { // RotateEventDestinationSecretOutput
 * //   signingSecret: "STRING_VALUE", // required
 * //   previousSecretExpiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RotateEventDestinationSecretCommandInput - {@link RotateEventDestinationSecretCommandInput}
 * @returns {@link RotateEventDestinationSecretCommandOutput}
 * @see {@link RotateEventDestinationSecretCommandInput} for command's `input` shape.
 * @see {@link RotateEventDestinationSecretCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  The request credentials are missing or not valid.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The caller is authenticated but lacks permission for this resource or action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service failed unexpectedly. Retry with backoff.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  The request is not valid. Fix the request before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The caller has exceeded a rate limit. Retry with backoff.
 *
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example Rotate destination secret
 * ```javascript
 * //
 * const input = {
 *   destinationId: "dst_550e8400-e29b-41d4-a716-446655440000",
 *   idempotencyKey: "d4e5f6a7-b8c9-0123-defa-234567890123",
 *   previousSecretExpiryHours: 24
 * };
 * const command = new RotateEventDestinationSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   previousSecretExpiresAt: "2025-01-01T00:00:00Z",
 *   signingSecret: "whsec_bmV3c2VjcmV0Zm9ycm90YXRpb25leGFtcGxlMTIzNA=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RotateEventDestinationSecretCommand extends command<RotateEventDestinationSecretCommandInput, RotateEventDestinationSecretCommandOutput>(
  _ep1,
  _mw0,
  "RotateEventDestinationSecret",
  RotateEventDestinationSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateEventDestinationSecretInput;
      output: RotateEventDestinationSecretOutput;
    };
    sdk: {
      input: RotateEventDestinationSecretCommandInput;
      output: RotateEventDestinationSecretCommandOutput;
    };
  };
}
