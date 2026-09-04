// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetClaimTimelineInput, GetClaimTimelineOutput } from "../models/models_0";
import { GetClaimTimeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClaimTimelineCommand}.
 */
export interface GetClaimTimelineCommandInput extends GetClaimTimelineInput {}
/**
 * @public
 *
 * The output of {@link GetClaimTimelineCommand}.
 */
export interface GetClaimTimelineCommandOutput extends GetClaimTimelineOutput, __MetadataBearer {}

/**
 * Retrieve a paginated list of a claim's timeline entries, newest first. Timeline entries include submissions, acknowledgments, and claim payment information
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetClaimTimelineCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetClaimTimelineCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetClaimTimelineInput
 *   pageSize: Number("int"),
 *   pageToken: "STRING_VALUE",
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetClaimTimelineCommand(input);
 * const response = await client.send(command);
 * // { // GetClaimTimelineOutput
 * //   nextPageToken: "STRING_VALUE",
 * //   items: [ // ClaimTimelineEvents // required
 * //     { // ClaimTimelineEvent Union: only one key present
 * //       professionalClaimSubmission: { // ClaimSubmissionSummary
 * //         id: "STRING_VALUE", // required
 * //         stediPayerId: "STRING_VALUE",
 * //         patientControlNumber: "STRING_VALUE", // required
 * //         patientName: { // ClaimPatientName
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //         totalClaimChargeAmount: "STRING_VALUE", // required
 * //         datesOfService: { // ClaimDateRange
 * //           start: "STRING_VALUE", // required
 * //           end: "STRING_VALUE",
 * //         },
 * //         processedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       dentalClaimSubmission: {
 * //         id: "STRING_VALUE", // required
 * //         stediPayerId: "STRING_VALUE",
 * //         patientControlNumber: "STRING_VALUE", // required
 * //         patientName: {
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //         totalClaimChargeAmount: "STRING_VALUE", // required
 * //         datesOfService: {
 * //           start: "STRING_VALUE", // required
 * //           end: "STRING_VALUE",
 * //         },
 * //         processedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       institutionalClaimSubmission: {
 * //         id: "STRING_VALUE", // required
 * //         stediPayerId: "STRING_VALUE",
 * //         patientControlNumber: "STRING_VALUE", // required
 * //         patientName: {
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //         totalClaimChargeAmount: "STRING_VALUE", // required
 * //         datesOfService: {
 * //           start: "STRING_VALUE", // required
 * //           end: "STRING_VALUE",
 * //         },
 * //         processedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       claimAcknowledgment: { // ClaimAcknowledgmentSummary
 * //         id: "STRING_VALUE", // required
 * //         status: "REJECTED" || "ACCEPTED" || "RECEIVED" || "INVALID", // required
 * //         reportedBy: "PAYER" || "CLEARINGHOUSE", // required
 * //         sourceName: "STRING_VALUE", // required
 * //         processedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       claimPaymentInformation: { // ClaimPaymentInformationSummary
 * //         id: "STRING_VALUE", // required
 * //         statusCode: "PROCESSED_AS_PRIMARY" || "PROCESSED_AS_SECONDARY" || "PROCESSED_AS_TERTIARY" || "DENIED" || "PROCESSED_AS_PRIMARY_FORWARDED_TO_ADDITIONAL_PAYERS" || "PROCESSED_AS_SECONDARY_FORWARDED_TO_ADDITIONAL_PAYERS" || "PROCESSED_AS_TERTIARY_FORWARDED_TO_ADDITIONAL_PAYERS" || "REVERSAL_OF_PREVIOUS_PAYMENT" || "NOT_OUR_CLAIM_FORWARDED_TO_ADDITIONAL_PAYERS" || "PREDETERMINATION_PRICING_ONLY", // required
 * //         totalClaimChargeAmount: "STRING_VALUE", // required
 * //         claimPaymentAmount: "STRING_VALUE", // required
 * //         patientResponsibilityAmount: "STRING_VALUE",
 * //         checkOrEftTraceNumber: "STRING_VALUE",
 * //         processedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetClaimTimelineCommandInput - {@link GetClaimTimelineCommandInput}
 * @returns {@link GetClaimTimelineCommandOutput}
 * @see {@link GetClaimTimelineCommandInput} for command's `input` shape.
 * @see {@link GetClaimTimelineCommandOutput} for command's `response` shape.
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
 * @example Retrieve a claim's timeline
 * ```javascript
 * //
 * const input = {
 *   id: "clm_01K6XFP3TZ8RA9X84963NMW40N",
 *   pageSize: 100
 * };
 * const command = new GetClaimTimelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       claimPaymentInformation: {
 *         checkOrEftTraceNumber: "TRN123456789",
 *         claimPaymentAmount: "200.00",
 *         id: "clp_01K6XFP3TZ8RA9X84963NMW43R",
 *         patientResponsibilityAmount: "50.00",
 *         processedAt: "2026-01-16T10:00:00Z",
 *         statusCode: "PROCESSED_AS_PRIMARY",
 *         totalClaimChargeAmount: "250.00"
 *       }
 *     },
 *     {
 *       claimAcknowledgment: {
 *         id: "ack_01K6XFP3TZ8RA9X84963NMW42Q",
 *         processedAt: "2026-01-08T09:30:00Z",
 *         reportedBy: "PAYER",
 *         sourceName: "ACME INSURANCE",
 *         status: "ACCEPTED"
 *       }
 *     },
 *     {
 *       professionalClaimSubmission: {
 *         datesOfService: {
 *           start: "2026-01-05"
 *         },
 *         id: "sbm_01K6XFP3TZ8RA9X84963NMW41P",
 *         patientControlNumber: "123456",
 *         patientName: {
 *           firstName: "John",
 *           lastName: "Doe",
 *           middleName: "Michael",
 *           suffix: "Jr"
 *         },
 *         processedAt: "2026-01-07T15:12:45Z",
 *         stediPayerId: "ABCDE",
 *         totalClaimChargeAmount: "250.00"
 *       }
 *     }
 *   ],
 *   nextPageToken: "eyJsYXN0SWQiOiIwMUs2WEZQMyJ9"
 * }
 * *\/
 * ```
 *
 * @internal
 */
export class GetClaimTimelineCommand extends command<GetClaimTimelineCommandInput, GetClaimTimelineCommandOutput>(
  _ep1,
  _mw0,
  "GetClaimTimeline",
  GetClaimTimeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClaimTimelineInput;
      output: GetClaimTimelineOutput;
    };
    sdk: {
      input: GetClaimTimelineCommandInput;
      output: GetClaimTimelineCommandOutput;
    };
  };
}
