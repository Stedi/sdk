import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { GetEventDestinationEventInput, GetEventDestinationEventOutput } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventDestinationEventCommand}.
 */
export interface GetEventDestinationEventCommandInput extends GetEventDestinationEventInput {
}
/**
 * @public
 *
 * The output of {@link GetEventDestinationEventCommand}.
 */
export interface GetEventDestinationEventCommandOutput extends GetEventDestinationEventOutput, __MetadataBearer {
}
declare const GetEventDestinationEventCommand_base: {
    new (input: GetEventDestinationEventCommandInput): import("@smithy/core/client").CommandImpl<GetEventDestinationEventCommandInput, GetEventDestinationEventCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    new (input: GetEventDestinationEventCommandInput): import("@smithy/core/client").CommandImpl<GetEventDestinationEventCommandInput, GetEventDestinationEventCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/types").EndpointParameterInstructions;
};
/**
 * Retrieves the details of an existing event by its identifier.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetEventDestinationEventCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetEventDestinationEventCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetEventDestinationEventInput
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new GetEventDestinationEventCommand(input);
 * const response = await client.send(command);
 * // { // GetEventDestinationEventOutput
 * //   id: "STRING_VALUE", // required
 * //   status: "PENDING" || "DELIVERED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   eventType: "STRING_VALUE", // required
 * //   eventPayload: { // EventDestinationsEventPayload Union: only one key present
 * //     v1Event: { // EventDestinationsV1EventPayload
 * //       object: "v1.event", // required
 * //       account: "STRING_VALUE", // required
 * //       environment: "TEST" || "PRODUCTION", // required
 * //       created: new Date("TIMESTAMP"), // required
 * //       resource: { // EventDestinationsEventPayloadResourceRef
 * //         id: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //       id: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       relatedResources: [ // EventDestinationsEventPayloadResourceRefList
 * //         {
 * //           id: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventDestinationEventCommandInput - {@link GetEventDestinationEventCommandInput}
 * @returns {@link GetEventDestinationEventCommandOutput}
 * @see {@link GetEventDestinationEventCommandInput} for command's `input` shape.
 * @see {@link GetEventDestinationEventCommandOutput} for command's `response` shape.
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
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example Get an event
 * ```javascript
 * //
 * const input = {
 *   eventId: "evt_550e8400-e29b-41d4-a716-446655440000"
 * };
 * const command = new GetEventDestinationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2026-02-01T12:00:00Z",
 *   eventPayload: {
 *     v1Event: {
 *       account: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 *       created: "2026-02-01T12:00:00.000Z",
 *       environment: "PRODUCTION",
 *       id: "evt_550e8400-e29b-41d4-a716-446655440000",
 *       object: "v1.event",
 *       resource: {
 *         id: "enr_661f9511-f3ac-52e5-b827-557766551111",
 *         type: "enrollment"
 *       },
 *       type: "enrollment.activated"
 *     }
 *   },
 *   eventType: "enrollment.activated",
 *   id: "evt_550e8400-e29b-41d4-a716-446655440000",
 *   status: "DELIVERED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export declare class GetEventDestinationEventCommand extends GetEventDestinationEventCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetEventDestinationEventInput;
            output: GetEventDestinationEventOutput;
        };
        sdk: {
            input: GetEventDestinationEventCommandInput;
            output: GetEventDestinationEventCommandOutput;
        };
    };
}
