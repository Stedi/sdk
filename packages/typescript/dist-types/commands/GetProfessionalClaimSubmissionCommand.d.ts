import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { GetProfessionalClaimSubmissionInput, GetProfessionalClaimSubmissionOutput } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProfessionalClaimSubmissionCommand}.
 */
export interface GetProfessionalClaimSubmissionCommandInput extends GetProfessionalClaimSubmissionInput {
}
/**
 * @public
 *
 * The output of {@link GetProfessionalClaimSubmissionCommand}.
 */
export interface GetProfessionalClaimSubmissionCommandOutput extends GetProfessionalClaimSubmissionOutput, __MetadataBearer {
}
declare const GetProfessionalClaimSubmissionCommand_base: {
    new (input: GetProfessionalClaimSubmissionCommandInput): import("@smithy/core/client").CommandImpl<GetProfessionalClaimSubmissionCommandInput, GetProfessionalClaimSubmissionCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    new (input: GetProfessionalClaimSubmissionCommandInput): import("@smithy/core/client").CommandImpl<GetProfessionalClaimSubmissionCommandInput, GetProfessionalClaimSubmissionCommandOutput, import("..").StediClientResolvedConfig, import("..").ServiceInputTypes, import("..").ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/types").EndpointParameterInstructions;
};
/**
 * Fetch a professional claim submission by ID.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, GetProfessionalClaimSubmissionCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, GetProfessionalClaimSubmissionCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // GetProfessionalClaimSubmissionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * // { // GetProfessionalClaimSubmissionOutput
 * //   claimId: "STRING_VALUE", // required
 * //   submissionId: "STRING_VALUE", // required
 * //   stediPayerId: "STRING_VALUE",
 * //   data: { // ProfessionalClaimSubmissionData
 * //     purpose: "SUBROGATION_DEMAND" || "CHARGEABLE" || "REPORTING", // required
 * //     payer: { // ProfessionalClaimSubmissionPayer
 * //       id: "STRING_VALUE", // required
 * //       name: { // ProfessionalClaimSubmissionQualifiedOrganizationName Union: only one key present
 * //         organization: "STRING_VALUE",
 * //       },
 * //       address: { // ProfessionalClaimSubmissionAddress
 * //         addressLine1: "STRING_VALUE", // required
 * //         addressLine2: "STRING_VALUE",
 * //         city: "STRING_VALUE", // required
 * //         state: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE",
 * //       },
 * //       receiverId: "STRING_VALUE",
 * //     },
 * //     submitter: { // ProfessionalClaimSubmissionSubmitter
 * //       name: { // ProfessionalClaimSubmissionQualifiedName Union: only one key present
 * //         organization: "STRING_VALUE",
 * //         person: { // ProfessionalClaimSubmissionPersonName
 * //           lastName: "STRING_VALUE", // required
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //       },
 * //       contact: { // ProfessionalClaimSubmissionContact
 * //         name: "STRING_VALUE",
 * //         phoneNumber: "STRING_VALUE",
 * //         phoneExtension: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //         faxNumber: "STRING_VALUE",
 * //       },
 * //       etin: "STRING_VALUE",
 * //     },
 * //     insured: { // ProfessionalClaimSubmissionInsured
 * //       insuranceType: "MEDICARE" || "MEDICAID" || "TRICARE" || "CHAMPVA" || "FECA_BLK_LUNG" || "OTHER", // required
 * //       memberId: "STRING_VALUE",
 * //       name: {//  Union: only one key present
 * //         organization: "STRING_VALUE",
 * //         person: {
 * //           lastName: "STRING_VALUE", // required
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //       },
 * //       address: {
 * //         addressLine1: "STRING_VALUE", // required
 * //         addressLine2: "STRING_VALUE",
 * //         city: "STRING_VALUE", // required
 * //         state: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE",
 * //       },
 * //       policyOrGroupNumber: "STRING_VALUE",
 * //       dateOfBirth: "STRING_VALUE",
 * //       gender: "MALE" || "FEMALE" || "UNKNOWN",
 * //       ssn: "STRING_VALUE",
 * //       propertyCasualtyClaimNumber: "STRING_VALUE",
 * //       planName: "STRING_VALUE",
 * //       paymentResponsibilityLevelCode: "PRIMARY", // required
 * //     },
 * //     patient: { // ProfessionalClaimSubmissionPatient
 * //       name: { // ProfessionalClaimSubmissionQualifiedPersonName Union: only one key present
 * //         person: {
 * //           lastName: "STRING_VALUE", // required
 * //           firstName: "STRING_VALUE",
 * //           middleName: "STRING_VALUE",
 * //           suffix: "STRING_VALUE",
 * //         },
 * //       },
 * //       dateOfBirth: "STRING_VALUE", // required
 * //       gender: "MALE" || "FEMALE" || "UNKNOWN", // required
 * //       address: {
 * //         addressLine1: "STRING_VALUE", // required
 * //         addressLine2: "STRING_VALUE",
 * //         city: "STRING_VALUE", // required
 * //         state: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE",
 * //       },
 * //       relationshipToInsured: "SPOUSE" || "CHILD" || "EMPLOYEE" || "OTHER_RELATIONSHIP", // required
 * //     },
 * //     authorization: { // ProfessionalClaimSubmissionAuthorization
 * //       patientReleasesMedicalInfo: "INFORMED_CONSENT" || "YES", // required
 * //       insuredAuthorizesAssignment: "NO" || "NOT_APPLICABLE" || "YES", // required
 * //       providerAcceptsAssignment: "ASSIGNED" || "CLINICAL_LAB_ONLY" || "NOT_ASSIGNED", // required
 * //       providerSignature: "ON_FILE" || "NOT_ON_FILE", // required
 * //     },
 * //     encounter: { // ProfessionalClaimSubmissionEncounter
 * //       primaryPlaceOfService: "STRING_VALUE",
 * //       primaryDiagnosisCode: "STRING_VALUE", // required
 * //       additionalDiagnosisCodes: [ // ProfessionalClaimSubmissionAdditionalDiagnosisCodes
 * //         "STRING_VALUE",
 * //       ],
 * //       patientCondition: { // ProfessionalClaimSubmissionPatientCondition
 * //         isEmploymentRelated: true || false,
 * //         isAutoAccidentRelated: true || false,
 * //         isOtherAccidentRelated: true || false,
 * //         autoAccidentState: "STRING_VALUE",
 * //       },
 * //       claimCodes: [ // ProfessionalClaimSubmissionClaimsCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       epsdtReferralCodes: [ // ProfessionalClaimSubmissionEPSDTReferralConditionIndicatorList
 * //         "AVAILABLE_NOT_USED" || "UNDER_TREATMENT" || "NEW_SERVICE_REQUESTED" || "NOT_USED",
 * //       ],
 * //       clinicalDates: { // ProfessionalClaimSubmissionClinicalDates
 * //         onsetOfCurrentIllness: "STRING_VALUE",
 * //         lastMenstrualPeriod: "STRING_VALUE",
 * //         initialTreatment: "STRING_VALUE",
 * //         lastSeen: "STRING_VALUE",
 * //         acuteManifestationOfChronicCondition: "STRING_VALUE",
 * //         accident: "STRING_VALUE",
 * //         lastXray: "STRING_VALUE",
 * //         prescription: "STRING_VALUE",
 * //         assumedCare: "STRING_VALUE",
 * //         relinquishedCare: "STRING_VALUE",
 * //         firstVisitOrConsultation: "STRING_VALUE",
 * //         repricerReceived: "STRING_VALUE",
 * //         lastWorked: "STRING_VALUE",
 * //         returnedToWork: "STRING_VALUE",
 * //         unableToWork: { // ProfessionalClaimSubmissionDateRange
 * //           start: "STRING_VALUE",
 * //           end: "STRING_VALUE",
 * //         },
 * //         hospitalization: {
 * //           start: "STRING_VALUE",
 * //           end: "STRING_VALUE",
 * //         },
 * //       },
 * //       referringProvider: { // ProfessionalClaimSubmissionReferringProvider
 * //         name: {//  Union: only one key present
 * //           person: {
 * //             lastName: "STRING_VALUE", // required
 * //             firstName: "STRING_VALUE",
 * //             middleName: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //         },
 * //         identifiers: { // ProfessionalClaimSubmissionReferringProviderIdentifiers
 * //           npi: "STRING_VALUE",
 * //           stateLicenseNumber: "STRING_VALUE",
 * //           commercialNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //       priorReferringProvider: {
 * //         name: {//  Union: only one key present
 * //           person: {
 * //             lastName: "STRING_VALUE", // required
 * //             firstName: "STRING_VALUE",
 * //             middleName: "STRING_VALUE",
 * //             suffix: "STRING_VALUE",
 * //           },
 * //         },
 * //         identifiers: {
 * //           npi: "STRING_VALUE",
 * //           stateLicenseNumber: "STRING_VALUE",
 * //           commercialNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //       supervisingProvider: { // ProfessionalClaimSubmissionSupervisingProvider
 * //         name: {//  Union: only one key present
 * //           person: "<ProfessionalClaimSubmissionPersonName>",
 * //         },
 * //         identifiers: { // ProfessionalClaimSubmissionSupervisingProviderIdentifiers
 * //           npi: "STRING_VALUE",
 * //           stateLicenseNumber: "STRING_VALUE",
 * //           commercialNumber: "STRING_VALUE",
 * //           locationNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //       claimNote: { // ProfessionalClaimSubmissionClaimNote Union: only one key present
 * //         additionalInformation: "STRING_VALUE",
 * //         certificationNarrative: "STRING_VALUE",
 * //         goalsRehabilitationOrDischargePlans: "STRING_VALUE",
 * //         diagnosisDescription: "STRING_VALUE",
 * //         thirdPartyOrganization: "STRING_VALUE",
 * //       },
 * //       attachments: [ // ProfessionalClaimSubmissionAttachmentList
 * //         { // ProfessionalClaimSubmissionAttachment
 * //           reportTypeCode: "REPORT_JUSTIFYING_TREATMENT" || "DRUGS_ADMINISTERED" || "TREATMENT_DIAGNOSIS" || "INITIAL_ASSESSMENT" || "FUNCTIONAL_GOALS" || "PLAN_OF_TREATMENT" || "PROGRESS_REPORT" || "CONTINUED_TREATMENT" || "CHEMICAL_ANALYSIS" || "CERTIFIED_TEST_REPORT" || "JUSTIFICATION_FOR_ADMISSION" || "RECOVERY_PLAN" || "ALLERGIES_SENSITIVITIES" || "AUTOPSY_REPORT" || "AMBULANCE_CERTIFICATION" || "ADMISSION_SUMMARY" || "PRESCRIPTION" || "PHYSICIAN_ORDER" || "REFERRAL_FORM" || "BENCHMARK_TESTING_RESULTS" || "BASELINE" || "BLANKET_TEST_RESULTS" || "CHIROPRACTIC_JUSTIFICATION" || "CONSENT_FORMS" || "CERTIFICATION" || "DRUG_PROFILE" || "DENTAL_MODELS" || "DME_PRESCRIPTION" || "DIAGNOSTIC_REPORT" || "DISCHARGE_MONITORING" || "DISCHARGE_SUMMARY" || "EXPLANATION_OF_BENEFITS" || "HEALTH_CERTIFICATE" || "HEALTH_CLINIC_RECORDS" || "IMMUNIZATION_RECORD" || "STATE_IMMUNIZATION_RECORDS" || "LABORATORY_RESULTS" || "MEDICAL_RECORD_ATTACHMENT" || "MODELS" || "NURSING_NOTES" || "OPERATIVE_NOTE" || "OXYGEN_CONTENT_AVERAGING" || "ORDERS_TREATMENTS" || "PHYSICAL_EXAMINATION" || "OXYGEN_THERAPY_CERTIFICATION" || "SUPPORT_DATA" || "PATHOLOGY_REPORT" || "MEDICAL_HISTORY" || "PARENTERAL_ENTERAL_CERTIFICATION" || "PHYSICAL_THERAPY_NOTES" || "PROSTHETICS_ORTHOTIC_CERTIFICATION" || "PARAMEDICAL_RESULTS" || "PHYSICIAN_REPORT" || "PHYSICAL_THERAPY_CERTIFICATION" || "RADIOLOGY_FILMS" || "RADIOLOGY_REPORTS" || "TESTS_ANALYSIS_REPORT" || "RENEWABLE_OXYGEN_CONTENT" || "SYMPTOMS_DOCUMENT" || "DEATH_NOTIFICATION" || "PHOTOGRAPHS", // required
 * //           transmissionCode: "AVAILABLE_ON_REQUEST" || "BY_MAIL" || "ELECTRONICALLY_ONLY" || "EMAIL" || "FILE_TRANSFER" || "BY_FAX", // required
 * //           attachmentControlNumber: "STRING_VALUE",
 * //           attachmentId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       resubmission: { // ProfessionalClaimSubmissionResubmission
 * //         code: "REPLACEMENT_OF_PRIOR_CLAIM" || "CANCELLATION_OF_PRIOR_CLAIM",
 * //         originalReferenceNumber: "STRING_VALUE",
 * //       },
 * //       referenceNumbers: { // ProfessionalClaimSubmissionReferenceNumbers
 * //         priorAuthorization: "STRING_VALUE",
 * //         referral: "STRING_VALUE",
 * //         clia: "STRING_VALUE",
 * //         mammographyCertification: "STRING_VALUE",
 * //       },
 * //     },
 * //     billing: { // ProfessionalClaimSubmissionBilling
 * //       taxId: { // ProfessionalClaimSubmissionTaxId Union: only one key present
 * //         ssn: "STRING_VALUE",
 * //         ein: "STRING_VALUE",
 * //       },
 * //       patientControlNumber: "STRING_VALUE", // required
 * //       totalCharge: "STRING_VALUE", // required
 * //       amountPaid: "STRING_VALUE",
 * //       serviceFacility: { // ProfessionalClaimSubmissionServiceFacility
 * //         name: {//  Union: only one key present
 * //           organization: "STRING_VALUE",
 * //         },
 * //         address: {
 * //           addressLine1: "STRING_VALUE", // required
 * //           addressLine2: "STRING_VALUE",
 * //           city: "STRING_VALUE", // required
 * //           state: "STRING_VALUE",
 * //           postalCode: "STRING_VALUE",
 * //         },
 * //         identifiers: { // ProfessionalClaimSubmissionServiceFacilityIdentifiers
 * //           npi: "STRING_VALUE",
 * //           stateLicenseNumber: "STRING_VALUE",
 * //           commercialNumber: "STRING_VALUE",
 * //           locationNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //       billingProvider: { // ProfessionalClaimSubmissionBillingProvider
 * //         name: {//  Union: only one key present
 * //           organization: "STRING_VALUE",
 * //           person: "<ProfessionalClaimSubmissionPersonName>",
 * //         },
 * //         address: {
 * //           addressLine1: "STRING_VALUE", // required
 * //           addressLine2: "STRING_VALUE",
 * //           city: "STRING_VALUE", // required
 * //           state: "STRING_VALUE",
 * //           postalCode: "STRING_VALUE",
 * //         },
 * //         contact: {
 * //           name: "STRING_VALUE",
 * //           phoneNumber: "STRING_VALUE",
 * //           phoneExtension: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           faxNumber: "STRING_VALUE",
 * //         },
 * //         identifiers: { // ProfessionalClaimSubmissionBillingProviderIdentifiers
 * //           npi: "STRING_VALUE",
 * //           stateLicenseNumber: "STRING_VALUE",
 * //           taxonomyCode: "STRING_VALUE",
 * //           locationNumber: "STRING_VALUE",
 * //           commercialNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     serviceLines: [ // ProfessionalClaimSubmissionServiceLines // required
 * //       { // ProfessionalClaimSubmissionServiceLine
 * //         datesOfService: {
 * //           start: "STRING_VALUE",
 * //           end: "STRING_VALUE",
 * //         },
 * //         placeOfService: "STRING_VALUE",
 * //         isEmergency: true || false,
 * //         procedureCode: { // ProfessionalClaimSubmissionProcedureCode
 * //           code: "STRING_VALUE", // required
 * //           modifiers: [ // ProfessionalClaimSubmissionProcedureModifierList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         diagnosisCodes: [ // ProfessionalClaimSubmissionServiceLineDiagnosisCodes // required
 * //           "STRING_VALUE",
 * //         ],
 * //         lineItemChargeAmount: "STRING_VALUE", // required
 * //         units: "STRING_VALUE", // required
 * //         isEpsdtRelated: true || false,
 * //         isFamilyPlanning: true || false,
 * //         renderingProvider: { // ProfessionalClaimSubmissionRenderingProvider
 * //           name: "<ProfessionalClaimSubmissionQualifiedName>", // required
 * //           identifiers: { // ProfessionalClaimSubmissionRenderingProviderIdentifiers
 * //             npi: "STRING_VALUE",
 * //             stateLicenseNumber: "STRING_VALUE",
 * //             commercialNumber: "STRING_VALUE",
 * //             locationNumber: "STRING_VALUE",
 * //             taxonomyCode: "STRING_VALUE",
 * //           },
 * //         },
 * //         orderingProvider: { // ProfessionalClaimSubmissionOrderingProvider
 * //           name: "<ProfessionalClaimSubmissionQualifiedPersonName>", // required
 * //           identifiers: { // ProfessionalClaimSubmissionOrderingProviderIdentifiers
 * //             npi: "STRING_VALUE",
 * //             stateLicenseNumber: "STRING_VALUE",
 * //             commercialNumber: "STRING_VALUE",
 * //           },
 * //         },
 * //         lineItemControlNumber: "STRING_VALUE",
 * //         drugIdentification: { // ProfessionalClaimSubmissionDrugIdentification
 * //           nationalDrugCode: "STRING_VALUE", // required
 * //           unitCount: "STRING_VALUE", // required
 * //           unitOfMeasure: "INTERNATIONAL_UNIT" || "GRAM" || "MILLIGRAM" || "MILLILITER" || "UNIT", // required
 * //           associationNumber: { // ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber Union: only one key present
 * //             linkSequenceNumber: "STRING_VALUE",
 * //             pharmacyPrescriptionNumber: "STRING_VALUE",
 * //           },
 * //           originalNdc: "STRING_VALUE",
 * //         },
 * //         narrativeForUnspecifiedCode: "STRING_VALUE",
 * //         attachments: [
 * //           {
 * //             reportTypeCode: "REPORT_JUSTIFYING_TREATMENT" || "DRUGS_ADMINISTERED" || "TREATMENT_DIAGNOSIS" || "INITIAL_ASSESSMENT" || "FUNCTIONAL_GOALS" || "PLAN_OF_TREATMENT" || "PROGRESS_REPORT" || "CONTINUED_TREATMENT" || "CHEMICAL_ANALYSIS" || "CERTIFIED_TEST_REPORT" || "JUSTIFICATION_FOR_ADMISSION" || "RECOVERY_PLAN" || "ALLERGIES_SENSITIVITIES" || "AUTOPSY_REPORT" || "AMBULANCE_CERTIFICATION" || "ADMISSION_SUMMARY" || "PRESCRIPTION" || "PHYSICIAN_ORDER" || "REFERRAL_FORM" || "BENCHMARK_TESTING_RESULTS" || "BASELINE" || "BLANKET_TEST_RESULTS" || "CHIROPRACTIC_JUSTIFICATION" || "CONSENT_FORMS" || "CERTIFICATION" || "DRUG_PROFILE" || "DENTAL_MODELS" || "DME_PRESCRIPTION" || "DIAGNOSTIC_REPORT" || "DISCHARGE_MONITORING" || "DISCHARGE_SUMMARY" || "EXPLANATION_OF_BENEFITS" || "HEALTH_CERTIFICATE" || "HEALTH_CLINIC_RECORDS" || "IMMUNIZATION_RECORD" || "STATE_IMMUNIZATION_RECORDS" || "LABORATORY_RESULTS" || "MEDICAL_RECORD_ATTACHMENT" || "MODELS" || "NURSING_NOTES" || "OPERATIVE_NOTE" || "OXYGEN_CONTENT_AVERAGING" || "ORDERS_TREATMENTS" || "PHYSICAL_EXAMINATION" || "OXYGEN_THERAPY_CERTIFICATION" || "SUPPORT_DATA" || "PATHOLOGY_REPORT" || "MEDICAL_HISTORY" || "PARENTERAL_ENTERAL_CERTIFICATION" || "PHYSICAL_THERAPY_NOTES" || "PROSTHETICS_ORTHOTIC_CERTIFICATION" || "PARAMEDICAL_RESULTS" || "PHYSICIAN_REPORT" || "PHYSICAL_THERAPY_CERTIFICATION" || "RADIOLOGY_FILMS" || "RADIOLOGY_REPORTS" || "TESTS_ANALYSIS_REPORT" || "RENEWABLE_OXYGEN_CONTENT" || "SYMPTOMS_DOCUMENT" || "DEATH_NOTIFICATION" || "PHOTOGRAPHS", // required
 * //             transmissionCode: "AVAILABLE_ON_REQUEST" || "BY_MAIL" || "ELECTRONICALLY_ONLY" || "EMAIL" || "FILE_TRANSFER" || "BY_FAX", // required
 * //             attachmentControlNumber: "STRING_VALUE",
 * //             attachmentId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         priorAuthorizations: [ // ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers
 * //           { // ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber
 * //             priorAuthorizationNumber: "STRING_VALUE", // required
 * //             otherPayerPrimaryId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     otherInsured: [ // ProfessionalClaimSubmissionOtherInsuredList
 * //       { // ProfessionalClaimSubmissionOtherInsured
 * //         name: "<ProfessionalClaimSubmissionQualifiedName>", // required
 * //         memberId: "STRING_VALUE", // required
 * //         responsibilityLevel: "PRIMARY" || "SECONDARY" || "TERTIARY", // required
 * //         relationshipToInsured: "SPOUSE" || "SELF" || "CHILD" || "EMPLOYEE" || "UNKNOWN" || "ORGAN_DONOR" || "CADAVER_DONOR" || "LIFE_PARTNER" || "OTHER_RELATIONSHIP", // required
 * //         claimFilingIndicator: "OTHER_NON_FEDERAL_PROGRAMS" || "PREFERRED_PROVIDER_ORGANIZATION" || "POINT_OF_SERVICE" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "INDEMNITY_INSURANCE" || "HMO_MEDICARE_RISK" || "DENTAL_MAINTENANCE_ORGANIZATION" || "AUTOMOBILE_MEDICAL" || "BLUE_CROSS_BLUE_SHIELD" || "TRICARE" || "COMMERCIAL_INSURANCE" || "DISABILITY" || "FEDERAL_EMPLOYEES_PROGRAM" || "HEALTH_MAINTENANCE_ORGANIZATION" || "LIABILITY_MEDICAL" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "OTHER_FEDERAL_PROGRAM" || "TITLE_V" || "VETERANS_AFFAIRS_PLAN" || "WORKERS_COMPENSATION_HEALTH_CLAIM" || "MUTUALLY_DEFINED", // required
 * //         otherPayer: { // ProfessionalClaimSubmissionOtherPayer
 * //           name: "<ProfessionalClaimSubmissionQualifiedOrganizationName>", // required
 * //           id: { // ProfessionalClaimSubmissionOtherPayerId Union: only one key present
 * //             payerId: "STRING_VALUE",
 * //             cmsPlanId: "STRING_VALUE",
 * //           },
 * //         },
 * //         address: "<ProfessionalClaimSubmissionAddress>",
 * //         policyOrGroupNumber: "STRING_VALUE",
 * //         planName: "STRING_VALUE",
 * //         ssn: "STRING_VALUE",
 * //         medicareSecondaryInsuranceType: "WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP" || "END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP" || "NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "WORKERS_COMPENSATION" || "PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY" || "BLACK_LUNG" || "VETERANS_ADMINISTRATION" || "DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP" || "OTHER_LIABILITY_INSURANCE_IS_PRIMARY",
 * //         authorization: { // ProfessionalClaimSubmissionOtherInsuredAuthorization
 * //           insuredAuthorizesAssignment: "NO" || "NOT_APPLICABLE" || "YES", // required
 * //           providerGeneratedPatientSignature: true || false,
 * //           patientReleasesMedicalInfo: "INFORMED_CONSENT" || "YES", // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   processedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetProfessionalClaimSubmissionCommandInput - {@link GetProfessionalClaimSubmissionCommandInput}
 * @returns {@link GetProfessionalClaimSubmissionCommandOutput}
 * @see {@link GetProfessionalClaimSubmissionCommandInput} for command's `input` shape.
 * @see {@link GetProfessionalClaimSubmissionCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalFailureException} (server fault)
 *  The server response when an unexpected error occurred while processing request.
 *
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @internal
 */
export declare class GetProfessionalClaimSubmissionCommand extends GetProfessionalClaimSubmissionCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetProfessionalClaimSubmissionInput;
            output: GetProfessionalClaimSubmissionOutput;
        };
        sdk: {
            input: GetProfessionalClaimSubmissionCommandInput;
            output: GetProfessionalClaimSubmissionCommandOutput;
        };
    };
}
