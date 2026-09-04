// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListClaimsInput, ListClaimsOutput } from "../models/models_0";
import { ListClaims$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClaimsCommand}.
 */
export interface ListClaimsCommandInput extends ListClaimsInput {}
/**
 * @public
 *
 * The output of {@link ListClaimsCommand}.
 */
export interface ListClaimsCommandOutput extends ListClaimsOutput, __MetadataBearer {}

/**
 * Retrieve a paginated list of claim records, newest first. Filter by status, patient control numbers, or submission time
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, ListClaimsCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, ListClaimsCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // ListClaimsInput
 *   pageSize: Number("int"),
 *   pageToken: "STRING_VALUE",
 *   status: [ // ClaimStatusList
 *     "SUBMITTED" || "RECEIVED" || "ACCEPTED" || "REJECTED" || "PROCESSED" || "DENIED" || "UNKNOWN",
 *   ],
 *   patientControlNumbers: [ // ClaimPatientControlNumbersList
 *     "STRING_VALUE",
 *   ],
 *   submittedAfter: new Date("TIMESTAMP"),
 *   submittedBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListClaimsCommand(input);
 * const response = await client.send(command);
 * // { // ListClaimsOutput
 * //   nextPageToken: "STRING_VALUE",
 * //   items: [ // ClaimSummaries // required
 * //     { // ClaimSummary
 * //       id: "STRING_VALUE", // required
 * //       stediPayerId: "STRING_VALUE",
 * //       patientControlNumber: "STRING_VALUE", // required
 * //       patientName: { // ClaimPatientName
 * //         firstName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         suffix: "STRING_VALUE",
 * //       },
 * //       status: "SUBMITTED" || "RECEIVED" || "ACCEPTED" || "REJECTED" || "PROCESSED" || "DENIED" || "UNKNOWN", // required
 * //       statusReportedBy: "PAYER" || "CLEARINGHOUSE", // required
 * //       type: "DENTAL" || "INSTITUTIONAL" || "PROFESSIONAL", // required
 * //       totalClaimChargeAmount: "STRING_VALUE", // required
 * //       totalClaimPaidAmount: "STRING_VALUE",
 * //       datesOfService: { // ClaimDateRange
 * //         start: "STRING_VALUE", // required
 * //         end: "STRING_VALUE",
 * //       },
 * //       submittedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClaimsCommandInput - {@link ListClaimsCommandInput}
 * @returns {@link ListClaimsCommandOutput}
 * @see {@link ListClaimsCommandInput} for command's `input` shape.
 * @see {@link ListClaimsCommandOutput} for command's `response` shape.
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
 * @example List claims
 * ```javascript
 * //
 * const input = {
 *   pageSize: 100
 * };
 * const command = new ListClaimsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       datesOfService: {
 *         start: "2026-01-05"
 *       },
 *       id: "clm_01K6XFP3TZ8RA9X84963NMW40N",
 *       patientControlNumber: "123456",
 *       patientName: {
 *         firstName: "John",
 *         lastName: "Doe",
 *         middleName: "Michael",
 *         suffix: "Jr"
 *       },
 *       status: "PROCESSED",
 *       statusReportedBy: "PAYER",
 *       stediPayerId: "ABCDE",
 *       submittedAt: "2026-01-16T10:00:00Z",
 *       totalClaimChargeAmount: "832.00",
 *       totalClaimPaidAmount: "200.00",
 *       type: "PROFESSIONAL"
 *     },
 *     {
 *       id: "clm_01K6XFP3TZ8RA9X84963NMW41P",
 *       patientControlNumber: "123457",
 *       patientName: {
 *         firstName: "Jane",
 *         lastName: "Doe"
 *       },
 *       status: "SUBMITTED",
 *       statusReportedBy: "CLEARINGHOUSE",
 *       stediPayerId: "ABCDE",
 *       submittedAt: "2026-01-06T10:00:00Z",
 *       totalClaimChargeAmount: "125.00",
 *       type: "PROFESSIONAL"
 *     }
 *   ],
 *   nextPageToken: "eyJsYXN0SWQiOiIwMUs2WEZQMyJ9"
 * }
 * *\/
 * ```
 *
 * @internal
 */
export class ListClaimsCommand extends command<ListClaimsCommandInput, ListClaimsCommandOutput>(
  _ep1,
  _mw0,
  "ListClaims",
  ListClaims$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClaimsInput;
      output: ListClaimsOutput;
    };
    sdk: {
      input: ListClaimsCommandInput;
      output: ListClaimsCommandOutput;
    };
  };
}
