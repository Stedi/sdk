// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventDestinationInput, CreateEventDestinationOutput } from "../models/models_0";
import { CreateEventDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventDestinationCommand}.
 */
export interface CreateEventDestinationCommandInput extends CreateEventDestinationInput {}
/**
 * @public
 *
 * The output of {@link CreateEventDestinationCommand}.
 */
export interface CreateEventDestinationCommandOutput extends CreateEventDestinationOutput, __MetadataBearer {}

/**
 * Creates an event destination. Returns destination details and a signing secret for verifying event payloads.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, CreateEventDestinationCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, CreateEventDestinationCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // CreateEventDestinationInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   eventTypes: [ // EventDestinationsEventTypeList // required
 *     "STRING_VALUE",
 *   ],
 *   destinationUrl: "STRING_VALUE", // required
 *   concurrencyLimit: Number("int"),
 *   status: "ENABLED" || "DISABLED",
 *   idempotencyKey: "STRING_VALUE",
 * };
 * const command = new CreateEventDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventDestinationOutput
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
 * //   signingSecret: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEventDestinationCommandInput - {@link CreateEventDestinationCommandInput}
 * @returns {@link CreateEventDestinationCommandOutput}
 * @see {@link CreateEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link EventDestinationsLimitExceededException} (client fault)
 *  The account has reached its maximum number of event destinations. Delete an existing destination or request a limit increase before creating another. Not retryable — the caller must change account state before retrying.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  The caller has exceeded a rate limit. Retry with backoff.
 *
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example Create a destination
 * ```javascript
 * //
 * const input = {
 *   destinationUrl: "https://example.com/webhooks",
 *   eventTypes: [
 *     "enrollment.activated"
 *   ],
 *   idempotencyKey: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 *   name: "My Destination",
 *   status: "ENABLED"
 * };
 * const command = new CreateEventDestinationCommand(input);
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
 *   signingSecret: "whsec_YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY=",
 *   status: "ENABLED",
 *   updatedAt: "2026-02-01T12:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateEventDestinationCommand extends command<CreateEventDestinationCommandInput, CreateEventDestinationCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventDestination",
  CreateEventDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventDestinationInput;
      output: CreateEventDestinationOutput;
    };
    sdk: {
      input: CreateEventDestinationCommandInput;
      output: CreateEventDestinationCommandOutput;
    };
  };
}
