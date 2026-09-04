import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { ListEventDestinationsInput, ListEventDestinationsOutput } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventDestinationsCommand}.
 */
export interface ListEventDestinationsCommandInput extends ListEventDestinationsInput {
}
/**
 * @public
 *
 * The output of {@link ListEventDestinationsCommand}.
 */
export interface ListEventDestinationsCommandOutput extends ListEventDestinationsOutput, __MetadataBearer {
}
declare const ListEventDestinationsCommand_base: {
    new (input: ListEventDestinationsCommandInput): import("@smithy/core/client").CommandImpl<ListEventDestinationsCommandInput, ListEventDestinationsCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    new (...[input]: [] | [ListEventDestinationsCommandInput]): import("@smithy/core/client").CommandImpl<ListEventDestinationsCommandInput, ListEventDestinationsCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/types").EndpointParameterInstructions;
};
/**
 * Lists all destinations configured for your account. Results are paginated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, ListEventDestinationsCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, ListEventDestinationsCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // ListEventDestinationsInput
 *   pageSize: Number("int"),
 *   pageToken: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
 *   eventType: "STRING_VALUE",
 * };
 * const command = new ListEventDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventDestinationsOutput
 * //   nextPageToken: "STRING_VALUE",
 * //   items: [ // EventDestinationsDestinationSummaryList // required
 * //     { // EventDestinationsDestinationSummary
 * //       id: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "ENABLED" || "DISABLED", // required
 * //       lastDeliveryTime: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       eventTypes: [ // EventDestinationsEventTypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       destinationUrl: "STRING_VALUE", // required
 * //       concurrencyLimit: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventDestinationsCommandInput - {@link ListEventDestinationsCommandInput}
 * @returns {@link ListEventDestinationsCommandOutput}
 * @see {@link ListEventDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListEventDestinationsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  The caller has exceeded a rate limit. Retry with backoff.
 *
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example List destinations
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListEventDestinationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-02-01T12:00:00Z",
 *       description: "Receives enrollment notifications",
 *       destinationUrl: "https://example.com/webhooks",
 *       eventTypes: [
 *         "enrollment.activated"
 *       ],
 *       id: "dst_550e8400-e29b-41d4-a716-446655440000",
 *       lastDeliveryTime: "2026-02-01T12:00:01Z",
 *       name: "My Destination",
 *       status: "ENABLED",
 *       updatedAt: "2026-02-01T12:00:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export declare class ListEventDestinationsCommand extends ListEventDestinationsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListEventDestinationsInput;
            output: ListEventDestinationsOutput;
        };
        sdk: {
            input: ListEventDestinationsCommandInput;
            output: ListEventDestinationsCommandOutput;
        };
    };
}
