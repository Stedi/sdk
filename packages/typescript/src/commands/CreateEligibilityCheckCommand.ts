// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEligibilityCheckInput, CreateEligibilityCheckOutput } from "../models/models_0";
import { CreateEligibilityCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEligibilityCheckCommand}.
 */
export interface CreateEligibilityCheckCommandInput extends CreateEligibilityCheckInput {}
/**
 * @public
 *
 * The output of {@link CreateEligibilityCheckCommand}.
 */
export interface CreateEligibilityCheckCommandOutput extends CreateEligibilityCheckOutput, __MetadataBearer {}

/**
 * Submit a real-time 270/271 eligibility check in JSON format
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StediClient, CreateEligibilityCheckCommand } from "@stedi/sdk"; // ES Modules import
 * // const { StediClient, CreateEligibilityCheckCommand } = require("@stedi/sdk"); // CommonJS import
 * // import type { StediClientConfig } from "@stedi/sdk";
 * const config = {}; // type is StediClientConfig
 * const client = new StediClient(config);
 * const input = { // CreateEligibilityCheckInput
 *   payerId: "STRING_VALUE", // required
 *   payerName: "STRING_VALUE",
 *   provider: { // EligibilityCheckRequestProvider
 *     name: { // EligibilityCheckRequestProviderName Union: only one key present
 *       person: { // EligibilityCheckRequestProviderPersonName
 *         firstName: "STRING_VALUE",
 *         lastName: "STRING_VALUE", // required
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *       organization: "STRING_VALUE",
 *     },
 *     type: "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "HOSPITAL" || "FACILITY" || "GATEWAY_PROVIDER" || "PLAN_SPONSOR",
 *     npi: "STRING_VALUE",
 *     tin: "STRING_VALUE",
 *     ein: "STRING_VALUE",
 *     ssn: "STRING_VALUE",
 *     serviceProviderNumber: "STRING_VALUE",
 *     pharmacyProcessorNumber: "STRING_VALUE",
 *     address: { // EligibilityCheckRequestAddress
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *       country: "STRING_VALUE",
 *       countrySubdivision: "STRING_VALUE",
 *     },
 *     additionalInformation: { // EligibilityCheckRequestProviderAdditionalInformation
 *       stateLicense: { // EligibilityCheckRequestStateLicense
 *         state: "STRING_VALUE",
 *         number: "STRING_VALUE", // required
 *       },
 *       medicareProviderNumber: "STRING_VALUE",
 *       medicaidProviderNumber: "STRING_VALUE",
 *       facilityIdNumber: "STRING_VALUE",
 *       contractNumber: "STRING_VALUE",
 *       planNetworkId: "STRING_VALUE",
 *       facilityNetworkId: "STRING_VALUE",
 *       personalIdentificationNumber: "STRING_VALUE",
 *       electronicDevicePin: "STRING_VALUE",
 *       submitterId: "STRING_VALUE",
 *       userId: "STRING_VALUE",
 *       priorIdentifierNumber: "STRING_VALUE",
 *     },
 *     provider: { // EligibilityCheckRequestEntityProvider
 *       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 *       reference: "STRING_VALUE",
 *     },
 *   },
 *   subscriber: { // EligibilityCheckRequestSubscriber
 *     name: { // EligibilityCheckRequestSubscriberName Union: only one key present
 *       person: { // EligibilityCheckRequestSubscriberPersonName
 *         firstName: "STRING_VALUE",
 *         lastName: "STRING_VALUE",
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *       organization: "STRING_VALUE",
 *     },
 *     memberId: "STRING_VALUE",
 *     dateOfBirth: "STRING_VALUE",
 *     gender: "FEMALE" || "MALE",
 *     additionalInformation: { // EligibilityCheckRequestSubscriberAdditionalInformation
 *       ssn: "STRING_VALUE",
 *       groupNumber: "STRING_VALUE",
 *       identityCardNumber: "STRING_VALUE",
 *       medicaidRecipientId: "STRING_VALUE",
 *       caseNumber: "STRING_VALUE",
 *       planNumber: "STRING_VALUE",
 *       groupOrPolicyNumber: "STRING_VALUE",
 *       contractNumber: "STRING_VALUE",
 *       patientAccountNumber: "STRING_VALUE",
 *       mbi: "STRING_VALUE",
 *       identificationCardSerialNumber: "STRING_VALUE",
 *       insurancePolicyNumber: "STRING_VALUE",
 *       planNetworkId: "STRING_VALUE",
 *       agencyClaimNumber: "STRING_VALUE",
 *       medicalRecordId: "STRING_VALUE",
 *     },
 *     address: { // EligibilityCheckRequestSubscriberAddress
 *       addressLine1: "STRING_VALUE",
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE",
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *       country: "STRING_VALUE",
 *       countrySubdivision: "STRING_VALUE",
 *     },
 *     provider: {
 *       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 *       reference: "STRING_VALUE",
 *     },
 *   },
 *   dependent: { // EligibilityCheckRequestDependent
 *     name: { // EligibilityCheckRequestDependentName
 *       person: { // EligibilityCheckRequestDependentPersonName
 *         firstName: "STRING_VALUE", // required
 *         lastName: "STRING_VALUE", // required
 *         middleName: "STRING_VALUE",
 *         suffix: "STRING_VALUE",
 *       },
 *     },
 *     relationToSubscriber: "SPOUSE" || "CHILD" || "OTHER_ADULT",
 *     dateOfBirth: "STRING_VALUE",
 *     gender: "FEMALE" || "MALE",
 *     additionalInformation: { // EligibilityCheckRequestDependentAdditionalInformation
 *       ssn: "STRING_VALUE",
 *       groupNumber: "STRING_VALUE",
 *       identityCardNumber: "STRING_VALUE",
 *       eligibilityCategory: "STRING_VALUE",
 *       planNumber: "STRING_VALUE",
 *       groupOrPolicyNumber: "STRING_VALUE",
 *       contractNumber: "STRING_VALUE",
 *       patientAccountNumber: "STRING_VALUE",
 *       mbi: "STRING_VALUE",
 *       identificationCardSerialNumber: "STRING_VALUE",
 *       insurancePolicyNumber: "STRING_VALUE",
 *       planNetworkId: "STRING_VALUE",
 *       agencyClaimNumber: "STRING_VALUE",
 *       medicalRecordId: "STRING_VALUE",
 *       issueNumber: "STRING_VALUE",
 *       memberId: "STRING_VALUE",
 *     },
 *     address: {
 *       addressLine1: "STRING_VALUE", // required
 *       addressLine2: "STRING_VALUE",
 *       city: "STRING_VALUE", // required
 *       state: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *       country: "STRING_VALUE",
 *       countrySubdivision: "STRING_VALUE",
 *     },
 *     provider: {
 *       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 *       reference: "STRING_VALUE",
 *     },
 *   },
 *   encounter: { // EligibilityCheckRequestEncounter
 *     services: [ // EligibilityCheckRequestServiceList
 *       { // EligibilityCheckRequestService
 *         value: "STRING_VALUE", // required
 *         system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS", // required
 *       },
 *     ],
 *     dates: { // EligibilityCheckRequestEncounterDates
 *       service: { // EligibilityCheckDateRange
 *         start: "STRING_VALUE",
 *         end: "STRING_VALUE",
 *       },
 *     },
 *     placeOfService: { // EligibilityCheckRequestPlaceOfService
 *       code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99", // required
 *     },
 *     additionalInformation: { // EligibilityCheckRequestEncounterAdditionalInformation
 *       priorAuthNumber: "STRING_VALUE",
 *       referralNumber: "STRING_VALUE",
 *     },
 *   },
 *   externalPatientId: "STRING_VALUE",
 *   eligibilitySearchId: "STRING_VALUE",
 * };
 * const command = new CreateEligibilityCheckCommand(input);
 * const response = await client.send(command);
 * // { // CreateEligibilityCheckOutput
 * //   id: "STRING_VALUE", // required
 * //   meta: { // EligibilityCheckMeta
 * //     traceId: "STRING_VALUE",
 * //     outboundTraceId: "STRING_VALUE",
 * //     subscriberTraceNumbers: [ // EligibilityCheckSubscriberTraceNumbers
 * //       { // EligibilityCheckSubscriberTraceNumber
 * //         type: "CURRENT_TRANSACTION" || "REFERENCED_TRANSACTION",
 * //         referenceIdentification: "STRING_VALUE",
 * //         originatingCompanyIdentifier: "STRING_VALUE",
 * //         secondaryReferenceIdentification: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   payerId: "STRING_VALUE",
 * //   eligibilitySearchId: "STRING_VALUE",
 * //   warnings: [ // EligibilityCheckWarnings
 * //     { // EligibilityCheckWarning
 * //       code: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   x12: "STRING_VALUE", // required
 * //   payer: { // EligibilityCheckPayer
 * //     name: { // EligibilityCheckPersonOrOrganizationName Union: only one key present
 * //       person: { // EligibilityCheckPersonName
 * //         firstName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         suffix: "STRING_VALUE",
 * //       },
 * //       organization: "STRING_VALUE",
 * //     },
 * //     type: "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "GATEWAY_PROVIDER" || "PLAN_SPONSOR" || "PAYER", // required
 * //     contacts: [ // EligibilityCheckEntityContacts
 * //       { // EligibilityCheckContact
 * //         name: "STRING_VALUE",
 * //         phoneNumbers: [ // EligibilityCheckPhoneNumbers
 * //           "STRING_VALUE",
 * //         ],
 * //         emails: [ // EligibilityCheckEmails
 * //           "STRING_VALUE",
 * //         ],
 * //         faxNumbers: [ // EligibilityCheckFaxNumbers
 * //           "STRING_VALUE",
 * //         ],
 * //         ediNumbers: [ // EligibilityCheckEdiNumbers
 * //           "STRING_VALUE",
 * //         ],
 * //         urls: [ // EligibilityCheckUrls
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ein: "STRING_VALUE",
 * //     etin: "STRING_VALUE",
 * //     tin: "STRING_VALUE",
 * //     naicId: "STRING_VALUE",
 * //     identification: "STRING_VALUE",
 * //   },
 * //   provider: { // EligibilityCheckProvider
 * //     name: {//  Union: only one key present
 * //       person: {
 * //         firstName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         suffix: "STRING_VALUE",
 * //       },
 * //       organization: "STRING_VALUE",
 * //     },
 * //     type: "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "HOSPITAL" || "FACILITY" || "GATEWAY_PROVIDER" || "PLAN_SPONSOR" || "PAYER", // required
 * //     address: { // EligibilityCheckAddress
 * //       addressLine1: "STRING_VALUE",
 * //       addressLine2: "STRING_VALUE",
 * //       city: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE",
 * //       country: "STRING_VALUE",
 * //       countrySubdivision: "STRING_VALUE",
 * //     },
 * //     provider: { // EligibilityCheckEntityProvider
 * //       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 * //       reference: "STRING_VALUE",
 * //     },
 * //     tin: "STRING_VALUE",
 * //     ssn: "STRING_VALUE",
 * //     ein: "STRING_VALUE",
 * //     pharmacyProcessorNumber: "STRING_VALUE",
 * //     serviceProviderNumber: "STRING_VALUE",
 * //     npi: "STRING_VALUE",
 * //     additionalInformation: { // EligibilityCheckProviderAdditionalInformation
 * //       stateLicense: { // EligibilityCheckStateLicense
 * //         state: "STRING_VALUE",
 * //         number: "STRING_VALUE", // required
 * //       },
 * //       medicareProviderNumber: "STRING_VALUE",
 * //       medicaidProviderNumber: "STRING_VALUE",
 * //       facilityIdNumber: "STRING_VALUE",
 * //       personalIdentificationNumber: "STRING_VALUE",
 * //       contractNumber: "STRING_VALUE",
 * //       electronicDevicePin: "STRING_VALUE",
 * //       submitterId: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       planNetworkId: "STRING_VALUE",
 * //       facilityNetworkId: "STRING_VALUE",
 * //       priorIdentifierNumber: "STRING_VALUE",
 * //     },
 * //   },
 * //   subscriber: { // EligibilityCheckSubscriber
 * //     address: {
 * //       addressLine1: "STRING_VALUE",
 * //       addressLine2: "STRING_VALUE",
 * //       city: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE",
 * //       country: "STRING_VALUE",
 * //       countrySubdivision: "STRING_VALUE",
 * //     },
 * //     provider: {
 * //       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 * //       reference: "STRING_VALUE",
 * //     },
 * //     dates: { // EligibilityCheckPatientAttributeDateRanges
 * //       discharge: { // EligibilityCheckDateRange
 * //         start: "STRING_VALUE",
 * //         end: "STRING_VALUE",
 * //       },
 * //       issue: {
 * //         start: "STRING_VALUE",
 * //         end: "STRING_VALUE",
 * //       },
 * //       effectiveDateOfChange: {
 * //         start: "STRING_VALUE",
 * //         end: "STRING_VALUE",
 * //       },
 * //       plan: {
 * //         start: "STRING_VALUE",
 * //         end: "STRING_VALUE",
 * //       },
 * //       eligibility: {
 * //         start: "STRING_VALUE",
 * //         end: "STRING_VALUE",
 * //       },
 * //       added: "<EligibilityCheckDateRange>",
 * //       cobra: "<EligibilityCheckDateRange>",
 * //       premiumPaidToDate: "<EligibilityCheckDateRange>",
 * //       enrollment: "<EligibilityCheckDateRange>",
 * //       admission: "<EligibilityCheckDateRange>",
 * //       dateOfDeath: "<EligibilityCheckDateRange>",
 * //       certification: "<EligibilityCheckDateRange>",
 * //       service: "<EligibilityCheckDateRange>",
 * //       policy: "<EligibilityCheckDateRange>",
 * //       dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //       status: "<EligibilityCheckDateRange>",
 * //     },
 * //     dateOfBirth: "STRING_VALUE",
 * //     gender: "FEMALE" || "MALE" || "UNKNOWN",
 * //     birthSequenceNumber: Number("long"),
 * //     maintenance: { // EligibilityCheckMaintenance
 * //       indicator: "NONE" || "PAYER_INDICATED",
 * //     },
 * //     name: {//  Union: only one key present
 * //       person: {
 * //         firstName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         suffix: "STRING_VALUE",
 * //       },
 * //       organization: "STRING_VALUE",
 * //     },
 * //     additionalInformation: { // EligibilityCheckSubscriberAdditionalInformation
 * //       plan: { // EligibilityCheckAdditionalInformationWithName
 * //         number: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //       },
 * //       group: {
 * //         number: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //       },
 * //       planNetwork: {
 * //         number: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //       },
 * //       groupOrPolicyNumber: "STRING_VALUE",
 * //       memberId: "STRING_VALUE",
 * //       familyUnitNumber: "STRING_VALUE",
 * //       classOfContractCode: "STRING_VALUE",
 * //       contractNumber: "STRING_VALUE",
 * //       medicalRecordId: "STRING_VALUE",
 * //       patientAccountNumber: "STRING_VALUE",
 * //       mbi: "STRING_VALUE",
 * //       identificationCardSerialNumber: "STRING_VALUE",
 * //       identityCardNumber: "STRING_VALUE",
 * //       issueNumber: "STRING_VALUE",
 * //       insurancePolicyNumber: "STRING_VALUE",
 * //       medicaidRecipientId: "STRING_VALUE",
 * //       priorIdentifierNumber: "STRING_VALUE",
 * //       ssn: "STRING_VALUE",
 * //       agencyClaimNumber: "STRING_VALUE",
 * //       caseNumber: "STRING_VALUE",
 * //     },
 * //     memberId: "STRING_VALUE",
 * //   },
 * //   dependent: { // EligibilityCheckDependent
 * //     address: {
 * //       addressLine1: "STRING_VALUE",
 * //       addressLine2: "STRING_VALUE",
 * //       city: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE",
 * //       country: "STRING_VALUE",
 * //       countrySubdivision: "STRING_VALUE",
 * //     },
 * //     provider: {
 * //       code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 * //       reference: "STRING_VALUE",
 * //     },
 * //     dates: {
 * //       discharge: "<EligibilityCheckDateRange>",
 * //       issue: "<EligibilityCheckDateRange>",
 * //       effectiveDateOfChange: "<EligibilityCheckDateRange>",
 * //       plan: "<EligibilityCheckDateRange>",
 * //       eligibility: "<EligibilityCheckDateRange>",
 * //       added: "<EligibilityCheckDateRange>",
 * //       cobra: "<EligibilityCheckDateRange>",
 * //       premiumPaidToDate: "<EligibilityCheckDateRange>",
 * //       enrollment: "<EligibilityCheckDateRange>",
 * //       admission: "<EligibilityCheckDateRange>",
 * //       dateOfDeath: "<EligibilityCheckDateRange>",
 * //       certification: "<EligibilityCheckDateRange>",
 * //       service: "<EligibilityCheckDateRange>",
 * //       policy: "<EligibilityCheckDateRange>",
 * //       dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //       status: "<EligibilityCheckDateRange>",
 * //     },
 * //     dateOfBirth: "STRING_VALUE",
 * //     gender: "FEMALE" || "MALE" || "UNKNOWN",
 * //     birthSequenceNumber: Number("long"),
 * //     maintenance: {
 * //       indicator: "NONE" || "PAYER_INDICATED",
 * //     },
 * //     name: { // EligibilityCheckQualifiedPersonName
 * //       person: {
 * //         firstName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         suffix: "STRING_VALUE",
 * //       },
 * //     },
 * //     relationToSubscriber: "SPOUSE" || "CHILD" || "EMPLOYEE" || "UNKNOWN" || "ORGAN_DONOR" || "CADAVER_DONOR" || "LIFE_PARTNER" || "OTHER_RELATIONSHIP",
 * //     additionalInformation: { // EligibilityCheckDependentAdditionalInformation
 * //       plan: {
 * //         number: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //       },
 * //       group: {
 * //         number: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //       },
 * //       planNetwork: "<EligibilityCheckAdditionalInformationWithName>",
 * //       groupOrPolicyNumber: "STRING_VALUE",
 * //       memberId: "STRING_VALUE",
 * //       familyUnitNumber: "STRING_VALUE",
 * //       classOfContractCode: "STRING_VALUE",
 * //       contractNumber: "STRING_VALUE",
 * //       medicalRecordId: "STRING_VALUE",
 * //       patientAccountNumber: "STRING_VALUE",
 * //       mbi: "STRING_VALUE",
 * //       identificationCardSerialNumber: "STRING_VALUE",
 * //       identityCardNumber: "STRING_VALUE",
 * //       issueNumber: "STRING_VALUE",
 * //       insurancePolicyNumber: "STRING_VALUE",
 * //       medicaidRecipientId: "STRING_VALUE",
 * //       priorIdentifierNumber: "STRING_VALUE",
 * //       ssn: "STRING_VALUE",
 * //       agencyClaimNumber: "STRING_VALUE",
 * //       eligibilityCategory: "STRING_VALUE",
 * //     },
 * //   },
 * //   plans: [ // EligibilityCheckPlans
 * //     { // EligibilityCheckPlan
 * //       benefits: { // EligibilityCheckBenefits
 * //         statuses: [ // EligibilityCheckEligibilityStatuses
 * //           { // EligibilityCheckEligibilityStatus
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: { // EligibilityCheckNetwork
 * //               indicator: "IN_NETWORK" || "OUT_OF_NETWORK" || "IN_AND_OUT_OF_NETWORK",
 * //               id: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: { // EligibilityCheckServiceOrProcedure
 * //               value: "STRING_VALUE",
 * //               definition: "STRING_VALUE",
 * //               system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS",
 * //               range: { // EligibilityCheckServiceCodeRange
 * //                 start: { // EligibilityCheckServiceCode
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //                 end: {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             messages: [ // EligibilityCheckMessages
 * //               "STRING_VALUE",
 * //             ],
 * //             serviceLimits: [ // EligibilityCheckServiceLimits
 * //               { // EligibilityCheckServiceLimit Union: only one key present
 * //                 ageMaximum: Number("int"),
 * //                 ageMinimum: Number("int"),
 * //                 delivery: { // EligibilityCheckServiceDeliveryLimit
 * //                   quantity: { // EligibilityCheckServiceDeliveryLimitQuantity
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "UNITS" || "HOURS" || "MONTH" || "VISITS",
 * //                   },
 * //                   period: { // EligibilityCheckServiceDeliveryLimitPeriod
 * //                     value: Number("long"),
 * //                     qualifier: "HOUR" || "DAY" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK",
 * //                   },
 * //                   frequency: { // EligibilityCheckServiceDeliveryLimitFrequency
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "MONTHS" || "VISIT" || "WEEK" || "YEARS",
 * //                   },
 * //                   delivery: { // EligibilityCheckServiceDeliveryLimitDelivery
 * //                     schedule: "FIRST_WEEK_OF_THE_MONTH" || "SECOND_WEEK_OF_THE_MONTH" || "THIRD_WEEK_OF_THE_MONTH" || "FOURTH_WEEK_OF_THE_MONTH" || "FIFTH_WEEK_OF_THE_MONTH" || "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH" || "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH" || "FIRST_WORKING_DAY_OF_PERIOD" || "LAST_WORKING_DAY_OF_PERIOD" || "MONDAY_THROUGH_FRIDAY" || "MONDAY_THROUGH_SATURDAY" || "MONDAY_THROUGH_SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY" || "MONDAY_THROUGH_THURSDAY" || "IMMEDIATELY" || "AS_DIRECTED" || "DAILY_MONDAY_THROUGH_FRIDAY" || "HALF_MONDAY_AND_HALF_THURSDAY" || "HALF_TUESDAY_AND_HALF_THURSDAY" || "HALF_WEDNESDAY_AND_HALF_FRIDAY" || "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY" || "TUESDAY_THROUGH_FRIDAY" || "MONDAY_TUESDAY_AND_THURSDAY" || "MONDAY_TUESDAY_AND_FRIDAY" || "WEDNESDAY_AND_THURSDAY" || "MONDAY_WEDNESDAY_AND_THURSDAY" || "TUESDAY_THURSDAY_AND_FRIDAY" || "HALF_TUESDAY_AND_HALF_FRIDAY" || "HALF_MONDAY_AND_HALF_WEDNESDAY" || "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY" || "WHENEVER_NECESSARY" || "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY" || "NONE",
 * //                     pattern: "FIRST_SHIFT" || "SECOND_SHIFT" || "THIRD_SHIFT" || "AM" || "PM" || "AS_DIRECTED" || "ANY_SHIFT" || "NONE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             dates: { // EligibilityCheckEligibilityAndBenefitDateRanges
 * //               discharge: "<EligibilityCheckDateRange>",
 * //               period: "<EligibilityCheckDateRange>",
 * //               completion: "<EligibilityCheckDateRange>",
 * //               coordinationOfBenefits: "<EligibilityCheckDateRange>",
 * //               plan: "<EligibilityCheckDateRange>",
 * //               benefit: "<EligibilityCheckDateRange>",
 * //               primaryCareProvider: "<EligibilityCheckDateRange>",
 * //               latestVisit: "<EligibilityCheckDateRange>",
 * //               added: "<EligibilityCheckDateRange>",
 * //               eligibility: "<EligibilityCheckDateRange>",
 * //               admission: "<EligibilityCheckDateRange>",
 * //               service: "<EligibilityCheckDateRange>",
 * //               dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //               status: "<EligibilityCheckDateRange>",
 * //             },
 * //             relatedEntities: [ // EligibilityCheckRelatedEntities
 * //               { // EligibilityCheckRelatedEntity
 * //                 name: {//  Union: only one key present
 * //                   person: {
 * //                     firstName: "STRING_VALUE",
 * //                     lastName: "STRING_VALUE",
 * //                     middleName: "STRING_VALUE",
 * //                     suffix: "STRING_VALUE",
 * //                   },
 * //                   organization: "STRING_VALUE",
 * //                 },
 * //                 type: "CONTRACTED_SERVICE_PROVIDER" || "PREFERRED_PROVIDER_ORGANIZATION" || "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "OTHER_PHYSICIAN" || "FACILITY" || "GATEWAY_PROVIDER" || "GROUP" || "INDEPENDENT_PHYSICIANS_ASSOCIATION" || "INSURED_OR_SUBSCRIBER" || "LEGAL_REPRESENTATIVE" || "ORIGIN_CARRIER" || "PRIMARY_CARE_PROVIDER" || "PRIOR_INSURANCE_CARRIER" || "PLAN_SPONSOR" || "PAYER" || "PRIMARY_PAYER" || "SECONDARY_PAYER" || "TERTIARY_PAYER" || "PARTY_PERFORMING_VERIFICATION" || "VENDOR" || "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE" || "UTILIZATION_MANAGEMENT_ORGANIZATION" || "MANAGED_CARE_ORGANIZATION", // required
 * //                 relationship: "PARENT" || "CHILD" || "DOMESTIC_PARTNER" || "SPOUSE" || "EMPLOYEE" || "OTHER" || "UNKNOWN_RELATIONSHIP",
 * //                 address: {
 * //                   addressLine1: "STRING_VALUE",
 * //                   addressLine2: "STRING_VALUE",
 * //                   city: "STRING_VALUE",
 * //                   state: "STRING_VALUE",
 * //                   postalCode: "STRING_VALUE",
 * //                   country: "STRING_VALUE",
 * //                   countrySubdivision: "STRING_VALUE",
 * //                 },
 * //                 provider: {
 * //                   code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 * //                   reference: "STRING_VALUE",
 * //                 },
 * //                 contacts: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     phoneNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     emails: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     faxNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     ediNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     urls: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 ein: "STRING_VALUE",
 * //                 ssn: "STRING_VALUE",
 * //                 etin: "STRING_VALUE",
 * //                 facilityId: "STRING_VALUE",
 * //                 tin: "STRING_VALUE",
 * //                 memberId: "STRING_VALUE",
 * //                 naicId: "STRING_VALUE",
 * //                 payerId: "STRING_VALUE",
 * //                 pharmacyProcessorNumber: "STRING_VALUE",
 * //                 serviceProviderNumber: "STRING_VALUE",
 * //                 npi: "STRING_VALUE",
 * //               },
 * //             ],
 * //             placesOfService: [ // EligibilityCheckPlacesOfService
 * //               { // EligibilityCheckPlaceOfService
 * //                 code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99",
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             additionalInformation: { // EligibilityCheckEligibilityAndBenefitAdditionalInformation
 * //               plan: "<EligibilityCheckAdditionalInformationWithName>",
 * //               group: "<EligibilityCheckAdditionalInformationWithName>",
 * //               groupOrPolicyNumber: "STRING_VALUE",
 * //               memberId: "STRING_VALUE",
 * //               familyUnitNumber: "STRING_VALUE",
 * //               referralNumber: "STRING_VALUE",
 * //               alternativeListId: "STRING_VALUE",
 * //               coverageListId: "STRING_VALUE",
 * //               mbi: "STRING_VALUE",
 * //               drugFormularyNumber: "STRING_VALUE",
 * //               priorAuthNumber: "STRING_VALUE",
 * //               insurancePolicyNumber: "STRING_VALUE",
 * //               medicalAssistanceCategory: "STRING_VALUE",
 * //               medicaidRecipientId: "STRING_VALUE",
 * //             },
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: { // EligibilityCheckDiagnosis
 * //               codeSystem: "ICD-10-CM", // required
 * //               codes: [ // EligibilityCheckDiagnosisCodes // required
 * //                 { // EligibilityCheckDiagnosisCode
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             status: "ACTIVE_COVERAGE" || "ACTIVE_FULL_RISK_CAPITATION" || "ACTIVE_SERVICES_CAPITATED" || "ACTIVE_SERVICES_CAPITATED_TO_PRIMARY_CARE_PROVIDER" || "ACTIVE_PENDING_INVESTIGATION" || "INACTIVE" || "INACTIVE_PENDING_ELIGIBILITY_UPDATE" || "INACTIVE_PENDING_INVESTIGATION", // required
 * //           },
 * //         ],
 * //         coInsurance: [ // EligibilityCheckCoInsurances
 * //           { // EligibilityCheckCoInsurance
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: {
 * //               indicator: "IN_NETWORK" || "OUT_OF_NETWORK" || "IN_AND_OUT_OF_NETWORK",
 * //               id: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: {
 * //               value: "STRING_VALUE",
 * //               definition: "STRING_VALUE",
 * //               system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS",
 * //               range: {
 * //                 start: {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //                 end: {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             messages: [
 * //               "STRING_VALUE",
 * //             ],
 * //             serviceLimits: [
 * //               {//  Union: only one key present
 * //                 ageMaximum: Number("int"),
 * //                 ageMinimum: Number("int"),
 * //                 delivery: {
 * //                   quantity: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "UNITS" || "HOURS" || "MONTH" || "VISITS",
 * //                   },
 * //                   period: {
 * //                     value: Number("long"),
 * //                     qualifier: "HOUR" || "DAY" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK",
 * //                   },
 * //                   frequency: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "MONTHS" || "VISIT" || "WEEK" || "YEARS",
 * //                   },
 * //                   delivery: {
 * //                     schedule: "FIRST_WEEK_OF_THE_MONTH" || "SECOND_WEEK_OF_THE_MONTH" || "THIRD_WEEK_OF_THE_MONTH" || "FOURTH_WEEK_OF_THE_MONTH" || "FIFTH_WEEK_OF_THE_MONTH" || "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH" || "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH" || "FIRST_WORKING_DAY_OF_PERIOD" || "LAST_WORKING_DAY_OF_PERIOD" || "MONDAY_THROUGH_FRIDAY" || "MONDAY_THROUGH_SATURDAY" || "MONDAY_THROUGH_SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY" || "MONDAY_THROUGH_THURSDAY" || "IMMEDIATELY" || "AS_DIRECTED" || "DAILY_MONDAY_THROUGH_FRIDAY" || "HALF_MONDAY_AND_HALF_THURSDAY" || "HALF_TUESDAY_AND_HALF_THURSDAY" || "HALF_WEDNESDAY_AND_HALF_FRIDAY" || "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY" || "TUESDAY_THROUGH_FRIDAY" || "MONDAY_TUESDAY_AND_THURSDAY" || "MONDAY_TUESDAY_AND_FRIDAY" || "WEDNESDAY_AND_THURSDAY" || "MONDAY_WEDNESDAY_AND_THURSDAY" || "TUESDAY_THURSDAY_AND_FRIDAY" || "HALF_TUESDAY_AND_HALF_FRIDAY" || "HALF_MONDAY_AND_HALF_WEDNESDAY" || "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY" || "WHENEVER_NECESSARY" || "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY" || "NONE",
 * //                     pattern: "FIRST_SHIFT" || "SECOND_SHIFT" || "THIRD_SHIFT" || "AM" || "PM" || "AS_DIRECTED" || "ANY_SHIFT" || "NONE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             dates: {
 * //               discharge: "<EligibilityCheckDateRange>",
 * //               period: "<EligibilityCheckDateRange>",
 * //               completion: "<EligibilityCheckDateRange>",
 * //               coordinationOfBenefits: "<EligibilityCheckDateRange>",
 * //               plan: "<EligibilityCheckDateRange>",
 * //               benefit: "<EligibilityCheckDateRange>",
 * //               primaryCareProvider: "<EligibilityCheckDateRange>",
 * //               latestVisit: "<EligibilityCheckDateRange>",
 * //               added: "<EligibilityCheckDateRange>",
 * //               eligibility: "<EligibilityCheckDateRange>",
 * //               admission: "<EligibilityCheckDateRange>",
 * //               service: "<EligibilityCheckDateRange>",
 * //               dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //               status: "<EligibilityCheckDateRange>",
 * //             },
 * //             relatedEntities: [
 * //               {
 * //                 name: {//  Union: only one key present
 * //                   person: "<EligibilityCheckPersonName>",
 * //                   organization: "STRING_VALUE",
 * //                 },
 * //                 type: "CONTRACTED_SERVICE_PROVIDER" || "PREFERRED_PROVIDER_ORGANIZATION" || "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "OTHER_PHYSICIAN" || "FACILITY" || "GATEWAY_PROVIDER" || "GROUP" || "INDEPENDENT_PHYSICIANS_ASSOCIATION" || "INSURED_OR_SUBSCRIBER" || "LEGAL_REPRESENTATIVE" || "ORIGIN_CARRIER" || "PRIMARY_CARE_PROVIDER" || "PRIOR_INSURANCE_CARRIER" || "PLAN_SPONSOR" || "PAYER" || "PRIMARY_PAYER" || "SECONDARY_PAYER" || "TERTIARY_PAYER" || "PARTY_PERFORMING_VERIFICATION" || "VENDOR" || "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE" || "UTILIZATION_MANAGEMENT_ORGANIZATION" || "MANAGED_CARE_ORGANIZATION", // required
 * //                 relationship: "PARENT" || "CHILD" || "DOMESTIC_PARTNER" || "SPOUSE" || "EMPLOYEE" || "OTHER" || "UNKNOWN_RELATIONSHIP",
 * //                 address: {
 * //                   addressLine1: "STRING_VALUE",
 * //                   addressLine2: "STRING_VALUE",
 * //                   city: "STRING_VALUE",
 * //                   state: "STRING_VALUE",
 * //                   postalCode: "STRING_VALUE",
 * //                   country: "STRING_VALUE",
 * //                   countrySubdivision: "STRING_VALUE",
 * //                 },
 * //                 provider: {
 * //                   code: "ADMITTING" || "ATTENDING" || "BILLING" || "CONSULTING" || "COVERING" || "HOSPITAL" || "HOME_HEALTH_CARE" || "LABORATORY" || "OTHER_PHYSICIAN" || "PHARMACIST" || "PHARMACY" || "PRIMARY_CARE_PHYSICIAN" || "PERFORMING" || "RURAL_HEALTH_CLINIC" || "REFERRING" || "SUBMITTING" || "SKILLED_NURSING_FACILITY" || "SUPERVISING",
 * //                   reference: "STRING_VALUE",
 * //                 },
 * //                 contacts: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     phoneNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     emails: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     faxNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     ediNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     urls: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 ein: "STRING_VALUE",
 * //                 ssn: "STRING_VALUE",
 * //                 etin: "STRING_VALUE",
 * //                 facilityId: "STRING_VALUE",
 * //                 tin: "STRING_VALUE",
 * //                 memberId: "STRING_VALUE",
 * //                 naicId: "STRING_VALUE",
 * //                 payerId: "STRING_VALUE",
 * //                 pharmacyProcessorNumber: "STRING_VALUE",
 * //                 serviceProviderNumber: "STRING_VALUE",
 * //                 npi: "STRING_VALUE",
 * //               },
 * //             ],
 * //             placesOfService: [
 * //               {
 * //                 code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99",
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             additionalInformation: {
 * //               plan: "<EligibilityCheckAdditionalInformationWithName>",
 * //               group: "<EligibilityCheckAdditionalInformationWithName>",
 * //               groupOrPolicyNumber: "STRING_VALUE",
 * //               memberId: "STRING_VALUE",
 * //               familyUnitNumber: "STRING_VALUE",
 * //               referralNumber: "STRING_VALUE",
 * //               alternativeListId: "STRING_VALUE",
 * //               coverageListId: "STRING_VALUE",
 * //               mbi: "STRING_VALUE",
 * //               drugFormularyNumber: "STRING_VALUE",
 * //               priorAuthNumber: "STRING_VALUE",
 * //               insurancePolicyNumber: "STRING_VALUE",
 * //               medicalAssistanceCategory: "STRING_VALUE",
 * //               medicaidRecipientId: "STRING_VALUE",
 * //             },
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: {
 * //               codeSystem: "ICD-10-CM", // required
 * //               codes: [ // required
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             percent: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         coPayment: [ // EligibilityCheckCoPayments
 * //           { // EligibilityCheckCoPayment
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: {
 * //               indicator: "IN_NETWORK" || "OUT_OF_NETWORK" || "IN_AND_OUT_OF_NETWORK",
 * //               id: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: {
 * //               value: "STRING_VALUE",
 * //               definition: "STRING_VALUE",
 * //               system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS",
 * //               range: {
 * //                 start: {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //                 end: "<EligibilityCheckServiceCode>", // required
 * //               },
 * //             },
 * //             messages: [
 * //               "STRING_VALUE",
 * //             ],
 * //             serviceLimits: [
 * //               {//  Union: only one key present
 * //                 ageMaximum: Number("int"),
 * //                 ageMinimum: Number("int"),
 * //                 delivery: {
 * //                   quantity: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "UNITS" || "HOURS" || "MONTH" || "VISITS",
 * //                   },
 * //                   period: {
 * //                     value: Number("long"),
 * //                     qualifier: "HOUR" || "DAY" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK",
 * //                   },
 * //                   frequency: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "MONTHS" || "VISIT" || "WEEK" || "YEARS",
 * //                   },
 * //                   delivery: {
 * //                     schedule: "FIRST_WEEK_OF_THE_MONTH" || "SECOND_WEEK_OF_THE_MONTH" || "THIRD_WEEK_OF_THE_MONTH" || "FOURTH_WEEK_OF_THE_MONTH" || "FIFTH_WEEK_OF_THE_MONTH" || "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH" || "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH" || "FIRST_WORKING_DAY_OF_PERIOD" || "LAST_WORKING_DAY_OF_PERIOD" || "MONDAY_THROUGH_FRIDAY" || "MONDAY_THROUGH_SATURDAY" || "MONDAY_THROUGH_SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY" || "MONDAY_THROUGH_THURSDAY" || "IMMEDIATELY" || "AS_DIRECTED" || "DAILY_MONDAY_THROUGH_FRIDAY" || "HALF_MONDAY_AND_HALF_THURSDAY" || "HALF_TUESDAY_AND_HALF_THURSDAY" || "HALF_WEDNESDAY_AND_HALF_FRIDAY" || "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY" || "TUESDAY_THROUGH_FRIDAY" || "MONDAY_TUESDAY_AND_THURSDAY" || "MONDAY_TUESDAY_AND_FRIDAY" || "WEDNESDAY_AND_THURSDAY" || "MONDAY_WEDNESDAY_AND_THURSDAY" || "TUESDAY_THURSDAY_AND_FRIDAY" || "HALF_TUESDAY_AND_HALF_FRIDAY" || "HALF_MONDAY_AND_HALF_WEDNESDAY" || "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY" || "WHENEVER_NECESSARY" || "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY" || "NONE",
 * //                     pattern: "FIRST_SHIFT" || "SECOND_SHIFT" || "THIRD_SHIFT" || "AM" || "PM" || "AS_DIRECTED" || "ANY_SHIFT" || "NONE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             dates: {
 * //               discharge: "<EligibilityCheckDateRange>",
 * //               period: "<EligibilityCheckDateRange>",
 * //               completion: "<EligibilityCheckDateRange>",
 * //               coordinationOfBenefits: "<EligibilityCheckDateRange>",
 * //               plan: "<EligibilityCheckDateRange>",
 * //               benefit: "<EligibilityCheckDateRange>",
 * //               primaryCareProvider: "<EligibilityCheckDateRange>",
 * //               latestVisit: "<EligibilityCheckDateRange>",
 * //               added: "<EligibilityCheckDateRange>",
 * //               eligibility: "<EligibilityCheckDateRange>",
 * //               admission: "<EligibilityCheckDateRange>",
 * //               service: "<EligibilityCheckDateRange>",
 * //               dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //               status: "<EligibilityCheckDateRange>",
 * //             },
 * //             relatedEntities: [
 * //               {
 * //                 name: "<EligibilityCheckPersonOrOrganizationName>",
 * //                 type: "CONTRACTED_SERVICE_PROVIDER" || "PREFERRED_PROVIDER_ORGANIZATION" || "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "OTHER_PHYSICIAN" || "FACILITY" || "GATEWAY_PROVIDER" || "GROUP" || "INDEPENDENT_PHYSICIANS_ASSOCIATION" || "INSURED_OR_SUBSCRIBER" || "LEGAL_REPRESENTATIVE" || "ORIGIN_CARRIER" || "PRIMARY_CARE_PROVIDER" || "PRIOR_INSURANCE_CARRIER" || "PLAN_SPONSOR" || "PAYER" || "PRIMARY_PAYER" || "SECONDARY_PAYER" || "TERTIARY_PAYER" || "PARTY_PERFORMING_VERIFICATION" || "VENDOR" || "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE" || "UTILIZATION_MANAGEMENT_ORGANIZATION" || "MANAGED_CARE_ORGANIZATION", // required
 * //                 relationship: "PARENT" || "CHILD" || "DOMESTIC_PARTNER" || "SPOUSE" || "EMPLOYEE" || "OTHER" || "UNKNOWN_RELATIONSHIP",
 * //                 address: "<EligibilityCheckAddress>",
 * //                 provider: "<EligibilityCheckEntityProvider>",
 * //                 contacts: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     phoneNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     emails: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     faxNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     ediNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     urls: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 ein: "STRING_VALUE",
 * //                 ssn: "STRING_VALUE",
 * //                 etin: "STRING_VALUE",
 * //                 facilityId: "STRING_VALUE",
 * //                 tin: "STRING_VALUE",
 * //                 memberId: "STRING_VALUE",
 * //                 naicId: "STRING_VALUE",
 * //                 payerId: "STRING_VALUE",
 * //                 pharmacyProcessorNumber: "STRING_VALUE",
 * //                 serviceProviderNumber: "STRING_VALUE",
 * //                 npi: "STRING_VALUE",
 * //               },
 * //             ],
 * //             placesOfService: [
 * //               {
 * //                 code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99",
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             additionalInformation: {
 * //               plan: "<EligibilityCheckAdditionalInformationWithName>",
 * //               group: "<EligibilityCheckAdditionalInformationWithName>",
 * //               groupOrPolicyNumber: "STRING_VALUE",
 * //               memberId: "STRING_VALUE",
 * //               familyUnitNumber: "STRING_VALUE",
 * //               referralNumber: "STRING_VALUE",
 * //               alternativeListId: "STRING_VALUE",
 * //               coverageListId: "STRING_VALUE",
 * //               mbi: "STRING_VALUE",
 * //               drugFormularyNumber: "STRING_VALUE",
 * //               priorAuthNumber: "STRING_VALUE",
 * //               insurancePolicyNumber: "STRING_VALUE",
 * //               medicalAssistanceCategory: "STRING_VALUE",
 * //               medicaidRecipientId: "STRING_VALUE",
 * //             },
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: {
 * //               codeSystem: "ICD-10-CM", // required
 * //               codes: [ // required
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE", // required
 * //             quantity: { // EligibilityCheckQuantity
 * //               value: "STRING_VALUE",
 * //               qualifier: "MINIMUM" || "QUANTITY_USED" || "COVERED_ACTUAL" || "COVERED_ESTIMATED" || "NUMBER_OF_CO_INSURANCE_DAYS" || "DEDUCTIBLE_BLOOD_UNITS" || "DAYS" || "HOURS" || "LIFE_TIME_RESERVE_ACTUAL" || "LIFE_TIME_RESERVE_ESTIMATED" || "MAXIMUM" || "MONTH" || "NUMBER_OF_SERVICES_OR_PROCEDURES" || "QUANTITY_APPROVED" || "VISITS" || "YEARS",
 * //             },
 * //           },
 * //         ],
 * //         deductible: [ // EligibilityCheckDeductibles
 * //           { // EligibilityCheckDeductible
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: {
 * //               indicator: "IN_NETWORK" || "OUT_OF_NETWORK" || "IN_AND_OUT_OF_NETWORK",
 * //               id: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: {
 * //               value: "STRING_VALUE",
 * //               definition: "STRING_VALUE",
 * //               system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS",
 * //               range: {
 * //                 start: "<EligibilityCheckServiceCode>", // required
 * //                 end: "<EligibilityCheckServiceCode>", // required
 * //               },
 * //             },
 * //             messages: [
 * //               "STRING_VALUE",
 * //             ],
 * //             serviceLimits: [
 * //               {//  Union: only one key present
 * //                 ageMaximum: Number("int"),
 * //                 ageMinimum: Number("int"),
 * //                 delivery: {
 * //                   quantity: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "UNITS" || "HOURS" || "MONTH" || "VISITS",
 * //                   },
 * //                   period: {
 * //                     value: Number("long"),
 * //                     qualifier: "HOUR" || "DAY" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK",
 * //                   },
 * //                   frequency: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "MONTHS" || "VISIT" || "WEEK" || "YEARS",
 * //                   },
 * //                   delivery: {
 * //                     schedule: "FIRST_WEEK_OF_THE_MONTH" || "SECOND_WEEK_OF_THE_MONTH" || "THIRD_WEEK_OF_THE_MONTH" || "FOURTH_WEEK_OF_THE_MONTH" || "FIFTH_WEEK_OF_THE_MONTH" || "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH" || "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH" || "FIRST_WORKING_DAY_OF_PERIOD" || "LAST_WORKING_DAY_OF_PERIOD" || "MONDAY_THROUGH_FRIDAY" || "MONDAY_THROUGH_SATURDAY" || "MONDAY_THROUGH_SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY" || "MONDAY_THROUGH_THURSDAY" || "IMMEDIATELY" || "AS_DIRECTED" || "DAILY_MONDAY_THROUGH_FRIDAY" || "HALF_MONDAY_AND_HALF_THURSDAY" || "HALF_TUESDAY_AND_HALF_THURSDAY" || "HALF_WEDNESDAY_AND_HALF_FRIDAY" || "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY" || "TUESDAY_THROUGH_FRIDAY" || "MONDAY_TUESDAY_AND_THURSDAY" || "MONDAY_TUESDAY_AND_FRIDAY" || "WEDNESDAY_AND_THURSDAY" || "MONDAY_WEDNESDAY_AND_THURSDAY" || "TUESDAY_THURSDAY_AND_FRIDAY" || "HALF_TUESDAY_AND_HALF_FRIDAY" || "HALF_MONDAY_AND_HALF_WEDNESDAY" || "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY" || "WHENEVER_NECESSARY" || "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY" || "NONE",
 * //                     pattern: "FIRST_SHIFT" || "SECOND_SHIFT" || "THIRD_SHIFT" || "AM" || "PM" || "AS_DIRECTED" || "ANY_SHIFT" || "NONE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             dates: {
 * //               discharge: "<EligibilityCheckDateRange>",
 * //               period: "<EligibilityCheckDateRange>",
 * //               completion: "<EligibilityCheckDateRange>",
 * //               coordinationOfBenefits: "<EligibilityCheckDateRange>",
 * //               plan: "<EligibilityCheckDateRange>",
 * //               benefit: "<EligibilityCheckDateRange>",
 * //               primaryCareProvider: "<EligibilityCheckDateRange>",
 * //               latestVisit: "<EligibilityCheckDateRange>",
 * //               added: "<EligibilityCheckDateRange>",
 * //               eligibility: "<EligibilityCheckDateRange>",
 * //               admission: "<EligibilityCheckDateRange>",
 * //               service: "<EligibilityCheckDateRange>",
 * //               dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //               status: "<EligibilityCheckDateRange>",
 * //             },
 * //             relatedEntities: [
 * //               {
 * //                 name: "<EligibilityCheckPersonOrOrganizationName>",
 * //                 type: "CONTRACTED_SERVICE_PROVIDER" || "PREFERRED_PROVIDER_ORGANIZATION" || "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "OTHER_PHYSICIAN" || "FACILITY" || "GATEWAY_PROVIDER" || "GROUP" || "INDEPENDENT_PHYSICIANS_ASSOCIATION" || "INSURED_OR_SUBSCRIBER" || "LEGAL_REPRESENTATIVE" || "ORIGIN_CARRIER" || "PRIMARY_CARE_PROVIDER" || "PRIOR_INSURANCE_CARRIER" || "PLAN_SPONSOR" || "PAYER" || "PRIMARY_PAYER" || "SECONDARY_PAYER" || "TERTIARY_PAYER" || "PARTY_PERFORMING_VERIFICATION" || "VENDOR" || "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE" || "UTILIZATION_MANAGEMENT_ORGANIZATION" || "MANAGED_CARE_ORGANIZATION", // required
 * //                 relationship: "PARENT" || "CHILD" || "DOMESTIC_PARTNER" || "SPOUSE" || "EMPLOYEE" || "OTHER" || "UNKNOWN_RELATIONSHIP",
 * //                 address: "<EligibilityCheckAddress>",
 * //                 provider: "<EligibilityCheckEntityProvider>",
 * //                 contacts: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     phoneNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     emails: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     faxNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     ediNumbers: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     urls: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 ein: "STRING_VALUE",
 * //                 ssn: "STRING_VALUE",
 * //                 etin: "STRING_VALUE",
 * //                 facilityId: "STRING_VALUE",
 * //                 tin: "STRING_VALUE",
 * //                 memberId: "STRING_VALUE",
 * //                 naicId: "STRING_VALUE",
 * //                 payerId: "STRING_VALUE",
 * //                 pharmacyProcessorNumber: "STRING_VALUE",
 * //                 serviceProviderNumber: "STRING_VALUE",
 * //                 npi: "STRING_VALUE",
 * //               },
 * //             ],
 * //             placesOfService: [
 * //               {
 * //                 code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99",
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             additionalInformation: {
 * //               plan: "<EligibilityCheckAdditionalInformationWithName>",
 * //               group: "<EligibilityCheckAdditionalInformationWithName>",
 * //               groupOrPolicyNumber: "STRING_VALUE",
 * //               memberId: "STRING_VALUE",
 * //               familyUnitNumber: "STRING_VALUE",
 * //               referralNumber: "STRING_VALUE",
 * //               alternativeListId: "STRING_VALUE",
 * //               coverageListId: "STRING_VALUE",
 * //               mbi: "STRING_VALUE",
 * //               drugFormularyNumber: "STRING_VALUE",
 * //               priorAuthNumber: "STRING_VALUE",
 * //               insurancePolicyNumber: "STRING_VALUE",
 * //               medicalAssistanceCategory: "STRING_VALUE",
 * //               medicaidRecipientId: "STRING_VALUE",
 * //             },
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: {
 * //               codeSystem: "ICD-10-CM", // required
 * //               codes: [ // required
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE", // required
 * //             quantity: {
 * //               value: "STRING_VALUE",
 * //               qualifier: "MINIMUM" || "QUANTITY_USED" || "COVERED_ACTUAL" || "COVERED_ESTIMATED" || "NUMBER_OF_CO_INSURANCE_DAYS" || "DEDUCTIBLE_BLOOD_UNITS" || "DAYS" || "HOURS" || "LIFE_TIME_RESERVE_ACTUAL" || "LIFE_TIME_RESERVE_ESTIMATED" || "MAXIMUM" || "MONTH" || "NUMBER_OF_SERVICES_OR_PROCEDURES" || "QUANTITY_APPROVED" || "VISITS" || "YEARS",
 * //             },
 * //           },
 * //         ],
 * //         outOfPocket: [ // EligibilityCheckOutOfPockets
 * //           { // EligibilityCheckOutOfPocket
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: {
 * //               indicator: "IN_NETWORK" || "OUT_OF_NETWORK" || "IN_AND_OUT_OF_NETWORK",
 * //               id: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: {
 * //               value: "STRING_VALUE",
 * //               definition: "STRING_VALUE",
 * //               system: "STC" || "CDT" || "CPT" || "NDC" || "HCPCS" || "ICD-10-PCS",
 * //               range: {
 * //                 start: "<EligibilityCheckServiceCode>", // required
 * //                 end: "<EligibilityCheckServiceCode>", // required
 * //               },
 * //             },
 * //             messages: [
 * //               "STRING_VALUE",
 * //             ],
 * //             serviceLimits: [
 * //               {//  Union: only one key present
 * //                 ageMaximum: Number("int"),
 * //                 ageMinimum: Number("int"),
 * //                 delivery: {
 * //                   quantity: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "UNITS" || "HOURS" || "MONTH" || "VISITS",
 * //                   },
 * //                   period: {
 * //                     value: Number("long"),
 * //                     qualifier: "HOUR" || "DAY" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK",
 * //                   },
 * //                   frequency: {
 * //                     value: "STRING_VALUE",
 * //                     qualifier: "DAYS" || "MONTHS" || "VISIT" || "WEEK" || "YEARS",
 * //                   },
 * //                   delivery: {
 * //                     schedule: "FIRST_WEEK_OF_THE_MONTH" || "SECOND_WEEK_OF_THE_MONTH" || "THIRD_WEEK_OF_THE_MONTH" || "FOURTH_WEEK_OF_THE_MONTH" || "FIFTH_WEEK_OF_THE_MONTH" || "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH" || "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH" || "FIRST_WORKING_DAY_OF_PERIOD" || "LAST_WORKING_DAY_OF_PERIOD" || "MONDAY_THROUGH_FRIDAY" || "MONDAY_THROUGH_SATURDAY" || "MONDAY_THROUGH_SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY" || "MONDAY_THROUGH_THURSDAY" || "IMMEDIATELY" || "AS_DIRECTED" || "DAILY_MONDAY_THROUGH_FRIDAY" || "HALF_MONDAY_AND_HALF_THURSDAY" || "HALF_TUESDAY_AND_HALF_THURSDAY" || "HALF_WEDNESDAY_AND_HALF_FRIDAY" || "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY" || "TUESDAY_THROUGH_FRIDAY" || "MONDAY_TUESDAY_AND_THURSDAY" || "MONDAY_TUESDAY_AND_FRIDAY" || "WEDNESDAY_AND_THURSDAY" || "MONDAY_WEDNESDAY_AND_THURSDAY" || "TUESDAY_THURSDAY_AND_FRIDAY" || "HALF_TUESDAY_AND_HALF_FRIDAY" || "HALF_MONDAY_AND_HALF_WEDNESDAY" || "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY" || "WHENEVER_NECESSARY" || "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY" || "NONE",
 * //                     pattern: "FIRST_SHIFT" || "SECOND_SHIFT" || "THIRD_SHIFT" || "AM" || "PM" || "AS_DIRECTED" || "ANY_SHIFT" || "NONE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             dates: {
 * //               discharge: "<EligibilityCheckDateRange>",
 * //               period: "<EligibilityCheckDateRange>",
 * //               completion: "<EligibilityCheckDateRange>",
 * //               coordinationOfBenefits: "<EligibilityCheckDateRange>",
 * //               plan: "<EligibilityCheckDateRange>",
 * //               benefit: "<EligibilityCheckDateRange>",
 * //               primaryCareProvider: "<EligibilityCheckDateRange>",
 * //               latestVisit: "<EligibilityCheckDateRange>",
 * //               added: "<EligibilityCheckDateRange>",
 * //               eligibility: "<EligibilityCheckDateRange>",
 * //               admission: "<EligibilityCheckDateRange>",
 * //               service: "<EligibilityCheckDateRange>",
 * //               dateOfLastUpdate: "<EligibilityCheckDateRange>",
 * //               status: "<EligibilityCheckDateRange>",
 * //             },
 * //             relatedEntities: [
 * //               {
 * //                 name: "<EligibilityCheckPersonOrOrganizationName>",
 * //                 type: "CONTRACTED_SERVICE_PROVIDER" || "PREFERRED_PROVIDER_ORGANIZATION" || "PROVIDER" || "THIRD_PARTY_ADMINISTRATOR" || "EMPLOYER" || "OTHER_PHYSICIAN" || "FACILITY" || "GATEWAY_PROVIDER" || "GROUP" || "INDEPENDENT_PHYSICIANS_ASSOCIATION" || "INSURED_OR_SUBSCRIBER" || "LEGAL_REPRESENTATIVE" || "ORIGIN_CARRIER" || "PRIMARY_CARE_PROVIDER" || "PRIOR_INSURANCE_CARRIER" || "PLAN_SPONSOR" || "PAYER" || "PRIMARY_PAYER" || "SECONDARY_PAYER" || "TERTIARY_PAYER" || "PARTY_PERFORMING_VERIFICATION" || "VENDOR" || "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE" || "UTILIZATION_MANAGEMENT_ORGANIZATION" || "MANAGED_CARE_ORGANIZATION", // required
 * //                 relationship: "PARENT" || "CHILD" || "DOMESTIC_PARTNER" || "SPOUSE" || "EMPLOYEE" || "OTHER" || "UNKNOWN_RELATIONSHIP",
 * //                 address: "<EligibilityCheckAddress>",
 * //                 provider: "<EligibilityCheckEntityProvider>",
 * //                 contacts: "<EligibilityCheckEntityContacts>",
 * //                 ein: "STRING_VALUE",
 * //                 ssn: "STRING_VALUE",
 * //                 etin: "STRING_VALUE",
 * //                 facilityId: "STRING_VALUE",
 * //                 tin: "STRING_VALUE",
 * //                 memberId: "STRING_VALUE",
 * //                 naicId: "STRING_VALUE",
 * //                 payerId: "STRING_VALUE",
 * //                 pharmacyProcessorNumber: "STRING_VALUE",
 * //                 serviceProviderNumber: "STRING_VALUE",
 * //                 npi: "STRING_VALUE",
 * //               },
 * //             ],
 * //             placesOfService: [
 * //               {
 * //                 code: "01" || "03" || "04" || "05" || "06" || "07" || "08" || "11" || "12" || "13" || "14" || "15" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "31" || "32" || "33" || "34" || "41" || "42" || "49" || "50" || "51" || "52" || "53" || "54" || "55" || "56" || "57" || "60" || "61" || "62" || "65" || "71" || "72" || "81" || "99",
 * //                 name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             additionalInformation: {
 * //               plan: "<EligibilityCheckAdditionalInformationWithName>",
 * //               group: "<EligibilityCheckAdditionalInformationWithName>",
 * //               groupOrPolicyNumber: "STRING_VALUE",
 * //               memberId: "STRING_VALUE",
 * //               familyUnitNumber: "STRING_VALUE",
 * //               referralNumber: "STRING_VALUE",
 * //               alternativeListId: "STRING_VALUE",
 * //               coverageListId: "STRING_VALUE",
 * //               mbi: "STRING_VALUE",
 * //               drugFormularyNumber: "STRING_VALUE",
 * //               priorAuthNumber: "STRING_VALUE",
 * //               insurancePolicyNumber: "STRING_VALUE",
 * //               medicalAssistanceCategory: "STRING_VALUE",
 * //               medicaidRecipientId: "STRING_VALUE",
 * //             },
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: {
 * //               codeSystem: "ICD-10-CM", // required
 * //               codes: [ // required
 * //                 {
 * //                   value: "STRING_VALUE", // required
 * //                   definition: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE", // required
 * //             quantity: {
 * //               value: "STRING_VALUE",
 * //               qualifier: "MINIMUM" || "QUANTITY_USED" || "COVERED_ACTUAL" || "COVERED_ESTIMATED" || "NUMBER_OF_CO_INSURANCE_DAYS" || "DEDUCTIBLE_BLOOD_UNITS" || "DAYS" || "HOURS" || "LIFE_TIME_RESERVE_ACTUAL" || "LIFE_TIME_RESERVE_ESTIMATED" || "MAXIMUM" || "MONTH" || "NUMBER_OF_SERVICES_OR_PROCEDURES" || "QUANTITY_APPROVED" || "VISITS" || "YEARS",
 * //             },
 * //           },
 * //         ],
 * //         costContainment: [ // EligibilityCheckCostContainments
 * //           { // EligibilityCheckCostContainment
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE", // required
 * //             quantity: {
 * //               value: "STRING_VALUE",
 * //               qualifier: "MINIMUM" || "QUANTITY_USED" || "COVERED_ACTUAL" || "COVERED_ESTIMATED" || "NUMBER_OF_CO_INSURANCE_DAYS" || "DEDUCTIBLE_BLOOD_UNITS" || "DAYS" || "HOURS" || "LIFE_TIME_RESERVE_ACTUAL" || "LIFE_TIME_RESERVE_ESTIMATED" || "MAXIMUM" || "MONTH" || "NUMBER_OF_SERVICES_OR_PROCEDURES" || "QUANTITY_APPROVED" || "VISITS" || "YEARS",
 * //             },
 * //           },
 * //         ],
 * //         spendDown: [ // EligibilityCheckSpendDowns
 * //           { // EligibilityCheckSpendDown
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE", // required
 * //             quantity: {
 * //               value: "STRING_VALUE",
 * //               qualifier: "MINIMUM" || "QUANTITY_USED" || "COVERED_ACTUAL" || "COVERED_ESTIMATED" || "NUMBER_OF_CO_INSURANCE_DAYS" || "DEDUCTIBLE_BLOOD_UNITS" || "DAYS" || "HOURS" || "LIFE_TIME_RESERVE_ACTUAL" || "LIFE_TIME_RESERVE_ESTIMATED" || "MAXIMUM" || "MONTH" || "NUMBER_OF_SERVICES_OR_PROCEDURES" || "QUANTITY_APPROVED" || "VISITS" || "YEARS",
 * //             },
 * //           },
 * //         ],
 * //         limitations: [ // EligibilityCheckLimitations
 * //           { // EligibilityCheckLimitation
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //             quantity: "<EligibilityCheckQuantity>",
 * //           },
 * //         ],
 * //         coverageBasis: [ // EligibilityCheckCoverageBases
 * //           { // EligibilityCheckCoverageBasis
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         benefitDescription: [ // EligibilityCheckBenefitDescriptions
 * //           { // EligibilityCheckBenefitDescription
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         exclusions: [ // EligibilityCheckExclusions
 * //           { // EligibilityCheckExclusion
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         unlimited: [ // EligibilityCheckUnlimiteds
 * //           { // EligibilityCheckUnlimited
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         nonCovered: [ // EligibilityCheckNonCovereds
 * //           { // EligibilityCheckNonCovered
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         reserve: [ // EligibilityCheckReserves
 * //           { // EligibilityCheckReserve
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         primaryCareProvider: [ // EligibilityCheckPrimaryCareProviders
 * //           { // EligibilityCheckPrimaryCareProvider
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         preExistingCondition: [ // EligibilityCheckPreExistingConditions
 * //           { // EligibilityCheckPreExistingCondition
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         managedCareCoordinator: [ // EligibilityCheckManagedCareCoordinators
 * //           { // EligibilityCheckManagedCareCoordinator
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         servicesRestrictedToFollowingProvider: [ // EligibilityCheckServicesRestrictedToFollowingProviders
 * //           { // EligibilityCheckServicesRestrictedToFollowingProvider
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         notDeemedMedicalNecessity: [ // EligibilityCheckNotDeemedMedicalNecessities
 * //           { // EligibilityCheckNotDeemedMedicalNecessity
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         benefitDisclaimer: [ // EligibilityCheckBenefitDisclaimers
 * //           { // EligibilityCheckBenefitDisclaimer
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         secondSurgicalOpinionRequired: [ // EligibilityCheckSecondSurgicalOpinionRequireds
 * //           { // EligibilityCheckSecondSurgicalOpinionRequired
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         otherOrAdditionalPayer: [ // EligibilityCheckOtherOrAdditionalPayers
 * //           { // EligibilityCheckOtherOrAdditionalPayer
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         priorYearsHistory: [ // EligibilityCheckPriorYearsHistories
 * //           { // EligibilityCheckPriorYearsHistory
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cardReportedStolen: [ // EligibilityCheckCardReportedStolens
 * //           { // EligibilityCheckCardReportedStolen
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         contactFollowingEntityForInformation: [ // EligibilityCheckContactFollowingEntityForInformations
 * //           { // EligibilityCheckContactFollowingEntityForInformation
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cannotProcess: [ // EligibilityCheckCannotProcesses
 * //           { // EligibilityCheckCannotProcess
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         otherSourceOfData: [ // EligibilityCheckOtherSourceOfDatas
 * //           { // EligibilityCheckOtherSourceOfData
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         healthCareFacility: [ // EligibilityCheckHealthCareFacilities
 * //           { // EligibilityCheckHealthCareFacility
 * //             coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //             insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //             network: "<EligibilityCheckNetwork>",
 * //             priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //             service: "<EligibilityCheckServiceOrProcedure>",
 * //             messages: "<EligibilityCheckMessages>",
 * //             serviceLimits: "<EligibilityCheckServiceLimits>",
 * //             dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //             relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //             placesOfService: "<EligibilityCheckPlacesOfService>",
 * //             additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //             planCoverageDescription: "STRING_VALUE",
 * //             diagnosis: "<EligibilityCheckDiagnosis>",
 * //             amount: "STRING_VALUE",
 * //             percent: "STRING_VALUE",
 * //           },
 * //         ],
 * //         invalidEntries: { // EligibilityCheckInvalidEntries
 * //           coInsurance: [ // EligibilityCheckInvalidBenefits
 * //             { // EligibilityCheckInvalidBenefit
 * //               coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //               insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //               network: "<EligibilityCheckNetwork>",
 * //               priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //               service: "<EligibilityCheckServiceOrProcedure>",
 * //               messages: "<EligibilityCheckMessages>",
 * //               serviceLimits: "<EligibilityCheckServiceLimits>",
 * //               dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //               relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //               placesOfService: "<EligibilityCheckPlacesOfService>",
 * //               additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //               planCoverageDescription: "STRING_VALUE",
 * //               diagnosis: "<EligibilityCheckDiagnosis>",
 * //               timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //               amount: "STRING_VALUE",
 * //               percent: "STRING_VALUE",
 * //               quantity: "<EligibilityCheckQuantity>",
 * //               invalidReasons: [ // EligibilityCheckInvalidEntryReasons // required
 * //                 { // EligibilityCheckInvalidEntryReason
 * //                   code: "MISSING_AMOUNT" || "MISSING_PERCENT" || "UNEXPECTED_AMOUNT" || "UNEXPECTED_PERCENT", // required
 * //                   description: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           coPayment: [
 * //             {
 * //               coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //               insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //               network: "<EligibilityCheckNetwork>",
 * //               priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //               service: "<EligibilityCheckServiceOrProcedure>",
 * //               messages: "<EligibilityCheckMessages>",
 * //               serviceLimits: "<EligibilityCheckServiceLimits>",
 * //               dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //               relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //               placesOfService: "<EligibilityCheckPlacesOfService>",
 * //               additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //               planCoverageDescription: "STRING_VALUE",
 * //               diagnosis: "<EligibilityCheckDiagnosis>",
 * //               timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //               amount: "STRING_VALUE",
 * //               percent: "STRING_VALUE",
 * //               quantity: "<EligibilityCheckQuantity>",
 * //               invalidReasons: [ // required
 * //                 {
 * //                   code: "MISSING_AMOUNT" || "MISSING_PERCENT" || "UNEXPECTED_AMOUNT" || "UNEXPECTED_PERCENT", // required
 * //                   description: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           deductible: [
 * //             {
 * //               coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //               insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //               network: "<EligibilityCheckNetwork>",
 * //               priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //               service: "<EligibilityCheckServiceOrProcedure>",
 * //               messages: "<EligibilityCheckMessages>",
 * //               serviceLimits: "<EligibilityCheckServiceLimits>",
 * //               dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //               relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //               placesOfService: "<EligibilityCheckPlacesOfService>",
 * //               additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //               planCoverageDescription: "STRING_VALUE",
 * //               diagnosis: "<EligibilityCheckDiagnosis>",
 * //               timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //               amount: "STRING_VALUE",
 * //               percent: "STRING_VALUE",
 * //               quantity: "<EligibilityCheckQuantity>",
 * //               invalidReasons: [ // required
 * //                 {
 * //                   code: "MISSING_AMOUNT" || "MISSING_PERCENT" || "UNEXPECTED_AMOUNT" || "UNEXPECTED_PERCENT", // required
 * //                   description: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           outOfPocket: [
 * //             {
 * //               coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //               insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //               network: "<EligibilityCheckNetwork>",
 * //               priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //               service: "<EligibilityCheckServiceOrProcedure>",
 * //               messages: "<EligibilityCheckMessages>",
 * //               serviceLimits: "<EligibilityCheckServiceLimits>",
 * //               dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //               relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //               placesOfService: "<EligibilityCheckPlacesOfService>",
 * //               additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //               planCoverageDescription: "STRING_VALUE",
 * //               diagnosis: "<EligibilityCheckDiagnosis>",
 * //               timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //               amount: "STRING_VALUE",
 * //               percent: "STRING_VALUE",
 * //               quantity: "<EligibilityCheckQuantity>",
 * //               invalidReasons: [ // required
 * //                 {
 * //                   code: "MISSING_AMOUNT" || "MISSING_PERCENT" || "UNEXPECTED_AMOUNT" || "UNEXPECTED_PERCENT", // required
 * //                   description: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           costContainment: [
 * //             {
 * //               coverageLevel: "CHILDREN_ONLY" || "DEPENDENTS_ONLY" || "EMPLOYEE_AND_CHILDREN" || "EMPLOYEE_ONLY" || "EMPLOYEE_AND_SPOUSE" || "FAMILY" || "INDIVIDUAL" || "SPOUSE_AND_CHILDREN" || "SPOUSE_ONLY", // required
 * //               insuranceType: "DISABILITY" || "MEDICARE_POINT_OF_SERVICE_POS" || "MULTIPLE_OPTIONS_HEALTH_PLAN" || "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN" || "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY" || "MEDICARE_SECONDARY_WORKERS_COMPENSATION" || "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY" || "MEDICARE_SECONDARY_BLACK_LUNG" || "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION" || "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP" || "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY" || "AUTO_INSURANCE_POLICY" || "COMMERCIAL" || "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA" || "MEDICARE_CONDITIONALLY_PRIMARY" || "DISABILITY_BENEFITS" || "EXCLUSIVE_PROVIDER_ORGANIZATION" || "FAMILY_OR_FRIENDS" || "GROUP_POLICY" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO" || "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK" || "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY" || "INDEMNITY" || "INDIVIDUAL_POLICY" || "LONG_TERM_CARE" || "LONG_TERM_POLICY" || "LIFE_INSURANCE" || "LITIGATION" || "MEDICARE_PART_A" || "MEDICARE_PART_B" || "MEDICAID" || "MEDIGAP_PART_A" || "MEDIGAP_PART_B" || "MEDICARE_PRIMARY" || "OTHER" || "PROPERTY_INSURANCE_PERSONAL" || "PERSONAL" || "PERSONAL_PAYMENT_CASH_NO_INSURANCE" || "PREFERRED_PROVIDER_ORGANIZATION_PPO" || "POINT_OF_SERVICE_POS" || "QUALIFIED_MEDICARE_BENEFICIARY" || "PROPERTY_INSURANCE_REAL" || "SUPPLEMENTAL_POLICY" || "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA" || "WORKERS_COMPENSATION" || "WRAP_UP_POLICY",
 * //               network: "<EligibilityCheckNetwork>",
 * //               priorAuthIndicator: "REQUIRED" || "NOT_REQUIRED",
 * //               service: "<EligibilityCheckServiceOrProcedure>",
 * //               messages: "<EligibilityCheckMessages>",
 * //               serviceLimits: "<EligibilityCheckServiceLimits>",
 * //               dates: "<EligibilityCheckEligibilityAndBenefitDateRanges>",
 * //               relatedEntities: "<EligibilityCheckRelatedEntities>",
 * //               placesOfService: "<EligibilityCheckPlacesOfService>",
 * //               additionalInformation: "<EligibilityCheckEligibilityAndBenefitAdditionalInformation>",
 * //               planCoverageDescription: "STRING_VALUE",
 * //               diagnosis: "<EligibilityCheckDiagnosis>",
 * //               timePeriod: "HOUR" || "DAY" || "24_HOURS" || "YEARS" || "SERVICE_YEAR" || "CALENDAR_YEAR" || "YEAR_TO_DATE" || "CONTRACT" || "EPISODE" || "VISIT" || "OUTLIER" || "REMAINING" || "EXCEEDED" || "NOT_EXCEEDED" || "LIFETIME" || "LIFETIME_REMAINING" || "MONTH" || "WEEK" || "ADMISSION",
 * //               amount: "STRING_VALUE",
 * //               percent: "STRING_VALUE",
 * //               quantity: "<EligibilityCheckQuantity>",
 * //               invalidReasons: [ // required
 * //                 {
 * //                   code: "MISSING_AMOUNT" || "MISSING_PERCENT" || "UNEXPECTED_AMOUNT" || "UNEXPECTED_PERCENT", // required
 * //                   description: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           spendDown: "<EligibilityCheckInvalidBenefits>",
 * //           limitations: "<EligibilityCheckInvalidBenefits>",
 * //         },
 * //       },
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // EligibilityCheckResponseErrorList
 * //     { // EligibilityCheckResponseError
 * //       code: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       followupAction: "STRING_VALUE", // required
 * //       location: "ENVELOPE" || "PAYER" || "PROVIDER" || "SUBSCRIBER" || "SUBSCRIBER_BENEFITS" || "DEPENDENT" || "DEPENDENT_BENEFITS", // required
 * //       possibleResolutions: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateEligibilityCheckCommandInput - {@link CreateEligibilityCheckCommandInput}
 * @returns {@link CreateEligibilityCheckCommandOutput}
 * @see {@link CreateEligibilityCheckCommandInput} for command's `input` shape.
 * @see {@link CreateEligibilityCheckCommandOutput} for command's `response` shape.
 * @see {@link StediClientResolvedConfig | config} for StediClient's `config` shape.
 *
 * @throws {@link EligibilityCheckSerializationException} (client fault)
 *  The request body could not be parsed.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  The request credentials are missing or not valid.
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
 * @example Eligibility check
 * ```javascript
 * //
 * const input = {
 *   encounter: {
 *     services: [
 *       {
 *         system: "STC",
 *         value: "30"
 *       }
 *     ]
 *   },
 *   payerId: "61101",
 *   provider: {
 *     name: {
 *       organization: "Provider Name"
 *     },
 *     npi: "1999999984"
 *   },
 *   subscriber: {
 *     dateOfBirth: "1975-05-05",
 *     memberId: "HUMANA123",
 *     name: {
 *       person: {
 *         firstName: "Jane",
 *         lastName: "Doe"
 *       }
 *     }
 *   }
 * };
 * const command = new CreateEligibilityCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eligibilitySearchId: "01a06d4a-a0fa-77d2-8b49-caa0546ed292",
 *   id: "ec_01a06d4a-a0fa-77d2-8b49-ca9a74c9888a",
 *   meta: {
 *     outboundTraceId: "01M1PMN87VXMME0ZV6SHJP3B9V",
 *     subscriberTraceNumbers: [
 *       {
 *         originatingCompanyIdentifier: "0101010101",
 *         referenceIdentification: "000011112222333",
 *         type: "CURRENT_TRANSACTION"
 *       }
 *     ],
 *     traceId: "01M1PMN87VXMME0ZV6SHJP3B9V"
 *   },
 *   payer: {
 *     identification: "61101",
 *     name: {
 *       organization: "HUMANA"
 *     },
 *     type: "PAYER"
 *   },
 *   payerId: "61101",
 *   plans: [
 *     {
 *       benefits: {
 *         benefitDisclaimer: [
 *           {
 *             coverageLevel: "INDIVIDUAL",
 *             messages: [
 *               "THIS IS ONLY AN ESTIMATION OF BENEFITS, AND ALL PAYMENTS ARE SUBJECT TO POLICY GUIDELINES, MEDICAL NECESSITY, AND MEMBER ELIGIBILITY AT THE TIME SERVICES ARE PERFORMED."
 *             ],
 *             network: {
 *               indicator: "IN_AND_OUT_OF_NETWORK"
 *             }
 *           }
 *         ],
 *         coInsurance: [
 *           {
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "INPATIENT HOSPITAL ROOM AND BOARD"
 *             ],
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             percent: "0",
 *             service: {
 *               definition: "Hospital - Room and Board",
 *               system: "STC",
 *               value: "49"
 *             },
 *             timePeriod: "ADMISSION"
 *           }
 *         ],
 *         coPayment: [
 *           {
 *             amount: "2000",
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "INPATIENT HOSPITAL ROOM AND BOARD"
 *             ],
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             service: {
 *               definition: "Hospital - Room and Board",
 *               system: "STC",
 *               value: "49"
 *             },
 *             timePeriod: "ADMISSION"
 *           },
 *           {
 *             amount: "100",
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "ER"
 *             ],
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             service: {
 *               definition: "Emergency Services",
 *               system: "STC",
 *               value: "86"
 *             },
 *             timePeriod: "EPISODE"
 *           }
 *         ],
 *         deductible: [
 *           {
 *             amount: "0",
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "INPATIENT HOSPITAL ROOM AND BOARD"
 *             ],
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             service: {
 *               definition: "Hospital - Room and Board",
 *               system: "STC",
 *               value: "49"
 *             }
 *           }
 *         ],
 *         limitations: [
 *           {
 *             coverageLevel: "INDIVIDUAL",
 *             messages: [
 *               "MAX DEPENDENT AGE"
 *             ],
 *             network: {
 *               indicator: "IN_AND_OUT_OF_NETWORK"
 *             },
 *             quantity: {
 *               qualifier: "YEARS",
 *               value: "26"
 *             },
 *             service: {
 *               definition: "Health Benefit Plan Coverage",
 *               system: "STC",
 *               value: "30"
 *             }
 *           }
 *         ],
 *         nonCovered: [
 *           {
 *             amount: "0",
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "VIEW CONTRACT FOR COVERAGE DETAILS"
 *             ],
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             service: {
 *               definition: "Dental Care",
 *               system: "STC",
 *               value: "35"
 *             }
 *           }
 *         ],
 *         otherSourceOfData: [
 *           {
 *             coverageLevel: "INDIVIDUAL",
 *             messages: [
 *               "NO DESCRIPTION PROVIDED"
 *             ],
 *             network: {
 *               indicator: "IN_AND_OUT_OF_NETWORK"
 *             }
 *           }
 *         ],
 *         outOfPocket: [
 *           {
 *             amount: "8000",
 *             coverageLevel: "INDIVIDUAL",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             network: {
 *               indicator: "IN_NETWORK"
 *             },
 *             service: {
 *               definition: "Health Benefit Plan Coverage",
 *               system: "STC",
 *               value: "30"
 *             },
 *             timePeriod: "CALENDAR_YEAR"
 *           }
 *         ],
 *         primaryCareProvider: [
 *           {
 *             coverageLevel: "INDIVIDUAL",
 *             network: {
 *               indicator: "IN_AND_OUT_OF_NETWORK"
 *             },
 *             relatedEntities: [
 *               {
 *                 address: {
 *                   addressLine1: "202 Main St",
 *                   city: "Tulsa",
 *                   postalCode: "74008",
 *                   state: "OK"
 *                 },
 *                 contacts: [
 *                   {
 *                     phoneNumbers: [
 *                       "9999999999"
 *                     ]
 *                   }
 *                 ],
 *                 name: {
 *                   person: {
 *                     firstName: "Dough",
 *                     lastName: "John"
 *                   }
 *                 },
 *                 type: "PRIMARY_CARE_PROVIDER"
 *               }
 *             ]
 *           }
 *         ],
 *         statuses: [
 *           {
 *             coverageLevel: "EMPLOYEE_ONLY",
 *             insuranceType: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
 *             messages: [
 *               "000 111",
 *               "Medicare PPO",
 *               "Member cannot be balanced billed for medical copayments, coinsurance or deductibles on this Plan. Member is cost-share protected by the state Medicaid. In WA if Medicaid is not cost-share protecting members, Humana will process the claim paying member cost share.",
 *               "THIS MEMBER MAY BE ELIGIBLE FOR A FREE FITNESS MEMBERSHIP."
 *             ],
 *             network: {
 *               indicator: "IN_AND_OUT_OF_NETWORK"
 *             },
 *             planCoverageDescription: "Humana Gold Plan",
 *             service: {
 *               definition: "Health Benefit Plan Coverage",
 *               system: "STC",
 *               value: "30"
 *             },
 *             status: "ACTIVE_COVERAGE"
 *           }
 *         ]
 *       }
 *     }
 *   ],
 *   provider: {
 *     name: {
 *       organization: "MEDICAL PROVIDER"
 *     },
 *     npi: "1999999984",
 *     type: "PROVIDER"
 *   },
 *   subscriber: {
 *     additionalInformation: {
 *       group: {
 *         name: "HUMANA INSURANCE COMPANY",
 *         number: "11223344"
 *       },
 *       mbi: "1A22BB3CC44"
 *     },
 *     address: {
 *       addressLine1: "101 MAIN ST",
 *       city: "ATLANTA",
 *       postalCode: "303010001",
 *       state: "GA"
 *     },
 *     dateOfBirth: "1975-05-05",
 *     dates: {
 *       plan: {
 *         start: "2024-01-01"
 *       },
 *       service: {
 *         start: "2024-09-17"
 *       }
 *     },
 *     gender: "FEMALE",
 *     memberId: "HUMANA123",
 *     name: {
 *       person: {
 *         firstName: "JANE",
 *         lastName: "DOE",
 *         middleName: "L"
 *       }
 *     }
 *   },
 *   x12: "ISA*00*          *00*          *ZZ*STEDI          *01*117151744      *260904*1640*^*00501*263887373*0*T*`~GS*HB*STEDI*117151744*20260904*164002*1*X*005010X279A1~ST*271*0001*005010X279A1~BHT*0022*11*01M1PMN87VXMME0ZV6SHJP3B9V*20260325*0901~HL*1**20*1~NM1*PR*2*HUMANA*****PI*61101~HL*2*1*21*1~NM1*1P*2*MEDICAL PROVIDER*****XX*1999999984~HL*3*2*22*0~TRN*1*000011112222333*0101010101~NM1*IL*1*DOE*JANE*L***MI*HUMANA123~REF*6P*11223344~REF*6P*11223344*HUMANA INSURANCE COMPANY~REF*F6*1A22BB3CC44~N3*101 MAIN ST~N4*ATLANTA*GA*303010001~DMG*D8*19750505*F~DTP*346*D8*20240101~DTP*472*D8*20240917~EB*1*EMP*30*PR*Humana Gold Plan*******W~MSG*000 111~MSG*Medicare PPO~MSG*Member cannot be balanced billed for medical copayments, coinsurance or deductibles on this Plan. Member is cost-share protected by the state Medicaid. In WA if Medicaid is not cost-share protecting members, Humana will process the claim paying member cost share.~MSG*THIS MEMBER MAY BE ELIGIBLE FOR A FREE FITNESS MEMBERSHIP.~EB*L***********W~LS*2120~NM1*P3*1*John*Dough~N3*202 Main St~N4*Tulsa*OK*74008~PER*IC**TE*9999999999~LE*2120~EB*F**30******YY*26**W~MSG*MAX DEPENDENT AGE~EB*F**30******YY*31**W~MSG*MAX STUDENT AGE~EB*L****AFFILIATION/CENTER*******W~LS*2120~NM1*GW*2*OK EMP PPO*****PI*34343434~LE*2120~EB*W***********W~MSG*NO DESCRIPTION PROVIDED~EB*1**1^54^33^98^88^UC^47^50^AL^MH^35^86^48*********W~EB*1*IND*1*PR***0*****Y~EB*A*IND*49*PR**36**0****Y~MSG*INPATIENT HOSPITAL ROOM AND BOARD~EB*B*IND*49*PR**36*2000*****Y~MSG*INPATIENT HOSPITAL ROOM AND BOARD~EB*C*IND*49*PR***0*****Y~MSG*INPATIENT HOSPITAL ROOM AND BOARD~EB*A*IND*48*PR**23**0****Y~MSG*INPATIENT HOSPITAL~EB*C*IND*48*PR***0*****Y~MSG*INPATIENT HOSPITAL~EB*A*IND*86*PR**23**0****Y~MSG*ER~EB*B*IND*86*PR**26*100*****Y~MSG*ER~EB*A*IND*86*PR**23**0****Y~MSG*ANESTHESIA~EB*B*IND*86*PR**26*100*****Y~MSG*ANESTHESIA~EB*C*IND*86*PR***0*****Y~MSG*ER~EB*C*IND*86*PR***0*****Y~MSG*ANESTHESIA~EB*I*IND*35*PR***0*****Y~MSG*VIEW CONTRACT FOR COVERAGE DETAILS~EB*A*IND*MH^98*PR**23**0****Y~MSG*TELEHEALTH VISIT PCP~III*ZZ*10~EB*A*IND*MH*PR**23**0****Y~MSG*TELEHEALTH VISIT SPECIALIST~III*ZZ*10~EB*C*IND*MH^98*PR***0*****Y~MSG*TELEHEALTH VISIT PCP~III*ZZ*10~EB*C*IND*MH^98*PR***0*****Y~MSG*TELEHEALTH VISIT SPECIALIST~III*ZZ*10~EB*1*IND*MH*PR***0*****Y~MSG*PHYSICIAN OFFICE VISIT SPECIALIST~EB*A*IND*AL*PR**23**0****Y~MSG*ROUTINE VISION EXAM~EB*F*IND*AL*PR**23*40*****Y~MSG*ROUTINE VISION EXAM~EB*C*IND*AL*PR***0*****Y~MSG*ROUTINE VISION EXAM~EB*A*IND*50*PR****.2****Y~MSG*OUTPATIENT HOSPITAL SURGERY~EB*A*IND*50*PR****.2****Y~MSG*OUTPATIENT HOSPITAL ANESTHESIA~EB*A*IND*50*PR****.2****Y~MSG*OUTPATIENT HOSPITAL MRI SCAN~EB*A*IND*50*PR****.2****Y~MSG*OUTPATIENT HOSPITAL CAT SCAN~EB*C*IND*50*PR***250*****Y~MSG*OUTPATIENT HOSPITAL SURGERY~EB*C*IND*50*PR***250*****Y~MSG*OUTPATIENT HOSPITAL ANESTHESIA~EB*C*IND*50*PR***250*****Y~MSG*OUTPATIENT HOSPITAL MRI SCAN~EB*C*IND*50*PR***250*****Y~MSG*OUTPATIENT HOSPITAL CAT SCAN~EB*1*IND*47*PR***0*****Y~MSG*INPATIENT HOSPITAL~EB*A*IND*UC*PR****.2****Y~MSG*PHYSICIAN OFFICE URGENT CARE~EB*A*IND*UC*PR****.2****Y~MSG*PHYSICIAN OFFICE PREFERRED URGENT CARE~EB*A*IND*UC*PR****.2****Y~MSG*TELEHEALTH URGENT CARE~EB*C*IND*UC*PR***0*****Y~MSG*PHYSICIAN OFFICE URGENT CARE~EB*C*IND*UC*PR***0*****Y~MSG*PHYSICIAN OFFICE PREFERRED URGENT CARE~EB*C*IND*UC*PR***0*****Y~MSG*TELEHEALTH URGENT CARE~EB*C**88****550*****Y~EB*C**88****0*****Y~EB*B**88****35*****Y~MSG*LEVEL 3~EB*B**88****35*****Y~EB*A*IND*98*PR****.2****Y~MSG*PHYSICIAN OFFICE VISIT PCP~EB*A*IND*98*PR****.2****Y~MSG*PHYSICIAN OFFICE VISIT SPECIALIST~EB*A*IND*98*PR****.2****Y~MSG*PHYSICIAN OFFICE VISIT FREESTANDING RAD CTR~EB*A*IND*98*PR****.2****Y~MSG*PHYSICIAN OFFICE VISIT COMP OUTPT REHAB FACILITY~EB*B*IND*98*PR**23*0*****Y~MSG*TELEHEALTH VISIT PCP~III*ZZ*10~EB*F*IND*98*PR**23**1****Y~MSG*TELEHEALTH VISIT PCP~III*ZZ*10~EB*A*IND*98*PR****.2****Y~MSG*TELEHEALTH VISIT SPECIALIST~III*ZZ*10~EB*C*IND*98*PR***250*****Y~MSG*PHYSICIAN OFFICE VISIT PCP~EB*C*IND*98*PR***250*****Y~MSG*PHYSICIAN OFFICE VISIT SPECIALIST~EB*C*IND*98*PR***250*****Y~MSG*PHYSICIAN OFFICE VISIT FREESTANDING RAD CTR~EB*C*IND*98*PR***250*****Y~MSG*PHYSICIAN OFFICE VISIT COMP OUTPT REHAB FACILITY~EB*I*IND*98*PR***0*****Y~MSG*PHYSICIAN OFFICE DOCTOR ON DEMAND NOT COVERED~EB*A*IND*33*PR****.2****Y~MSG*MEDICARE COVERED MANIPULATIONS~EB*I*IND*33*PR***0*****Y~MSG*MANIPULATIONS~EB*I*IND*33*PR***0*****Y~MSG*RADIOLOGY~EB*C*IND*33*PR***250*****Y~MSG*MEDICARE COVERED MANIPULATIONS~EB*C*IND*30*PR**23*250*****Y~MSG*SEE EXACT BENEFIT TO VERIFY IF DEDUCTIBLE APPLIES~EB*G*IND*30*PR**23*8000*****Y~EB*G*IND*30***24*200*****W~EB*G*IND*30***29*8500*****W~EB*G*IND*30***24*200*****Y~EB*G*IND*30***29*4000*****Y~EB*F*IND*30***24*30000*****W~EB*F*IND*30***29*9000000*****W~EB*C*IND*30***24*250*****W~EB*C*IND*30***29*0*****W~EB*F*IND*30***24*10000*****W~EB*F*IND*30***29*9000000*****W~EB*G*IND*30***24*400*****W~EB*G*IND*30***29*12000*****W~EB*G*IND*30***24*400*****Y~EB*G*IND*30***29*7500*****Y~EB*P***********W~MSG*THIS IS ONLY AN ESTIMATION OF BENEFITS, AND ALL PAYMENTS ARE SUBJECT TO POLICY GUIDELINES, MEDICAL NECESSITY, AND MEMBER ELIGIBILITY AT THE TIME SERVICES ARE PERFORMED.~SE*175*0001~GE*1*1~IEA*1*263887373~"
 * }
 * *\/
 * ```
 *
 * @example Invalid request
 * ```javascript
 * // The request is rejected before anything is sent to the payer. When the failure is specific to one or more members of the request, `errors` lists each one as a JSON pointer with its own message.
 * const input = {
 *   encounter: {
 *     services: [
 *       {
 *         system: "STC",
 *         value: "30"
 *       }
 *     ]
 *   },
 *   payerId: "NOTAPAYER",
 *   provider: {
 *     name: {
 *       organization: "Provider Name"
 *     },
 *     npi: "1999999984"
 *   },
 *   subscriber: {
 *     dateOfBirth: "1975-05-05",
 *     memberId: "HUMANA123",
 *     name: {
 *       person: {
 *         firstName: "Jane",
 *         lastName: "Doe"
 *       }
 *     }
 *   }
 * };
 * const command = new CreateEligibilityCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @internal
 */
export class CreateEligibilityCheckCommand extends command<CreateEligibilityCheckCommandInput, CreateEligibilityCheckCommandOutput>(
  _ep0,
  _mw0,
  "CreateEligibilityCheck",
  CreateEligibilityCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEligibilityCheckInput;
      output: CreateEligibilityCheckOutput;
    };
    sdk: {
      input: CreateEligibilityCheckCommandInput;
      output: CreateEligibilityCheckCommandOutput;
    };
  };
}
