// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventDestinationInput, UpdateEventDestinationOutput } from "../models/models_0";
import { UpdateEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandInput extends UpdateEventDestinationInput {}
/**
 * @public
 *
 * The output of {@link UpdateEventDestinationCommand}.
 */
export interface UpdateEventDestinationCommandOutput extends UpdateEventDestinationOutput, __MetadataBearer {}

/**
 * Updates an existing destination configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, UpdateEventDestinationCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, UpdateEventDestinationCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // UpdateEventDestinationInput
 *   destinationId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   eventTypes: [ // EventDestinationsEventTypeList
 *     "STRING_VALUE",
 *   ],
 *   destinationUrl: "STRING_VALUE",
 *   concurrencyLimit: Number("int"),
 *   status: "ENABLED" || "DISABLED",
 *   idempotencyKey: "STRING_VALUE",
 * };
 * const command = new UpdateEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventDestinationOutput
 * //   id: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   lastDeliveryTime: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   eventTypes: [ // EventDestinationsEventTypeList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   destinationUrl: "STRING_VALUE", // required
 * //   concurrencyLimit: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateEventDestinationCommandInput - {@link UpdateEventDestinationCommandInput}
 * @returns {@link UpdateEventDestinationCommandOutput}
 * @see {@link UpdateEventDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  The request credentials are missing or not valid.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentTooLargeException} (client fault)
 *  The request payload is larger than the service accepts. Send less in one request.
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
 * @example Update a destination
 * ```javascript
 * //
 * const input = {
 *   destinationId: "dst_550e8400-e29b-41d4-a716-446655440000",
 *   idempotencyKey: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
 *   name: "Updated Destination Name",
 *   status: "DISABLED"
 * };
 * const command = new UpdateEventDestinationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2026-02-01T12:00:00Z",
 *   description: "",
 *   destinationUrl: "https://example.com/webhooks",
 *   eventTypes: [
 *     "enrollment.activated"
 *   ],
 *   id: "dst_550e8400-e29b-41d4-a716-446655440000",
 *   name: "Updated Destination Name",
 *   status: "DISABLED",
 *   updatedAt: "2026-02-02T08:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateEventDestinationCommand extends command<UpdateEventDestinationCommandInput, UpdateEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventDestination",
  UpdateEventDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventDestinationInput;
      output: UpdateEventDestinationOutput;
    };
    sdk: {
      input: UpdateEventDestinationCommandInput;
      output: UpdateEventDestinationCommandOutput;
    };
  };
}
