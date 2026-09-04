// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventDestinationEventsInput, ListEventDestinationEventsOutput } from "../models/models_0";
import { ListEventDestinationEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventDestinationEventsCommand}.
 */
export interface ListEventDestinationEventsCommandInput extends ListEventDestinationEventsInput {}
/**
 * @public
 *
 * The output of {@link ListEventDestinationEventsCommand}.
 */
export interface ListEventDestinationEventsCommandOutput extends ListEventDestinationEventsOutput, __MetadataBearer {}

/**
 * Lists all events for your account. Results are paginated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, ListEventDestinationEventsCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, ListEventDestinationEventsCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // ListEventDestinationEventsInput
 *   pageSize: Number("int"),
 *   pageToken: "STRING_VALUE",
 *   eventId: "STRING_VALUE",
 *   status: [ // EventDestinationsEventStatusList
 *     "PENDING" || "DELIVERED" || "FAILED",
 *   ],
 *   eventType: "STRING_VALUE",
 *   created: [ // EventDestinationsTimestampFilter
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListEventDestinationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventDestinationEventsOutput
 * //   nextPageToken: "STRING_VALUE",
 * //   items: [ // EventDestinationsEventSummaryList // required
 * //     { // EventDestinationsEventSummary
 * //       id: "STRING_VALUE", // required
 * //       status: "PENDING" || "DELIVERED" || "FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       eventType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventDestinationEventsCommandInput - {@link ListEventDestinationEventsCommandInput}
 * @returns {@link ListEventDestinationEventsCommandOutput}
 * @see {@link ListEventDestinationEventsCommandInput} for command's `input` shape.
 * @see {@link ListEventDestinationEventsCommandOutput} for command's `response` shape.
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
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example List events
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListEventDestinationEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-02-01T12:00:00Z",
 *       eventType: "enrollment.activated",
 *       id: "evt_550e8400-e29b-41d4-a716-446655440000",
 *       status: "DELIVERED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEventDestinationEventsCommand extends command<ListEventDestinationEventsCommandInput, ListEventDestinationEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListEventDestinationEvents",
  ListEventDestinationEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventDestinationEventsInput;
      output: ListEventDestinationEventsOutput;
    };
    sdk: {
      input: ListEventDestinationEventsCommandInput;
      output: ListEventDestinationEventsCommandOutput;
    };
  };
}
