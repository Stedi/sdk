// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventDestinationInput, DeleteEventDestinationOutput } from "../models/models_0";
import { DeleteEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventDestinationCommand}.
 */
export interface DeleteEventDestinationCommandInput extends DeleteEventDestinationInput {}
/**
 * @public
 *
 * The output of {@link DeleteEventDestinationCommand}.
 */
export interface DeleteEventDestinationCommandOutput extends DeleteEventDestinationOutput, __MetadataBearer {}

/**
 * Deletes an existing destination. This action is irreversible. Deleting a destination that is already deleted succeeds with the same response (idempotent).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, DeleteEventDestinationCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, DeleteEventDestinationCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // DeleteEventDestinationInput
 *   destinationId: "STRING_VALUE", // required
 *   idempotencyKey: "STRING_VALUE",
 * };
 * const command = new DeleteEventDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventDestinationCommandInput - {@link DeleteEventDestinationCommandInput}
 * @returns {@link DeleteEventDestinationCommandOutput}
 * @see {@link DeleteEventDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventDestinationCommandOutput} for command's `response` shape.
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
 * @example Delete a destination
 * ```javascript
 * //
 * const input = {
 *   destinationId: "dst_550e8400-e29b-41d4-a716-446655440000",
 *   idempotencyKey: "c3d4e5f6-a7b8-9012-cdef-123456789012"
 * };
 * const command = new DeleteEventDestinationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteEventDestinationCommand extends command<DeleteEventDestinationCommandInput, DeleteEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventDestination",
  DeleteEventDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventDestinationInput;
      output: {};
    };
    sdk: {
      input: DeleteEventDestinationCommandInput;
      output: DeleteEventDestinationCommandOutput;
    };
  };
}
