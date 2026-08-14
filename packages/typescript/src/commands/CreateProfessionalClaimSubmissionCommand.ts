// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateProfessionalClaimSubmissionInput,
  CreateProfessionalClaimSubmissionOutput,
} from "../models/models_0";
import { CreateProfessionalClaimSubmission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProfessionalClaimSubmissionCommand}.
 */
export interface CreateProfessionalClaimSubmissionCommandInput extends CreateProfessionalClaimSubmissionInput {}
/**
 * @public
 *
 * The output of {@link CreateProfessionalClaimSubmissionCommand}.
 */
export interface CreateProfessionalClaimSubmissionCommandOutput extends CreateProfessionalClaimSubmissionOutput, __MetadataBearer {}

/**
 * Submit a professional claim using the Stedi JSON format.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, CreateProfessionalClaimSubmissionCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, CreateProfessionalClaimSubmissionCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // CreateProfessionalClaimSubmissionInput
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
 *   idempotencyKey: "STRING_VALUE",
 * };
 * const command = new CreateProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfessionalClaimSubmissionOutput
 * //   claimId: "STRING_VALUE", // required
 * //   submissionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProfessionalClaimSubmissionCommandInput - {@link CreateProfessionalClaimSubmissionCommandInput}
 * @returns {@link CreateProfessionalClaimSubmissionCommandOutput}
 * @see {@link CreateProfessionalClaimSubmissionCommandInput} for command's `input` shape.
 * @see {@link CreateProfessionalClaimSubmissionCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link ClaimEditException} (client fault)
 *  Exception returned when the claim fails one or more pre-submission edits.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  The request credentials are missing or not valid.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
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
 * @throws {@link InternalFailureException} (server fault)
 *  The server response when an unexpected error occurred while processing request.
 *
 * @throws {@link StediServiceException}
 * <p>Base exception class for all service exceptions from Stedi service.</p>
 *
 *
 * @example Submit a professional claim with primary and secondary coverage
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
 *     amountPaid: "100.00",
 *     billingProvider: {
 *       address: {
 *         addressLine1: "501 Main Street",
 *         city: "Springfield",
 *         postalCode: "627010500",
 *         state: "IL"
 *       },
 *       contact: {
 *         phoneNumber: "2175558800"
 *       },
 *       identifiers: {
 *         locationNumber: "LOC-001",
 *         npi: "1730289013",
 *         taxonomyCode: "207Q00000X"
 *       },
 *       name: {
 *         organization: "Springfield Family Medical Center"
 *       }
 *     },
 *     patientControlNumber: "CLM-2026-04219",
 *     serviceFacility: {
 *       address: {
 *         addressLine1: "501 Main Street",
 *         city: "Springfield",
 *         postalCode: "627010500",
 *         state: "IL"
 *       },
 *       identifiers: {
 *         npi: "1730289013",
 *         stateLicenseNumber: "IL-FAC-77821"
 *       },
 *       name: {
 *         organization: "Springfield Family Medical Center"
 *       }
 *     },
 *     taxId: {
 *       ein: "841234567"
 *     },
 *     totalCharge: "1432.50"
 *   },
 *   encounter: {
 *     attachments: [
 *       {
 *         attachmentControlNumber: "PWK-2026-0001",
 *         attachmentId: "1f2e3d4c-5b6a-7980-9abc-def012345678",
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
 *         npi: "1083827763"
 *       },
 *       name: {
 *         person: {
 *           firstName: "David",
 *           lastName: "Kim"
 *         }
 *       }
 *     },
 *     referenceNumbers: {
 *       clia: "14D2089999",
 *       priorAuthorization: "PA-2026-77831",
 *       referral: "REF-55421"
 *     },
 *     referringProvider: {
 *       identifiers: {
 *         npi: "1245319599",
 *         stateLicenseNumber: "IL-MD-44512"
 *       },
 *       name: {
 *         person: {
 *           firstName: "Maya",
 *           lastName: "Patel"
 *         }
 *       }
 *     },
 *     resubmission: {
 *       code: "REPLACEMENT_OF_PRIOR_CLAIM",
 *       originalReferenceNumber: "CLM-ORIG-998877"
 *     },
 *     supervisingProvider: {
 *       identifiers: {
 *         npi: "1396718825"
 *       },
 *       name: {
 *         person: {
 *           firstName: "Elena",
 *           lastName: "Rossi"
 *         }
 *       }
 *     }
 *   },
 *   idempotencyKey: "0e1f9a8d-6c5b-4a3f-9d2e-7b8c1a0f4e6d",
 *   insured: {
 *     address: {
 *       addressLine1: "742 Evergreen Terrace",
 *       addressLine2: "Apt 3B",
 *       city: "Springfield",
 *       postalCode: "627010001",
 *       state: "IL"
 *     },
 *     dateOfBirth: "1982-04-12",
 *     gender: "FEMALE",
 *     insuranceType: "OTHER",
 *     memberId: "W123456789",
 *     name: {
 *       person: {
 *         firstName: "Sarah",
 *         lastName: "Johnson",
 *         middleName: "A"
 *       }
 *     },
 *     paymentResponsibilityLevelCode: "PRIMARY",
 *     planName: "Aetna Choice POS II",
 *     policyOrGroupNumber: "GRP-AETNA-987654",
 *     ssn: "111223333"
 *   },
 *   otherInsured: [
 *     {
 *       address: {
 *         addressLine1: "742 Evergreen Terrace",
 *         addressLine2: "Apt 3B",
 *         city: "Springfield",
 *         postalCode: "627010001",
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
 *           lastName: "Johnson"
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
 *       addressLine1: "742 Evergreen Terrace",
 *       addressLine2: "Apt 3B",
 *       city: "Springfield",
 *       postalCode: "627010001",
 *       state: "IL"
 *     },
 *     dateOfBirth: "2015-08-21",
 *     gender: "MALE",
 *     name: {
 *       person: {
 *         firstName: "Liam",
 *         lastName: "Johnson"
 *       }
 *     },
 *     relationshipToInsured: "CHILD"
 *   },
 *   payer: {
 *     address: {
 *       addressLine1: "151 Farmington Avenue",
 *       city: "Hartford",
 *       postalCode: "06156",
 *       state: "CT"
 *     },
 *     id: "60054",
 *     name: {
 *       organization: "Aetna"
 *     },
 *     receiverId: "60054"
 *   },
 *   purpose: "CHARGEABLE",
 *   serviceLines: [
 *     {
 *       datesOfService: {
 *         end: "2026-03-03",
 *         start: "2026-03-03"
 *       },
 *       diagnosisCodes: [
 *         "J0190",
 *         "R0602"
 *       ],
 *       isEmergency: false,
 *       lineItemChargeAmount: "185.00",
 *       lineItemControlNumber: "LN-0001",
 *       placeOfService: "11",
 *       procedureCode: {
 *         code: "99213",
 *         modifiers: [
 *           "25"
 *         ]
 *       },
 *       renderingProvider: {
 *         identifiers: {
 *           npi: "1396718825",
 *           taxonomyCode: "207Q00000X"
 *         },
 *         name: {
 *           person: {
 *             firstName: "Elena",
 *             lastName: "Rossi"
 *           }
 *         }
 *       },
 *       units: "1"
 *     },
 *     {
 *       datesOfService: {
 *         end: "2026-03-03",
 *         start: "2026-03-03"
 *       },
 *       diagnosisCodes: [
 *         "J0190"
 *       ],
 *       drugIdentification: {
 *         associationNumber: {
 *           pharmacyPrescriptionNumber: "RX-2026-118822"
 *         },
 *         nationalDrugCode: "00409120130",
 *         unitCount: "300",
 *         unitOfMeasure: "MILLIGRAM"
 *       },
 *       isEmergency: false,
 *       lineItemChargeAmount: "1247.50",
 *       lineItemControlNumber: "LN-0002",
 *       orderingProvider: {
 *         identifiers: {
 *           npi: "1245319599"
 *         },
 *         name: {
 *           person: {
 *             firstName: "Maya",
 *             lastName: "Patel"
 *           }
 *         }
 *       },
 *       placeOfService: "11",
 *       priorAuthorizations: [
 *         {
 *           otherPayerPrimaryId: "60054",
 *           priorAuthorizationNumber: "PA-2026-77831"
 *         }
 *       ],
 *       procedureCode: {
 *         code: "J1885",
 *         modifiers: [
 *           "JW"
 *         ]
 *       },
 *       renderingProvider: {
 *         identifiers: {
 *           npi: "1396718825"
 *         },
 *         name: {
 *           person: {
 *             firstName: "Elena",
 *             lastName: "Rossi"
 *           }
 *         }
 *       },
 *       units: "10"
 *     }
 *   ],
 *   submitter: {
 *     contact: {
 *       email: "billing@acmehealth.example",
 *       faxNumber: "3135551235",
 *       phoneNumber: "3135551234"
 *     },
 *     etin: "SUBMITTER0001",
 *     name: {
 *       organization: "Acme Health Billing"
 *     }
 *   }
 * };
 * const command = new CreateProfessionalClaimSubmissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   claimId: "clm_01K6XFP3TZ8RA9X84963NMW40M",
 *   submissionId: "sbm_01K6XFP3TZ8RA9X84963NMW40N"
 * }
 * *\/
 * ```
 *
 * @internal
 */
export class CreateProfessionalClaimSubmissionCommand extends command<CreateProfessionalClaimSubmissionCommandInput, CreateProfessionalClaimSubmissionCommandOutput>(
  _ep0,
  _mw0,
  "CreateProfessionalClaimSubmission",
  CreateProfessionalClaimSubmission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfessionalClaimSubmissionInput;
      output: CreateProfessionalClaimSubmissionOutput;
    };
    sdk: {
      input: CreateProfessionalClaimSubmissionCommandInput;
      output: CreateProfessionalClaimSubmissionCommandOutput;
    };
  };
}
