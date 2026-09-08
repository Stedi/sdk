// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { GetClaimInput, GetClaimOutput } from "../models/models_0";
import { GetClaim$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClaimCommand}.
 */
export interface GetClaimCommandInput extends GetClaimInput {}
/**
 * @public
 *
 * The output of {@link GetClaimCommand}.
 */
export interface GetClaimCommandOutput extends GetClaimOutput, __MetadataBearer {}

/**
 * Retrieve summary information for a claim, including current processing status and key details from its most recent submission
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetClaimCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetClaimCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetClaimInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetClaimCommand(input);
 * const response = await client.send(command);
 * // { // GetClaimOutput
 * //   id: "STRING_VALUE", // required
 * //   stediPayerId: "STRING_VALUE",
 * //   patientControlNumber: "STRING_VALUE", // required
 * //   patientName: { // ClaimPatientName
 * //     firstName: "STRING_VALUE",
 * //     middleName: "STRING_VALUE",
 * //     lastName: "STRING_VALUE",
 * //     suffix: "STRING_VALUE",
 * //   },
 * //   status: "SUBMITTED" || "RECEIVED" || "ACCEPTED" || "REJECTED" || "PROCESSED" || "DENIED" || "UNKNOWN", // required
 * //   statusReportedBy: "PAYER" || "CLEARINGHOUSE", // required
 * //   type: "DENTAL" || "INSTITUTIONAL" || "PROFESSIONAL", // required
 * //   totalClaimChargeAmount: "STRING_VALUE", // required
 * //   totalClaimPaidAmount: "STRING_VALUE",
 * //   datesOfService: { // ClaimDateRange
 * //     start: "STRING_VALUE", // required
 * //     end: "STRING_VALUE",
 * //   },
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetClaimCommandInput - {@link GetClaimCommandInput}
 * @returns {@link GetClaimCommandOutput}
 * @see {@link GetClaimCommandInput} for command's `input` shape.
 * @see {@link GetClaimCommandOutput} for command's `response` shape.
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
 * @example Retrieve a claim
 * ```javascript
 * //
 * const input = {
 *   id: "clm_01K6XFP3TZ8RA9X84963NMW40N"
 * };
 * const command = new GetClaimCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   datesOfService: {
 *     start: "2026-01-05"
 *   },
 *   id: "clm_01K6XFP3TZ8RA9X84963NMW40N",
 *   patientControlNumber: "123456",
 *   patientName: {
 *     firstName: "John",
 *     lastName: "Doe",
 *     middleName: "Michael",
 *     suffix: "Jr"
 *   },
 *   status: "PROCESSED",
 *   statusReportedBy: "PAYER",
 *   stediPayerId: "ABCDE",
 *   submittedAt: "2026-01-16T10:00:00Z",
 *   totalClaimChargeAmount: "832.00",
 *   totalClaimPaidAmount: "200.00",
 *   type: "PROFESSIONAL"
 * }
 * *\/
 * ```
 *
 * @internal
 */
export class GetClaimCommand extends command<GetClaimCommandInput, GetClaimCommandOutput>(
  _ep2,
  _mw0,
  "GetClaim",
  GetClaim$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClaimInput;
      output: GetClaimOutput;
    };
    sdk: {
      input: GetClaimCommandInput;
      output: GetClaimCommandOutput;
    };
  };
}
