// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetEventDestinationSecretInput, GetEventDestinationSecretOutput } from "../models/models_0";
import { GetEventDestinationSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventDestinationSecretCommand}.
 */
export interface GetEventDestinationSecretCommandInput extends GetEventDestinationSecretInput {}
/**
 * @public
 *
 * The output of {@link GetEventDestinationSecretCommand}.
 */
export interface GetEventDestinationSecretCommandOutput extends GetEventDestinationSecretOutput, __MetadataBearer {}

/**
 * Retrieves the current signing secret for a destination. Use this secret to verify the authenticity of event payloads.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetEventDestinationSecretCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetEventDestinationSecretCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetEventDestinationSecretInput
 *   destinationId: "STRING_VALUE", // required
 * };
 * const command = new GetEventDestinationSecretCommand(input);
 * const response = await client.send(command);
 * // { // GetEventDestinationSecretOutput
 * //   signingSecret: "STRING_VALUE", // required
 * //   previousSecretExpiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEventDestinationSecretCommandInput - {@link GetEventDestinationSecretCommandInput}
 * @returns {@link GetEventDestinationSecretCommandOutput}
 * @see {@link GetEventDestinationSecretCommandInput} for command's `input` shape.
 * @see {@link GetEventDestinationSecretCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  The request credentials are missing or not valid.
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
 * @example Get destination secret
 * ```javascript
 * //
 * const input = {
 *   destinationId: "dst_550e8400-e29b-41d4-a716-446655440000"
 * };
 * const command = new GetEventDestinationSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   signingSecret: "whsec_YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEventDestinationSecretCommand extends command<GetEventDestinationSecretCommandInput, GetEventDestinationSecretCommandOutput>(
  _ep1,
  _mw0,
  "GetEventDestinationSecret",
  GetEventDestinationSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventDestinationSecretInput;
      output: GetEventDestinationSecretOutput;
    };
    sdk: {
      input: GetEventDestinationSecretCommandInput;
      output: GetEventDestinationSecretCommandOutput;
    };
  };
}
