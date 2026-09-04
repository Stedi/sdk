// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  ValidateProfessionalClaimSubmissionInput,
  ValidateProfessionalClaimSubmissionOutput,
} from "../models/models_0";
import { ValidateProfessionalClaimSubmission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidateProfessionalClaimSubmissionCommand}.
 */
export interface ValidateProfessionalClaimSubmissionCommandInput extends ValidateProfessionalClaimSubmissionInput {}
/**
 * @public
 *
 * The output of {@link ValidateProfessionalClaimSubmissionCommand}.
 */
export interface ValidateProfessionalClaimSubmissionCommandOutput extends ValidateProfessionalClaimSubmissionOutput, __MetadataBearer {}

/**
 * Validate a professional claim in the Stedi JSON format without submitting it
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, ValidateProfessionalClaimSubmissionCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, ValidateProfessionalClaimSubmissionCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // ValidateProfessionalClaimSubmissionInput
 *   purpose: "SUBROGATION_DEMAND" || "CHARGEABLE" || "REPORTING", // required
 *   payer: { // ProfessionalClaimSubmissionPayer
 *     id: "STRING_VALUE", // required
 *     name: { // ProfessionalClaimSubmissionQualifiedOrganizationName Union: only one key present
 *       organization: "STRING_VALUE",
 *     },
 *     address: { // ProfessionalClaimSubmissionAddress
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *     },
 *     receiverId: "STRING_VALUE",
 *   },
 *   submitter: { // ProfessionalClaimSubmissionSubmitter
 *     name: { // ProfessionalClaimSubmissionQualifiedName Union: only one key present
 *       organization: "STRING_VALUE",
 *       person: { // ProfessionalClaimSubmissionPersonName
 *         lastName: "STRING_VALUE", // required
 *         firstName: "STRING_VALUE",
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *     },
 *     contact: { // ProfessionalClaimSubmissionContact
 *       name: "STRING_VALUE",
 *       phoneNumber: "STRING_VALUE",
 *       phoneExtension: "STRING_VALUE",
 *       email: "STRING_VALUE",
 *       faxNumber: "STRING_VALUE",
 *     },
 *     etin: "STRING_VALUE",
 *   },
 *   insured: { // ProfessionalClaimSubmissionInsured
 *     insuranceType: "MEDICARE" || "MEDICAID" || "TRICARE" || "CHAMPVA" || "FECA_BLK_LUNG" || "OTHER", // required
 *     memberId: "STRING_VALUE",
 *     name: {//  Union: only one key present
 *       organization: "STRING_VALUE",
 *       person: {
 *         lastName: "STRING_VALUE", // required
 *         firstName: "STRING_VALUE",
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *     },
 *     address: {
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *     },
 *     policyOrGroupNumber: "STRING_VALUE",
 *     dateOfBirth: "STRING_VALUE",
 *     gender: "MALE" || "FEMALE" || "UNKNOWN",
 *     ssn: "STRING_VALUE",
 *     propertyCasualtyClaimNumber: "STRING_VALUE",
 *     planName: "STRING_VALUE",
 *     paymentResponsibilityLevelCode: "PRIMARY", // required
 *   },
 *   patient: { // ProfessionalClaimSubmissionPatient
 *     name: { // ProfessionalClaimSubmissionQualifiedPersonName Union: only one key present
 *       person: {
 *         lastName: "STRING_VALUE", // required
 *         firstName: "STRING_VALUE",
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *     },
 *     dateOfBirth: "STRING_VALUE", // required
 *     gender: "MALE" || "FEMALE" || "UNKNOWN", // required
 *     address: {
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *     },
 *     relationshipToInsured: "SPOUSE" || "CHILD" || "EMPLOYEE" || "OTHER_RELATIONSHIP", // required
 *   },
 *   authorization: { // ProfessionalClaimSubmissionAuthorization
 *     patientReleasesMedicalInfo: "INFORMED_CONSENT" || "YES", // required
 *     insuredAuthorizesAssignment: "NO" || "NOT_APPLICABLE" || "YES", // required
 *     providerAcceptsAssignment: "ASSIGNED" || "CLINICAL_LAB_ONLY" || "NOT_ASSIGNED", // required
 *     providerSignature: "ON_FILE" || "NOT_ON_FILE", // required
 *   },
 *   encounter: { // ProfessionalClaimSubmissionEncounter
 *     primaryPlaceOfService: "STRING_VALUE",
 *     primaryDiagnosisCode: "STRING_VALUE", // required
 *     additionalDiagnosisCodes: [ // ProfessionalClaimSubmissionAdditionalDiagnosisCodes
 *       "STRING_VALUE",
 *     ],
 *     patientCondition: { // ProfessionalClaimSubmissionPatientCondition
 *       isEmploymentRelated: true || false,
 *       isAutoAccidentRelated: true || false,
 *       isOtherAccidentRelated: true || false,
 *       autoAccidentState: "STRING_VALUE",
 *     },
 *     claimCodes: [ // ProfessionalClaimSubmissionClaimsCodeList
 *       "STRING_VALUE",
 *     ],
 *     epsdtReferralCodes: [ // ProfessionalClaimSubmissionEPSDTReferralConditionIndicatorList
 *       "AVAILABLE_NOT_USED" || "UNDER_TREATMENT" || "NEW_SERVICE_REQUESTED" || "NOT_USED",
 *     ],
 *     clinicalDates: { // ProfessionalClaimSubmissionClinicalDates
 *       onsetOfCurrentIllness: "STRING_VALUE",
 *       lastMenstrualPeriod: "STRING_VALUE",
 *       initialTreatment: "STRING_VALUE",
 *       lastSeen: "STRING_VALUE",
 *       acuteManifestationOfChronicCondition: "STRING_VALUE",
 *       accident: "STRING_VALUE",
 *       lastXray: "STRING_VALUE",
 *       prescription: "STRING_VALUE",
 *       assumedCare: "STRING_VALUE",
 *       relinquishedCare: "STRING_VALUE",
 *       firstVisitOrConsultation: "STRING_VALUE",
 *       repricerReceived: "STRING_VALUE",
 *       lastWorked: "STRING_VALUE",
 *       returnedToWork: "STRING_VALUE",
 *       unableToWork: { // ProfessionalClaimSubmissionDateRange
 *         start: "STRING_VALUE",
 *         end: "STRING_VALUE",
 *       },
 *       hospitalization: {
 *         start: "STRING_VALUE",
 *         end: "STRING_VALUE",
 *       },
 *     },
 *     referringProvider: { // ProfessionalClaimSubmissionReferringProvider
 *       name: {//  Union: only one key present
 *         person: {
 *           lastName: "STRING_VALUE", // required
 *           firstName: "STRING_VALUE",
 *           middleName: "STRING_VALUE",
 *           suffix: "STRING_VALUE",
 *         },
 *       },
 *       identifiers: { // ProfessionalClaimSubmissionReferringProviderIdentifiers
 *         npi: "STRING_VALUE",
 *         stateLicenseNumber: "STRING_VALUE",
 *         commercialNumber: "STRING_VALUE",
 *       },
 *     },
 *     priorReferringProvider: {
 *       name: {//  Union: only one key present
 *         person: {
 *           lastName: "STRING_VALUE", // required
 *           firstName: "STRING_VALUE",
 *           middleName: "STRING_VALUE",
 *           suffix: "STRING_VALUE",
 *         },
 *       },
 *       identifiers: {
 *         npi: "STRING_VALUE",
 *         stateLicenseNumber: "STRING_VALUE",
 *         commercialNumber: "STRING_VALUE",
 *       },
 *     },
 *     supervisingProvider: { // ProfessionalClaimSubmissionSupervisingProvider
 *       name: {//  Union: only one key present
 *         person: "<ProfessionalClaimSubmissionPersonName>",
 *       },
 *       identifiers: { // ProfessionalClaimSubmissionSupervisingProviderIdentifiers
 *         npi: "STRING_VALUE",
 *         stateLicenseNumber: "STRING_VALUE",
 *         commercialNumber: "STRING_VALUE",
 *         locationNumber: "STRING_VALUE",
 *       },
 *     },
 *     claimNote: { // ProfessionalClaimSubmissionClaimNote Union: only one key present
 *       additionalInformation: "STRING_VALUE",
 *       certificationNarrative: "STRING_VALUE",
 *       goalsRehabilitationOrDischargePlans: "STRING_VALUE",
 *       diagnosisDescription: "STRING_VALUE",
 *       thirdPartyOrganization: "STRING_VALUE",
 *     },
 *     attachments: [ // ProfessionalClaimSubmissionAttachmentList
 *       { // ProfessionalClaimSubmissionAttachment
 *         reportTypeCode: "REPORT_JUSTIFYING_TREATMENT" || "DRUGS_ADMINISTERED" || "TREATMENT_DIAGNOSIS" || "INITIAL_ASSESSMENT" || "FUNCTIONAL_GOALS" || "PLAN_OF_TREATMENT" || "PROGRESS_REPORT" || "CONTINUED_TREATMENT" || "CHEMICAL_ANALYSIS" || "CERTIFIED_TEST_REPORT" || "JUSTIFICATION_FOR_ADMISSION" || "RECOVERY_PLAN" || "ALLERGIES_SENSITIVITIES" || "AUTOPSY_REPORT" || "AMBULANCE_CERTIFICATION" || "ADMISSION_SUMMARY" || "PRESCRIPTION" || "PHYSICIAN_ORDER" || "REFERRAL_FORM" || "BENCHMARK_TESTING_RESULTS" || "BASELINE" || "BLANKET_TEST_RESULTS" || "CHIROPRACTIC_JUSTIFICATION" || "CONSENT_FORMS" || "CERTIFICATION" || "DRUG_PROFILE" || "DENTAL_MODELS" || "DME_PRESCRIPTION" || "DIAGNOSTIC_REPORT" || "DISCHARGE_MONITORING" || "DISCHARGE_SUMMARY" || "EXPLANATION_OF_BENEFITS" || "HEALTH_CERTIFICATE" || "HEALTH_CLINIC_RECORDS" || "IMMUNIZATION_RECORD" || "STATE_IMMUNIZATION_RECORDS" || "LABORATORY_RESULTS" || "MEDICAL_RECORD_ATTACHMENT" || "MODELS" || "NURSING_NOTES" || "OPERATIVE_NOTE" || "OXYGEN_CONTENT_AVERAGING" || "ORDERS_TREATMENTS" || "PHYSICAL_EXAMINATION" || "OXYGEN_THERAPY_CERTIFICATION" || "SUPPORT_DATA" || "PATHOLOGY_REPORT" || "MEDICAL_HISTORY" || "PARENTERAL_ENTERAL_CERTIFICATION" || "PHYSICAL_THERAPY_NOTES" || "PROSTHETICS_ORTHOTIC_CERTIFICATION" || "PARAMEDICAL_RESULTS" || "PHYSICIAN_REPORT" || "PHYSICAL_THERAPY_CERTIFICATION" || "RADIOLOGY_FILMS" || "RADIOLOGY_REPORTS" || "TESTS_ANALYSIS_REPORT" || "RENEWABLE_OXYGEN_CONTENT" || "SYMPTOMS_DOCUMENT" || "DEATH_NOTIFICATION" || "PHOTOGRAPHS", // required
 *         transmissionCode: "AVAILABLE_ON_REQUEST" || "BY_MAIL" || "ELECTRONICALLY_ONLY" || "EMAIL" || "FILE_TRANSFER" || "BY_FAX", // required
 *         attachmentControlNumber: "STRING_VALUE",
 *         attachmentId: "STRING_VALUE",
 *       },
 *     ],
 *     resubmission: { // ProfessionalClaimSubmissionResubmission
 *       code: "REPLACEMENT_OF_PRIOR_CLAIM" || "CANCELLATION_OF_PRIOR_CLAIM",
 *       originalReferenceNumber: "STRING_VALUE",
 *     },
 *     referenceNumbers: { // ProfessionalClaimSubmissionReferenceNumbers
 *       priorAuthorization: "STRING_VALUE",
 *       referral: "STRING_VALUE",
 *       clia: "STRING_VALUE",
 *       mammographyCertification: "STRING_VALUE",
 *     },
 *   },
 *   billing: { // ProfessionalClaimSubmissionBilling
 *     taxId: { // ProfessionalClaimSubmissionTaxId Union: only one key present
 *       ssn: "STRING_VALUE",
 *       ein: "STRING_VALUE",
 *     },
 *     patientControlNumber: "STRING_VALUE", // required
 *     totalCharge: "STRING_VALUE", // required
 *     amountPaid: "STRING_VALUE",
 *     serviceFacility: { // ProfessionalClaimSubmissionServiceFacility
 *       name: {//  Union: only one key present
 *         organization: "STRING_VALUE",
 *       },
 *       address: {
 *         addressLine1: "STRING_VALUE", // required
 *         addressLine2: "STRING_VALUE",
 *         city: "STRING_VALUE", // required
 *         state: "STRING_VALUE",
 *         postalCode: "STRING_VALUE",
 *       },
 *       identifiers: { // ProfessionalClaimSubmissionServiceFacilityIdentifiers
 *         npi: "STRING_VALUE",
 *         stateLicenseNumber: "STRING_VALUE",
 *         commercialNumber: "STRING_VALUE",
 *         locationNumber: "STRING_VALUE",
 *       },
 *     },
 *     billingProvider: { // ProfessionalClaimSubmissionBillingProvider
 *       name: {//  Union: only one key present
 *         organization: "STRING_VALUE",
 *         person: "<ProfessionalClaimSubmissionPersonName>",
 *       },
 *       address: {
 *         addressLine1: "STRING_VALUE", // required
 *         addressLine2: "STRING_VALUE",
 *         city: "STRING_VALUE", // required
 *         state: "STRING_VALUE",
 *         postalCode: "STRING_VALUE",
 *       },
 *       contact: {
 *         name: "STRING_VALUE",
 *         phoneNumber: "STRING_VALUE",
 *         phoneExtension: "STRING_VALUE",
 *         email: "STRING_VALUE",
 *         faxNumber: "STRING_VALUE",
 *       },
 *       identifiers: { // ProfessionalClaimSubmissionBillingProviderIdentifiers
 *         npi: "STRING_VALUE",
 *         stateLicenseNumber: "STRING_VALUE",
 *         taxonomyCode: "STRING_VALUE",
 *         locationNumber: "STRING_VALUE",
 *         commercialNumber: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   serviceLines: [ // ProfessionalClaimSubmissionServiceLines // required
 *     { // ProfessionalClaimSubmissionServiceLine
 *       datesOfService: {
 *         start: "STRING_VALUE",
 *         end: "STRING_VALUE",
 *       },
 *       placeOfService: "STRING_VALUE",
 *       isEmergency: true || false,
 *       procedureCode: { // ProfessionalClaimSubmissionProcedureCode
 *         code: "STRING_VALUE", // required
 *         modifiers: [ // ProfessionalClaimSubmissionProcedureModifierList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       diagnosisCodes: [ // ProfessionalClaimSubmissionServiceLineDiagnosisCodes // required
 *         "STRING_VALUE",
 *       ],
 *       lineItemChargeAmount: "STRING_VALUE", // required
 *       units: "STRING_VALUE", // required
 *       isEpsdtRelated: true || false,
 *       isFamilyPlanning: true || false,
 *       renderingProvider: { // ProfessionalClaimSubmissionRenderingProvider
 *         name: "<ProfessionalClaimSubmissionQualifiedName>", // required
 *         identifiers: { // ProfessionalClaimSubmissionRenderingProviderIdentifiers
 *           npi: "STRING_VALUE",
 *           stateLicenseNumber: "STRING_VALUE",
 *           commercialNumber: "STRING_VALUE",
 *           locationNumber: "STRING_VALUE",
 *           taxonomyCode: "STRING_VALUE",
 *         },
 *       },
 *       orderingProvider: { // ProfessionalClaimSubmissionOrderingProvider
 *         name: "<ProfessionalClaimSubmissionQualifiedPersonName>", // required
 *         identifiers: { // ProfessionalClaimSubmissionOrderingProviderIdentifiers
 *           npi: "STRING_VALUE",
 *           stateLicenseNumber: "STRING_VALUE",
 *           commercialNumber: "STRING_VALUE",
 *         },
 *       },
 *       purchasedService: { // ProfessionalClaimSubmissionPurchasedService
 *         chargeAmount: "STRING_VALUE", // required
 *         provider: { // ProfessionalClaimSubmissionPurchasedServiceProvider
 *           entityType: "PERSON" || "ORGANIZATION", // required
 *           identifiers: { // ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers
 *             npi: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       lineItemControlNumber: "STRING_VALUE",
 *       drugIdentification: { // ProfessionalClaimSubmissionDrugIdentification
 *         nationalDrugCode: "STRING_VALUE", // required
 *         unitCount: "STRING_VALUE", // required
 *         unitOfMeasure: "INTERNATIONAL_UNIT" || "GRAM" || "MILLIGRAM" || "MILLILITER" || "UNIT", // required
 *         associationNumber: { // ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber Union: only one key present
 *           linkSequenceNumber: "STRING_VALUE",
 *           pharmacyPrescriptionNumber: "STRING_VALUE",
 *         },
 *         originalNdc: "STRING_VALUE",
 *       },
 *       narrativeForUnspecifiedCode: "STRING_VALUE",
 *       attachments: [
 *         {
 *           reportTypeCode: "REPORT_JUSTIFYING_TREATMENT" || "DRUGS_ADMINISTERED" || "TREATMENT_DIAGNOSIS" || "INITIAL_ASSESSMENT" || "FUNCTIONAL_GOALS" || "PLAN_OF_TREATMENT" || "PROGRESS_REPORT" || "CONTINUED_TREATMENT" || "CHEMICAL_ANALYSIS" || "CERTIFIED_TEST_REPORT" || "JUSTIFICATION_FOR_ADMISSION" || "RECOVERY_PLAN" || "ALLERGIES_SENSITIVITIES" || "AUTOPSY_REPORT" || "AMBULANCE_CERTIFICATION" || "ADMISSION_SUMMARY" || "PRESCRIPTION" || "PHYSICIAN_ORDER" || "REFERRAL_FORM" || "BENCHMARK_TESTING_RESULTS" || "BASELINE" || "BLANKET_TEST_RESULTS" || "CHIROPRACTIC_JUSTIFICATION" || "CONSENT_FORMS" || "CERTIFICATION" || "DRUG_PROFILE" || "DENTAL_MODELS" || "DME_PRESCRIPTION" || "DIAGNOSTIC_REPORT" || "DISCHARGE_MONITORING" || "DISCHARGE_SUMMARY" || "EXPLANATION_OF_BENEFITS" || "HEALTH_CERTIFICATE" || "HEALTH_CLINIC_RECORDS" || "IMMUNIZATION_RECORD" || "STATE_IMMUNIZATION_RECORDS" || "LABORATORY_RESULTS" || "MEDICAL_RECORD_ATTACHMENT" || "MODELS" || "NURSING_NOTES" || "OPERATIVE_NOTE" || "OXYGEN_CONTENT_AVERAGING" || "ORDERS_TREATMENTS" || "PHYSICAL_EXAMINATION" || "OXYGEN_THERAPY_CERTIFICATION" || "SUPPORT_DATA" || "PATHOLOGY_REPORT" || "MEDICAL_HISTORY" || "PARENTERAL_ENTERAL_CERTIFICATION" || "PHYSICAL_THERAPY_NOTES" || "PROSTHETICS_ORTHOTIC_CERTIFICATION" || "PARAMEDICAL_RESULTS" || "PHYSICIAN_REPORT" || "PHYSICAL_THERAPY_CERTIFICATION" || "RADIOLOGY_FILMS" || "RADIOLOGY_REPORTS" || "TESTS_ANALYSIS_REPORT" || "RENEWABLE_OXYGEN_CONTENT" || "SYMPTOMS_DOCUMENT" || "DEATH_NOTIFICATION" || "PHOTOGRAPHS", // required
 *           transmissionCode: "AVAILABLE_ON_REQUEST" || "BY_MAIL" || "ELECTRONICALLY_ONLY" || "EMAIL" || "FILE_TRANSFER" || "BY_FAX", // required
 *           attachmentControlNumber: "STRING_VALUE",
 *           attachmentId: "STRING_VALUE",
 *         },
 *       ],
 *       priorAuthorizations: [ // ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers
 *         { // ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber
 *           priorAuthorizationNumber: "STRING_VALUE", // required
 *           otherPayerPrimaryId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   otherInsured: [ // ProfessionalClaimSubmissionOtherInsuredList
 *     { // ProfessionalClaimSubmissionOtherInsured
 *       name: "<ProfessionalClaimSubmissionQualifiedName>", // required
 *       memberId: "STRING_VALUE", // required
 *       responsibilityLevel: "PRIMARY" || "SECONDARY" || "TERTIARY", // required
 *       relationshipToInsured: "SPOUSE" || "SELF" || "CHILD" || "EMPLOYEE" || "UNKNOWN" || "ORGAN_DONOR" || "CADAVER_DONOR" || "LIFE_PARTNER" || "OTHER_RELATIONSHIP", // required
 *       claimFilingIndicator: "OTHER_NON_FEDERAL_PROGRAMS" || "PREFERRED_PROVIDER_ORGANIZATION" || "POINT_OF_SERVICE" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "INDEMNITY_INSURANCE" || "HMO_MEDICARE_RISK" || "DENTAL_MAINTENANCE_ORGANIZATION" || "AUTOMOBILE_MEDICAL" || "BLUE_CROSS_BLUE_SHIELD" || "TRICARE" || "COMMERCIAL_INSURANCE" || "DISABILITY" || "FEDERAL_EMPLOYEES_PROGRAM" || "HEALTH_MAINTENANCE_ORGANIZATION" || "LIABILITY_MEDICAL" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "OTHER_FEDERAL_PROGRAM" || "TITLE_V" || "VETERANS_AFFAIRS_PLAN" || "WORKERS_COMPENSATION_HEALTH_CLAIM" || "MUTUALLY_DEFINED", // required
 *       otherPayer: { // ProfessionalClaimSubmissionOtherPayer
 *         name: "<ProfessionalClaimSubmissionQualifiedOrganizationName>", // required
 *         id: { // ProfessionalClaimSubmissionOtherPayerId Union: only one key present
 *           payerId: "STRING_VALUE",
 *           cmsPlanId: "STRING_VALUE",
 *         },
 *       },
 *       address: "<ProfessionalClaimSubmissionAddress>",
 *       policyOrGroupNumber: "STRING_VALUE",
 *       planName: "STRING_VALUE",
 *       ssn: "STRING_VALUE",
 *       medicareSecondaryInsuranceType: "WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP" || "END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP" || "NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "WORKERS_COMPENSATION" || "PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY" || "BLACK_LUNG" || "VETERANS_ADMINISTRATION" || "DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP" || "OTHER_LIABILITY_INSURANCE_IS_PRIMARY",
 *       authorization: { // ProfessionalClaimSubmissionOtherInsuredAuthorization
 *         insuredAuthorizesAssignment: "NO" || "NOT_APPLICABLE" || "YES", // required
 *         providerGeneratedPatientSignature: true || false,
 *         patientReleasesMedicalInfo: "INFORMED_CONSENT" || "YES", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new ValidateProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * // { // ValidateProfessionalClaimSubmissionOutput
 * //   errors: [ // ClaimRejectionErrors
 * //     { // ClaimRejectionError
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateProfessionalClaimSubmissionCommandInput - {@link ValidateProfessionalClaimSubmissionCommandInput}
 * @returns {@link ValidateProfessionalClaimSubmissionCommandOutput}
 * @see {@link ValidateProfessionalClaimSubmissionCommandInput} for command's `input` shape.
 * @see {@link ValidateProfessionalClaimSubmissionCommandOutput} for command's `response` shape.
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
 * @example Validate claim
 * ```javascript
 * //
 * const input = {
 *   authorization: {
 *     insuredAuthorizesAssignment: "YES",
 *     patientReleasesMedicalInfo: "YES",
 *     providerAcceptsAssignment: "ASSIGNED",
 *     providerSignature: "ON_FILE"
 *   },
 *   billing: {
 *     billingProvider: {
 *       address: {
 *         addressLine1: "123 St",
 *         city: "City",
 *         postalCode: "12345",
 *         state: "IL"
 *       },
 *       identifiers: {
 *         npi: "1999999984",
 *         taxonomyCode: "207Q00000X"
 *       },
 *       name: {
 *         organization: "Test Provider"
 *       }
 *     },
 *     patientControlNumber: "TEST-004",
 *     taxId: {
 *       ein: "123456789"
 *     },
 *     totalCharge: "100.00"
 *   },
 *   encounter: {
 *     attachments: [
 *       {
 *         attachmentControlNumber: "PWK-2026-0001",
 *         reportTypeCode: "PROGRESS_REPORT",
 *         transmissionCode: "ELECTRONICALLY_ONLY"
 *       }
 *     ],
 *     claimCodes: [
 *       "AV"
 *     ],
 *     claimNote: {
 *       additionalInformation: "Patient presented with persistent cough and bronchospasm; treated in office."
 *     },
 *     clinicalDates: {
 *       hospitalization: {
 *         end: "2026-03-06",
 *         start: "2026-03-04"
 *       },
 *       initialTreatment: "2026-03-03",
 *       onsetOfCurrentIllness: "2026-03-02",
 *       unableToWork: {
 *         end: "2026-03-10",
 *         start: "2026-03-03"
 *       }
 *     },
 *     patientCondition: {
 *       isAutoAccidentRelated: false,
 *       isEmploymentRelated: false,
 *       isOtherAccidentRelated: false
 *     },
 *     primaryDiagnosisCode: "J0190",
 *     priorReferringProvider: {
 *       identifiers: {
 *         npi: "1999999984"
 *       },
 *       name: {
 *         person: {
 *           firstName: "John",
 *           lastName: "Doe"
 *         }
 *       }
 *     },
 *     referenceNumbers: {
 *       clia: "14D2089999",
 *       priorAuthorization: "PA-2026-11111",
 *       referral: "REF-4321"
 *     },
 *     referringProvider: {
 *       identifiers: {
 *         npi: "1999999984"
 *       },
 *       name: {
 *         person: {
 *           firstName: "Jane",
 *           lastName: "Doe"
 *         }
 *       }
 *     },
 *     resubmission: {
 *       code: "REPLACEMENT_OF_PRIOR_CLAIM",
 *       originalReferenceNumber: "CLM-ORIG-998877"
 *     },
 *     supervisingProvider: {
 *       identifiers: {
 *         npi: "1999999984"
 *       },
 *       name: {
 *         person: {
 *           firstName: "Jane",
 *           lastName: "Smith"
 *         }
 *       }
 *     }
 *   },
 *   insured: {
 *     address: {
 *       addressLine1: "111 A Place",
 *       city: "Somewhere",
 *       postalCode: "123450000",
 *       state: "IL"
 *     },
 *     dateOfBirth: "1990-01-01",
 *     gender: "FEMALE",
 *     insuranceType: "OTHER",
 *     memberId: "W123456789",
 *     name: {
 *       person: {
 *         firstName: "June",
 *         lastName: "Doe"
 *       }
 *     },
 *     paymentResponsibilityLevelCode: "PRIMARY"
 *   },
 *   otherInsured: [
 *     {
 *       address: {
 *         addressLine1: "111 A Place",
 *         city: "Somewhere",
 *         postalCode: "123450000",
 *         state: "IL"
 *       },
 *       authorization: {
 *         insuredAuthorizesAssignment: "YES",
 *         patientReleasesMedicalInfo: "YES",
 *         providerGeneratedPatientSignature: false
 *       },
 *       claimFilingIndicator: "BLUE_CROSS_BLUE_SHIELD",
 *       memberId: "BCBS-IL-554433221",
 *       name: {
 *         person: {
 *           firstName: "Michael",
 *           lastName: "Doe"
 *         }
 *       },
 *       otherPayer: {
 *         id: {
 *           payerId: "00621"
 *         },
 *         name: {
 *           organization: "Blue Cross Blue Shield of Illinois"
 *         }
 *       },
 *       planName: "BCBS PPO",
 *       policyOrGroupNumber: "BCBS-GRP-3344",
 *       relationshipToInsured: "SPOUSE",
 *       responsibilityLevel: "SECONDARY"
 *     }
 *   ],
 *   patient: {
 *     address: {
 *       addressLine1: "111 A Place",
 *       city: "Somewhere",
 *       postalCode: "123450000",
 *       state: "IL"
 *     },
 *     dateOfBirth: "1900-02-02",
 *     gender: "MALE",
 *     name: {
 *       person: {
 *         firstName: "Liam",
 *         lastName: "Doe"
 *       }
 *     },
 *     relationshipToInsured: "CHILD"
 *   },
 *   payer: {
 *     id: "60054",
 *     name: {
 *       organization: "Aetna"
 *     }
 *   },
 *   purpose: "CHARGEABLE",
 *   serviceLines: [
 *     {
 *       datesOfService: {
 *         end: "2026-03-03",
 *         start: "2026-03-03"
 *       },
 *       diagnosisCodes: [
 *         "J0190"
 *       ],
 *       lineItemChargeAmount: "100.00",
 *       placeOfService: "11",
 *       procedureCode: {
 *         code: "99213"
 *       },
 *       units: "1"
 *     }
 *   ],
 *   submitter: {
 *     contact: {
 *       phoneNumber: "5555551234"
 *     },
 *     etin: "TEST001",
 *     name: {
 *       organization: "Test Submitter"
 *     }
 *   }
 * };
 * const command = new ValidateProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Failed edits
 * ```javascript
 * //
 * const input = {
 *   authorization: {
 *     insuredAuthorizesAssignment: "YES",
 *     patientReleasesMedicalInfo: "YES",
 *     providerAcceptsAssignment: "ASSIGNED",
 *     providerSignature: "ON_FILE"
 *   },
 *   billing: {
 *     billingProvider: {
 *       address: {
 *         addressLine1: "123 St",
 *         city: "City",
 *         postalCode: "12345",
 *         state: "IL"
 *       },
 *       identifiers: {
 *         npi: "1730289013",
 *         taxonomyCode: "207Q0000X"
 *       },
 *       name: {
 *         organization: "Test Provider"
 *       }
 *     },
 *     patientControlNumber: "TEST-005",
 *     taxId: {
 *       ein: "123456789"
 *     },
 *     totalCharge: "100.00"
 *   },
 *   encounter: {
 *     patientCondition: {
 *       isAutoAccidentRelated: false,
 *       isEmploymentRelated: false,
 *       isOtherAccidentRelated: false
 *     },
 *     primaryDiagnosisCode: "J0190"
 *   },
 *   insured: {
 *     address: {
 *       addressLine1: "111 A Place",
 *       city: "Somewhere",
 *       postalCode: "123450000",
 *       state: "IL"
 *     },
 *     dateOfBirth: "1990-01-01",
 *     gender: "FEMALE",
 *     insuranceType: "OTHER",
 *     memberId: "W123456789",
 *     name: {
 *       person: {
 *         firstName: "June",
 *         lastName: "Doe"
 *       }
 *     },
 *     paymentResponsibilityLevelCode: "PRIMARY"
 *   },
 *   patient: {
 *     address: {
 *       addressLine1: "111 A Place",
 *       city: "Somewhere",
 *       postalCode: "123450000",
 *       state: "IL"
 *     },
 *     dateOfBirth: "1900-02-02",
 *     gender: "MALE",
 *     name: {
 *       person: {
 *         firstName: "Liam",
 *         lastName: "Doe"
 *       }
 *     },
 *     relationshipToInsured: "CHILD"
 *   },
 *   payer: {
 *     id: "60054",
 *     name: {
 *       organization: "Aetna"
 *     }
 *   },
 *   purpose: "CHARGEABLE",
 *   serviceLines: [
 *     {
 *       datesOfService: {
 *         end: "2026-03-03",
 *         start: "2026-03-03"
 *       },
 *       diagnosisCodes: [
 *         "J0190"
 *       ],
 *       lineItemChargeAmount: "100.00",
 *       placeOfService: "11",
 *       procedureCode: {
 *         code: "99213"
 *       },
 *       units: "1"
 *     }
 *   ],
 *   submitter: {
 *     contact: {
 *       phoneNumber: "5555551234"
 *     },
 *     etin: "TEST001",
 *     name: {
 *       organization: "Test Submitter"
 *     }
 *   }
 * };
 * const command = new ValidateProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors: [
 *     {
 *       description: "Invalid NPI. The Billing Provider NPI of 1730289013 is invalid. The National Provider Identifier must be valid with 10 digits and no prefixes or dashes. Correct and resubmit."
 *     },
 *     {
 *       description: "Invalid Taxonomy Code. The taxonomy code for Billing Provider does not meet the required format. Taxonomy codes must be 10 uppercase alphanumeric characters ending with 'X'. Correct and resubmit."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @internal
 */
export class ValidateProfessionalClaimSubmissionCommand extends command<ValidateProfessionalClaimSubmissionCommandInput, ValidateProfessionalClaimSubmissionCommandOutput>(
  _ep1,
  _mw0,
  "ValidateProfessionalClaimSubmission",
  ValidateProfessionalClaimSubmission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateProfessionalClaimSubmissionInput;
      output: ValidateProfessionalClaimSubmissionOutput;
    };
    sdk: {
      input: ValidateProfessionalClaimSubmissionCommandInput;
      output: ValidateProfessionalClaimSubmissionCommandOutput;
    };
  };
}
