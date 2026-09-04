// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventDestinationInput, GetEventDestinationOutput } from "../models/models_0";
import { GetEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventDestinationCommand}.
 */
export interface GetEventDestinationCommandInput extends GetEventDestinationInput {}
/**
 * @public
 *
 * The output of {@link GetEventDestinationCommand}.
 */
export interface GetEventDestinationCommandOutput extends GetEventDestinationOutput, __MetadataBearer {}

/**
 * Retrieves details for an existing event destination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetEventDestinationCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetEventDestinationCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetEventDestinationInput
 *   destinationId: "STRING_VALUE", // required
 * };
 * const command = new GetEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventDestinationOutput
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
 * @param GetEventDestinationCommandInput - {@link GetEventDestinationCommandInput}
 * @returns {@link GetEventDestinationCommandOutput}
 * @see {@link GetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link GetEventDestinationCommandOutput} for command's `response` shape.
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
 * @example Get a destination
 * ```javascript
 * //
 * const input = {
 *   destinationId: "dst_550e8400-e29b-41d4-a716-446655440000"
 * };
 * const command = new GetEventDestinationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2026-02-01T12:00:00Z",
 *   description: "Receives enrollment notifications",
 *   destinationUrl: "https://example.com/webhooks",
 *   eventTypes: [
 *     "enrollment.activated"
 *   ],
 *   id: "dst_550e8400-e29b-41d4-a716-446655440000",
 *   name: "My Destination",
 *   status: "ENABLED",
 *   updatedAt: "2026-02-01T12:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEventDestinationCommand extends command<GetEventDestinationCommandInput, GetEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetEventDestination",
  GetEventDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventDestinationInput;
      output: GetEventDestinationOutput;
    };
    sdk: {
      input: GetEventDestinationCommandInput;
      output: GetEventDestinationCommandOutput;
    };
  };
}
