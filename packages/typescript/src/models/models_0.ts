// smithy-typescript generated code
import type {
  ClaimAcknowledgmentStatus,
  ClaimPaymentInformationStatusCode,
  ClaimStatus,
  ClaimStatusReportedBy,
  ClaimType,
  EligibilityCheckCoverageLevel,
  EligibilityCheckCoverageStatus,
  EligibilityCheckDependentRelationship,
  EligibilityCheckDiagnosisCodeSystem,
  EligibilityCheckEntityProviderCode,
  EligibilityCheckEntityRelationship,
  EligibilityCheckInsuranceType,
  EligibilityCheckInvalidEntryReasonCode,
  EligibilityCheckMaintenanceIndicator,
  EligibilityCheckNetworkIndicator,
  EligibilityCheckPayerEntityIdentifierCode,
  EligibilityCheckPlaceOfServiceCode,
  EligibilityCheckPriorAuthIndicator,
  EligibilityCheckProviderEntityIdentifierCode,
  EligibilityCheckQuantityQualifier,
  EligibilityCheckRelatedEntityIdentifierCode,
  EligibilityCheckRequestDependentRelationship,
  EligibilityCheckRequestEntityProviderCode,
  EligibilityCheckRequestPatientGender,
  EligibilityCheckRequestProviderType,
  EligibilityCheckRequestServiceCodeSystem,
  EligibilityCheckResponseErrorLocation,
  EligibilityCheckResponsePatientGender,
  EligibilityCheckResponseServiceCodeSystem,
  EligibilityCheckServiceDeliveryLimitFrequencyQualifier,
  EligibilityCheckServiceDeliveryLimitPattern,
  EligibilityCheckServiceDeliveryLimitPeriodQualifier,
  EligibilityCheckServiceDeliveryLimitQuantityQualifier,
  EligibilityCheckServiceDeliveryLimitSchedule,
  EligibilityCheckTimePeriod,
  EligibilityCheckTraceType,
  EventDestinationsDestinationInputStatus,
  EventDestinationsDestinationStatus,
  EventDestinationsEventEnvironment,
  EventDestinationsEventPayloadObjectType,
  EventDestinationsEventStatus,
  ProfessionalClaimSubmissionAttachmentReportTypeCode,
  ProfessionalClaimSubmissionAttachmentTransmissionCode,
  ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator,
  ProfessionalClaimSubmissionClaimFilingIndicator,
  ProfessionalClaimSubmissionClaimFrequencyCode,
  ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure,
  ProfessionalClaimSubmissionEPSDTReferralConditionIndicator,
  ProfessionalClaimSubmissionGenderCode,
  ProfessionalClaimSubmissionInsuranceType,
  ProfessionalClaimSubmissionMedicareSecondaryInsuranceType,
  ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured,
  ProfessionalClaimSubmissionPatientRelationshipToInsured,
  ProfessionalClaimSubmissionPaymentResponsibilityLevelCode,
  ProfessionalClaimSubmissionProviderAcceptsAssignment,
  ProfessionalClaimSubmissionProviderSignature,
  ProfessionalClaimSubmissionPurchasedServiceProviderEntityType,
  ProfessionalClaimSubmissionPurpose,
  ProfessionalClaimSubmissionReleaseOfInformationCode,
  ProfessionalClaimSubmissionResponsibilityLevel,
} from "./enums";

/**
 * An error that caused Stedi to reject the claim.
 * @public
 */
export interface ClaimRejectionError {
  /**
   * A human-readable explanation of the error.
   * @public
   */
  description: string | undefined;
}

/**
 * Signature and assignment-of-benefits indicators for the claim.
 * @public
 */
export interface ProfessionalClaimSubmissionAuthorization {
  /**
   * **[CMS-1500 Box 12]** Whether the provider has the patient's signature on file authorizing the release of medical information needed to process the claim.
   * @public
   */
  patientReleasesMedicalInfo: ProfessionalClaimSubmissionReleaseOfInformationCode | undefined;

  /**
   * **[CMS-1500 Box 13]** Whether the insured has authorized payment of benefits directly to the provider.
   * @public
   */
  insuredAuthorizesAssignment: ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator | undefined;

  /**
   * **[CMS-1500 Box 27]** Whether the billing provider agrees to be paid under the payer's terms. Providers who are contracted with the payer are usually required to accept assignment.
   * @public
   */
  providerAcceptsAssignment: ProfessionalClaimSubmissionProviderAcceptsAssignment | undefined;

  /**
   * **[CMS-1500 Box 31]** Whether the provider has the rendering provider's signature on file. When `ON_FILE`, the generated CMS-1500 PDF shows `SOF` (Signature on File) in this box.
   * @public
   */
  providerSignature: ProfessionalClaimSubmissionProviderSignature | undefined;
}

/**
 * A mailing address. For United States addresses, use the full nine-digit ZIP code with no separators, such as `100031502`. If you don't know the full ZIP code, you can find it using the [USPS ZIP Code Lookup](https://tools.usps.com/zip-code-lookup.htm) tool.
 * @public
 */
export interface ProfessionalClaimSubmissionAddress {
  /**
   * The first line of the street address. This typically contains the building number and street name.
   * @public
   */
  addressLine1: string | undefined;

  /**
   * The second line of the street address. This typically contains the apartment or suite number.
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * The city name.
   * @public
   */
  city: string | undefined;

  /**
   * The two-letter state or province code. Required when the city is in the United States or Canada.
   * @public
   */
  state?: string | undefined;

  /**
   * The postal or ZIP code, with no separators or spaces. For United States addresses, use the full nine-digit ZIP code, such as `100031502`.
   * @public
   */
  postalCode?: string | undefined;
}

/**
 * A person or department to contact, with up to one phone number, email address, and fax number. Provide at least one way to reach the contact.
 * @public
 */
export interface ProfessionalClaimSubmissionContact {
  /**
   * The name of the contact person or department. When omitted, questions are directed to the entity itself.
   * @public
   */
  name?: string | undefined;

  /**
   * The contact's phone number.
   * @public
   */
  phoneNumber?: string | undefined;

  /**
   * The extension for `phoneNumber`.
   * @public
   */
  phoneExtension?: string | undefined;

  /**
   * The contact's email address.
   * @public
   */
  email?: string | undefined;

  /**
   * The contact's fax number.
   * @public
   */
  faxNumber?: string | undefined;
}

/**
 * Identifiers for the billing provider.
 * @public
 */
export interface ProfessionalClaimSubmissionBillingProviderIdentifiers {
  /**
   * **[CMS-1500 Box 33a]** The billing provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier). When the billing provider isn't assigned an NPI, supply `commercialNumber` or `locationNumber` instead.
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 33b]** The billing provider's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 33b]** The billing provider's taxonomy code from the National Uniform Claim Committee [Health Care Provider Taxonomy Code Set](https://taxonomy.nucc.org/), which identifies the provider's type and specialty.
   * @public
   */
  taxonomyCode?: string | undefined;

  /**
   * **[CMS-1500 Box 33b]** A location number assigned to the billing provider by the payer. Include only when the payer requires it in addition to the NPI, or when the provider has no NPI.
   * @public
   */
  locationNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 33b]** A commercial number assigned to the billing provider by the payer. Include only when the payer requires it in addition to the NPI, or when the provider has no NPI.
   * @public
   */
  commercialNumber?: string | undefined;
}

/**
 * The name of an individual person.
 * @public
 */
export interface ProfessionalClaimSubmissionPersonName {
  /**
   * The person's last name. Don't include a name suffix such as Jr. or III here. Use the `suffix` property instead.
   * @public
   */
  lastName: string | undefined;

  /**
   * The person's first name.
   * @public
   */
  firstName?: string | undefined;

  /**
   * The person's middle name or initial.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The person's name suffix, such as Jr. or III. Include only a personal name suffix here, not professional or academic credentials such as M.D.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * A name that belongs to either a person or an organization. Provide exactly one of `person` or `organization`.
 * @public
 */
export type ProfessionalClaimSubmissionQualifiedName =
  | ProfessionalClaimSubmissionQualifiedName.OrganizationMember
  | ProfessionalClaimSubmissionQualifiedName.PersonMember
  | ProfessionalClaimSubmissionQualifiedName.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionQualifiedName {
  /**
   * The organization's business name.
   * @public
   */
  export interface OrganizationMember {
    organization: string;
    person?: never;
    $unknown?: never;
  }

  /**
   * The person's name.
   * @public
   */
  export interface PersonMember {
    organization?: never;
    person: ProfessionalClaimSubmissionPersonName;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    organization?: never;
    person?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    organization: (value: string) => T;
    person: (value: ProfessionalClaimSubmissionPersonName) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The person or organization that will receive payment for the claim from the payer.
 * @public
 */
export interface ProfessionalClaimSubmissionBillingProvider {
  /**
   * **[CMS-1500 Box 33]** The billing provider's name, either a person or an organization.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedName | undefined;

  /**
   * **[CMS-1500 Box 33]** The billing provider's physical address. This must be a street address where care is delivered or an administrative facility, not a PO Box.
   * @public
   */
  address: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Box 33]** The contact for the billing provider. Include only when the billing provider's contact information differs from the submitter's.
   * @public
   */
  contact?: ProfessionalClaimSubmissionContact | undefined;

  /**
   * **[CMS-1500 Box 33a, 33b]** Identifiers for the billing provider. You must provide the billing provider's NPI. When the provider doesn't have an NPI, you can supply an alternative, such as `commercialNumber` or `locationNumber`.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionBillingProviderIdentifiers | undefined;
}

/**
 * Identifiers for the service facility.
 * @public
 */
export interface ProfessionalClaimSubmissionServiceFacilityIdentifiers {
  /**
   * **[CMS-1500 Box 32a]** The facility's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier). Only required when the facility's NPI differs from the billing provider's NPI. Don't include when the service facility is the patient's home.
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 32b]** The facility's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 32b]** A commercial number assigned to the facility by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  commercialNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 32b]** A location number assigned to the facility by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  locationNumber?: string | undefined;
}

/**
 * A name that belongs to an organization.
 * @public
 */
export type ProfessionalClaimSubmissionQualifiedOrganizationName =
  | ProfessionalClaimSubmissionQualifiedOrganizationName.OrganizationMember
  | ProfessionalClaimSubmissionQualifiedOrganizationName.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionQualifiedOrganizationName {
  /**
   * The organization's business name.
   * @public
   */
  export interface OrganizationMember {
    organization: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    organization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    organization: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The facility where the patient received care, also called the service facility location. The address should be a physical location.
 * @public
 */
export interface ProfessionalClaimSubmissionServiceFacility {
  /**
   * **[CMS-1500 Box 32]** The facility's organization name. When services were rendered in the patient's home, we recommend setting this to Residence or something similar.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedOrganizationName | undefined;

  /**
   * **[CMS-1500 Box 32]** The facility's physical address. This must be a street address, not a PO Box. If the service was rendered in an area where there are no street addresses, enter a description of where the service was rendered. For example, 'crossroad of State Road 34 and 45' or 'Exit near Mile marker 265 on Interstate 80'.
   * @public
   */
  address: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Box 32a, 32b]** Identifiers for the service facility.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionServiceFacilityIdentifiers | undefined;
}

/**
 * The billing provider's federal tax identification number. Provide exactly one of `ein` or `ssn`.
 * @public
 */
export type ProfessionalClaimSubmissionTaxId =
  | ProfessionalClaimSubmissionTaxId.EinMember
  | ProfessionalClaimSubmissionTaxId.SsnMember
  | ProfessionalClaimSubmissionTaxId.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionTaxId {
  /**
   * The billing provider's Social Security Number. Must be a string of exactly nine numbers with no separators. If you provide this, don't provide `ein`.
   * @public
   */
  export interface SsnMember {
    ssn: string;
    ein?: never;
    $unknown?: never;
  }

  /**
   * The billing provider's Employer Identification Number (EIN). Typically a string of exactly nine numbers with no separators, unless otherwise instructed by the payer. If you provide this, don't provide `ssn`.
   * @public
   */
  export interface EinMember {
    ssn?: never;
    ein: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ssn?: never;
    ein?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ssn: (value: string) => T;
    ein: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Billing details for the claim, including the billing provider, service facility, tax identification, and charges.
 * @public
 */
export interface ProfessionalClaimSubmissionBilling {
  /**
   * **[CMS-1500 Box 25]** The billing provider's federal tax identification number, provided as either an Employer Identification Number (EIN) or a Social Security Number (SSN).
   * @public
   */
  taxId: ProfessionalClaimSubmissionTaxId | undefined;

  /**
   * **[CMS-1500 Box 26]** The patient control number, a unique tracking ID you assign to the claim so you can correlate it with responses from the payer. The payer returns this ID in claim acknowledgments, Electronic Remittance Advice (ERAs), and claim status checks. We recommend using a random, 17-character alphanumeric string.
   * @public
   */
  patientControlNumber: string | undefined;

  /**
   * **[CMS-1500 Box 28]** The total charge for the claim, equal to the sum of all service line charges. It is acceptable to set this to `0` (zero).
   * @public
   */
  totalCharge: string | undefined;

  /**
   * **[CMS-1500 Box 29]** The total amount the patient, or the patient's representative, has already paid toward services in this claim. This is the patient's payment only. Don't include amounts paid by other payers.
   * @public
   */
  amountPaid?: string | undefined;

  /**
   * **[CMS-1500 Box 32, 32a, 32b]** The facility where the patient received care, also called the service facility location. This can be a healthcare facility like a surgical center or reference lab, or the patient's address when you rendered services in their home. Include when services were rendered somewhere other than the billing provider's address.
   *  - For telehealth services, the service facility location is the provider's address, even though the patient may have been in their home or elsewhere when receiving services.
   *  - When the billing provider is a physician group located at the same address as a hospital but is a separate entity, you can differentiate the service facility location by including the specific suite or building number of the physician group.
   * @public
   */
  serviceFacility?: ProfessionalClaimSubmissionServiceFacility | undefined;

  /**
   * **[CMS-1500 Box 33, 33a, 33b]** The person or organization, such as a clinic or group practice, that will receive payment for the claim from the payer.
   * @public
   */
  billingProvider: ProfessionalClaimSubmissionBillingProvider | undefined;
}

/**
 * A piece of supporting documentation attached to the claim, such as medical records or an operative note. Only include when the payer requires it. Visit [Submit claim attachments](https://www.stedi.com/docs/healthcare/submit-claim-attachments) for more information.
 * @public
 */
export interface ProfessionalClaimSubmissionAttachment {
  /**
   * The type of report being attached.
   * @public
   */
  reportTypeCode: ProfessionalClaimSubmissionAttachmentReportTypeCode | undefined;

  /**
   * How you're sending the attachment to the payer.
   * @public
   */
  transmissionCode: ProfessionalClaimSubmissionAttachmentTransmissionCode | undefined;

  /**
   * A control number assigned to the attachment. The payer uses this identifier to match the attachment to the claim.
   *  - You must include either this property or `attachmentId` in the request, but not both. Including both properties will result in an error.
   *  - We recommend using a ULID or UUID of up to 50 characters.
   *  - Stedi autogenerates a control number if you don't provide one.
   * @public
   */
  attachmentControlNumber?: string | undefined;

  /**
   * The unique identifier for an attachment file you previously uploaded to Stedi. This value is returned in the `attachmentId` property of the [Create Claim Attachment (275) JSON](https://www.stedi.com/docs/healthcare/api-reference/post-healthcare-submit-claim-attachment) response. Stedi uses it to generate and submit the 275 claim attachment transaction to the payer.
   *  - This property is required when you're submitting attachment files through Stedi.
   *  - You must include either this property or `attachmentControlNumber` in the request, but not both. Including both properties will result in an error.
   * @public
   */
  attachmentId?: string | undefined;
}

/**
 * **[CMS-1500 Box 19]** A free-text note with additional information about the claim. Provide exactly one note type.
 * @public
 */
export type ProfessionalClaimSubmissionClaimNote =
  | ProfessionalClaimSubmissionClaimNote.AdditionalInformationMember
  | ProfessionalClaimSubmissionClaimNote.CertificationNarrativeMember
  | ProfessionalClaimSubmissionClaimNote.DiagnosisDescriptionMember
  | ProfessionalClaimSubmissionClaimNote.GoalsRehabilitationOrDischargePlansMember
  | ProfessionalClaimSubmissionClaimNote.ThirdPartyOrganizationMember
  | ProfessionalClaimSubmissionClaimNote.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionClaimNote {
  /**
   * Additional information that helps explain the claim, such as a special billing situation or extra context. Don't use this to describe unspecified procedure codes.
   * @public
   */
  export interface AdditionalInformationMember {
    additionalInformation: string;
    certificationNarrative?: never;
    goalsRehabilitationOrDischargePlans?: never;
    diagnosisDescription?: never;
    thirdPartyOrganization?: never;
    $unknown?: never;
  }

  /**
   * A narrative that certifies medical necessity or another payer-required certification.
   * @public
   */
  export interface CertificationNarrativeMember {
    additionalInformation?: never;
    certificationNarrative: string;
    goalsRehabilitationOrDischargePlans?: never;
    diagnosisDescription?: never;
    thirdPartyOrganization?: never;
    $unknown?: never;
  }

  /**
   * Therapy or rehabilitation notes summarizing goals, rehabilitation potential, or discharge plans.
   * @public
   */
  export interface GoalsRehabilitationOrDischargePlansMember {
    additionalInformation?: never;
    certificationNarrative?: never;
    goalsRehabilitationOrDischargePlans: string;
    diagnosisDescription?: never;
    thirdPartyOrganization?: never;
    $unknown?: never;
  }

  /**
   * A description of the diagnosis, usually provided to clarify an unspecified or unlisted procedure code.
   * @public
   */
  export interface DiagnosisDescriptionMember {
    additionalInformation?: never;
    certificationNarrative?: never;
    goalsRehabilitationOrDischargePlans?: never;
    diagnosisDescription: string;
    thirdPartyOrganization?: never;
    $unknown?: never;
  }

  /**
   * Information about a third-party organization related to the claim.
   * @public
   */
  export interface ThirdPartyOrganizationMember {
    additionalInformation?: never;
    certificationNarrative?: never;
    goalsRehabilitationOrDischargePlans?: never;
    diagnosisDescription?: never;
    thirdPartyOrganization: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    additionalInformation?: never;
    certificationNarrative?: never;
    goalsRehabilitationOrDischargePlans?: never;
    diagnosisDescription?: never;
    thirdPartyOrganization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    additionalInformation: (value: string) => T;
    certificationNarrative: (value: string) => T;
    goalsRehabilitationOrDischargePlans: (value: string) => T;
    diagnosisDescription: (value: string) => T;
    thirdPartyOrganization: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A date range. `end` is inclusive. At least one of `start` or `end` is present.
 * @public
 */
export interface ProfessionalClaimSubmissionDateRange {
  /**
   * The start date of the range, in `YYYY-MM-DD` format.
   * @public
   */
  start?: string | undefined;

  /**
   * The end date of the range, inclusive, in `YYYY-MM-DD` format.
   * @public
   */
  end?: string | undefined;
}

/**
 * Dates relevant to the patient's condition and care. Include only the dates that apply to the claim.
 * @public
 */
export interface ProfessionalClaimSubmissionClinicalDates {
  /**
   * **[CMS-1500 Box 14]** The date the patient first experienced acute symptoms of the current illness or injury. Required when a service in the claim is the first for a new illness or injury, when the claim is related to an employment or accident condition, or when the payer requires it. For an emergency, provide this date when it is known and differs from the date of service.
   * @public
   */
  onsetOfCurrentIllness?: string | undefined;

  /**
   * **[CMS-1500 Box 14]** The date of the patient's last menstrual period (LMP) before pregnancy. Provide for claims related to a pregnancy.
   * @public
   */
  lastMenstrualPeriod?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the patient first received treatment for the current condition. Required when this date impacts adjudication for services such as spinal manipulation, physical or occupational therapy, or pregnancy.
   * @public
   */
  initialTreatment?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the patient was last seen by the attending or supervising physician for the qualifying condition. Required for routine foot care services when this date impacts adjudication.
   * @public
   */
  lastSeen?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the patient first experienced acute symptoms of a chronic condition. Required for certain spinal manipulation claims billed to Medicare.
   * @public
   */
  acuteManifestationOfChronicCondition?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date of the accident related to this claim. Required when `patientCondition.isAutoAccidentRelated` or `patientCondition.isOtherAccidentRelated` is `true`, and when the condition is employment-related and resulted from an accident.
   * @public
   */
  accident?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date of the patient's last X-ray, for claims related to spinal manipulation.
   * @public
   */
  lastXray?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date of the patient's hearing or vision prescription. Required for claims billing hearing devices or vision frames and lenses.
   * @public
   */
  prescription?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the provider assumed care of the patient, for shared-care arrangements.
   * @public
   */
  assumedCare?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the provider relinquished care of the patient, for shared-care arrangements.
   * @public
   */
  relinquishedCare?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date of the patient's first visit or consultation, when required by the payer.
   * @public
   */
  firstVisitOrConsultation?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the repricer received the claim, when applicable.
   * @public
   */
  repricerReceived?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The last date the patient worked, for disability or workers' compensation claims.
   * @public
   */
  lastWorked?: string | undefined;

  /**
   * **[CMS-1500 Box 15]** The date the patient returned to work, for disability or workers' compensation claims.
   * @public
   */
  returnedToWork?: string | undefined;

  /**
   * **[CMS-1500 Box 16]** The date range during which the patient was unable to work, when applicable. Provide only `to` when the patient is no longer unable to work and the start date is unknown.
   * @public
   */
  unableToWork?: ProfessionalClaimSubmissionDateRange | undefined;

  /**
   * **[CMS-1500 Box 18]** The date range during which the patient was hospitalized for services in this claim. Provide `from` for the admission date and `to` for the discharge date; omit `to` while the patient is still hospitalized.
   * @public
   */
  hospitalization?: ProfessionalClaimSubmissionDateRange | undefined;
}

/**
 * Whether the patient's illness or injury is related to employment or an accident.
 * @public
 */
export interface ProfessionalClaimSubmissionPatientCondition {
  /**
   * **[CMS-1500 Box 10a]** Whether the patient's condition is related to their employment.
   * @public
   */
  isEmploymentRelated?: boolean | undefined;

  /**
   * **[CMS-1500 Box 10b]** Whether the patient's condition is related to an automobile accident. When `true`, set `autoAccidentState`. Other insurance, such as automobile liability coverage, may be the primary payer.
   * @public
   */
  isAutoAccidentRelated?: boolean | undefined;

  /**
   * **[CMS-1500 Box 10c]** Whether the patient's condition is related to an accident other than an automobile accident.
   * @public
   */
  isOtherAccidentRelated?: boolean | undefined;

  /**
   * **[CMS-1500 Box 10b]** The two-letter state code where the automobile accident occurred. Required when `isAutoAccidentRelated` is `true`.
   * @public
   */
  autoAccidentState?: string | undefined;
}

/**
 * Identifiers for a referring provider.
 * @public
 */
export interface ProfessionalClaimSubmissionReferringProviderIdentifiers {
  /**
   * **[CMS-1500 Box 17b]** The referring provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier), a unique 10-digit ID issued by the Centers for Medicare & Medicaid Services (CMS).
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** The referring provider's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** A commercial number assigned to the referring provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  commercialNumber?: string | undefined;
}

/**
 * A name that belongs to a person.
 * @public
 */
export type ProfessionalClaimSubmissionQualifiedPersonName =
  | ProfessionalClaimSubmissionQualifiedPersonName.PersonMember
  | ProfessionalClaimSubmissionQualifiedPersonName.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionQualifiedPersonName {
  /**
   * The person's name.
   * @public
   */
  export interface PersonMember {
    person: ProfessionalClaimSubmissionPersonName;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    person?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    person: (value: ProfessionalClaimSubmissionPersonName) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A provider involved in referring the patient for the care on this claim. Each provider should be an individual, not an organization, and you should supply at least the `lastName` and an identifier, which is typically the `npi`.
 * @public
 */
export interface ProfessionalClaimSubmissionReferringProvider {
  /**
   * **[CMS-1500 Box 17]** The full name of the referring provider.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedPersonName | undefined;

  /**
   * **[CMS-1500 Box 17a, 17b]** Identifiers for the referring provider.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionReferringProviderIdentifiers | undefined;
}

/**
 * Payer-issued reference numbers that apply to the entire claim.
 * @public
 */
export interface ProfessionalClaimSubmissionReferenceNumbers {
  /**
   * **[CMS-1500 Box 23]** A payer-issued prior authorization number that approves the services on this claim. Required when the payer or Utilization Management Organization (UMO) assigned an authorization number and the services were preauthorized. To override this for a specific service line, set `serviceLines[].priorAuthorizations` instead.
   * @public
   */
  priorAuthorization?: string | undefined;

  /**
   * **[CMS-1500 Box 23]** A referral number for the provider referral tied to the services on this claim. Required when the payer or Utilization Management Organization (UMO) assigned a referral number and a referral is involved.
   * @public
   */
  referral?: string | undefined;

  /**
   * **[CMS-1500 Box 23]** The Clinical Laboratory Improvement Amendments (CLIA) certification number. Required for all CLIA-certified facilities performing CLIA-covered laboratory services. When the claim contains both in-house and outsourced laboratory services, use the CLIA number for services performed by the billing or rendering provider.
   * @public
   */
  clia?: string | undefined;

  /**
   * **[CMS-1500 Box 23]** The facility's six-digit FDA Mammography Quality Standards Act (MQSA) certification number. Required when mammography services are rendered by a certified mammography provider.
   * @public
   */
  mammographyCertification?: string | undefined;
}

/**
 * Information identifying this claim as a replacement or cancellation of a previously submitted claim.
 * @public
 */
export interface ProfessionalClaimSubmissionResubmission {
  /**
   * Whether this claim replaces or cancels a previously submitted claim.
   * @public
   */
  code?: ProfessionalClaimSubmissionClaimFrequencyCode | undefined;

  /**
   * The Payer Claim Control Number (sometimes called the ICN) of the original claim being replaced or cancelled. Generally required when `code` is set. One exception is Original Medicare, which specifies that you omit this value from resubmissions.
   * @public
   */
  originalReferenceNumber?: string | undefined;
}

/**
 * Identifiers for a supervising provider.
 * @public
 */
export interface ProfessionalClaimSubmissionSupervisingProviderIdentifiers {
  /**
   * **[CMS-1500 Box 17b]** The supervising provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier), a unique 10-digit ID issued by the Centers for Medicare & Medicaid Services (CMS).
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** The supervising provider's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** A commercial number assigned to the supervising provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  commercialNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** A location number assigned to the supervising provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  locationNumber?: string | undefined;
}

/**
 * The provider who oversaw the rendering provider and the care reported in this claim. This should be an individual, not an organization, and you should supply at least the `lastName` and an identifier, which is typically the `npi`.
 * @public
 */
export interface ProfessionalClaimSubmissionSupervisingProvider {
  /**
   * **[CMS-1500 Box 17]** The full name of the supervising provider.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedPersonName | undefined;

  /**
   * **[CMS-1500 Box 17a, 17b]** Identifiers for the supervising provider.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionSupervisingProviderIdentifiers | undefined;
}

/**
 * Clinical details about the encounter, including diagnoses, related providers, relevant dates, and supporting information.
 * @public
 */
export interface ProfessionalClaimSubmissionEncounter {
  /**
   * The primary place of service code identifying where the services were rendered. When omitted, it is inferred from the most common place of service across the claim's service lines. Visit [Place of Service Codes](https://www.cms.gov/medicare/coding-billing/place-of-service-codes/code-sets) for a complete list.
   * @public
   */
  primaryPlaceOfService?: string | undefined;

  /**
   * **[CMS-1500 Box 21]** The principal diagnosis for the claim, which describes the main reason for the encounter. Must be an [ICD-10-CM code](https://www.cdc.gov/nchs/icd/icd-10-cm/index.html). Stedi combines this with `additionalDiagnosisCodes` and the diagnosis codes on the service lines to form the claim's diagnosis list, which can hold at most 12 codes.
   *  - Use valid, billable codes at the highest level of specificity available.
   *  - Don't submit the decimal point (e.g., submit `I639` not `I63.9`).
   *  - Don't submit header codes (codes with fewer than three characters, such as `E10` for Type 1 diabetes).
   * @public
   */
  primaryDiagnosisCode: string | undefined;

  /**
   * **[CMS-1500 Box 21]** Additional diagnoses for the claim beyond `primaryDiagnosisCode`, in order of importance. Use this for diagnoses that apply to the claim but are not tied to a specific service line; you don't need to repeat codes that already appear in a service line's `diagnosisCodes`. Stedi places these directly after the primary diagnosis in the claim's diagnosis list.
   *  - Use valid, billable codes at the highest level of specificity available.
   *  - Don't submit the decimal point (e.g., submit `I639` not `I63.9`).
   *  - Don't submit header codes (codes with fewer than three characters, such as `E10` for Type 1 diabetes).
   * @public
   */
  additionalDiagnosisCodes?: string[] | undefined;

  /**
   * **[CMS-1500 Box 10a, 10b, 10c]** Whether the patient's illness or injury is related to employment or an accident.
   * @public
   */
  patientCondition?: ProfessionalClaimSubmissionPatientCondition | undefined;

  /**
   * **[CMS-1500 Box 10d]** Up to four National Uniform Claim Committee (NUCC) condition codes. A condition code is a two-character code that provides extra information about the patient's condition or the claim itself, such as whether the claim is part of disaster relief. For a list, visit the [NUCC Condition Codes](https://www.nucc.org/index.php/code-sets-mainmenu-41/condition-codes-mainmenu-38).
   * @public
   */
  claimCodes?: string[] | undefined;

  /**
   * **[CMS-1500 Box 24h]** Early and Periodic Screening, Diagnosis, and Treatment (EPSDT) referral condition indicators for the claim. EPSDT is a Medicaid program that provides preventive health care services for children under age 21.
   *  - Include when the claim bills an EPSDT screening service, with the referral outcome of the screening.
   *  - Use `NOT_USED` when the screening did not result in a referral.
   *  - Mark services that resulted from a screening with `serviceLines[].isEpsdtRelated`.
   * @public
   */
  epsdtReferralCodes?: ProfessionalClaimSubmissionEPSDTReferralConditionIndicator[] | undefined;

  /**
   * **[CMS-1500 Box 14, 15, 16, 18]** Dates relevant to the patient's condition and care, such as the onset of the current illness, hospitalization dates, and dates the patient was unable to work.
   * @public
   */
  clinicalDates?: ProfessionalClaimSubmissionClinicalDates | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b]** The provider who referred the patient to the rendering provider for the care on this claim. Supply this whenever the claim involves a referral. When the patient passed through a chain of referrals, this is the most recent referral, the one the rendering provider acted on; identify the provider who wrote the earliest referral in `priorReferringProvider`.
   * @public
   */
  referringProvider?: ProfessionalClaimSubmissionReferringProvider | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b]** The provider who wrote the initial referral that began this patient's episode of care, often the patient's primary care provider. Supply this only when a different provider then referred the patient onward to the rendering provider, such as when a primary care provider refers to a specialist who refers to another specialist. Requires `referringProvider` to also be set.
   * @public
   */
  priorReferringProvider?: ProfessionalClaimSubmissionReferringProvider | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b]** The provider who oversaw the rendering provider and the care reported in this claim, when the rendering provider was supervised by a physician.
   * @public
   */
  supervisingProvider?: ProfessionalClaimSubmissionSupervisingProvider | undefined;

  /**
   * **[CMS-1500 Box 19]** A free-text note with additional information the payer may need to process the claim that doesn't fit anywhere else on the form.
   * @public
   */
  claimNote?: ProfessionalClaimSubmissionClaimNote | undefined;

  /**
   * **[CMS-1500 Box 19]** Supporting documentation attached to the claim, such as medical records or operative notes. Include only when required by the payer.
   * @public
   */
  attachments?: ProfessionalClaimSubmissionAttachment[] | undefined;

  /**
   * **[CMS-1500 Box 22]** Whether this claim replaces or voids a previously submitted claim. Omit when you're submitting a new claim and when you're resubmitting a claim that was rejected before it entered the payer's processing system. You must also omit this property for every resubmission to Original Medicare because Original Medicare doesn't accept `REPLACEMENT_OF_PRIOR_CLAIM`.
   * @public
   */
  resubmission?: ProfessionalClaimSubmissionResubmission | undefined;

  /**
   * **[CMS-1500 Box 23]** Payer-issued reference numbers for the claim, such as a prior authorization, referral, CLIA, or mammography certification number.
   * @public
   */
  referenceNumbers?: ProfessionalClaimSubmissionReferenceNumbers | undefined;
}

/**
 * The person or entity that carries the insurance policy being billed, also called the subscriber or primary policyholder. May be different from the patient.
 * @public
 */
export interface ProfessionalClaimSubmissionInsured {
  /**
   * **[CMS-1500 Box 1]** The type of health insurance plan being billed. Pick the type that best matches the plan and payer. For most commercial payers, use `OTHER`.
   * @public
   */
  insuranceType: ProfessionalClaimSubmissionInsuranceType | undefined;

  /**
   * **[CMS-1500 Box 1a]** The member ID for the insured's insurance policy, typically found on the insurance card. For Medicare claims, this is the insured's Medicare Beneficiary Identifier (MBI).
   * @public
   */
  memberId?: string | undefined;

  /**
   * **[CMS-1500 Box 4]** The full name of the insured. This is a person for most claims. Provide an organization only for workers' compensation or other property and casualty claims where the policy is held by an entity, such as the patient's employer.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedName | undefined;

  /**
   * **[CMS-1500 Box 7]** The mailing address for the insured's permanent residence.
   * @public
   */
  address?: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Box 11]** The payer's code for the employer or other party that purchased the plan, typically found on the insurance card. For workers' compensation claims, use the Federal Employees' Compensation Act (FECA) number for the case.
   * @public
   */
  policyOrGroupNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 11a]** The insured's date of birth. Used to distinguish the insured from other members with similar names.
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * **[CMS-1500 Box 11a]** The insured's sex.
   * @public
   */
  gender?: ProfessionalClaimSubmissionGenderCode | undefined;

  /**
   * **[CMS-1500 Box 11b]** The insured's Social Security Number. Only include when specifically instructed by a payer.
   * @public
   */
  ssn?: string | undefined;

  /**
   * **[CMS-1500 Box 11b]** The claim number assigned by a property or casualty insurer. Include for workers' compensation, automobile accident, or other liability claims when the payer requires it.
   * @public
   */
  propertyCasualtyClaimNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 11c]** The name of the insured's insurance plan, typically found on the insurance card.
   * @public
   */
  planName?: string | undefined;

  /**
   * **[CMS-1500 Box 11]** The payer's responsibility level for this claim. This form supports claims to primary payers only.
   * @public
   */
  paymentResponsibilityLevelCode: ProfessionalClaimSubmissionPaymentResponsibilityLevelCode | undefined;
}

/**
 * Signature and assignment-of-benefits indicators for coverage under another policy.
 * @public
 */
export interface ProfessionalClaimSubmissionOtherInsuredAuthorization {
  /**
   * Whether the other insured has authorized payment of benefits directly to the provider.
   * @public
   */
  insuredAuthorizesAssignment: ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator | undefined;

  /**
   * Whether the provider generated the patient's signature because the patient was physically unable to sign.
   * @public
   */
  providerGeneratedPatientSignature?: boolean | undefined;

  /**
   * Whether the provider has the other insured's authorization to release medical information needed to process the claim.
   * @public
   */
  patientReleasesMedicalInfo: ProfessionalClaimSubmissionReleaseOfInformationCode | undefined;
}

/**
 * An identifier for the other payer. Provide exactly one.
 * @public
 */
export type ProfessionalClaimSubmissionOtherPayerId =
  | ProfessionalClaimSubmissionOtherPayerId.CmsPlanIdMember
  | ProfessionalClaimSubmissionOtherPayerId.PayerIdMember
  | ProfessionalClaimSubmissionOtherPayerId.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionOtherPayerId {
  /**
   * The other payer's payer identification number.
   * @public
   */
  export interface PayerIdMember {
    payerId: string;
    cmsPlanId?: never;
    $unknown?: never;
  }

  /**
   * The other payer's CMS plan ID, such as a Health Plan ID (HPID) or Other Entity Identifier (OEID).
   * @public
   */
  export interface CmsPlanIdMember {
    payerId?: never;
    cmsPlanId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    payerId?: never;
    cmsPlanId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    payerId: (value: string) => T;
    cmsPlanId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The payer that provides coverage under another policy.
 * @public
 */
export interface ProfessionalClaimSubmissionOtherPayer {
  /**
   * The other payer's business name.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedOrganizationName | undefined;

  /**
   * The other payer's identifier.
   * @public
   */
  id: ProfessionalClaimSubmissionOtherPayerId | undefined;
}

/**
 * A policy, other than the one being billed, under which the patient is covered. Used for coordination of benefits.
 * @public
 */
export interface ProfessionalClaimSubmissionOtherInsured {
  /**
   * **[CMS-1500 Box 9]** The name of the person insured under the other policy.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedName | undefined;

  /**
   * **[CMS-1500 Box 9]** The member ID for the other policy.
   * @public
   */
  memberId: string | undefined;

  /**
   * The other payer's responsibility level for this claim, relative to the payer being billed.
   * @public
   */
  responsibilityLevel: ProfessionalClaimSubmissionResponsibilityLevel | undefined;

  /**
   * How the patient is related to the person insured under the other policy.
   * @public
   */
  relationshipToInsured: ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured | undefined;

  /**
   * The type of plan or payer the other coverage is filed under.
   * @public
   */
  claimFilingIndicator: ProfessionalClaimSubmissionClaimFilingIndicator | undefined;

  /**
   * The payer that provides the other coverage.
   * @public
   */
  otherPayer: ProfessionalClaimSubmissionOtherPayer | undefined;

  /**
   * The mailing address of the person insured under the other policy.
   * @public
   */
  address?: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Box 9a]** The policy or group number for the other coverage.
   * @public
   */
  policyOrGroupNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 9d]** The name of the other insurance plan.
   * @public
   */
  planName?: string | undefined;

  /**
   * The Social Security Number of the person insured under the other policy. Only include when specifically instructed by a payer.
   * @public
   */
  ssn?: string | undefined;

  /**
   * The Medicare secondary payer reason, when the other coverage makes Medicare the secondary payer.
   * @public
   */
  medicareSecondaryInsuranceType?: ProfessionalClaimSubmissionMedicareSecondaryInsuranceType | undefined;

  /**
   * Signature and assignment-of-benefits indicators for the other coverage.
   * @public
   */
  authorization: ProfessionalClaimSubmissionOtherInsuredAuthorization | undefined;
}

/**
 * The person who received care, when they are someone other than the insured.
 * @public
 */
export interface ProfessionalClaimSubmissionPatient {
  /**
   * **[CMS-1500 Box 2]** The full name of the person who received care.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedPersonName | undefined;

  /**
   * **[CMS-1500 Box 3]** The patient's date of birth. Used to distinguish the patient from other members with similar names.
   * @public
   */
  dateOfBirth: string | undefined;

  /**
   * **[CMS-1500 Box 3]** The patient's sex.
   * @public
   */
  gender: ProfessionalClaimSubmissionGenderCode | undefined;

  /**
   * **[CMS-1500 Box 5]** The mailing address for the patient's permanent residence.
   * @public
   */
  address: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Box 6]** How the patient is related to the insured.
   * @public
   */
  relationshipToInsured: ProfessionalClaimSubmissionPatientRelationshipToInsured | undefined;
}

/**
 * The payer being billed for the claim.
 * @public
 */
export interface ProfessionalClaimSubmissionPayer {
  /**
   * **[CMS-1500 Carrier Block]** The Stedi payer ID for the payer being billed. Visit the [Payer Network](https://www.stedi.com/healthcare/network) for a complete list.
   *  - You can send requests using the primary payer ID, the Stedi payer ID, or any alias listed in the payer record.
   *  - You must include leading 0 characters. Payer IDs are alphanumeric strings and must be treated as complete strings, not integers. For example, use `00540` for SISCO, not `540`.
   * @public
   */
  id: string | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The payer's business name, such as `Aetna` or `Cigna`.
   * @public
   */
  name?: ProfessionalClaimSubmissionQualifiedOrganizationName | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The payer's mailing address.
   * @public
   */
  address?: ProfessionalClaimSubmissionAddress | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The ID of the receiver that processes the claim, typically the clearinghouse or payer. Only include when the receiver differs from the payer.
   * @public
   */
  receiverId?: string | undefined;
}

/**
 * A prescription number or compound drug link sequence number. Provide exactly one.
 * @public
 */
export type ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber =
  | ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber.LinkSequenceNumberMember
  | ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber.PharmacyPrescriptionNumberMember
  | ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber.$UnknownMember;

/**
 * @public
 */
export namespace ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber {
  /**
   * A provider-assigned number, unique to this claim, that ties together the components of a compound drug when there is no prescription number.
   * @public
   */
  export interface LinkSequenceNumberMember {
    linkSequenceNumber: string;
    pharmacyPrescriptionNumber?: never;
    $unknown?: never;
  }

  /**
   * The pharmacy prescription number. For a compound drug, all components share the same prescription number so the payer can relate them.
   * @public
   */
  export interface PharmacyPrescriptionNumberMember {
    linkSequenceNumber?: never;
    pharmacyPrescriptionNumber: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    linkSequenceNumber?: never;
    pharmacyPrescriptionNumber?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    linkSequenceNumber: (value: string) => T;
    pharmacyPrescriptionNumber: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Drug identification details for a service line, required when a drug is billed and a prescription was written.
 * @public
 */
export interface ProfessionalClaimSubmissionDrugIdentification {
  /**
   * The dispensed drug's National Drug Code (NDC).
   * @public
   */
  nationalDrugCode: string | undefined;

  /**
   * The quantity of the drug administered, expressed in the unit given by `unitOfMeasure`.
   * @public
   */
  unitCount: string | undefined;

  /**
   * The unit of measure for `unitCount`.
   * @public
   */
  unitOfMeasure: ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure | undefined;

  /**
   * A prescription number or, for compound drugs, a link sequence number that ties the components of the compound together.
   * @public
   */
  associationNumber?: ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber | undefined;

  /**
   * The original National Drug Code (NDC), when it differs from the code reported in `nationalDrugCode`.
   * @public
   */
  originalNdc?: string | undefined;
}

/**
 * Identifiers for an ordering provider.
 * @public
 */
export interface ProfessionalClaimSubmissionOrderingProviderIdentifiers {
  /**
   * **[CMS-1500 Box 17b]** The ordering provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier), a unique 10-digit ID issued by the Centers for Medicare & Medicaid Services (CMS).
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** The ordering provider's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 17a]** A commercial number assigned to the ordering provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  commercialNumber?: string | undefined;
}

/**
 * The provider who ordered the services, tests, or supplies on a service line. This should be an individual, not an organization, and you should supply at least the `lastName` and an identifier, which is typically the `npi`.
 * @public
 */
export interface ProfessionalClaimSubmissionOrderingProvider {
  /**
   * **[CMS-1500 Box 17]** The full name of the ordering provider.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedPersonName | undefined;

  /**
   * **[CMS-1500 Box 17a, 17b]** Identifiers for the ordering provider.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionOrderingProviderIdentifiers | undefined;
}

/**
 * A prior authorization number that applies to a service line. Use this only for service-level numbers that differ from the claim-level authorization in `encounter.referenceNumbers.priorAuthorization`.
 * @public
 */
export interface ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber {
  /**
   * The payer-issued prior authorization number for this service line.
   * @public
   */
  priorAuthorizationNumber: string | undefined;

  /**
   * The identifier of the other payer that issued this prior authorization number. Include only when the number was issued by a payer other than the one being billed, and match the other payer's identifier in `otherInsured[].otherPayer.id`.
   * @public
   */
  otherPayerPrimaryId?: string | undefined;
}

/**
 * A procedure, service, or supply code with any applicable modifiers.
 * @public
 */
export interface ProfessionalClaimSubmissionProcedureCode {
  /**
   * The procedure, service, or supply code, typically a CPT or HCPCS code.
   * @public
   */
  code: string | undefined;

  /**
   * Up to four modifier codes that convey special circumstances related to the service, such as `25` or `JW`.
   * @public
   */
  modifiers?: string[] | undefined;
}

/**
 * Identifiers for a purchased service provider.
 * @public
 */
export interface ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers {
  /**
   * **[CMS-1500 Box 32a]** The purchased service provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier), a unique 10-digit ID issued by the Centers for Medicare & Medicaid Services (CMS).
   * @public
   */
  npi: string | undefined;
}

/**
 * The outside provider the billing provider bought the service from.
 * @public
 */
export interface ProfessionalClaimSubmissionPurchasedServiceProvider {
  /**
   * Whether the outside provider is a person or an organization.
   * @public
   */
  entityType: ProfessionalClaimSubmissionPurchasedServiceProviderEntityType | undefined;

  /**
   * Identifiers for the purchased service provider.
   * @public
   */
  identifiers: ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers | undefined;
}

/**
 * A service the billing provider bought from an outside provider and is billing to the payer.
 * @public
 */
export interface ProfessionalClaimSubmissionPurchasedService {
  /**
   * **[CMS-1500 Box 20]** The price the billing provider paid the outside provider for this service.
   * @public
   */
  chargeAmount: string | undefined;

  /**
   * The outside provider the billing provider bought this service from.
   * @public
   */
  provider: ProfessionalClaimSubmissionPurchasedServiceProvider | undefined;
}

/**
 * Identifiers for the rendering provider.
 * @public
 */
export interface ProfessionalClaimSubmissionRenderingProviderIdentifiers {
  /**
   * **[CMS-1500 Box 24j]** The rendering provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier), a unique 10-digit ID issued by the Centers for Medicare & Medicaid Services (CMS).
   * @public
   */
  npi?: string | undefined;

  /**
   * **[CMS-1500 Box 24i]** The rendering provider's state license number, assigned by a state licensing board. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  stateLicenseNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 24i]** A commercial number assigned to the rendering provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  commercialNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 24i]** A location number assigned to the rendering provider by the payer. Include only when the payer requires it in addition to the NPI.
   * @public
   */
  locationNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 24i]** The rendering provider's taxonomy code from the National Uniform Claim Committee [Health Care Provider Taxonomy Code Set](https://taxonomy.nucc.org/), which identifies the provider's type and specialty.
   * @public
   */
  taxonomyCode?: string | undefined;
}

/**
 * The provider who performed the service. This can be an individual or an organization, such as a laboratory. When a substitute provider (locum tenens) was used, supply that provider's information here. You can omit this object when the rendering provider is the same as the billing provider.
 * @public
 */
export interface ProfessionalClaimSubmissionRenderingProvider {
  /**
   * **[CMS-1500 Box 24j]** The rendering provider's name. Provide a person's name or an organization's business name.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedName | undefined;

  /**
   * **[CMS-1500 Box 24i, 24j]** Identifiers for the rendering provider.
   * @public
   */
  identifiers?: ProfessionalClaimSubmissionRenderingProviderIdentifiers | undefined;
}

/**
 * A single service, procedure, or supply being billed.
 * @public
 */
export interface ProfessionalClaimSubmissionServiceLine {
  /**
   * **[CMS-1500 Box 24a]** The date or date range when the patient received the service.
   * @public
   */
  datesOfService: ProfessionalClaimSubmissionDateRange | undefined;

  /**
   * **[CMS-1500 Box 24b]** The place of service code identifying where the patient received the service. Visit [Place of Service Codes](https://www.cms.gov/medicare/coding-billing/place-of-service-codes/code-sets) for a complete list.
   * @public
   */
  placeOfService?: string | undefined;

  /**
   * **[CMS-1500 Box 24c]** Whether the service was related to an emergency, meaning the patient required immediate intervention for a severe, life-threatening, or potentially disabling condition.
   * @public
   */
  isEmergency?: boolean | undefined;

  /**
   * **[CMS-1500 Box 24d]** The procedure, service, or supply code being billed, with any applicable modifiers.
   * @public
   */
  procedureCode: ProfessionalClaimSubmissionProcedureCode | undefined;

  /**
   * **[CMS-1500 Box 24e]** Up to four diagnoses this service relates to. Must be [ICD-10-CM codes](https://www.cdc.gov/nchs/icd/icd-10-cm/index.html). List them in order of importance to the service, with the most relevant diagnosis first. Across `encounter.primaryDiagnosisCode` and the codes on every service line, a claim can use at most 12 distinct diagnosis codes.
   *  - You must submit a valid, billable code at the highest level of specificity. Include the 4th - 7th characters as applicable.
   *  - Don't submit the decimal point for ICD codes. The decimal point is implied.
   *  - Don't submit ICD-10 header codes. Header codes exist to group related codes and aren't valid for billing. These header codes can change with each new version of ICD-10, so we recommend reviewing your diagnosis codes every year to ensure that they aren't classified as header codes in the most recent version. To determine whether a code is a header code, you can also search the Value Set Authority Center. If the 'Header' property is set, the code is a header code and you shouldn't use it in claim submissions.
   * @public
   */
  diagnosisCodes: string[] | undefined;

  /**
   * **[CMS-1500 Box 24f]** The charge for this service line, including the provider's base charge and any applicable tax or postage. It is acceptable to set this to `0` (zero).
   * @public
   */
  lineItemChargeAmount: string | undefined;

  /**
   * **[CMS-1500 Box 24g]** The number of units of the service provided. The units depend on the procedure code and the nature of the service. For example, they may correspond to office visits (1 unit per visit), individual diagnostic tests (1 unit per test), or time (when a service is billed in 15-minute increments, 4 units could equal 1 hour). For anesthesia procedure codes (00100-01999), report the total anesthesia time in minutes; Stedi reports the unit of measure as minutes for these codes automatically.
   * @public
   */
  units: string | undefined;

  /**
   * **[CMS-1500 Box 24h]** Whether the service is related to an Early and Periodic Screening, Diagnosis, and Treatment (EPSDT) encounter. Set this on services that resulted from an EPSDT screening, not on the screening service itself. Report the screening's referral outcome in `encounter.epsdtReferralCodes`.
   * @public
   */
  isEpsdtRelated?: boolean | undefined;

  /**
   * **[CMS-1500 Box 24h]** Whether the service was related to a family planning program.
   * @public
   */
  isFamilyPlanning?: boolean | undefined;

  /**
   * **[CMS-1500 Box 24i, 24j]** The provider who performed this service. Include only when the rendering provider for this line differs from the claim. This is also where you supply a substitute (locum tenens) provider's information.
   * @public
   */
  renderingProvider?: ProfessionalClaimSubmissionRenderingProvider | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b]** The provider who ordered the services, tests, or supplies billed on this service line. For example, a physician who ordered lab work or imaging. Include when the ordering provider differs from the rendering provider for this line.
   * @public
   */
  orderingProvider?: ProfessionalClaimSubmissionOrderingProvider | undefined;

  /**
   * **[CMS-1500 Box 20]** The purchase of this service from a provider outside the billing provider's practice, such as an independent laboratory. Only include when the billing provider bought the service and is billing the payer for it.
   * @public
   */
  purchasedService?: ProfessionalClaimSubmissionPurchasedService | undefined;

  /**
   * A control number you assign to this service line for your own tracking. Each must be unique within the claim. If you don't set it, Stedi sets it for you – a random ULID.
   * @public
   */
  lineItemControlNumber?: string | undefined;

  /**
   * **[CMS-1500 Box 24]** Drug identification details for the service line. Required when a drug is billed for this line and a prescription was written.
   * @public
   */
  drugIdentification?: ProfessionalClaimSubmissionDrugIdentification | undefined;

  /**
   * **[CMS-1500 Box 24]** A free-text description that clarifies the procedure code and any modifiers. Provide when billing an unspecified or unlisted procedure code.
   * @public
   */
  narrativeForUnspecifiedCode?: string | undefined;

  /**
   * **[CMS-1500 Box 24]** Supporting documentation attached to this service line. Only include when the payer requires it. Visit [Submit claim attachments](https://www.stedi.com/docs/healthcare/submit-claim-attachments) for more information.
   * @public
   */
  attachments?: ProfessionalClaimSubmissionAttachment[] | undefined;

  /**
   * Prior authorization numbers that apply to this service line. Include only numbers that differ from the claim-level prior authorization in `encounter.referenceNumbers.priorAuthorization`. You can use the same number on multiple service lines.
   * @public
   */
  priorAuthorizations?: ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber[] | undefined;
}

/**
 * The entity submitting the claim to Stedi.
 * @public
 */
export interface ProfessionalClaimSubmissionSubmitter {
  /**
   * **[CMS-1500 Carrier Block]** The name of the submitter, either a person or an organization.
   * @public
   */
  name: ProfessionalClaimSubmissionQualifiedName | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The contact for questions about this claim submission. Provide at least a phone number or an email address.
   * @public
   */
  contact?: ProfessionalClaimSubmissionContact | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The submitter's Electronic Transmitter Identification Number (ETIN), a payer-assigned ID that identifies the entity transmitting the claim.
   * @public
   */
  etin?: string | undefined;
}

/**
 * The request to submit a professional claim.
 * @public
 */
export interface CreateProfessionalClaimSubmissionInput {
  /**
   * **[CMS-1500 Carrier Block]** The purpose of the submission. Use `CHARGEABLE` for standard fee-for-service claims, which covers most submissions.
   * @public
   */
  purpose: ProfessionalClaimSubmissionPurpose | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The payer being billed for this claim, identified by a Stedi payer ID. Visit the [Payer Network](https://www.stedi.com/healthcare/network) for a complete list of payers and their IDs.
   * @public
   */
  payer: ProfessionalClaimSubmissionPayer | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The entity submitting the claim to Stedi.
   * @public
   */
  submitter: ProfessionalClaimSubmissionSubmitter | undefined;

  /**
   * **[CMS-1500 Box 1, 1a, 4, 7, 11, 11a, 11b, 11c]** The person who carries the insurance policy being billed. The insured is also called the subscriber, primary policyholder, or primary cardholder, and may be a different person from the patient. For example, when a spouse or child receives care under an employee's plan, the employee is the insured.
   * @public
   */
  insured: ProfessionalClaimSubmissionInsured | undefined;

  /**
   * **[CMS-1500 Box 2, 3, 5, 6]** The person who received care. Only include this object when the patient is someone other than the insured, such as a spouse or dependent on the insured's plan. When the patient is the insured, leave this empty.
   * @public
   */
  patient?: ProfessionalClaimSubmissionPatient | undefined;

  /**
   * **[CMS-1500 Box 12, 13, 27, 31]** Signature and assignment-of-benefits indicators for the claim, covering whether the provider has the patient's and insured's authorizations on file and whether the provider accepts the payer's terms.
   * @public
   */
  authorization: ProfessionalClaimSubmissionAuthorization | undefined;

  /**
   * **[CMS-1500 Box 10a, 10b, 10c, 10d, 14, 15, 16, 17, 17a, 17b, 18, 19, 21, 22, 23, 24h]** Clinical details about the encounter, including diagnosis codes, the related providers, relevant dates, and supporting information for the claim.
   * @public
   */
  encounter: ProfessionalClaimSubmissionEncounter | undefined;

  /**
   * **[CMS-1500 Box 25, 26, 28, 29, 32, 32a, 32b, 33, 33a, 33b]** Billing details for the claim, including the billing provider, service facility, tax identification, and total charges.
   * @public
   */
  billing: ProfessionalClaimSubmissionBilling | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b, 20, 24a-24j]** The individual services, procedures, or supplies being billed. Each service line corresponds to one row in Box 24 of the CMS-1500 form.
   * @public
   */
  serviceLines: ProfessionalClaimSubmissionServiceLine[] | undefined;

  /**
   * **[CMS-1500 Box 9, 9a, 9d]** Coverage the patient holds under another insurance policy, relevant to coordination of benefits. Include this when the patient has coverage from another payer in addition to the one you're billing.
   * @public
   */
  otherInsured?: ProfessionalClaimSubmissionOtherInsured[] | undefined;

  /**
   * A unique string to identify this request to the server. You can safely retry requests with the same idempotency key within 24 hours of making the first request. This prevents you from sending duplicate claims due to network errors or other intermittent failures. If you reuse a key on a new request while Stedi is still processing the original, Stedi returns a `409 Conflict` error. [Learn more](https://www.stedi.com/docs/api-reference/index#idempotency-keys).
   * @public
   */
  idempotencyKey?: string | undefined;
}

/**
 * The response to a professional claim submission.
 * @public
 */
export interface CreateProfessionalClaimSubmissionOutput {
  /**
   * A unique identifier for the claim within Stedi. This ID stays the same throughout the claim's entire lifecycle. For example, the claim ID is the same for the initial submission and any resubmissions. This is how Stedi links a particular claim to responses, such as 277CA claim acknowledgments.
   * @public
   */
  claimId: string | undefined;

  /**
   * A unique identifier for a specific submission of a claim within Stedi. Stedi generates a submission ID for the initial submission and then a new submission ID for every resubmission of the same claim. This is different from the claim ID, which doesn't change throughout the claim's lifecycle.
   * @public
   */
  submissionId: string | undefined;

  /**
   * Failed claim edits that caused Stedi to reject the claim.
   *   - When present, Stedi stored the claim and generated a 277CA claim acknowledgment for the rejection, but didn't send the claim to the payer. You must fix all errors before resubmitting.
   *   - When absent, the claim data passed Stedi's edits and Stedi sent the claim to the payer.
   * @public
   */
  errors?: ClaimRejectionError[] | undefined;
}

/**
 * A single way in which the request failed validation.
 * @public
 */
export interface ValidationFailure {
  /**
   * A JSON pointer to the part of the request that failed validation
   * @public
   */
  path?: string | undefined;

  /**
   * What was wrong with this part of the request
   * @public
   */
  message: string | undefined;
}

/**
 * Input for fetching a claim submission as professional claim JSON.
 * @public
 */
export interface GetProfessionalClaimSubmissionInput {
  /**
   * A unique identifier for a specific submission of a claim within Stedi. Stedi generates a submission ID for the initial submission and then a new submission ID for every resubmission of the same claim. This is different from the claim ID, which doesn't change throughout the claim's lifecycle.
   *
   * You can retrieve this ID from the `submissionId` property in the [Professional Claims CMS-1500 JSON submission endpoint](/docs/healthcare/api-reference/post-healthcare-claims-cms-1500-json) response.
   * @public
   */
  id: string | undefined;
}

/**
 * A professional claim in the Stedi JSON format.
 * @public
 */
export interface ProfessionalClaimSubmissionData {
  /**
   * **[CMS-1500 Carrier Block]** The purpose of the submission. Use `CHARGEABLE` for standard fee-for-service claims, which covers most submissions.
   * @public
   */
  purpose: ProfessionalClaimSubmissionPurpose | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The payer being billed for this claim, identified by a Stedi payer ID. Visit the [Payer Network](https://www.stedi.com/healthcare/network) for a complete list of payers and their IDs.
   * @public
   */
  payer: ProfessionalClaimSubmissionPayer | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The entity submitting the claim to Stedi.
   * @public
   */
  submitter: ProfessionalClaimSubmissionSubmitter | undefined;

  /**
   * **[CMS-1500 Box 1, 1a, 4, 7, 11, 11a, 11b, 11c]** The person who carries the insurance policy being billed. The insured is also called the subscriber, primary policyholder, or primary cardholder, and may be a different person from the patient. For example, when a spouse or child receives care under an employee's plan, the employee is the insured.
   * @public
   */
  insured: ProfessionalClaimSubmissionInsured | undefined;

  /**
   * **[CMS-1500 Box 2, 3, 5, 6]** The person who received care. Only include this object when the patient is someone other than the insured, such as a spouse or dependent on the insured's plan. When the patient is the insured, leave this empty.
   * @public
   */
  patient?: ProfessionalClaimSubmissionPatient | undefined;

  /**
   * **[CMS-1500 Box 12, 13, 27, 31]** Signature and assignment-of-benefits indicators for the claim, covering whether the provider has the patient's and insured's authorizations on file and whether the provider accepts the payer's terms.
   * @public
   */
  authorization: ProfessionalClaimSubmissionAuthorization | undefined;

  /**
   * **[CMS-1500 Box 10a, 10b, 10c, 10d, 14, 15, 16, 17, 17a, 17b, 18, 19, 21, 22, 23, 24h]** Clinical details about the encounter, including diagnosis codes, the related providers, relevant dates, and supporting information for the claim.
   * @public
   */
  encounter: ProfessionalClaimSubmissionEncounter | undefined;

  /**
   * **[CMS-1500 Box 25, 26, 28, 29, 32, 32a, 32b, 33, 33a, 33b]** Billing details for the claim, including the billing provider, service facility, tax identification, and total charges.
   * @public
   */
  billing: ProfessionalClaimSubmissionBilling | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b, 20, 24a-24j]** The individual services, procedures, or supplies being billed. Each service line corresponds to one row in Box 24 of the CMS-1500 form.
   * @public
   */
  serviceLines: ProfessionalClaimSubmissionServiceLine[] | undefined;

  /**
   * **[CMS-1500 Box 9, 9a, 9d]** Coverage the patient holds under another insurance policy, relevant to coordination of benefits. Include this when the patient has coverage from another payer in addition to the one you're billing.
   * @public
   */
  otherInsured?: ProfessionalClaimSubmissionOtherInsured[] | undefined;
}

/**
 * The claim submission in the Stedi professional claim JSON format.
 * @public
 */
export interface GetProfessionalClaimSubmissionOutput {
  /**
   * A unique identifier for the claim within Stedi. This ID stays the same throughout the claim's entire lifecycle. For example, the claim ID is the same for the initial submission and any resubmissions. This is how Stedi links a particular claim to responses, such as 277CA claim acknowledgments.
   * @public
   */
  claimId: string | undefined;

  /**
   * A unique identifier for a specific submission of a claim within Stedi. Stedi generates a submission ID for the initial submission and then a new submission ID for every resubmission of the same claim. This is different from the claim ID, which doesn't change throughout the claim's lifecycle.
   * @public
   */
  submissionId: string | undefined;

  /**
   * The payer identifier in Stedi's system.
   * @public
   */
  stediPayerId?: string | undefined;

  /**
   * The submitted claim in the Stedi professional claim JSON format.
   * @public
   */
  data: ProfessionalClaimSubmissionData | undefined;

  /**
   * The time Stedi processed the submission.
   * @public
   */
  processedAt: Date | undefined;
}

/**
 * The request to validate a professional claim.
 * @public
 */
export interface ValidateProfessionalClaimSubmissionInput {
  /**
   * **[CMS-1500 Carrier Block]** The purpose of the submission. Use `CHARGEABLE` for standard fee-for-service claims, which covers most submissions.
   * @public
   */
  purpose: ProfessionalClaimSubmissionPurpose | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The payer being billed for this claim, identified by a Stedi payer ID. Visit the [Payer Network](https://www.stedi.com/healthcare/network) for a complete list of payers and their IDs.
   * @public
   */
  payer: ProfessionalClaimSubmissionPayer | undefined;

  /**
   * **[CMS-1500 Carrier Block]** The entity submitting the claim to Stedi.
   * @public
   */
  submitter: ProfessionalClaimSubmissionSubmitter | undefined;

  /**
   * **[CMS-1500 Box 1, 1a, 4, 7, 11, 11a, 11b, 11c]** The person who carries the insurance policy being billed. The insured is also called the subscriber, primary policyholder, or primary cardholder, and may be a different person from the patient. For example, when a spouse or child receives care under an employee's plan, the employee is the insured.
   * @public
   */
  insured: ProfessionalClaimSubmissionInsured | undefined;

  /**
   * **[CMS-1500 Box 2, 3, 5, 6]** The person who received care. Only include this object when the patient is someone other than the insured, such as a spouse or dependent on the insured's plan. When the patient is the insured, leave this empty.
   * @public
   */
  patient?: ProfessionalClaimSubmissionPatient | undefined;

  /**
   * **[CMS-1500 Box 12, 13, 27, 31]** Signature and assignment-of-benefits indicators for the claim, covering whether the provider has the patient's and insured's authorizations on file and whether the provider accepts the payer's terms.
   * @public
   */
  authorization: ProfessionalClaimSubmissionAuthorization | undefined;

  /**
   * **[CMS-1500 Box 10a, 10b, 10c, 10d, 14, 15, 16, 17, 17a, 17b, 18, 19, 21, 22, 23, 24h]** Clinical details about the encounter, including diagnosis codes, the related providers, relevant dates, and supporting information for the claim.
   * @public
   */
  encounter: ProfessionalClaimSubmissionEncounter | undefined;

  /**
   * **[CMS-1500 Box 25, 26, 28, 29, 32, 32a, 32b, 33, 33a, 33b]** Billing details for the claim, including the billing provider, service facility, tax identification, and total charges.
   * @public
   */
  billing: ProfessionalClaimSubmissionBilling | undefined;

  /**
   * **[CMS-1500 Box 17, 17a, 17b, 20, 24a-24j]** The individual services, procedures, or supplies being billed. Each service line corresponds to one row in Box 24 of the CMS-1500 form.
   * @public
   */
  serviceLines: ProfessionalClaimSubmissionServiceLine[] | undefined;

  /**
   * **[CMS-1500 Box 9, 9a, 9d]** Coverage the patient holds under another insurance policy, relevant to coordination of benefits. Include this when the patient has coverage from another payer in addition to the one you're billing.
   * @public
   */
  otherInsured?: ProfessionalClaimSubmissionOtherInsured[] | undefined;
}

/**
 * The response to a professional claim validation. A response with no errors means Stedi would accept the claim as-is.
 * @public
 */
export interface ValidateProfessionalClaimSubmissionOutput {
  /**
   * Failed claim edits that would cause Stedi to reject the claim. Absent when the claim passes Stedi's pre-submission checks.
   * @public
   */
  errors?: ClaimRejectionError[] | undefined;
}

/**
 * A date range. `end` is inclusive. A single date of service carries only `start`.
 * @public
 */
export interface ClaimDateRange {
  /**
   * The start date of the range, in `YYYY-MM-DD` format.
   * @public
   */
  start: string | undefined;

  /**
   * The end date of the range, inclusive, in `YYYY-MM-DD` format.
   * @public
   */
  end?: string | undefined;
}

/**
 * A summary of a 277CA claim acknowledgment from a clearinghouse or the payer.
 * @public
 */
export interface ClaimAcknowledgmentSummary {
  /**
   * A unique identifier for the acknowledgment within Stedi.
   * @public
   */
  id: string | undefined;

  /**
   * The status the clearinghouse or payer reported for the claim in the 277CA.
   *   - `REJECTED`: A clearinghouse or the payer rejected the claim. The payer won't adjudicate the claim until you correct and resubmit it.
   *   - `ACCEPTED`: A clearinghouse or the payer accepted the claim. A clearinghouse acceptance means the claim passed its edits and the clearinghouse forwarded it to the payer. A payer acceptance means the payer will adjudicate the claim.
   *   - `RECEIVED`: A clearinghouse or the payer received the claim but hasn't yet accepted or rejected it.
   *   - `INVALID`: Stedi couldn't determine the status because the 277CA carries a status category code Stedi doesn't recognize.
   * @public
   */
  status: ClaimAcknowledgmentStatus | undefined;

  /**
   * The entity that reported the status in the 277CA.
   *   - `PAYER`: The payer reported the status in the 277CA.
   *   - `CLEARINGHOUSE`: A clearinghouse reported the status, either Stedi or an intermediary clearinghouse between Stedi and the payer.
   * @public
   */
  reportedBy: ClaimStatusReportedBy | undefined;

  /**
   * The name of the clearinghouse or payer that reported the status, as it appears in the 277CA.
   * @public
   */
  sourceName: string | undefined;

  /**
   * The time Stedi processed the acknowledgment.
   * @public
   */
  processedAt: Date | undefined;
}

/**
 * The name of the patient who received the services on the claim.
 * @public
 */
export interface ClaimPatientName {
  /**
   * The patient's first name.
   * @public
   */
  firstName?: string | undefined;

  /**
   * The patient's middle name.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The patient's last name.
   * @public
   */
  lastName?: string | undefined;

  /**
   * The patient's name suffix.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * A summary of the claim payment information the payer reported for a claim in an 835 ERA. Each record corresponds to one CLP loop in the ERA.
 * @public
 */
export interface ClaimPaymentInformationSummary {
  /**
   * A unique identifier for the claim payment information record within Stedi.
   * @public
   */
  id: string | undefined;

  /**
   * The status the payer assigned to the claim.
   * @public
   */
  statusCode: ClaimPaymentInformationStatusCode | undefined;

  /**
   * The total charge amount of the claim.
   * @public
   */
  totalClaimChargeAmount: string | undefined;

  /**
   * The amount the payer paid on the claim. This is the charge amount less all adjustments, and can be positive, zero, or negative.
   * @public
   */
  claimPaymentAmount: string | undefined;

  /**
   * The amount the patient owes, such as a deductible, copay, or coinsurance.
   * @public
   */
  patientResponsibilityAmount?: string | undefined;

  /**
   * The check number for check payments, or the EFT trace number for electronic payments. Use it to match this claim payment information to the funds the payer sent.
   * @public
   */
  checkOrEftTraceNumber?: string | undefined;

  /**
   * The time Stedi processed the 835 ERA that reported this claim payment information.
   * @public
   */
  processedAt: Date | undefined;
}

/**
 * A summary of a claim submission.
 * @public
 */
export interface ClaimSubmissionSummary {
  /**
   * A unique identifier for a specific submission of a claim within Stedi. Stedi generates a submission ID for the initial submission and then a new submission ID for every resubmission of the same claim. This is different from the claim ID, which doesn't change throughout the claim's lifecycle.
   * @public
   */
  id: string | undefined;

  /**
   * The payer identifier in Stedi's system. This is the Stedi payer ID listed in the Stedi [Payer Network](https://www.stedi.com/healthcare/network).
   * @public
   */
  stediPayerId?: string | undefined;

  /**
   * The patient control number you assigned to the claim.
   * @public
   */
  patientControlNumber: string | undefined;

  /**
   * The name of the patient who received the services on the claim.
   * @public
   */
  patientName?: ClaimPatientName | undefined;

  /**
   * The total charge amount of the submitted claim.
   * @public
   */
  totalClaimChargeAmount: string | undefined;

  /**
   * The dates of service from the claim. A single date of service carries only `start`. Absent when the submitted dates aren't valid calendar dates.
   * @public
   */
  datesOfService?: ClaimDateRange | undefined;

  /**
   * The time Stedi processed the submission.
   * @public
   */
  processedAt: Date | undefined;
}

/**
 * The top-level fields of a claim.
 * @public
 */
export interface ClaimSummary {
  /**
   * A unique identifier for the claim within Stedi. This ID stays the same throughout the claim's entire lifecycle. For example, the claim ID is the same for the initial submission and any resubmissions.
   * @public
   */
  id: string | undefined;

  /**
   * The payer identifier in Stedi's system. This is the Stedi payer ID listed in the Stedi [Payer Network](https://www.stedi.com/healthcare/network).
   * @public
   */
  stediPayerId?: string | undefined;

  /**
   * The patient control number you assigned to the claim.
   * @public
   */
  patientControlNumber: string | undefined;

  /**
   * The name of the patient who received the services on the claim.
   * @public
   */
  patientName?: ClaimPatientName | undefined;

  /**
   * The claim's current processing status.
   *   - `SUBMITTED`: You submitted the claim to Stedi but haven't yet received a 277CA response from Stedi or the payer.
   *   - `REJECTED`: Either Stedi or the payer rejected the claim before the start of adjudication. This can happen even when the payer has acknowledged receipt.
   *   - `ACCEPTED`: The payer has accepted the claim into their adjudication system and it's currently being processed or adjudicated.
   *   - `RECEIVED`: The clearinghouse or payer has acknowledged receipt of the claim. This doesn't mean the claim has been accepted for adjudication.
   *   - `PROCESSED`: The payer has adjudicated the claim. Check `totalClaimPaidAmount` to see how much was paid.
   *   - `DENIED`: The payer has denied the claim.
   *   - `UNKNOWN`: Stedi can't determine a single status for this claim, usually because the payer's responses are mixed or incomplete.
   * @public
   */
  status: ClaimStatus | undefined;

  /**
   * The entity that reported the claim's current status.
   *   - `PAYER`: The payer reported the status, in a 277CA claim acknowledgment or an 835 ERA.
   *   - `CLEARINGHOUSE`: A clearinghouse reported the status, either Stedi or an intermediary clearinghouse between Stedi and the payer.
   * @public
   */
  statusReportedBy: ClaimStatusReportedBy | undefined;

  /**
   * The type of claim. Each type corresponds to a different 837 transaction set.
   *   - `PROFESSIONAL`: An 837P professional claim, the electronic equivalent of the CMS-1500 form.
   *   - `INSTITUTIONAL`: An 837I institutional claim, the electronic equivalent of the UB-04 form.
   *   - `DENTAL`: An 837D dental claim, the electronic equivalent of the ADA Dental Claim Form.
   * @public
   */
  type: ClaimType | undefined;

  /**
   * The total charge amount of the claim's most recent submission.
   * @public
   */
  totalClaimChargeAmount: string | undefined;

  /**
   * The total amount payers have paid on this claim, summed across every claim payment information record linked to it. Excludes claim payment information with the `PREDETERMINATION_PRICING_ONLY` status, where the payer priced the claim without paying it. Reversals carry a negative amount, so they subtract from the total. Absent until Stedi receives an 835 ERA for the claim.
   * @public
   */
  totalClaimPaidAmount?: string | undefined;

  /**
   * The dates of service from the claim's most recent submission. A single date of service carries only `start`. Absent when the submitted dates aren't valid calendar dates.
   * @public
   */
  datesOfService?: ClaimDateRange | undefined;

  /**
   * The time Stedi processed the claim's most recent submission.
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * A timeline entry in a claim's history. Exactly one property is set, and its name identifies the type of entry.
 * @public
 */
export type ClaimTimelineEvent =
  | ClaimTimelineEvent.ClaimAcknowledgmentMember
  | ClaimTimelineEvent.ClaimPaymentInformationMember
  | ClaimTimelineEvent.DentalClaimSubmissionMember
  | ClaimTimelineEvent.InstitutionalClaimSubmissionMember
  | ClaimTimelineEvent.ProfessionalClaimSubmissionMember
  | ClaimTimelineEvent.$UnknownMember;

/**
 * @public
 */
export namespace ClaimTimelineEvent {
  /**
   * An 837P professional claim submission, either the initial submission or a resubmission.
   * @public
   */
  export interface ProfessionalClaimSubmissionMember {
    professionalClaimSubmission: ClaimSubmissionSummary;
    dentalClaimSubmission?: never;
    institutionalClaimSubmission?: never;
    claimAcknowledgment?: never;
    claimPaymentInformation?: never;
    $unknown?: never;
  }

  /**
   * An 837D dental claim submission, either the initial submission or a resubmission.
   * @public
   */
  export interface DentalClaimSubmissionMember {
    professionalClaimSubmission?: never;
    dentalClaimSubmission: ClaimSubmissionSummary;
    institutionalClaimSubmission?: never;
    claimAcknowledgment?: never;
    claimPaymentInformation?: never;
    $unknown?: never;
  }

  /**
   * An 837I institutional claim submission, either the initial submission or a resubmission.
   * @public
   */
  export interface InstitutionalClaimSubmissionMember {
    professionalClaimSubmission?: never;
    dentalClaimSubmission?: never;
    institutionalClaimSubmission: ClaimSubmissionSummary;
    claimAcknowledgment?: never;
    claimPaymentInformation?: never;
    $unknown?: never;
  }

  /**
   * A 277CA claim acknowledgment from a clearinghouse or the payer.
   * @public
   */
  export interface ClaimAcknowledgmentMember {
    professionalClaimSubmission?: never;
    dentalClaimSubmission?: never;
    institutionalClaimSubmission?: never;
    claimAcknowledgment: ClaimAcknowledgmentSummary;
    claimPaymentInformation?: never;
    $unknown?: never;
  }

  /**
   * Payment information the payer reported for this claim in an 835 Electronic Remittance Advice (ERA).
   * @public
   */
  export interface ClaimPaymentInformationMember {
    professionalClaimSubmission?: never;
    dentalClaimSubmission?: never;
    institutionalClaimSubmission?: never;
    claimAcknowledgment?: never;
    claimPaymentInformation: ClaimPaymentInformationSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    professionalClaimSubmission?: never;
    dentalClaimSubmission?: never;
    institutionalClaimSubmission?: never;
    claimAcknowledgment?: never;
    claimPaymentInformation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    professionalClaimSubmission: (value: ClaimSubmissionSummary) => T;
    dentalClaimSubmission: (value: ClaimSubmissionSummary) => T;
    institutionalClaimSubmission: (value: ClaimSubmissionSummary) => T;
    claimAcknowledgment: (value: ClaimAcknowledgmentSummary) => T;
    claimPaymentInformation: (value: ClaimPaymentInformationSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for retrieving a claim.
 * @public
 */
export interface GetClaimInput {
  /**
   * A unique identifier for the claim within Stedi. You can retrieve this ID from the `claimId` property in the Create Professional Claim Submission JSON endpoint response or from the List Claims lifecycle endpoint.
   * @public
   */
  id: string | undefined;
}

/**
 * The claim, with its current status and the summary fields from its most recent submission.
 * @public
 */
export interface GetClaimOutput {
  /**
   * A unique identifier for the claim within Stedi. This ID stays the same throughout the claim's entire lifecycle. For example, the claim ID is the same for the initial submission and any resubmissions.
   * @public
   */
  id: string | undefined;

  /**
   * The payer identifier in Stedi's system. This is the Stedi payer ID listed in the Stedi [Payer Network](https://www.stedi.com/healthcare/network).
   * @public
   */
  stediPayerId?: string | undefined;

  /**
   * The patient control number you assigned to the claim.
   * @public
   */
  patientControlNumber: string | undefined;

  /**
   * The name of the patient who received the services on the claim.
   * @public
   */
  patientName?: ClaimPatientName | undefined;

  /**
   * The claim's current processing status.
   *   - `SUBMITTED`: You submitted the claim to Stedi but haven't yet received a 277CA response from Stedi or the payer.
   *   - `REJECTED`: Either Stedi or the payer rejected the claim before the start of adjudication. This can happen even when the payer has acknowledged receipt.
   *   - `ACCEPTED`: The payer has accepted the claim into their adjudication system and it's currently being processed or adjudicated.
   *   - `RECEIVED`: The clearinghouse or payer has acknowledged receipt of the claim. This doesn't mean the claim has been accepted for adjudication.
   *   - `PROCESSED`: The payer has adjudicated the claim. Check `totalClaimPaidAmount` to see how much was paid.
   *   - `DENIED`: The payer has denied the claim.
   *   - `UNKNOWN`: Stedi can't determine a single status for this claim, usually because the payer's responses are mixed or incomplete.
   * @public
   */
  status: ClaimStatus | undefined;

  /**
   * The entity that reported the claim's current status.
   *   - `PAYER`: The payer reported the status, in a 277CA claim acknowledgment or an 835 ERA.
   *   - `CLEARINGHOUSE`: A clearinghouse reported the status, either Stedi or an intermediary clearinghouse between Stedi and the payer.
   * @public
   */
  statusReportedBy: ClaimStatusReportedBy | undefined;

  /**
   * The type of claim. Each type corresponds to a different 837 transaction set.
   *   - `PROFESSIONAL`: An 837P professional claim, the electronic equivalent of the CMS-1500 form.
   *   - `INSTITUTIONAL`: An 837I institutional claim, the electronic equivalent of the UB-04 form.
   *   - `DENTAL`: An 837D dental claim, the electronic equivalent of the ADA Dental Claim Form.
   * @public
   */
  type: ClaimType | undefined;

  /**
   * The total charge amount of the claim's most recent submission.
   * @public
   */
  totalClaimChargeAmount: string | undefined;

  /**
   * The total amount payers have paid on this claim, summed across every claim payment information record linked to it. Excludes claim payment information with the `PREDETERMINATION_PRICING_ONLY` status, where the payer priced the claim without paying it. Reversals carry a negative amount, so they subtract from the total. Absent until Stedi receives an 835 ERA for the claim.
   * @public
   */
  totalClaimPaidAmount?: string | undefined;

  /**
   * The dates of service from the claim's most recent submission. A single date of service carries only `start`. Absent when the submitted dates aren't valid calendar dates.
   * @public
   */
  datesOfService?: ClaimDateRange | undefined;

  /**
   * The time Stedi processed the claim's most recent submission.
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * Input for retrieving a claim's timeline.
 * @public
 */
export interface GetClaimTimelineInput {
  /**
   * The maximum number of timeline entries to return per page. Defaults to 100.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The `nextPageToken` from a previous call to this operation. If not specified, Stedi returns the first page of results.
   * @public
   */
  pageToken?: string | undefined;

  /**
   * A unique identifier for the claim within Stedi. You can retrieve this ID from the `claimId` property in a claim submission response or from the list claims endpoint.
   * @public
   */
  id: string | undefined;
}

/**
 * A page of a claim's timeline.
 * @public
 */
export interface GetClaimTimelineOutput {
  /**
   * Token you can supply in subsequent requests to retrieve the next page of results. If absent, there are no more results.
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * Timeline entries for the claim, newest first, including submissions, acknowledgments, and claim payment information.
   * @public
   */
  items: ClaimTimelineEvent[] | undefined;
}

/**
 * Input for listing claims.
 * @public
 */
export interface ListClaimsInput {
  /**
   * The maximum number of claims to return per page. Defaults to 100.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The `nextPageToken` from a previous call to this operation. If not specified, Stedi returns the first page of results.
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Filter for claims with specific statuses. You can include this parameter multiple times to filter for multiple statuses.
   *   - `SUBMITTED`: You submitted the claim to Stedi but haven't yet received a 277CA response from Stedi or the payer.
   *   - `RECEIVED`: The clearinghouse or payer has acknowledged receipt of the claim. This doesn't mean the claim has been accepted for adjudication.
   *   - `ACCEPTED`: The payer has accepted the claim into their adjudication system and it's currently being processed or adjudicated.
   *   - `REJECTED`: Either Stedi or the payer rejected the claim before the start of adjudication. This can happen even when the payer has acknowledged receipt.
   *   - `PROCESSED`: The payer has adjudicated the claim. Check `totalClaimPaidAmount` to see how much was paid.
   *   - `DENIED`: The payer has denied the claim.
   *   - `UNKNOWN`: Stedi can't determine a single status for this claim, usually because the payer's responses are mixed or incomplete.
   * @public
   */
  status?: ClaimStatus[] | undefined;

  /**
   * Filter for claims with specific patient control numbers. You can include this parameter multiple times to filter for multiple patient control numbers.
   * @public
   */
  patientControlNumbers?: string[] | undefined;

  /**
   * Filter for claims with `submittedAt` after this time.
   * @public
   */
  submittedAfter?: Date | undefined;

  /**
   * Filter for claims with `submittedAt` before this time.
   * @public
   */
  submittedBefore?: Date | undefined;
}

/**
 * A page of claims.
 * @public
 */
export interface ListClaimsOutput {
  /**
   * Token you can supply in subsequent requests to retrieve the next page of results. If absent, there are no more results.
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The claim records on this page, newest first by `submittedAt`. Each claim record includes summary information about the most recent submission, including processing status, charge and paid totals, patient name, dates of service, and claim type.
   * @public
   */
  items: ClaimSummary[] | undefined;
}

/**
 * Additional identification numbers for the dependent.
 * @public
 */
export interface EligibilityCheckRequestDependentAdditionalInformation {
  /**
   * The dependent's Social Security Number (SSN). Don't use this for Federally-administered programs, such as Medicare.
   * @public
   */
  ssn?: string | undefined;

  /**
   * The group number for the dependent's insurance plan.
   * @public
   */
  groupNumber?: string | undefined;

  /**
   * The dependent's identity card number. Include this when this number differs from the subscriber's member ID.
   * @public
   */
  identityCardNumber?: string | undefined;

  /**
   * The eligibility category for the dependent.
   * @public
   */
  eligibilityCategory?: string | undefined;

  /**
   * The plan number for the dependent's insurance plan.
   * @public
   */
  planNumber?: string | undefined;

  /**
   * The group or policy number.
   * @public
   */
  groupOrPolicyNumber?: string | undefined;

  /**
   * The contract number associated with the dependent's insurance plan.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The patient account number for the dependent.
   * @public
   */
  patientAccountNumber?: string | undefined;

  /**
   * The dependent's Medicare Beneficiary Identifier (MBI). The 270 carries it as the Health Insurance Claim (HIC) number, which CMS retired in favor of the MBI.
   * @public
   */
  mbi?: string | undefined;

  /**
   * The identification card serial number, when it differs from the member ID.
   * @public
   */
  identificationCardSerialNumber?: string | undefined;

  /**
   * The dependent's insurance policy number.
   * @public
   */
  insurancePolicyNumber?: string | undefined;

  /**
   * The plan network identification number for the dependent.
   * @public
   */
  planNetworkId?: string | undefined;

  /**
   * The agency claim number associated with the dependent.
   * @public
   */
  agencyClaimNumber?: string | undefined;

  /**
   * The medical record identification number for the dependent.
   * @public
   */
  medicalRecordId?: string | undefined;

  /**
   * The issue number for the dependent's insurance policy.
   * @public
   */
  issueNumber?: string | undefined;

  /**
   * The dependent's member ID. Only set this when checking eligibility with a Property and Casualty payer and the patient identifier is a member ID that would be used in an 837 claim. If the dependent has their own member ID for a health plan, identify them in the `subscriber` object instead.
   * @public
   */
  memberId?: string | undefined;
}

/**
 * The address of the entity.
 * @public
 */
export interface EligibilityCheckRequestAddress {
  /**
   * The first line of the address.
   * @public
   */
  addressLine1: string | undefined;

  /**
   * The second line of the address.
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * The city.
   * @public
   */
  city: string | undefined;

  /**
   * The US state or Canadian province code with unknown option. For example, `TN` for Tennessee or `NB` for New Brunswick.
   * @public
   */
  state?: string | undefined;

  /**
   * The United States or Canadian postal code, excluding punctuation and blanks.
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The two-letter country code from [Part 1 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * @public
   */
  country?: string | undefined;

  /**
   * The country subdivision code from [Part 2 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-2).
   * @public
   */
  countrySubdivision?: string | undefined;
}

/**
 * The name of a dependent, who is always a person.
 * @public
 */
export interface EligibilityCheckRequestDependentPersonName {
  /**
   * The dependent's first name.
   * @public
   */
  firstName: string | undefined;

  /**
   * The dependent's last name. **Don't** include the dependent's name suffix, such as Jr. or III. Use the designated `suffix` property instead.
   * @public
   */
  lastName: string | undefined;

  /**
   * The dependent's middle name or middle initial.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The dependent's name suffix, such as Jr. or III. Only include the dependent's personal name suffix - **don't** include professional or academic titles, such as M.D. or MBA.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * The dependent's name.
 * @public
 */
export interface EligibilityCheckRequestDependentName {
  /**
   * The dependent's name.
   * @public
   */
  person: EligibilityCheckRequestDependentPersonName | undefined;
}

/**
 * Information about a provider's role and taxonomy.
 * @public
 */
export interface EligibilityCheckRequestEntityProvider {
  /**
   * A code indicating the type of provider. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#provider-codes) for a complete list.
   * @public
   */
  code?: EligibilityCheckRequestEntityProviderCode | undefined;

  /**
   * The provider's taxonomy code.
   * @public
   */
  reference?: string | undefined;
}

/**
 * A dependent for which you want to retrieve benefits information.
 * - You can only submit one dependent per eligibility check.
 * - Only include the patient's information here when they are listed as a dependent on the subscriber's insurance plan AND the payer cannot uniquely identify them through information outside the subscriber's policy. For example, if the dependent has their own member ID number, you should identify them in the `subscriber` object instead. This includes member IDs that differ only by a suffix, such as `01`, because the patient can still be uniquely identified.
 * - Most Medicaid plans don't support dependents, with a [few exceptions](https://www.stedi.com/docs/healthcare/send-eligibility-checks#medicaid-dependents). Sending this information to payers that don't support dependents will either cause an error, or the payer may ignore the information and return results for the subscriber instead.
 * - Each payer has different requirements, so you should supply the fields necessary for each payer to identify the dependent in their system. However, we **strongly recommend** including the dependent's date of birth in the request when available because many payers return errors without it.
 * - Enter the patient's name exactly as written on their insurance card, if available, including any special or punctuation characters such as apostrophes, hyphens (dashes), or spaces. Visit [patient names](https://www.stedi.com/docs/healthcare/send-eligibility-checks#patient-names) for all best practices to avoid unnecessary failures.
 * @public
 */
export interface EligibilityCheckRequestDependent {
  /**
   * The dependent's name.
   * @public
   */
  name: EligibilityCheckRequestDependentName | undefined;

  /**
   * The dependent's relationship to the subscriber.
   * @public
   */
  relationToSubscriber?: EligibilityCheckRequestDependentRelationship | undefined;

  /**
   * The dependent's date of birth (DOB). We **strongly recommend** including the DOB in your request. Many payers need this information to identify the patient in their system and may immediately return an error when it's not provided.
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * Code indicating the dependent's gender.
   * @public
   */
  gender?: EligibilityCheckRequestPatientGender | undefined;

  /**
   * Additional identification numbers for the dependent.
   * @public
   */
  additionalInformation?: EligibilityCheckRequestDependentAdditionalInformation | undefined;

  /**
   * The dependent's address.
   * @public
   */
  address?: EligibilityCheckRequestAddress | undefined;

  /**
   * Information about a provider associated with the dependent who isn't the entity requesting the eligibility check, such as a referring provider. The requesting provider is specified in the request's root `provider`.
   * @public
   */
  provider?: EligibilityCheckRequestEntityProvider | undefined;
}

/**
 * Additional information about the encounter.
 * @public
 */
export interface EligibilityCheckRequestEncounterAdditionalInformation {
  /**
   * The prior authorization number for a particular benefit or procedure.
   * @public
   */
  priorAuthNumber?: string | undefined;

  /**
   * The referral number for a particular benefit or procedure.
   * @public
   */
  referralNumber?: string | undefined;
}

/**
 * A calendar date range. Both bounds are optional and at least one is always present; `end` is inclusive. A point-in-time date is carried in `start`.
 * @public
 */
export interface EligibilityCheckDateRange {
  /**
   * The start of the range, or a single point-in-time date.
   * @public
   */
  start?: string | undefined;

  /**
   * The inclusive end of the range.
   * @public
   */
  end?: string | undefined;
}

/**
 * Dates of service for the eligibility inquiry. If you don't specify a service date, the payer defaults to using the current date in their timezone.
 * @public
 */
export interface EligibilityCheckRequestEncounterDates {
  /**
   * The service date or date range.
   * @public
   */
  service?: EligibilityCheckDateRange | undefined;
}

/**
 * The type of facility where providers deliver the service.
 * @public
 */
export interface EligibilityCheckRequestPlaceOfService {
  /**
   * The place of service code identifying the type of facility.
   * @public
   */
  code: EligibilityCheckPlaceOfServiceCode | undefined;
}

/**
 * A service or procedure code identifying the type of service for which you want to receive benefits information.
 * @public
 */
export interface EligibilityCheckRequestService {
  /**
   * The service or procedure code value.
   * @public
   */
  value: string | undefined;

  /**
   * The code system that the `value` belongs to, such as CPT, HCPCS, or STC.
   * @public
   */
  system: EligibilityCheckRequestServiceCodeSystem | undefined;
}

/**
 * Details about the eligibility or benefit information you are requesting for the patient.
 * - You can optionally include service type codes (STCs) or procedure codes to request benefits for specific services.
 * - You can specify either a single service date or a date range using `dates.service`. The payer defaults to using the current date in their timezone if you don't include one.
 * - When checking eligibility for today, omit the service date to ensure consistent behavior across payers.
 * - We recommend submitting dates up to 12 months in the past or up to the end of the current month. Payers aren't required to support dates outside these ranges. However, some payers such as the Centers for Medicare and Medicaid Services (CMS) do support requests for dates further in the future - especially the next calendar month. Check the payer's documentation to determine their specific behavior.
 * @public
 */
export interface EligibilityCheckRequestEncounter {
  /**
   * One or more codes classifying the type of services for which you want to receive benefits information.
   * - You can include service type codes (STCs) or procedure codes to request specific types of benefits information. For medical benefits, you'll almost always need an STC because most medical payers don't support procedure codes (CPT/HCPCS/CDT). For dental benefits, many payers support procedure codes. Visit [STCs and procedure codes](https://www.stedi.com/docs/healthcare/eligibility-stc-procedure-codes) for guidance on choosing the right codes.
   * - We recommend including one service per request. Not all payers support all service type codes, not all payers support multiple codes in the same request, and payers aren't required to respond with exactly the same codes you sent.
   * - If you don't specify any services, Stedi defaults to using service type code `30` (Health Benefit Plan Coverage).
   * @public
   */
  services?: EligibilityCheckRequestService[] | undefined;

  /**
   * The dates of service for the eligibility inquiry.
   * @public
   */
  dates?: EligibilityCheckRequestEncounterDates | undefined;

  /**
   * The type of facility where providers deliver the service. Uses one of the [place of service codes](https://www.cms.gov/medicare/coding-billing/place-of-service-codes/code-sets).
   * @public
   */
  placeOfService?: EligibilityCheckRequestPlaceOfService | undefined;

  /**
   * Additional information about the encounter.
   * @public
   */
  additionalInformation?: EligibilityCheckRequestEncounterAdditionalInformation | undefined;
}

/**
 * The provider's state license information.
 * @public
 */
export interface EligibilityCheckRequestStateLicense {
  /**
   * The state or province code that issued the license.
   * @public
   */
  state?: string | undefined;

  /**
   * The provider's state license number.
   * @public
   */
  number: string | undefined;
}

/**
 * Additional identification numbers for the provider. Only include when specifically required by a payer.
 * @public
 */
export interface EligibilityCheckRequestProviderAdditionalInformation {
  /**
   * The provider's state license information. If you include this, you must provide at least the license `number`.
   * @public
   */
  stateLicense?: EligibilityCheckRequestStateLicense | undefined;

  /**
   * The provider's Medicare provider number.
   * @public
   */
  medicareProviderNumber?: string | undefined;

  /**
   * The provider's Medicaid provider number.
   * @public
   */
  medicaidProviderNumber?: string | undefined;

  /**
   * The ID number for the provider's facility.
   * @public
   */
  facilityIdNumber?: string | undefined;

  /**
   * The provider's contract number.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The provider's plan network identification number.
   * @public
   */
  planNetworkId?: string | undefined;

  /**
   * The provider's facility network identification number.
   * @public
   */
  facilityNetworkId?: string | undefined;

  /**
   * The provider's personal identification number.
   * @public
   */
  personalIdentificationNumber?: string | undefined;

  /**
   * The provider's electronic device PIN.
   * @public
   */
  electronicDevicePin?: string | undefined;

  /**
   * The provider's submitter ID.
   * @public
   */
  submitterId?: string | undefined;

  /**
   * The provider's user ID.
   * @public
   */
  userId?: string | undefined;

  /**
   * The provider's prior identifier number.
   * @public
   */
  priorIdentifierNumber?: string | undefined;
}

/**
 * The name of a provider who is a person.
 * @public
 */
export interface EligibilityCheckRequestProviderPersonName {
  /**
   * The provider's first name.
   * @public
   */
  firstName?: string | undefined;

  /**
   * The provider's last name.
   * @public
   */
  lastName: string | undefined;

  /**
   * The provider's middle name or middle initial.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The provider's name suffix, such as Jr. or III.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * The provider's name, as either a person or an organization.
 * @public
 */
export type EligibilityCheckRequestProviderName =
  | EligibilityCheckRequestProviderName.OrganizationMember
  | EligibilityCheckRequestProviderName.PersonMember
  | EligibilityCheckRequestProviderName.$UnknownMember;

/**
 * @public
 */
export namespace EligibilityCheckRequestProviderName {
  /**
   * The name of a provider who is a person.
   * @public
   */
  export interface PersonMember {
    person: EligibilityCheckRequestProviderPersonName;
    organization?: never;
    $unknown?: never;
  }

  /**
   * An organization's business name.
   * @public
   */
  export interface OrganizationMember {
    person?: never;
    organization: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    person?: never;
    organization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    person: (value: EligibilityCheckRequestProviderPersonName) => T;
    organization: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the entity requesting the eligibility check. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider.
 *  - You must provide the provider's name as either a person (with `name.person`) or an organization (with `name.organization`).
 *  - You must also provide an identifier - this is typically the provider's [National Provider Identifier](https://www.stedi.com/docs/healthcare/national-provider-identifier) (`npi`). If the provider doesn't have an NPI, you can supply an alternative, such as their `tin` or `ssn`.
 *  - Don't include additional properties, such as `tin` or `address`, unless they are specifically required or suggested by the payer.
 * @public
 */
export interface EligibilityCheckRequestProvider {
  /**
   * The provider's name, as either a person or an organization.
   * @public
   */
  name: EligibilityCheckRequestProviderName | undefined;

  /**
   * The type of provider making the request.
   * @public
   */
  type?: EligibilityCheckRequestProviderType | undefined;

  /**
   * The provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier).
   *
   * All healthcare providers eligible for an NPI must provide this identifier. Some non-traditional providers such as transportation services, durable medical equipment (DME) suppliers, or alternative medicine practitioners can't receive an NPI. If the provider doesn't have an NPI, payers virtually never support requests with alternate IDs. In the rare circumstance that a payer has instructed you to use an alternate ID, the payer will typically require you to supply either their `tin` or `ssn` instead.
   * @public
   */
  npi?: string | undefined;

  /**
   * The provider's Federal Taxpayer Identification Number. This is typically the provider's EIN (Employer Identification Number), but you may use the provider's SSN if the provider doesn't have an EIN. Only include if the payer requires it.
   * @public
   */
  tin?: string | undefined;

  /**
   * The Employer Identification Number (EIN), distinct from the Federal Taxpayer Identification Number in `tin`. Only include when the payer requires it.
   * @public
   */
  ein?: string | undefined;

  /**
   * The provider's Social Security Number (SSN).
   * - Only include when specifically instructed by a payer - for example, if the provider doesn't have an [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier). This use case is very rarely supported, and is typically when the provider is a non-medical provider, such as a social worker, home health aide, or transportation service.
   * - If the payer has instructed you to send an EIN but the provider operates using their SSN, use `provider.tin` instead of this field.
   * - Don't use this for Federally-administered programs, such as Medicare.
   * @public
   */
  ssn?: string | undefined;

  /**
   * The provider's service provider number. Only include when specifically instructed by a payer - for example, when the provider doesn't have an [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier). This use case is very rarely supported, and is typically when the provider is a non-medical provider, such as a social worker, home health aide, or transportation service.
   * @public
   */
  serviceProviderNumber?: string | undefined;

  /**
   * The provider's pharmacy processor number. Only include when specifically instructed by a payer - for example, when the provider doesn't have an [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier). This use case is very rarely supported, and is typically when the provider is a non-medical provider, such as a social worker, home health aide, or transportation service.
   * @public
   */
  pharmacyProcessorNumber?: string | undefined;

  /**
   * The provider's address. Only include when specifically instructed by a payer, such as when the provider has multiple locations and you need to identify the specific location making the request.
   * @public
   */
  address?: EligibilityCheckRequestAddress | undefined;

  /**
   * Additional identification numbers for the provider. Only include when specifically required by a payer.
   * @public
   */
  additionalInformation?: EligibilityCheckRequestProviderAdditionalInformation | undefined;

  /**
   * Information about the provider's role and taxonomy. Only include when required by a payer.
   * @public
   */
  provider?: EligibilityCheckRequestEntityProvider | undefined;
}

/**
 * Additional identification numbers for the subscriber. Use this object when you need to provide an identification number other than or in addition to the subscriber's member ID. For example, you may provide the patient account number.
 *
 * Don't include the health insurance claim number or the medicaid recipient ID number here unless they are different from the member ID.
 * @public
 */
export interface EligibilityCheckRequestSubscriberAdditionalInformation {
  /**
   * The subscriber's Social Security Number (SSN). Many commercial and government payers ignore this property due to concerns about member privacy. However, some Medicaid programs support alternative searches using the patient's Social Security Number, instead of the member ID.
   * @public
   */
  ssn?: string | undefined;

  /**
   * The group number associated with the subscriber's insurance policy.
   * @public
   */
  groupNumber?: string | undefined;

  /**
   * The subscriber's identity card number. Include this property when this number differs from the subscriber's member ID. This is common in Medicaid.
   * @public
   */
  identityCardNumber?: string | undefined;

  /**
   * The Medicaid Recipient Identification Number. You can provide this number to identify the subscriber when it is the primary number the payer knows a member by (such as for Medicare or Medicaid). Don't supply this value unless it differs from the `memberId`.
   * @public
   */
  medicaidRecipientId?: string | undefined;

  /**
   * The case number associated with the subscriber.
   * @public
   */
  caseNumber?: string | undefined;

  /**
   * The plan number for the subscriber's insurance plan.
   * @public
   */
  planNumber?: string | undefined;

  /**
   * The group or policy number.
   * @public
   */
  groupOrPolicyNumber?: string | undefined;

  /**
   * The contract number associated with the subscriber's insurance plan.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The patient account number for the subscriber.
   * @public
   */
  patientAccountNumber?: string | undefined;

  /**
   * The subscriber's Medicare Beneficiary Identifier (MBI). The 270 carries it as the Health Insurance Claim (HIC) number, which CMS retired in favor of the MBI. Don't include it unless it differs from the member ID.
   * @public
   */
  mbi?: string | undefined;

  /**
   * The identification card serial number, when it differs from the member ID.
   * @public
   */
  identificationCardSerialNumber?: string | undefined;

  /**
   * The subscriber's insurance policy number.
   * @public
   */
  insurancePolicyNumber?: string | undefined;

  /**
   * The plan network identification number for the subscriber.
   * @public
   */
  planNetworkId?: string | undefined;

  /**
   * The agency claim number associated with the subscriber.
   * @public
   */
  agencyClaimNumber?: string | undefined;

  /**
   * The medical record identification number for the subscriber.
   * @public
   */
  medicalRecordId?: string | undefined;
}

/**
 * The subscriber's address. When providing address information:
 * - `addressLine1` and `city` are **required** for standard eligibility checks and MBI lookups with SSN. We also recommend including `state` for member identification.
 * - When performing an [MBI lookup without SSN](https://www.stedi.com/docs/healthcare/mbi-lookup) (Payer ID: `MBILUNOSSN`), only `state` is required. You can omit `addressLine1` and `city`.
 * @public
 */
export interface EligibilityCheckRequestSubscriberAddress {
  /**
   * The first line of the address. Required for all payers except payer ID `MBILUNOSSN`.
   * @public
   */
  addressLine1?: string | undefined;

  /**
   * The second line of the address.
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * The city. Required for all payers except payer ID `MBILUNOSSN`.
   * @public
   */
  city?: string | undefined;

  /**
   * The US state or Canadian province code. Required for payer ID `MBILUNOSSN`.
   * @public
   */
  state?: string | undefined;

  /**
   * The United States or Canadian postal code, excluding punctuation and blanks.
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The two-letter country code from [Part 1 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * @public
   */
  country?: string | undefined;

  /**
   * The country subdivision code from [Part 2 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-2).
   * @public
   */
  countrySubdivision?: string | undefined;
}

/**
 * The name of a subscriber who is a person.
 * @public
 */
export interface EligibilityCheckRequestSubscriberPersonName {
  /**
   * The subscriber's first name.
   * @public
   */
  firstName?: string | undefined;

  /**
   * The subscriber's last name. **Don't** include the subscriber's name suffix, such as Jr. or III. Use the designated `suffix` property instead.
   * @public
   */
  lastName?: string | undefined;

  /**
   * The subscriber's middle name or middle initial.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The subscriber's name suffix, such as Jr. or III. Only include the subscriber's personal name suffix - **don't** include professional or academic titles, such as M.D. or MBA.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * The subscriber's name, as either a person or an organization.
 * @public
 */
export type EligibilityCheckRequestSubscriberName =
  | EligibilityCheckRequestSubscriberName.OrganizationMember
  | EligibilityCheckRequestSubscriberName.PersonMember
  | EligibilityCheckRequestSubscriberName.$UnknownMember;

/**
 * @public
 */
export namespace EligibilityCheckRequestSubscriberName {
  /**
   * The name of a subscriber who is a person.
   * @public
   */
  export interface PersonMember {
    person: EligibilityCheckRequestSubscriberPersonName;
    organization?: never;
    $unknown?: never;
  }

  /**
   * An organization's business name.
   * @public
   */
  export interface OrganizationMember {
    person?: never;
    organization: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    person?: never;
    organization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    person: (value: EligibilityCheckRequestSubscriberPersonName) => T;
    organization: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The primary policyholder for the insurance plan _or_ a dependent with a unique member ID. If a dependent has a unique member ID, include their information here and leave `dependent` empty.
 * - At a minimum, our API requires that you supply at least one of these fields in the request: `memberId`, `dateOfBirth`, or `name.person.lastName`. However, each payer has different requirements, so you should supply the fields necessary for each payer to identify the subscriber in their system.
 * - When you provide all four of `memberId`, `dateOfBirth`, `name.person.firstName`, and `name.person.lastName`, payers must return a response if the member is in their database. Some payers may be able to search with less information, but this varies by payer.
 * - We recommend always including the patient's member ID when possible.
 * - Enter the patient's name exactly as written on their insurance card, if available, including any special or punctuation characters such as apostrophes, hyphens (dashes), or spaces. Visit [patient names](https://www.stedi.com/docs/healthcare/send-eligibility-checks#patient-names) for all best practices to avoid unnecessary failures.
 * @public
 */
export interface EligibilityCheckRequestSubscriber {
  /**
   * The subscriber's name, as either a person or an organization.
   * @public
   */
  name?: EligibilityCheckRequestSubscriberName | undefined;

  /**
   * The member ID for the subscriber's insurance policy.
   * @public
   */
  memberId?: string | undefined;

  /**
   * The subscriber's date of birth.
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * Code indicating the subscriber's gender.
   * @public
   */
  gender?: EligibilityCheckRequestPatientGender | undefined;

  /**
   * Additional identification numbers for the subscriber. Use this object when you need to provide an identification number other than or in addition to the subscriber's member ID. For example, you may provide the patient account number.
   *
   * Don't include the health insurance claim number or the medicaid recipient ID number here unless they are different from the member ID.
   * @public
   */
  additionalInformation?: EligibilityCheckRequestSubscriberAdditionalInformation | undefined;

  /**
   * The subscriber's address.
   * @public
   */
  address?: EligibilityCheckRequestSubscriberAddress | undefined;

  /**
   * Information about a provider associated with the subscriber who isn't the entity requesting the eligibility check, such as a referring provider. The requesting provider is specified in the request's root `provider`.
   * @public
   */
  provider?: EligibilityCheckRequestEntityProvider | undefined;
}

/**
 * The eligibility check request payload.
 * @public
 */
export interface CreateEligibilityCheckInput {
  /**
   * The payer ID. Visit the [Payer Network](https://www.stedi.com/healthcare/network) for a complete list.
   *  - You can send requests using the primary payer ID, the Stedi payer ID, or any alias listed in the payer record.
   *  - You must include leading `0` characters - payer IDs are alphanumeric strings and must be treated as complete strings, not integers. For example, use `00540` for SISCO, not `540`.
   * @public
   */
  payerId: string | undefined;

  /**
   * The payer's name, such as Cigna or Aetna.
   * @public
   */
  payerName?: string | undefined;

  /**
   * Information about the entity requesting the eligibility check. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider.
   *  - You must provide the provider's name as either a person (with `name.person`) or an organization (with `name.organization`).
   *  - You must also provide an identifier - this is typically the provider's [National Provider Identifier](https://www.stedi.com/docs/healthcare/national-provider-identifier) (`npi`). If the provider doesn't have an NPI, you can supply an alternative, such as their `tin` or `ssn`.
   *  - Don't include additional properties, such as `tin` or `address`, unless they are specifically required or suggested by the payer.
   * @public
   */
  provider: EligibilityCheckRequestProvider | undefined;

  /**
   * The primary policyholder for the insurance plan _or_ a dependent with a unique member ID. If a dependent has a unique member ID, include their information here and leave `dependent` empty.
   * - At a minimum, our API requires that you supply at least one of these fields in the request: `memberId`, `dateOfBirth`, or `name.person.lastName`. However, each payer has different requirements, so you should supply the fields necessary for each payer to identify the subscriber in their system.
   * - When you provide all four of `memberId`, `dateOfBirth`, `name.person.firstName`, and `name.person.lastName`, payers must return a response if the member is in their database. Some payers may be able to search with less information, but this varies by payer.
   * - We recommend always including the patient's member ID when possible.
   * - Enter the patient's name exactly as written on their insurance card, if available, including any special or punctuation characters such as apostrophes, hyphens (dashes), or spaces. Visit [patient names](https://www.stedi.com/docs/healthcare/send-eligibility-checks#patient-names) for all best practices to avoid unnecessary failures.
   * @public
   */
  subscriber: EligibilityCheckRequestSubscriber | undefined;

  /**
   * A dependent for which you want to retrieve benefits information.
   * - You can only submit one dependent per eligibility check.
   * - Only include the patient's information here when they are listed as a dependent on the subscriber's insurance plan AND the payer cannot uniquely identify them through information outside the subscriber's policy. For example, if the dependent has their own member ID number, you should identify them in the `subscriber` object instead. This includes member IDs that differ only by a suffix, such as `01`, because the patient can still be uniquely identified.
   * - Most Medicaid plans don't support dependents, with a [few exceptions](https://www.stedi.com/docs/healthcare/send-eligibility-checks#medicaid-dependents). Sending this information to payers that don't support dependents will either cause an error, or the payer may ignore the information and return results for the subscriber instead.
   * - Each payer has different requirements, so you should supply the fields necessary for each payer to identify the dependent in their system. However, we **strongly recommend** including the dependent's date of birth in the request when available because many payers return errors without it.
   * - Enter the patient's name exactly as written on their insurance card, if available, including any special or punctuation characters such as apostrophes, hyphens (dashes), or spaces. Visit [patient names](https://www.stedi.com/docs/healthcare/send-eligibility-checks#patient-names) for all best practices to avoid unnecessary failures.
   * @public
   */
  dependent?: EligibilityCheckRequestDependent | undefined;

  /**
   * Details about the eligibility or benefit information you are requesting for the patient.
   * - You can optionally include service type codes (STCs) or procedure codes to request benefits for specific services.
   * - You can specify either a single service date or a date range using `dates.service`. The payer defaults to using the current date in their timezone if you don't include one.
   * - When checking eligibility for today, omit the service date to ensure consistent behavior across payers.
   * - We recommend submitting dates up to 12 months in the past or up to the end of the current month. Payers aren't required to support dates outside these ranges. However, some payers such as the Centers for Medicare and Medicaid Services (CMS) do support requests for dates further in the future - especially the next calendar month. Check the payer's documentation to determine their specific behavior.
   * @public
   */
  encounter?: EligibilityCheckRequestEncounter | undefined;

  /**
   * A unique identifier for the patient that Stedi uses to identify and correlate historical eligibility checks for the same individual. We recommend including this value in all requests.
   * @public
   */
  externalPatientId?: string | undefined;

  /**
   * An identifier that allows Stedi to group eligibility checks for the same patient into a unified record in the Stedi portal called an [eligibility search](https://www.stedi.com/docs/healthcare/eligibility-views).
   * @public
   */
  eligibilitySearchId?: string | undefined;
}

/**
 * Additional information with description.
 * @public
 */
export interface EligibilityCheckAdditionalInformationWithName {
  /**
   * The identification number.
   * @public
   */
  number: string | undefined;

  /**
   * The name or description associated with `number`.
   * @public
   */
  name?: string | undefined;
}

/**
 * Additional identifying information about the dependent.
 * @public
 */
export interface EligibilityCheckDependentAdditionalInformation {
  /**
   * The plan number and plan description.
   * @public
   */
  plan?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The group number and group description.
   * @public
   */
  group?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The plan network identification number and the plan, group, or plan network name.
   * @public
   */
  planNetwork?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The group or policy number.
   * @public
   */
  groupOrPolicyNumber?: string | undefined;

  /**
   * The member identification number - only used when checking eligibility with a Workers' Compensation or Property and Casualty insurer.
   * @public
   */
  memberId?: string | undefined;

  /**
   * The family unit number.
   * @public
   */
  familyUnitNumber?: string | undefined;

  /**
   * The class of contract code - used to identify the applicable class of contract for claims processing.
   * @public
   */
  classOfContractCode?: string | undefined;

  /**
   * The contract number of a contract between the payer and the provider that requested the eligibility check.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The medical record identification number.
   * @public
   */
  medicalRecordId?: string | undefined;

  /**
   * The patient account number. If you included this value in the original eligibility request, the payer will return the same value here in the response.
   * @public
   */
  patientAccountNumber?: string | undefined;

  /**
   * The patient's Medicare Beneficiary Identifier (MBI). If you receive an MBI, we recommend sending a follow-up eligibility check to CMS (payer ID: CMS) for additional benefits data. Visit [Medicare Beneficiary Identifier documentation](https://www.cms.gov/training-education/partner-outreach-resources/new-medicare-card/medical-beneficiary-identifiers-mbis) for more information about the MBI format. This most commonly occurs with patients who are covered by both Medicare and Medicaid.
   * @public
   */
  mbi?: string | undefined;

  /**
   * Used when the identification card has a number in addition to the member ID.
   * @public
   */
  identificationCardSerialNumber?: string | undefined;

  /**
   * The identity card number. Present when this number differs from the member ID.
   * @public
   */
  identityCardNumber?: string | undefined;

  /**
   * The issue number.
   * @public
   */
  issueNumber?: string | undefined;

  /**
   * The insurance policy number.
   * @public
   */
  insurancePolicyNumber?: string | undefined;

  /**
   * The Medicaid recipient identification number.
   * @public
   */
  medicaidRecipientId?: string | undefined;

  /**
   * The prior identifier number.
   * @public
   */
  priorIdentifierNumber?: string | undefined;

  /**
   * The patient's Social Security Number (SSN).
   * @public
   */
  ssn?: string | undefined;

  /**
   * The agency claim number, only used when the information source is a Property and Casualty payer.
   * @public
   */
  agencyClaimNumber?: string | undefined;

  /**
   * The eligibility category for the dependent.
   * @public
   */
  eligibilityCategory?: string | undefined;
}

/**
 * The address of the entity.
 * @public
 */
export interface EligibilityCheckAddress {
  /**
   * The first line of the address.
   * @public
   */
  addressLine1?: string | undefined;

  /**
   * The second line of the address.
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * The city.
   * @public
   */
  city?: string | undefined;

  /**
   * The US state or Canadian province code with unknown option. For example, `TN` for Tennessee or `NB` for New Brunswick.
   * @public
   */
  state?: string | undefined;

  /**
   * The United States or Canadian postal code, excluding punctuation and blanks.
   * @public
   */
  postalCode?: string | undefined;

  /**
   * The two-letter country code from [Part 1 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * @public
   */
  country?: string | undefined;

  /**
   * The country subdivision code from [Part 2 of ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-2).
   * @public
   */
  countrySubdivision?: string | undefined;
}

/**
 * Contains the dates associated with patient attributes, as ISO 8601 date ranges. These provide temporal context for patient-specific data and eligibility periods.
 * @public
 */
export interface EligibilityCheckPatientAttributeDateRanges {
  /**
   * The discharge date.
   * @public
   */
  discharge?: EligibilityCheckDateRange | undefined;

  /**
   * The issue date.
   * @public
   */
  issue?: EligibilityCheckDateRange | undefined;

  /**
   * The effective date of change.
   * @public
   */
  effectiveDateOfChange?: EligibilityCheckDateRange | undefined;

  /**
   * Plan effective dates.
   * @public
   */
  plan?: EligibilityCheckDateRange | undefined;

  /**
   * Plan eligibility dates.
   * @public
   */
  eligibility?: EligibilityCheckDateRange | undefined;

  /**
   * Added date. Payers may return this information in the case of retroactive eligibility.
   * @public
   */
  added?: EligibilityCheckDateRange | undefined;

  /**
   * Consolidated Omnibus Budget Reconciliation Act (COBRA) date.
   * @public
   */
  cobra?: EligibilityCheckDateRange | undefined;

  /**
   * Premium paid to date.
   * @public
   */
  premiumPaidToDate?: EligibilityCheckDateRange | undefined;

  /**
   * The enrollment date.
   * @public
   */
  enrollment?: EligibilityCheckDateRange | undefined;

  /**
   * The admission date or dates.
   * @public
   */
  admission?: EligibilityCheckDateRange | undefined;

  /**
   * The date of death.
   * @public
   */
  dateOfDeath?: EligibilityCheckDateRange | undefined;

  /**
   * The certification date.
   * @public
   */
  certification?: EligibilityCheckDateRange | undefined;

  /**
   * The service date or dates.
   * @public
   */
  service?: EligibilityCheckDateRange | undefined;

  /**
   * The policy date.
   * @public
   */
  policy?: EligibilityCheckDateRange | undefined;

  /**
   * The date when the patient information was last updated.
   * @public
   */
  dateOfLastUpdate?: EligibilityCheckDateRange | undefined;

  /**
   * The status date.
   * @public
   */
  status?: EligibilityCheckDateRange | undefined;
}

/**
 * Information indicating whether the payer signaled that the patient's identifying information differs from what you submitted.
 * @public
 */
export interface EligibilityCheckMaintenance {
  /**
   * Whether the payer signaled that the patient's identifying information differs from what you submitted.
   * @public
   */
  indicator?: EligibilityCheckMaintenanceIndicator | undefined;
}

/**
 * A person's name. Maps to elements NM103 through NM107.
 * @public
 */
export interface EligibilityCheckPersonName {
  /**
   * The person's first name.
   * @public
   */
  firstName?: string | undefined;

  /**
   * The person's last name.
   * @public
   */
  lastName?: string | undefined;

  /**
   * The person's middle name or initial.
   * @public
   */
  middleName?: string | undefined;

  /**
   * The person's name suffix, such as Jr. or III.
   * @public
   */
  suffix?: string | undefined;
}

/**
 * A person's name.
 * @public
 */
export interface EligibilityCheckQualifiedPersonName {
  /**
   * The person's name.
   * @public
   */
  person: EligibilityCheckPersonName | undefined;
}

/**
 * Information about a provider associated with the related entity.
 * @public
 */
export interface EligibilityCheckEntityProvider {
  /**
   * A code that communicates the entity's role in the type of benefits information in the response. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#provider-codes) for a complete list.
   * @public
   */
  code?: EligibilityCheckEntityProviderCode | undefined;

  /**
   * The provider's taxonomy code.
   * @public
   */
  reference?: string | undefined;
}

/**
 * Information about the dependent from the eligibility check request. Note that the payer may return the dependent in the subscriber object instead. When present, this object will always include the dependent's name for identification, but many payers also include the date of birth and other identifying information.
 * @public
 */
export interface EligibilityCheckDependent {
  /**
   * The address of the entity, such as a provider or organization.
   * @public
   */
  address?: EligibilityCheckAddress | undefined;

  /**
   * Information about a provider associated with this entity.
   * @public
   */
  provider?: EligibilityCheckEntityProvider | undefined;

  /**
   * Dates associated with patient attributes, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckPatientAttributeDateRanges | undefined;

  /**
   * The patient's date of birth as an ISO 8601 `YYYY-MM-DD` string. For example, `1985-03-15` represents March 15, 1985.
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * Code indicating the patient's gender.
   * @public
   */
  gender?: EligibilityCheckResponsePatientGender | undefined;

  /**
   * The number assigned to each family member born with the same birth date, such as twins or triplets. Indicates the birth order when there are multiple births associated with the provided birth date.
   * @public
   */
  birthSequenceNumber?: number | undefined;

  /**
   * Maintenance information indicating whether the payer signaled that the patient's identifying information differs from what you submitted.
   * @public
   */
  maintenance?: EligibilityCheckMaintenance | undefined;

  /**
   * The dependent's name.
   * @public
   */
  name: EligibilityCheckQualifiedPersonName | undefined;

  /**
   * The dependent's relationship to the subscriber.
   * @public
   */
  relationToSubscriber?: EligibilityCheckDependentRelationship | undefined;

  /**
   * Additional identifying information for the dependent.
   * @public
   */
  additionalInformation?: EligibilityCheckDependentAdditionalInformation | undefined;
}

/**
 * An error from the payer.
 * @public
 */
export interface EligibilityCheckResponseError {
  /**
   * The AAA reject reason code.
   * @public
   */
  code: string | undefined;

  /**
   * The human-readable description of the error.
   * @public
   */
  description: string | undefined;

  /**
   * The recommended follow-up action.
   * @public
   */
  followupAction: string | undefined;

  /**
   * The location in the 271 response where the error occurred.
   * @public
   */
  location: EligibilityCheckResponseErrorLocation | undefined;

  /**
   * Detailed guidance on possible ways to resolve the error.
   * @public
   */
  possibleResolutions?: string | undefined;
}

/**
 * A trace number the payer assigned to this transaction or echoed back from the request.
 * @public
 */
export interface EligibilityCheckSubscriberTraceNumber {
  /**
   * Whether the payer assigned this trace number to the current transaction (`CURRENT_TRANSACTION`) or is echoing one from the original request (`REFERENCED_TRANSACTION`).
   * @public
   */
  type?: EligibilityCheckTraceType | undefined;

  /**
   * The unique trace number assigned to the transaction.
   * @public
   */
  referenceIdentification?: string | undefined;

  /**
   * The identifier of the organization that assigned the trace number.
   * @public
   */
  originatingCompanyIdentifier?: string | undefined;

  /**
   * Identifies a subdivision within the organization that assigned the trace number.
   * @public
   */
  secondaryReferenceIdentification?: string | undefined;
}

/**
 * Metadata about the response. Stedi uses this data for tracking and troubleshooting.
 * @public
 */
export interface EligibilityCheckMeta {
  /**
   * The transaction identifier from the response's `BHT03` element. Matches the request's `BHT03` if provided, otherwise matches the Stedi-generated `outboundTraceId`.
   * @public
   */
  traceId?: string | undefined;

  /**
   * The transaction identifier Stedi assigns to the outbound request's `BHT03` element.
   *
   * Although this is a unique identifier, we recommend using `id` instead to identify and track eligibility checks. An eligibility check's `id` is guaranteed to be globally unique, and you can use it to deep link to the eligibility check's results within the Stedi portal.
   * @public
   */
  outboundTraceId?: string | undefined;

  /**
   * A unique identifier the payer may assign to the transaction. Stedi doesn't support setting a subscriber trace number in the eligibility check request because there is no need to include a trace number for real-time queries.
   * @public
   */
  subscriberTraceNumbers?: EligibilityCheckSubscriberTraceNumber[] | undefined;
}

/**
 * Information about a contact person for the entity.
 * @public
 */
export interface EligibilityCheckContact {
  /**
   * The name of the contact person.
   * @public
   */
  name?: string | undefined;

  /**
   * The contact's phone numbers.
   * @public
   */
  phoneNumbers?: string[] | undefined;

  /**
   * The contact's email addresses.
   * @public
   */
  emails?: string[] | undefined;

  /**
   * The contact's fax numbers.
   * @public
   */
  faxNumbers?: string[] | undefined;

  /**
   * The contact's EDI numbers.
   * @public
   */
  ediNumbers?: string[] | undefined;

  /**
   * The contact's URLs.
   * @public
   */
  urls?: string[] | undefined;
}

/**
 * A name that is either a person or an organization.
 * @public
 */
export type EligibilityCheckPersonOrOrganizationName =
  | EligibilityCheckPersonOrOrganizationName.OrganizationMember
  | EligibilityCheckPersonOrOrganizationName.PersonMember
  | EligibilityCheckPersonOrOrganizationName.$UnknownMember;

/**
 * @public
 */
export namespace EligibilityCheckPersonOrOrganizationName {
  /**
   * A person's name. Maps to elements NM103 through NM107.
   * @public
   */
  export interface PersonMember {
    person: EligibilityCheckPersonName;
    organization?: never;
    $unknown?: never;
  }

  /**
   * An organization's name. Maps to element NM103.
   * @public
   */
  export interface OrganizationMember {
    person?: never;
    organization: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    person?: never;
    organization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    person: (value: EligibilityCheckPersonName) => T;
    organization: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the payer providing the benefits information. The response will always include the payer's business name and an identifier, such as the payer's tax ID. Most payers also include contact information.
 * @public
 */
export interface EligibilityCheckPayer {
  /**
   * The entity's name, as either a person or an organization.
   * @public
   */
  name?: EligibilityCheckPersonOrOrganizationName | undefined;

  /**
   * The entity identifier code for the payer.
   * @public
   */
  type: EligibilityCheckPayerEntityIdentifierCode | undefined;

  /**
   * The entity's contact information.
   * @public
   */
  contacts?: EligibilityCheckContact[] | undefined;

  /**
   * The Employer Identification Number (EIN), distinct from the Federal Taxpayer Identification Number in `tin`.
   * @public
   */
  ein?: string | undefined;

  /**
   * Electronic Transmitter Identification Number.
   * @public
   */
  etin?: string | undefined;

  /**
   * The Federal Taxpayer Identification Number.
   * @public
   */
  tin?: string | undefined;

  /**
   * National Association of Insurance Commissioners Identification
   * @public
   */
  naicId?: string | undefined;

  /**
   * Typically the identification the payer reported for itself in the 271 response (`NM109` with the `PI` qualifier). This value comes from the payer and may not match a [Stedi Payer Network](https://www.stedi.com/healthcare/network) ID; use the root-level `payerId` for the canonical payer ID.
   * @public
   */
  identification?: string | undefined;
}

/**
 * Additional plan, group, and policy identification numbers for this benefit entry.
 * @public
 */
export interface EligibilityCheckEligibilityAndBenefitAdditionalInformation {
  /**
   * The insurance plan number and, when the payer sends one, the plan name.
   * @public
   */
  plan?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The group number for the patient's health insurance plan and, when the payer sends one, the group name.
   * @public
   */
  group?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * A group or policy number from the payer. Present when Stedi can't determine the type. Contact the payer for confirmation.
   * @public
   */
  groupOrPolicyNumber?: string | undefined;

  /**
   * The patient's member ID.
   * @public
   */
  memberId?: string | undefined;

  /**
   * The family unit number. Pharmacy benefits managers (PBMs) return this when the patient has a suffix to their member ID. For all other payers, the suffix is considered part of the member ID.
   * @public
   */
  familyUnitNumber?: string | undefined;

  /**
   * The referral number.
   * @public
   */
  referralNumber?: string | undefined;

  /**
   * The alternative list ID. This identifier lets the payer point to a list of drugs and their alternatives, along with the formulary status that applies to the patient.
   * @public
   */
  alternativeListId?: string | undefined;

  /**
   * The coverage list ID. This identifier lets the payer point to a list of drugs that have coverage limitations for the patient.
   * @public
   */
  coverageListId?: string | undefined;

  /**
   * The Medicare Beneficiary Identifier (MBI), the randomized identifier CMS uses to identify Medicare beneficiaries. If you receive an MBI, we recommend sending a follow-up eligibility check to CMS (payer ID: CMS) for additional benefits data. Visit [Medicare Beneficiary Identifier documentation](https://www.cms.gov/training-education/partner-outreach-resources/new-medicare-card/medical-beneficiary-identifiers-mbis) for more information about the MBI format. This most commonly occurs with patients who are covered by both Medicare and Medicaid.
   * @public
   */
  mbi?: string | undefined;

  /**
   * The drug formulary number.
   * @public
   */
  drugFormularyNumber?: string | undefined;

  /**
   * The prior authorization number.
   * @public
   */
  priorAuthNumber?: string | undefined;

  /**
   * The insurance policy number.
   * @public
   */
  insurancePolicyNumber?: string | undefined;

  /**
   * The medical assistance category.
   * @public
   */
  medicalAssistanceCategory?: string | undefined;

  /**
   * The Medicaid recipient identification number.
   * @public
   */
  medicaidRecipientId?: string | undefined;
}

/**
 * Contains the dates associated with specific benefits, as ISO 8601 date ranges. These dates determine eligibility for individual benefits, separate from overall plan eligibility dates.
 * @public
 */
export interface EligibilityCheckEligibilityAndBenefitDateRanges {
  /**
   * The discharge date.
   * @public
   */
  discharge?: EligibilityCheckDateRange | undefined;

  /**
   * A period date range.
   * @public
   */
  period?: EligibilityCheckDateRange | undefined;

  /**
   * The completion date.
   * @public
   */
  completion?: EligibilityCheckDateRange | undefined;

  /**
   * The coordination of benefits date.
   * @public
   */
  coordinationOfBenefits?: EligibilityCheckDateRange | undefined;

  /**
   * Plan effective dates.
   * @public
   */
  plan?: EligibilityCheckDateRange | undefined;

  /**
   * The benefit date.
   * @public
   */
  benefit?: EligibilityCheckDateRange | undefined;

  /**
   * The primary care provider date.
   * @public
   */
  primaryCareProvider?: EligibilityCheckDateRange | undefined;

  /**
   * The latest visit or consultation date.
   * @public
   */
  latestVisit?: EligibilityCheckDateRange | undefined;

  /**
   * Added date. Payers may return this information in the case of retroactive eligibility.
   * @public
   */
  added?: EligibilityCheckDateRange | undefined;

  /**
   * Plan eligibility dates.
   * @public
   */
  eligibility?: EligibilityCheckDateRange | undefined;

  /**
   * The admission date or dates.
   * @public
   */
  admission?: EligibilityCheckDateRange | undefined;

  /**
   * The service date or dates.
   * @public
   */
  service?: EligibilityCheckDateRange | undefined;

  /**
   * The date when the plan information was last updated.
   * @public
   */
  dateOfLastUpdate?: EligibilityCheckDateRange | undefined;

  /**
   * The status date.
   * @public
   */
  status?: EligibilityCheckDateRange | undefined;
}

/**
 * A single diagnosis code with its optional definition.
 * @public
 */
export interface EligibilityCheckDiagnosisCode {
  /**
   * The diagnosis code value.
   * @public
   */
  value: string | undefined;

  /**
   * The human-readable definition of the diagnosis code.
   * @public
   */
  definition?: string | undefined;
}

/**
 * A diagnosis associated with this benefit entry. Includes a code system and one or more diagnosis codes.
 * @public
 */
export interface EligibilityCheckDiagnosis {
  /**
   * The code system for diagnosis codes. Only supports ICD-10-CM.
   * @public
   */
  codeSystem: EligibilityCheckDiagnosisCodeSystem | undefined;

  /**
   * Diagnosis codes associated with this benefit entry.
   * @public
   */
  codes: EligibilityCheckDiagnosisCode[] | undefined;
}

/**
 * Network information for a benefit, including the in-plan network indicator and plan network identification.
 * @public
 */
export interface EligibilityCheckNetwork {
  /**
   * Code indicating whether the benefit is in-network or out-of-network.
   * @public
   */
  indicator?: EligibilityCheckNetworkIndicator | undefined;

  /**
   * The plan network identification number.
   * @public
   */
  id?: string | undefined;

  /**
   * The plan, group, or plan network name.
   * @public
   */
  description?: string | undefined;
}

/**
 * Identifies a type of healthcare facility where providers may deliver services. Place of service codes are standardized identifiers used across the healthcare industry.
 * @public
 */
export interface EligibilityCheckPlaceOfService {
  /**
   * The place of service code identifying the type of facility.
   * @public
   */
  code?: EligibilityCheckPlaceOfServiceCode | undefined;

  /**
   * The human-readable name of the place of service.
   * @public
   */
  name?: string | undefined;
}

/**
 * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
 * @public
 */
export interface EligibilityCheckRelatedEntity {
  /**
   * The entity's name, as either a person or an organization.
   * @public
   */
  name?: EligibilityCheckPersonOrOrganizationName | undefined;

  /**
   * The entity identifier code for the benefit related entity.
   * @public
   */
  type: EligibilityCheckRelatedEntityIdentifierCode | undefined;

  /**
   * Code specifying the relationship between the entity and the patient.
   * @public
   */
  relationship?: EligibilityCheckEntityRelationship | undefined;

  /**
   * The address of the entity, such as a provider or organization.
   * @public
   */
  address?: EligibilityCheckAddress | undefined;

  /**
   * Information about a provider associated with the related entity.
   * @public
   */
  provider?: EligibilityCheckEntityProvider | undefined;

  /**
   * The entity's contact information.
   * @public
   */
  contacts?: EligibilityCheckContact[] | undefined;

  /**
   * The Employer Identification Number (EIN), distinct from the Federal Taxpayer Identification Number in `tin`.
   * @public
   */
  ein?: string | undefined;

  /**
   * Social Security Number.
   * @public
   */
  ssn?: string | undefined;

  /**
   * Electronic Transmitter Identification Number.
   * @public
   */
  etin?: string | undefined;

  /**
   * Facility Identification.
   * @public
   */
  facilityId?: string | undefined;

  /**
   * The Federal Taxpayer Identification Number.
   * @public
   */
  tin?: string | undefined;

  /**
   * Member Identification Number
   * @public
   */
  memberId?: string | undefined;

  /**
   * National Association of Insurance Commissioners Identification
   * @public
   */
  naicId?: string | undefined;

  /**
   * Payer Identification
   * @public
   */
  payerId?: string | undefined;

  /**
   * Pharmacy Processor Number
   * @public
   */
  pharmacyProcessorNumber?: string | undefined;

  /**
   * Service Provider Number
   * @public
   */
  serviceProviderNumber?: string | undefined;

  /**
   * Centers for Medicare and Medicaid Services National Provider Identifier
   * @public
   */
  npi?: string | undefined;
}

/**
 * A single service or procedure code with its definition.
 * @public
 */
export interface EligibilityCheckServiceCode {
  /**
   * The service or procedure code value.
   * @public
   */
  value: string | undefined;

  /**
   * The human-readable definition of the code.
   * @public
   */
  definition?: string | undefined;
}

/**
 * A range of service or procedure codes, defined by start and end codes. For example, CPT codes 99201 through 99215.
 * @public
 */
export interface EligibilityCheckServiceCodeRange {
  /**
   * The first code in the range.
   * @public
   */
  start: EligibilityCheckServiceCode | undefined;

  /**
   * The last code in the range. The range is inclusive of this code.
   * @public
   */
  end: EligibilityCheckServiceCode | undefined;
}

/**
 * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
 * @public
 */
export interface EligibilityCheckServiceOrProcedure {
  /**
   * The service or procedure code value.
   * @public
   */
  value?: string | undefined;

  /**
   * The human-readable definition of the code.
   * @public
   */
  definition?: string | undefined;

  /**
   * The code system that the `value` belongs to, such as CPT, HCPCS, or STC.
   * @public
   */
  system?: EligibilityCheckResponseServiceCodeSystem | undefined;

  /**
   * A range of service or procedure codes, defined by start and end codes. For example, CPT codes 99201 through 99215.
   * @public
   */
  range?: EligibilityCheckServiceCodeRange | undefined;
}

/**
 * The delivery schedule and time pattern for a service delivery limit, like Monday through Friday during AM hours, or first week of the month.
 * @public
 */
export interface EligibilityCheckServiceDeliveryLimitDelivery {
  /**
   * The days or calendar pattern on which the service can be delivered.
   * @public
   */
  schedule?: EligibilityCheckServiceDeliveryLimitSchedule | undefined;

  /**
   * The time of day at which the service can be delivered.
   * @public
   */
  pattern?: EligibilityCheckServiceDeliveryLimitPattern | undefined;
}

/**
 * The frequency for a service delivery limit, like per day, per week, or per month.
 * @public
 */
export interface EligibilityCheckServiceDeliveryLimitFrequency {
  /**
   * How often the service can be delivered, expressed in the unit given by `qualifier`. For example, `2` when the `qualifier` is `MONTHS` means every two months.
   * @public
   */
  value?: string | undefined;

  /**
   * The unit of measure for `value`.
   * @public
   */
  qualifier?: EligibilityCheckServiceDeliveryLimitFrequencyQualifier | undefined;
}

/**
 * The time period for a service delivery limit, like per year, per day, or lifetime.
 * @public
 */
export interface EligibilityCheckServiceDeliveryLimitPeriod {
  /**
   * The number of periods the limit spans. For example, `12` when the `qualifier` is `MONTH`.
   * @public
   */
  value?: number | undefined;

  /**
   * The type of time period `value` counts.
   * @public
   */
  qualifier?: EligibilityCheckServiceDeliveryLimitPeriodQualifier | undefined;
}

/**
 * The quantity and unit for a service delivery limit, like 10 visits, 5 days, or 100 units.
 * @public
 */
export interface EligibilityCheckServiceDeliveryLimitQuantity {
  /**
   * The number of units the limit allows. For example, `10` when the `qualifier` is `VISITS`.
   * @public
   */
  value?: string | undefined;

  /**
   * The unit of measure for `value`.
   * @public
   */
  qualifier?: EligibilityCheckServiceDeliveryLimitQuantityQualifier | undefined;
}

/**
 * A service delivery limit combining quantity, time period, frequency, and delivery schedule. For example, 10 visits per year, weekly, Monday through Friday.
 * @public
 */
export interface EligibilityCheckServiceDeliveryLimit {
  /**
   * How much of the service the limit allows, like 10 visits.
   * @public
   */
  quantity?: EligibilityCheckServiceDeliveryLimitQuantity | undefined;

  /**
   * The time period the limit applies over, like per calendar year.
   * @public
   */
  period?: EligibilityCheckServiceDeliveryLimitPeriod | undefined;

  /**
   * How often the service can be delivered within the period, like weekly.
   * @public
   */
  frequency?: EligibilityCheckServiceDeliveryLimitFrequency | undefined;

  /**
   * The days and time of day on which the service can be delivered.
   * @public
   */
  delivery?: EligibilityCheckServiceDeliveryLimitDelivery | undefined;
}

/**
 * A service limit specified as an age boundary or a delivery restriction. For example, minimum age 18, or 10 visits per year on weekdays.
 * @public
 */
export type EligibilityCheckServiceLimit =
  | EligibilityCheckServiceLimit.AgeMaximumMember
  | EligibilityCheckServiceLimit.AgeMinimumMember
  | EligibilityCheckServiceLimit.DeliveryMember
  | EligibilityCheckServiceLimit.$UnknownMember;

/**
 * @public
 */
export namespace EligibilityCheckServiceLimit {
  /**
   * The maximum patient age (in years) for this benefit.
   * @public
   */
  export interface AgeMaximumMember {
    ageMaximum: number;
    ageMinimum?: never;
    delivery?: never;
    $unknown?: never;
  }

  /**
   * The minimum patient age (in years) for this benefit.
   * @public
   */
  export interface AgeMinimumMember {
    ageMaximum?: never;
    ageMinimum: number;
    delivery?: never;
    $unknown?: never;
  }

  /**
   * A restriction on how much of the service the patient can receive, and how often or when it can be delivered.
   * @public
   */
  export interface DeliveryMember {
    ageMaximum?: never;
    ageMinimum?: never;
    delivery: EligibilityCheckServiceDeliveryLimit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ageMaximum?: never;
    ageMinimum?: never;
    delivery?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ageMaximum: (value: number) => T;
    ageMinimum: (value: number) => T;
    delivery: (value: EligibilityCheckServiceDeliveryLimit) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A payer-authored description of a benefit. Payers sometimes use this type to communicate information that's difficult to capture elsewhere in the response. The description is included as free text in `messages` or identifiers in `additionalInformation`.
 * @public
 */
export interface EligibilityCheckBenefitDescription {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A legal or advisory disclaimer attached to the benefit information. The X12 standard discourages use of this type, but many commercial payers still send disclaimers. When present, the disclaimer text arrives in `messages`, and there should be only one disclaimer per individual response.
 * @public
 */
export interface EligibilityCheckBenefitDisclaimer {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates that the payer couldn't process your request. A common cause is requesting benefits information for a service type or procedure code the payer doesn't support.
 * @public
 */
export interface EligibilityCheckCannotProcess {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A fraud alert indicating the patient's insurance card was reported lost or stolen. This typically means that the payer has flagged the patient's member ID to prevent identity theft. The patient may still have active coverage, but you likely won't be able to run transactions with the patient's information until they resolve the issue.
 * @public
 */
export interface EligibilityCheckCardReportedStolen {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A co-insurance benefit entry. The `percent` is the patient's share of costs, expressed as a decimal (such as `0.8` for 80%). The decimal precision reflects what the payer sent. A value of `0` indicates the payer reported no co-insurance responsibility.
 * @public
 */
export interface EligibilityCheckCoInsurance {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The percentage value for this benefit, expressed as a decimal (e.g., 0.80 for 80%).
   * @public
   */
  percent: string | undefined;
}

/**
 * Indicates that the payer can't supply the information you requested and is directing you to another entity. The entity's information is listed in the `relatedEntities` array.
 * @public
 */
export interface EligibilityCheckContactFollowingEntityForInformation {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A quantity value with a qualifier describing the unit of measure. For example, a value of `10` with a qualifier of `VISITS` means 10 visits.
 * @public
 */
export interface EligibilityCheckQuantity {
  /**
   * The numeric quantity. For example, `10` when the `qualifier` is `VISITS`.
   * @public
   */
  value?: string | undefined;

  /**
   * The unit of measure for `value`.
   * @public
   */
  qualifier?: EligibilityCheckQuantityQualifier | undefined;
}

/**
 * A copayment benefit entry. The `amount` is the fixed amount the patient pays for a service. The decimal precision reflects what the payer sent (e.g., `25.0` or `40`).
 * @public
 */
export interface EligibilityCheckCoPayment {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this benefit.
   * @public
   */
  amount: string | undefined;

  /**
   * The quantity the `amount` applies to, when the payer sends one. For example, 60 days of inpatient care.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * A cost containment benefit entry. Cost containment refers to rules a health plan may have in place to control the cost of care. This benefit is typically included when the patient has Medicaid coverage. The `amount` represents the total the patient pays out-of-pocket before benefits begin. The decimal precision reflects what the payer sent (e.g., `500.0` or `500`).
 * @public
 */
export interface EligibilityCheckCostContainment {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this benefit.
   * @public
   */
  amount: string | undefined;

  /**
   * The quantity the `amount` applies to, when the payer sends one. For example, 60 days of inpatient care.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * Describes the financial basis of the patient's health plan or eligibility for enrollment. For example, payers may use this type to indicate that a plan is fully insured, meaning the payer assumes full financial responsibility for medical claims. Payers may also use this type to indicate carve-out benefits, such as when the patient is enrolled in state-managed health programs, or to explain why a member was allowed to enroll in the plan (such as age range or having a disability). The detail is usually included as free text in `messages` or identifiers in `additionalInformation`.
 * @public
 */
export interface EligibilityCheckCoverageBasis {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A deductible benefit entry. The `amount` is what the patient must pay before the plan begins covering costs. The decimal precision reflects what the payer sent (e.g., `1500.0` or `1000`). Check `timePeriod` to determine what the amount represents. A calendar-year deductible is the patient's total for the year, while a remaining deductible is the amount still owed before the plan pays.
 * @public
 */
export interface EligibilityCheckDeductible {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this benefit.
   * @public
   */
  amount: string | undefined;

  /**
   * The quantity the `amount` applies to, when the payer sends one. For example, 60 days of inpatient care.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * A service or condition the plan doesn't cover for any patient. This is different from a `nonCovered` entry, which reports that this patient doesn't have coverage for a specific service you submitted in the request.
 * @public
 */
export interface EligibilityCheckExclusion {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Identifies a medical facility associated with the benefit, typically indicating an institution or provider network the patient is required or expected to use. The facility's information is available in the `relatedEntities` array. Rarely returned.
 * @public
 */
export interface EligibilityCheckHealthCareFacility {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A specific reason why a benefit entry is invalid.
 * @public
 */
export interface EligibilityCheckInvalidEntryReason {
  /**
   * A machine-readable code identifying the validation issue.
   * @public
   */
  code: EligibilityCheckInvalidEntryReasonCode | undefined;

  /**
   * A human-readable description of the validation issue.
   * @public
   */
  description: string | undefined;
}

/**
 * An invalid benefit entry that Stedi couldn't include in the standard benefit arrays due to data validation issues. This structure includes all possible benefit properties (amount, percent, quantity) to capture what the payer actually sent.
 * @public
 */
export interface EligibilityCheckInvalidBenefit {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount, if present.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage, if present.
   * @public
   */
  percent?: string | undefined;

  /**
   * The quantity, if present.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;

  /**
   * Reasons explaining why this entry is invalid.
   * @public
   */
  invalidReasons: EligibilityCheckInvalidEntryReason[] | undefined;
}

/**
 * Benefit entries that Stedi marked as invalid. Stedi marks entries when they're missing required data, like a co-insurance benefit without a percentage or a deductible without an amount. Stedi also marks entries when they have unexpected data, like a co-payment with a percentage instead of an amount.
 * @public
 */
export interface EligibilityCheckInvalidEntries {
  /**
   * Invalid co-insurance entries.
   * @public
   */
  coInsurance?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid co-payment entries.
   * @public
   */
  coPayment?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid deductible entries.
   * @public
   */
  deductible?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid out-of-pocket entries.
   * @public
   */
  outOfPocket?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid cost containment entries.
   * @public
   */
  costContainment?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid spend down entries.
   * @public
   */
  spendDown?: EligibilityCheckInvalidBenefit[] | undefined;

  /**
   * Invalid limitation entries.
   * @public
   */
  limitations?: EligibilityCheckInvalidBenefit[] | undefined;
}

/**
 * A benefit limitation entry, expressed as an amount, percent, or quantity. Dental and vision plans often use this benefit type to specify an annual maximum benefit amount.
 *
 * The Affordable Care Act prevents most commercial health plans from imposing limits on annual or lifetime benefit amounts, but this generally doesn't apply to government health plans and some commercial health plans may be exempt.
 *
 * When present, the `amount` indicates the maximum benefit amount the plan allocates to the patient. The `messages` array often includes values like "ANNUAL MAXIMUM".
 * @public
 */
export interface EligibilityCheckLimitation {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this limitation.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage value for this limitation, expressed as a decimal (e.g., 0.80 for 80%).
   * @public
   */
  percent?: string | undefined;

  /**
   * The quantity for this limitation, when the payer expresses the limit as a count rather than an amount or percentage. For example, 20 visits.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * A care coordinator associated with the patient's managed care arrangement. When present, the care coordinator's details are in the `relatedEntities` array.
 * @public
 */
export interface EligibilityCheckManagedCareCoordinator {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates that the patient's plan doesn't cover a specific service type you submitted in the eligibility check. Note that the absence of a `nonCovered` entry doesn't mean that a specific service is covered.
 * @public
 */
export interface EligibilityCheckNonCovered {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates the payer has determined this service isn't medically necessary and won't cover it on that basis.
 * @public
 */
export interface EligibilityCheckNotDeemedMedicalNecessity {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates another payer that has coverage responsibility for the patient. This is the signal for coordination of benefits (COB) scenarios. The other payer's details are available in the `relatedEntities` array.
 * @public
 */
export interface EligibilityCheckOtherOrAdditionalPayer {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates the information provided came from a source other than the payer's own system. Rarely returned.
 * @public
 */
export interface EligibilityCheckOtherSourceOfData {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * An out-of-pocket maximum benefit entry. The `amount` is the limit on what the patient pays. The decimal precision reflects what the payer sent (e.g., `5000.0` or `5000`). Check `timePeriod` to determine whether an amount is the full maximum or the amount remaining.
 * @public
 */
export interface EligibilityCheckOutOfPocket {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this benefit.
   * @public
   */
  amount: string | undefined;

  /**
   * The quantity the `amount` applies to, when the payer sends one. For example, 60 days of inpatient care.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * Indicates coverage for this benefit is restricted because of a pre-existing condition.
 * @public
 */
export interface EligibilityCheckPreExistingCondition {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * The patient's assigned primary care provider (PCP). A PCP is the main healthcare provider responsible for managing a patient's care and coordinating referrals to specialists. When present, the provider's information is available in the `relatedEntities` array.
 * @public
 */
export interface EligibilityCheckPrimaryCareProvider {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Benefit information relating to a previous coverage year.
 * @public
 */
export interface EligibilityCheckPriorYearsHistory {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Benefits the payer holds in reserve for the patient. This type is primarily used by Medicare (HETS) to indicate lifetime reserve benefit amounts separate from annual limits. For example, Medicare Lifetime Reserve days – the limited pool of additional inpatient hospital days a patient can use after exhausting a benefit period.
 * @public
 */
export interface EligibilityCheckReserve {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates the plan requires a second surgical opinion before this benefit is available. This is a precondition for obtaining the benefit.
 * @public
 */
export interface EligibilityCheckSecondSurgicalOpinionRequired {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Indicates the benefit is available only when delivered by a particular provider, identified in `relatedEntities`. This doesn't confirm whether that provider is in or out of network with the payer.
 * @public
 */
export interface EligibilityCheckServicesRestrictedToFollowingProvider {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * A spend down benefit entry. Spend down is a process that allows individuals with high medical expenses to qualify for Medicaid even if their income is above the Medicaid income limit. The `amount` represents the total the patient pays out-of-pocket before they can receive Medicaid benefits. The decimal precision reflects what the payer sent (e.g., `1500.0` or `1500`).
 * @public
 */
export interface EligibilityCheckSpendDown {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * Code specifying the time period for the benefit information. Visit [Eligibility code lists](https://www.stedi.com/docs/healthcare/eligibility-code-lists#time-qualifier-codes) for a complete list.
   * @public
   */
  timePeriod?: EligibilityCheckTimePeriod | undefined;

  /**
   * The monetary amount for this benefit.
   * @public
   */
  amount: string | undefined;

  /**
   * The quantity the `amount` applies to, when the payer sends one. For example, 60 days of inpatient care.
   * @public
   */
  quantity?: EligibilityCheckQuantity | undefined;
}

/**
 * Whether the patient has active or inactive coverage for a specific service, network, and coverage level. For example, active coverage for service type code `30` (Health Benefit Plan Coverage) at the individual coverage level.
 * @public
 */
export interface EligibilityCheckEligibilityStatus {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The patient's coverage status, indicating whether their coverage is active or inactive for specific services.
   * @public
   */
  status: EligibilityCheckCoverageStatus | undefined;
}

/**
 * Indicates that there's no limit for the benefit. For example, unlimited physical therapy visits or unlimited preventive care.
 * @public
 */
export interface EligibilityCheckUnlimited {
  /**
   * The level of coverage this benefit applies to, such as `INDIVIDUAL` or `FAMILY`. Defaults to `INDIVIDUAL` when the payer doesn't send a coverage level.
   * @public
   */
  coverageLevel: EligibilityCheckCoverageLevel | undefined;

  /**
   * Code identifying the type of insurance policy.
   * @public
   */
  insuranceType?: EligibilityCheckInsuranceType | undefined;

  /**
   * Network information for a benefit, including the in-plan network indicator and plan network identification.
   * @public
   */
  network?: EligibilityCheckNetwork | undefined;

  /**
   * Code indicating whether the benefit is subject to prior authorization or certification.
   * @public
   */
  priorAuthIndicator?: EligibilityCheckPriorAuthIndicator | undefined;

  /**
   * The service or procedure that this benefit applies to, using a code or code range within a code system like CPT, HCPCS, or NDC.
   * @public
   */
  service?: EligibilityCheckServiceOrProcedure | undefined;

  /**
   * Free-form messages from the payer providing additional information about this benefit entry, like prior authorization requirements, network restrictions, benefit limits, or plan details. Message content isn't standardized and varies by payer.
   * @public
   */
  messages?: string[] | undefined;

  /**
   * Service delivery limits for this benefit, like visit frequency restrictions, age boundaries, or delivery schedules.
   * @public
   */
  serviceLimits?: EligibilityCheckServiceLimit[] | undefined;

  /**
   * Dates associated with this benefit, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckEligibilityAndBenefitDateRanges | undefined;

  /**
   * Another entity associated with the eligibility or benefits. This could be a provider, an individual, an organization, or another payer.
   * @public
   */
  relatedEntities?: EligibilityCheckRelatedEntity[] | undefined;

  /**
   * The locations where providers may deliver healthcare services for this benefit. Common examples include physician offices, hospitals, and patient homes. When present, this indicates facility-specific coverage details.
   * @public
   */
  placesOfService?: EligibilityCheckPlaceOfService[] | undefined;

  /**
   * Additional plan, group, and policy identification numbers for this benefit entry.
   * @public
   */
  additionalInformation?: EligibilityCheckEligibilityAndBenefitAdditionalInformation | undefined;

  /**
   * The plan coverage description from EB05. Populated when the EB05 value doesn't relate to a plan (e.g., payer used EB05 for benefit-level info rather than a plan name).
   * @public
   */
  planCoverageDescription?: string | undefined;

  /**
   * The diagnosis this benefit covers. Present when the benefit is limited to specific diagnoses from the patient's diagnosis list.
   * @public
   */
  diagnosis?: EligibilityCheckDiagnosis | undefined;

  /**
   * The monetary amount associated with this benefit.
   * @public
   */
  amount?: string | undefined;

  /**
   * The percentage associated with this benefit.
   * @public
   */
  percent?: string | undefined;
}

/**
 * Benefit information from the payer, organized into categories like cost-sharing (co-insurance, deductibles, copayments), coverage details (exclusions, limitations), and eligibility statuses.
 * @public
 */
export interface EligibilityCheckBenefits {
  /**
   * Eligibility status benefit entries from the payer. Each entry indicates whether the patient has active or inactive coverage for a specific service, network, and coverage level.
   * @public
   */
  statuses?: EligibilityCheckEligibilityStatus[] | undefined;

  /**
   * A list of co-insurance benefit entries from the payer.
   *
   * The `percent` is the patient's share of costs, expressed as a decimal (such as `0.8` for 80%). The decimal precision reflects what the payer sent. A value of `0` indicates the payer reported no co-insurance responsibility.
   * @public
   */
  coInsurance?: EligibilityCheckCoInsurance[] | undefined;

  /**
   * A list of copayment benefit entries from the payer.
   *
   * The `amount` is the fixed amount the patient pays for a service. The decimal precision reflects what the payer sent (for example, `25.0` or `40`).
   * @public
   */
  coPayment?: EligibilityCheckCoPayment[] | undefined;

  /**
   * A list of deductible benefit entries from the payer.
   *
   * The `amount` is what the patient must pay before the plan begins covering costs. The decimal precision reflects what the payer sent (for example, `1500.0` or `1000`). Check `timePeriod` to determine what the amount represents. A calendar-year deductible is the patient's total for the year, while a remaining deductible is the amount still owed before the plan pays.
   * @public
   */
  deductible?: EligibilityCheckDeductible[] | undefined;

  /**
   * A list of out-of-pocket maximum benefit entries from the payer.
   *
   * The `amount` is the limit on what the patient pays. The decimal precision reflects what the payer sent (for example, `5000.0` or `5000`). Check `timePeriod` to determine whether an amount is the full maximum or the amount remaining.
   * @public
   */
  outOfPocket?: EligibilityCheckOutOfPocket[] | undefined;

  /**
   * A list of cost containment benefit entries from the payer.
   *
   * Cost containment refers to rules a health plan may have in place to control the cost of care. This benefit is typically included when the patient has Medicaid coverage. The `amount` represents the total the patient pays out-of-pocket before benefits begin. The decimal precision reflects what the payer sent (for example, `500.0` or `500`).
   * @public
   */
  costContainment?: EligibilityCheckCostContainment[] | undefined;

  /**
   * A list of spend down benefit entries from the payer.
   *
   * Spend down is a process that allows individuals with high medical expenses to qualify for Medicaid even if their income is above the Medicaid income limit. The `amount` represents the total the patient pays out-of-pocket before they can receive Medicaid benefits. The decimal precision reflects what the payer sent (for example, `1500.0` or `1500`).
   * @public
   */
  spendDown?: EligibilityCheckSpendDown[] | undefined;

  /**
   * A list of benefit limitation entries, expressed as an amount, percent, or quantity.
   *
   * Dental and vision plans often use this benefit type to specify an annual maximum benefit amount.
   *
   * The Affordable Care Act prevents most commercial health plans from imposing limits on annual or lifetime benefit amounts, but this generally doesn't apply to government health plans and some commercial health plans may be exempt.
   *
   * When present, the `amount` indicates the maximum benefit amount the plan allocates to the patient. The `messages` array often includes values like "ANNUAL MAXIMUM".
   * @public
   */
  limitations?: EligibilityCheckLimitation[] | undefined;

  /**
   * A list of coverage basis entries from the payer.
   *
   * Describes the financial basis of the patient's health plan or eligibility for enrollment. For example, payers may use this type to indicate that a plan is fully insured, meaning the payer assumes full financial responsibility for medical claims. Payers may also use this type to indicate carve-out benefits, such as when the patient is enrolled in state-managed health programs, or to explain why a member was allowed to enroll in the plan (such as age range or having a disability). The detail is usually included as free text in `messages` or identifiers in `additionalInformation`.
   * @public
   */
  coverageBasis?: EligibilityCheckCoverageBasis[] | undefined;

  /**
   * A list of free-text benefit descriptions from the payer.
   *
   * Payers sometimes use this type to communicate information that's difficult to capture elsewhere in the response. The description is included as free text in `messages` or identifiers in `additionalInformation`.
   * @public
   */
  benefitDescription?: EligibilityCheckBenefitDescription[] | undefined;

  /**
   * A list of services or conditions the plan excludes from coverage.
   *
   * An exclusion is a service or condition the plan doesn't cover for any patient. This is different from a `nonCovered` entry, which reports that this patient doesn't have coverage for a specific service you submitted in the request.
   * @public
   */
  exclusions?: EligibilityCheckExclusion[] | undefined;

  /**
   * A list of unlimited benefits for the patient's plan.
   *
   * For example, unlimited physical therapy visits or unlimited preventive care.
   * @public
   */
  unlimited?: EligibilityCheckUnlimited[] | undefined;

  /**
   * A list of non-covered services for the patient.
   *
   * Indicates that the patient's plan doesn't cover a specific service type you submitted in the eligibility check. Note that the absence of a `nonCovered` entry doesn't mean that a specific service is covered.
   * @public
   */
  nonCovered?: EligibilityCheckNonCovered[] | undefined;

  /**
   * A list of reserve benefits for the patient.
   *
   * This type is primarily used by Medicare (HETS) to indicate lifetime reserve benefit amounts separate from annual limits. For example, Medicare Lifetime Reserve days – the limited pool of additional inpatient hospital days a patient can use after exhausting a benefit period.
   * @public
   */
  reserve?: EligibilityCheckReserve[] | undefined;

  /**
   * A list of primary care providers for the patient.
   *
   * A PCP is the main healthcare provider responsible for managing a patient's care and coordinating referrals to specialists. When present, the provider's information is available in the `relatedEntities` array.
   * @public
   */
  primaryCareProvider?: EligibilityCheckPrimaryCareProvider[] | undefined;

  /**
   * A list of coverage restrictions due to pre-existing conditions.
   *
   * Indicates coverage for this benefit is restricted because of a pre-existing condition.
   * @public
   */
  preExistingCondition?: EligibilityCheckPreExistingCondition[] | undefined;

  /**
   * A list of managed care coordinator information for the patient.
   *
   * When present, the care coordinator's details are in the `relatedEntities` array.
   * @public
   */
  managedCareCoordinator?: EligibilityCheckManagedCareCoordinator[] | undefined;

  /**
   * A list of services restricted to specific providers.
   *
   * Indicates the benefit is available only when delivered by a particular provider, identified in `relatedEntities`. This doesn't confirm whether that provider is in or out of network with the payer.
   * @public
   */
  servicesRestrictedToFollowingProvider?: EligibilityCheckServicesRestrictedToFollowingProvider[] | undefined;

  /**
   * A list of services the payer determined aren't medically necessary for the patient.
   *
   * Indicates the payer has determined this service isn't medically necessary and won't cover it on that basis.
   * @public
   */
  notDeemedMedicalNecessity?: EligibilityCheckNotDeemedMedicalNecessity[] | undefined;

  /**
   * A list of disclaimers from the payer.
   *
   * A legal or advisory disclaimer attached to the benefit information. The X12 standard discourages use of this type, but many commercial payers still send disclaimers. When present, the disclaimer text arrives in `messages`, and there should be only one disclaimer per individual response.
   * @public
   */
  benefitDisclaimer?: EligibilityCheckBenefitDisclaimer[] | undefined;

  /**
   * A list of benefits requiring a second surgical opinion for coverage.
   *
   * Indicates the plan requires a second surgical opinion before this benefit is available. This is a precondition for obtaining the benefit.
   * @public
   */
  secondSurgicalOpinionRequired?: EligibilityCheckSecondSurgicalOpinionRequired[] | undefined;

  /**
   * A list of other payers with coverage responsibility for the patient.
   *
   * Indicates another payer that has coverage responsibility for the patient. This is the signal for coordination of benefits (COB) scenarios. The other payer's details are available in the `relatedEntities` array.
   * @public
   */
  otherOrAdditionalPayer?: EligibilityCheckOtherOrAdditionalPayer[] | undefined;

  /**
   * A list of historical benefits information for the patient.
   * @public
   */
  priorYearsHistory?: EligibilityCheckPriorYearsHistory[] | undefined;

  /**
   * A list of entries indicating the patient's card has been reported lost or stolen.
   *
   * This typically means that the payer has flagged the patient's member ID to prevent identity theft. The patient may still have active coverage, but you likely won't be able to run transactions with the patient's information until they resolve the issue.
   * @public
   */
  cardReportedStolen?: EligibilityCheckCardReportedStolen[] | undefined;

  /**
   * A list of entries directing you to contact another entity for benefit information.
   *
   * Indicates that the payer can't supply the information you requested and is directing you to another entity. The entity's information is listed in the `relatedEntities` array.
   * @public
   */
  contactFollowingEntityForInformation?: EligibilityCheckContactFollowingEntityForInformation[] | undefined;

  /**
   * A list of entries indicating the payer couldn't process your request.
   *
   * Indicates that the payer couldn't process your request. A common cause is requesting benefits information for a service type or procedure code the payer doesn't support.
   * @public
   */
  cannotProcess?: EligibilityCheckCannotProcess[] | undefined;

  /**
   * A list of entries indicating the benefit information originates from another source.
   *
   * Indicates the information provided came from a source other than the payer's own system. Rarely returned.
   * @public
   */
  otherSourceOfData?: EligibilityCheckOtherSourceOfData[] | undefined;

  /**
   * A list of health care facility information relevant to the patient's benefits.
   *
   * These typically indicate an institution or provider network the patient is required or expected to use. The facility's information is available in the `relatedEntities` array. Rarely returned.
   * @public
   */
  healthCareFacility?: EligibilityCheckHealthCareFacility[] | undefined;

  /**
   * Benefit entries that Stedi couldn't include in the standard arrays due to data validation issues, such as missing required amounts or incorrect unit types.
   * @public
   */
  invalidEntries?: EligibilityCheckInvalidEntries | undefined;
}

/**
 * An insurance plan and its benefits.
 * @public
 */
export interface EligibilityCheckPlan {
  /**
   * Benefit information from the payer, organized into categories like cost-sharing (co-insurance, deductibles, copayments), coverage details (exclusions, limitations), and eligibility statuses.
   * @public
   */
  benefits: EligibilityCheckBenefits | undefined;

  /**
   * The name of the plan. Stedi derives this from the plan names the payer sends in the benefit entries. This property is present when the payer sends consistent plan names, and absent when the data is missing, ambiguous, or contradictory. When absent, check each benefit's `planCoverageDescription` for the plan information.
   * @public
   */
  name?: string | undefined;
}

/**
 * The provider's state license information.
 * @public
 */
export interface EligibilityCheckStateLicense {
  /**
   * The state or province code that issued the license.
   * @public
   */
  state?: string | undefined;

  /**
   * The provider's state license number.
   * @public
   */
  number: string | undefined;
}

/**
 * Additional identifying information about the provider.
 * @public
 */
export interface EligibilityCheckProviderAdditionalInformation {
  /**
   * The provider's state license information.
   * @public
   */
  stateLicense?: EligibilityCheckStateLicense | undefined;

  /**
   * The provider's Medicare provider number.
   * @public
   */
  medicareProviderNumber?: string | undefined;

  /**
   * The provider's Medicaid provider number.
   * @public
   */
  medicaidProviderNumber?: string | undefined;

  /**
   * The ID number for the provider's facility.
   * @public
   */
  facilityIdNumber?: string | undefined;

  /**
   * The provider's personal identification number.
   * @public
   */
  personalIdentificationNumber?: string | undefined;

  /**
   * The provider's contract number.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The provider's electronic device PIN.
   * @public
   */
  electronicDevicePin?: string | undefined;

  /**
   * The provider's submitter ID.
   * @public
   */
  submitterId?: string | undefined;

  /**
   * The provider's user ID.
   * @public
   */
  userId?: string | undefined;

  /**
   * The provider's plan network identification number.
   * @public
   */
  planNetworkId?: string | undefined;

  /**
   * The provider's facility network identification number.
   * @public
   */
  facilityNetworkId?: string | undefined;

  /**
   * The provider's prior identifier number.
   * @public
   */
  priorIdentifierNumber?: string | undefined;
}

/**
 * Information about the entity that submitted the original eligibility check request. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider. This object will always include at least one identifier, such as the provider's [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier), tax ID, or EIN.
 * @public
 */
export interface EligibilityCheckProvider {
  /**
   * The entity's name, as either a person or an organization.
   * @public
   */
  name?: EligibilityCheckPersonOrOrganizationName | undefined;

  /**
   * A code identifying the type of provider.
   * @public
   */
  type: EligibilityCheckProviderEntityIdentifierCode | undefined;

  /**
   * The address of the entity, such as a provider or organization.
   * @public
   */
  address?: EligibilityCheckAddress | undefined;

  /**
   * Information about the provider's role and taxonomy.
   * @public
   */
  provider?: EligibilityCheckEntityProvider | undefined;

  /**
   * The Federal Taxpayer Identification Number.
   * @public
   */
  tin?: string | undefined;

  /**
   * The Social Security Number (SSN).
   * @public
   */
  ssn?: string | undefined;

  /**
   * The Employer Identification Number (EIN), distinct from the Federal Taxpayer Identification Number in `tin`.
   * @public
   */
  ein?: string | undefined;

  /**
   * The pharmacy processor number.
   * @public
   */
  pharmacyProcessorNumber?: string | undefined;

  /**
   * The service provider number. This is an identification number the payer assigns.
   * @public
   */
  serviceProviderNumber?: string | undefined;

  /**
   * The provider's [National Provider Identifier (NPI)](https://www.stedi.com/docs/healthcare/national-provider-identifier).
   * @public
   */
  npi?: string | undefined;

  /**
   * Additional identifying information for the provider.
   * @public
   */
  additionalInformation?: EligibilityCheckProviderAdditionalInformation | undefined;
}

/**
 * Additional identifying information about the subscriber.
 * @public
 */
export interface EligibilityCheckSubscriberAdditionalInformation {
  /**
   * The plan number and plan description.
   * @public
   */
  plan?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The group number and group description.
   * @public
   */
  group?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The plan network identification number and the plan, group, or plan network name.
   * @public
   */
  planNetwork?: EligibilityCheckAdditionalInformationWithName | undefined;

  /**
   * The group or policy number.
   * @public
   */
  groupOrPolicyNumber?: string | undefined;

  /**
   * The member identification number - only used when checking eligibility with a Workers' Compensation or Property and Casualty insurer.
   * @public
   */
  memberId?: string | undefined;

  /**
   * The family unit number.
   * @public
   */
  familyUnitNumber?: string | undefined;

  /**
   * The class of contract code - used to identify the applicable class of contract for claims processing.
   * @public
   */
  classOfContractCode?: string | undefined;

  /**
   * The contract number of a contract between the payer and the provider that requested the eligibility check.
   * @public
   */
  contractNumber?: string | undefined;

  /**
   * The medical record identification number.
   * @public
   */
  medicalRecordId?: string | undefined;

  /**
   * The patient account number. If you included this value in the original eligibility request, the payer will return the same value here in the response.
   * @public
   */
  patientAccountNumber?: string | undefined;

  /**
   * The patient's Medicare Beneficiary Identifier (MBI). If you receive an MBI, we recommend sending a follow-up eligibility check to CMS (payer ID: CMS) for additional benefits data. Visit [Medicare Beneficiary Identifier documentation](https://www.cms.gov/training-education/partner-outreach-resources/new-medicare-card/medical-beneficiary-identifiers-mbis) for more information about the MBI format. This most commonly occurs with patients who are covered by both Medicare and Medicaid.
   * @public
   */
  mbi?: string | undefined;

  /**
   * Used when the identification card has a number in addition to the member ID.
   * @public
   */
  identificationCardSerialNumber?: string | undefined;

  /**
   * The identity card number. Present when this number differs from the member ID.
   * @public
   */
  identityCardNumber?: string | undefined;

  /**
   * The issue number.
   * @public
   */
  issueNumber?: string | undefined;

  /**
   * The insurance policy number.
   * @public
   */
  insurancePolicyNumber?: string | undefined;

  /**
   * The Medicaid recipient identification number.
   * @public
   */
  medicaidRecipientId?: string | undefined;

  /**
   * The prior identifier number.
   * @public
   */
  priorIdentifierNumber?: string | undefined;

  /**
   * The patient's Social Security Number (SSN).
   * @public
   */
  ssn?: string | undefined;

  /**
   * The agency claim number, only used when the information source is a Property and Casualty payer.
   * @public
   */
  agencyClaimNumber?: string | undefined;

  /**
   * The case number associated with the subscriber.
   * @public
   */
  caseNumber?: string | undefined;
}

/**
 * Information about the primary policyholder for the insurance plan listed in the original eligibility check request. The response will always include either the subscriber's name or member ID for identification, but most payers will also return the subscriber's date of birth and other identifying information.
 * @public
 */
export interface EligibilityCheckSubscriber {
  /**
   * The address of the entity, such as a provider or organization.
   * @public
   */
  address?: EligibilityCheckAddress | undefined;

  /**
   * Information about a provider associated with this entity.
   * @public
   */
  provider?: EligibilityCheckEntityProvider | undefined;

  /**
   * Dates associated with patient attributes, as ISO 8601 date ranges.
   * @public
   */
  dates?: EligibilityCheckPatientAttributeDateRanges | undefined;

  /**
   * The patient's date of birth as an ISO 8601 `YYYY-MM-DD` string. For example, `1985-03-15` represents March 15, 1985.
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * Code indicating the patient's gender.
   * @public
   */
  gender?: EligibilityCheckResponsePatientGender | undefined;

  /**
   * The number assigned to each family member born with the same birth date, such as twins or triplets. Indicates the birth order when there are multiple births associated with the provided birth date.
   * @public
   */
  birthSequenceNumber?: number | undefined;

  /**
   * Maintenance information indicating whether the payer signaled that the patient's identifying information differs from what you submitted.
   * @public
   */
  maintenance?: EligibilityCheckMaintenance | undefined;

  /**
   * The entity's name, as either a person or an organization.
   * @public
   */
  name?: EligibilityCheckPersonOrOrganizationName | undefined;

  /**
   * Additional identifying information for the subscriber.
   * @public
   */
  additionalInformation?: EligibilityCheckSubscriberAdditionalInformation | undefined;

  /**
   * The member ID for the insurance policy.
   * @public
   */
  memberId?: string | undefined;
}

/**
 * An issue with your eligibility request that could affect the results, or information about the response.
 * @public
 */
export interface EligibilityCheckWarning {
  /**
   * The warning code.
   * @public
   */
  code?: string | undefined;

  /**
   * The warning description.
   * @public
   */
  description?: string | undefined;
}

/**
 * The eligibility check response payload.
 * @public
 */
export interface CreateEligibilityCheckOutput {
  /**
   * A globally unique identifier for this eligibility check across all Stedi accounts. It's formatted as `ec_<uuid>`. For example: `ec_550e8400-e29b-41d4-a716-446655440000`. You can use this ID to track this eligibility check and to construct deep links to eligibility checks in the Stedi portal.
   * @public
   */
  id: string | undefined;

  /**
   * Metadata about the response. Stedi uses this data for tracking and troubleshooting.
   * @public
   */
  meta?: EligibilityCheckMeta | undefined;

  /**
   * The primary payer ID from the [Stedi Payer Network](https://www.stedi.com/healthcare/network). This ID is consistent across eligibility and claims systems and matches the payer ID printed on the member's ID card. You can use it as the `payerId` in subsequent eligibility check requests.
   * @public
   */
  payerId?: string | undefined;

  /**
   * An identifier that allows Stedi to group eligibility checks for the same patient into a unified record in the Stedi portal called an [eligibility search](https://www.stedi.com/docs/healthcare/eligibility-views).
   *
   * This property is for use by Stedi tools only, such as Stedi's MCP server.
   * @public
   */
  eligibilitySearchId?: string | undefined;

  /**
   * Issues with your eligibility request that could affect the results, or information about the response. For example, warnings can help explain why the request was rejected.
   * @public
   */
  warnings?: EligibilityCheckWarning[] | undefined;

  /**
   * Typically this property contains the raw X12 EDI [271 Eligibility Benefit Response](https://portal.stedi.com/app/guides/view/hipaa/health-care-eligibility-benefit-response-x279a1/01GS66YHZPB37ABF34DBPSR213) from the payer.
   *
   * In some circumstances, this property may contain a [999 Implementation Acknowledgment](https://portal.stedi.com/app/guides/view/hipaa/implementation-acknowledgment-x231a1/01HMRQV0N8SPHG58M4ZG1CRHH0) instead of a 271. A 999 indicates validation errors in the X12 EDI transaction, such as improper formatting or missing or invalid values.
   *
   * If this property contains a 999, many of the other response properties will be empty, as Stedi populates them with information from the 271.
   * @public
   */
  x12: string | undefined;

  /**
   * Information about the payer providing the benefits information. The response will always include the payer's business name and an identifier, such as the payer's tax ID. Most payers also include contact information.
   * @public
   */
  payer: EligibilityCheckPayer | undefined;

  /**
   * Information about the entity that submitted the original eligibility check request. This may be an individual practitioner, a medical group, a hospital, or another type of healthcare provider. This object will always include at least one identifier, such as the provider's [NPI](https://www.stedi.com/docs/healthcare/national-provider-identifier), tax ID, or EIN.
   * @public
   */
  provider?: EligibilityCheckProvider | undefined;

  /**
   * Information about the primary policyholder for the insurance plan listed in the original eligibility check request. The response will always include either the subscriber's name or member ID for identification, but most payers will also return the subscriber's date of birth and other identifying information.
   * @public
   */
  subscriber?: EligibilityCheckSubscriber | undefined;

  /**
   * Information about the dependent from the eligibility check request. Note that the payer may return the dependent in the subscriber object instead. When present, this object will always include the dependent's name for identification, but many payers also include the date of birth and other identifying information.
   * @public
   */
  dependent?: EligibilityCheckDependent | undefined;

  /**
   * The patient's insurance plans, grouped by plan name. Each plan contains the benefits that apply to the patient.
   * @public
   */
  plans?: EligibilityCheckPlan[] | undefined;

  /**
   * `AAA` rejection errors from the payer. [`AAA` errors](https://www.stedi.com/docs/healthcare/eligibility-troubleshooting#payer-aaa-errors) specify the reasons for the rejection and any recommended follow-up actions.
   * @public
   */
  errors?: EligibilityCheckResponseError[] | undefined;
}

/**
 * Input for creating a new destination.
 * @public
 */
export interface CreateEventDestinationInput {
  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description?: string | undefined;

  /**
   * The event types you want Stedi to send to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes: string[] | undefined;

  /**
   * The URL where you want Stedi to deliver payloads through HTTP `POST`.
   * @public
   */
  destinationUrl: string | undefined;

  /**
   * Maximum concurrent deliveries for this destination. If not set, Stedi applies your account default (typically 5). Stedi rejects requests exceeding your account maximum (typically 20) with a `400` error. Contact Stedi to change your limits.
   * @public
   */
  concurrencyLimit?: number | undefined;

  /**
   * The destination's status upon creation. Default is `ENABLED`.
   * @public
   */
  status?: EventDestinationsDestinationInputStatus | undefined;

  /**
   * A unique string to identify this request to the server. If not set, Stedi generates one automatically.
   *
   * The key can be up to 255 characters. You can safely retry requests with the same idempotency key within 24 hours of making the first request. This prevents duplicate operations due to network errors or other intermittent failures. [Learn more](https://www.stedi.com/docs/api-reference/index#idempotency-keys).
   * @public
   */
  idempotencyKey?: string | undefined;
}

/**
 * Output containing the created destination details and signing secret.
 * @public
 */
export interface CreateEventDestinationOutput {
  /**
   * The unique identifier for the destination.
   * @public
   */
  id: string | undefined;

  /**
   * Creation timestamp for this destination.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp for this destination.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The destination's current status. Stedi only sends event payloads to `ENABLED` destinations.
   * @public
   */
  status: EventDestinationsDestinationStatus | undefined;

  /**
   * The timestamp for Stedi's most recent delivery attempt to this destination. Absent when Stedi hasn't yet attempted a delivery.
   * @public
   */
  lastDeliveryTime?: Date | undefined;

  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description: string | undefined;

  /**
   * The event types Stedi sends to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes: string[] | undefined;

  /**
   * The URL where Stedi delivers payloads through HTTP `POST`.
   * @public
   */
  destinationUrl: string | undefined;

  /**
   * The maximum number of concurrent deliveries for this destination. Contact Stedi to change your account limits.
   * @public
   */
  concurrencyLimit?: number | undefined;

  /**
   * The signing secret for verifying event payloads. Store it securely. Visit [verify event signatures](https://www.stedi.com/docs/healthcare/event-destinations-message-handling#verify-authenticity-and-receipt-time) for details.
   * @public
   */
  signingSecret: string | undefined;
}

/**
 * Input for deleting a destination.
 * @public
 */
export interface DeleteEventDestinationInput {
  /**
   * The unique identifier for the destination. You can retrieve destination IDs with the [List Destinations](https://www.stedi.com/docs/healthcare/api-reference/get-event-destinations-list-destinations) endpoint.
   * @public
   */
  destinationId: string | undefined;

  /**
   * A unique string to identify this request to the server. If not set, Stedi generates one automatically.
   *
   * The key can be up to 255 characters. You can safely retry requests with the same idempotency key within 24 hours of making the first request. This prevents duplicate operations due to network errors or other intermittent failures. [Learn more](https://www.stedi.com/docs/api-reference/index#idempotency-keys).
   * @public
   */
  idempotencyKey?: string | undefined;
}

/**
 * A successful response confirms the destination has been permanently deleted.
 * @public
 */
export interface DeleteEventDestinationOutput {}

/**
 * A summary representation of a destination, returned in list responses.
 * @public
 */
export interface EventDestinationsDestinationSummary {
  /**
   * The unique identifier for the destination.
   * @public
   */
  id: string | undefined;

  /**
   * Creation timestamp for this destination.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp for this destination.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The destination's current status. Stedi only sends event payloads to `ENABLED` destinations.
   * @public
   */
  status: EventDestinationsDestinationStatus | undefined;

  /**
   * The timestamp for Stedi's most recent delivery attempt to this destination. Absent when Stedi hasn't yet attempted a delivery.
   * @public
   */
  lastDeliveryTime?: Date | undefined;

  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description: string | undefined;

  /**
   * The event types Stedi sends to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes: string[] | undefined;

  /**
   * The URL where Stedi delivers payloads through HTTP `POST`.
   * @public
   */
  destinationUrl: string | undefined;

  /**
   * The maximum number of concurrent deliveries for this destination. Contact Stedi to change your account limits.
   * @public
   */
  concurrencyLimit?: number | undefined;
}

/**
 * A reference to a resource affected by an event.
 * @public
 */
export interface EventDestinationsEventPayloadResourceRef {
  /**
   * The resource identifier.
   * @public
   */
  id: string | undefined;

  /**
   * The resource type. Uses dot notation to indicate nested resources. For example, `enrollment.document` indicates a document associated with a transaction enrollment request.
   * @public
   */
  type: string | undefined;
}

/**
 * A v1 thin event envelope that signals a state change. Consumers fetch current resource state via API using the resource reference. This is the exact payload delivered to webhook destinations.
 * @public
 */
export interface EventDestinationsV1EventPayload {
  /**
   * Object type discriminator. Identifies the schema version of this payload.
   * @public
   */
  object: EventDestinationsEventPayloadObjectType | undefined;

  /**
   * Stedi account identifier (UUID).
   * @public
   */
  account: string | undefined;

  /**
   * The environment in which the event was produced.
   * @public
   */
  environment: EventDestinationsEventEnvironment | undefined;

  /**
   * An ISO 8601 timestamp of when the event was created.
   * @public
   */
  created: Date | undefined;

  /**
   * Information about the resource that triggered the event. You can use this information to retrieve additional information about the resource.
   * @public
   */
  resource: EventDestinationsEventPayloadResourceRef | undefined;

  /**
   * An identifier for the event, formatted as `evt_\{UUID\}`.
   * @public
   */
  id?: string | undefined;

  /**
   * The event type in dot notation, such as `enrollment.activated`.
   * @public
   */
  type?: string | undefined;

  /**
   * Other resources related to the event. Only present when there are related resources.
   * @public
   */
  relatedResources?: EventDestinationsEventPayloadResourceRef[] | undefined;
}

/**
 * The event payload, discriminated by object type. Each variant corresponds to a versioned event schema.
 * @public
 */
export type EventDestinationsEventPayload =
  | EventDestinationsEventPayload.V1EventMember
  | EventDestinationsEventPayload.$UnknownMember;

/**
 * @public
 */
export namespace EventDestinationsEventPayload {
  /**
   * A `v1` thin event payload.
   * @public
   */
  export interface V1EventMember {
    v1Event: EventDestinationsV1EventPayload;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    v1Event?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    v1Event: (value: EventDestinationsV1EventPayload) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A summary representation of an event, returned in list responses.
 * @public
 */
export interface EventDestinationsEventSummary {
  /**
   * The unique identifier for the event, formatted as `evt_\{UUID\}`.
   * @public
   */
  id: string | undefined;

  /**
   * The current status of the event. Can be:
   *   - `DELIVERED`: Stedi successfully delivered the event to all relevant event destinations.
   *   - `PENDING`: Stedi is still trying to deliver the event to one or more event destinations. Events may stay in this state for multiple days as Stedi automatically retries.
   *   - `FAILED`: Stedi couldn't deliver the event to at least one event destination and is no longer retrying.  Deliveries to some event destinations may have been successful.
   * @public
   */
  status: EventDestinationsEventStatus | undefined;

  /**
   * An ISO 8601 timestamp of when the event was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The type of event, such as `enrollment.activated`.
   * @public
   */
  eventType: string | undefined;
}

/**
 * Input for retrieving a destination.
 * @public
 */
export interface GetEventDestinationInput {
  /**
   * The unique identifier for the destination. You can retrieve destination IDs with the [List Destinations](https://www.stedi.com/docs/healthcare/api-reference/get-event-destinations-list-destinations) endpoint.
   * @public
   */
  destinationId: string | undefined;
}

/**
 * Output containing the destination details.
 * @public
 */
export interface GetEventDestinationOutput {
  /**
   * The unique identifier for the destination.
   * @public
   */
  id: string | undefined;

  /**
   * Creation timestamp for this destination.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp for this destination.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The destination's current status. Stedi only sends event payloads to `ENABLED` destinations.
   * @public
   */
  status: EventDestinationsDestinationStatus | undefined;

  /**
   * The timestamp for Stedi's most recent delivery attempt to this destination. Absent when Stedi hasn't yet attempted a delivery.
   * @public
   */
  lastDeliveryTime?: Date | undefined;

  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description: string | undefined;

  /**
   * The event types Stedi sends to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes: string[] | undefined;

  /**
   * The URL where Stedi delivers payloads through HTTP `POST`.
   * @public
   */
  destinationUrl: string | undefined;

  /**
   * The maximum number of concurrent deliveries for this destination. Contact Stedi to change your account limits.
   * @public
   */
  concurrencyLimit?: number | undefined;
}

/**
 * Input for retrieving an event.
 * @public
 */
export interface GetEventDestinationEventInput {
  /**
   * The unique identifier for the event, formatted as `evt_\{UUID\}`.
   * @public
   */
  eventId: string | undefined;
}

/**
 * Output containing the event details.
 * @public
 */
export interface GetEventDestinationEventOutput {
  /**
   * The unique identifier for the event, formatted as `evt_\{UUID\}`.
   * @public
   */
  id: string | undefined;

  /**
   * The current status of the event. Can be:
   *   - `DELIVERED`: Stedi successfully delivered the event to all relevant event destinations.
   *   - `PENDING`: Stedi is still trying to deliver the event to one or more event destinations. Events may stay in this state for multiple days as Stedi automatically retries.
   *   - `FAILED`: Stedi couldn't deliver the event to at least one event destination and is no longer retrying.  Deliveries to some event destinations may have been successful.
   * @public
   */
  status: EventDestinationsEventStatus | undefined;

  /**
   * An ISO 8601 timestamp of when the event was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The type of event, such as `enrollment.activated`.
   * @public
   */
  eventType: string | undefined;

  /**
   * The event payload Stedi delivers to event destinations.
   * @public
   */
  eventPayload: EventDestinationsEventPayload | undefined;
}

/**
 * Input for retrieving a destination's signing secret.
 * @public
 */
export interface GetEventDestinationSecretInput {
  /**
   * The unique identifier for the destination. You can retrieve destination IDs with the [List Destinations](https://www.stedi.com/docs/healthcare/api-reference/get-event-destinations-list-destinations) endpoint.
   * @public
   */
  destinationId: string | undefined;
}

/**
 * Output containing the destination's signing secret.
 * @public
 */
export interface GetEventDestinationSecretOutput {
  /**
   * The signing secret for verifying event payloads. Visit [verify event signatures](https://www.stedi.com/docs/healthcare/event-destinations-message-handling#verify-authenticity-and-receipt-time) for details.
   * @public
   */
  signingSecret: string | undefined;

  /**
   * Expiration timestamp for the previous secret. Only present when a secret rotation is in progress.
   * @public
   */
  previousSecretExpiresAt?: Date | undefined;
}

/**
 * Input for listing events.
 * @public
 */
export interface ListEventDestinationEventsInput {
  /**
   * The maximum number of elements to return in a page. If not specified, the default is 100.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The `nextPageToken` value from a previous response. You can use this to get the next page of results. If not set, Stedi returns the first page of results.
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Filter results by event ID, such as `evt_019d554b-311b-7813-b491-0a8973762eae`.
   * @public
   */
  eventId?: string | undefined;

  /**
   * Filter results by one or more event statuses. Can be:
   *   - `DELIVERED`: Stedi successfully delivered the event to all relevant event destinations.
   *   - `PENDING`: Stedi is still trying to deliver the event to one or more event destinations.
   *   - `FAILED`: Stedi couldn't deliver the event to at least one event destination and is no longer retrying.
   * @public
   */
  status?: EventDestinationsEventStatus[] | undefined;

  /**
   * Filter results by event type, such as `enrollment.activated`.
   * @public
   */
  eventType?: string | undefined;

  /**
   * Filter results by their `createdAt` timestamp. Each value is in the format `operator:ISO-8601-timestamp`.
   *   - The supported operators are `gt` (after), `gte` (at or after), `lt` (before), and `lte` (at or before). For example: Setting this to `lt:2024-02-01T00:00:00Z` filters for events created before the specified timestamp.
   *   - Combine multiple values with `&` to specify a date range. For example: `created=gt:2026-01-01T00:00:00Z&created=lt:2026-02-01T00:00:00Z`.
   * @public
   */
  created?: string[] | undefined;
}

/**
 * Output containing the list of events.
 * @public
 */
export interface ListEventDestinationEventsOutput {
  /**
   * Token that you can supply in subsequent requests to retrieve the next page of results. If not returned, there are no more results.
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The list of event summaries.
   * @public
   */
  items: EventDestinationsEventSummary[] | undefined;
}

/**
 * Input for listing destinations.
 * @public
 */
export interface ListEventDestinationsInput {
  /**
   * Number of items to return per page.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The `nextPageToken` value from a previous response. You can use this to get the next page of results. If not set, Stedi returns the first page of results.
   * @public
   */
  pageToken?: string | undefined;

  /**
   * Filter results by destination status.
   * @public
   */
  status?: EventDestinationsDestinationStatus | undefined;

  /**
   * Filter results by event type. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventType?: string | undefined;
}

/**
 * Output containing the list of destinations.
 * @public
 */
export interface ListEventDestinationsOutput {
  /**
   * Token that you can supply in subsequent requests to retrieve the next page of results. If not returned, there are no more results.
   * @public
   */
  nextPageToken?: string | undefined;

  /**
   * The list of destination summaries.
   * @public
   */
  items: EventDestinationsDestinationSummary[] | undefined;
}

/**
 * Input for rotating a destination's signing secret.
 * @public
 */
export interface RotateEventDestinationSecretInput {
  /**
   * The unique identifier for the destination. You can retrieve destination IDs with the [List Destinations](https://www.stedi.com/docs/healthcare/api-reference/get-event-destinations-list-destinations) endpoint.
   * @public
   */
  destinationId: string | undefined;

  /**
   * The number of hours you want the previous secret to remain valid after rotation.
   *   - Default is 24 hours.
   *   - Set to `0` when you want the previous secret to expire immediately — in-flight payloads signed with the previous secret fail verification.
   *   - You can't rotate again until this grace period expires.
   * @public
   */
  previousSecretExpiryHours?: number | undefined;

  /**
   * A unique string to identify this request to the server. If not set, Stedi generates one automatically.
   *
   * The key can be up to 255 characters. You can safely retry requests with the same idempotency key within 24 hours of making the first request. This prevents duplicate operations due to network errors or other intermittent failures. [Learn more](https://www.stedi.com/docs/api-reference/index#idempotency-keys).
   * @public
   */
  idempotencyKey?: string | undefined;
}

/**
 * Output containing the new signing secret.
 * @public
 */
export interface RotateEventDestinationSecretOutput {
  /**
   * The new signing secret for verifying event payloads. Visit [verify event signatures](https://www.stedi.com/docs/healthcare/event-destinations-message-handling#verify-authenticity-and-receipt-time) for details.
   * @public
   */
  signingSecret: string | undefined;

  /**
   * Expiration timestamp for the secret this rotation replaced. Equals the rotation time when you set `previousSecretExpiryHours` to `0`. You can't rotate again until this timestamp passes.
   * @public
   */
  previousSecretExpiresAt?: Date | undefined;
}

/**
 * Input for updating a destination.
 * @public
 */
export interface UpdateEventDestinationInput {
  /**
   * The unique identifier for the destination. You can retrieve destination IDs with the [List Destinations](https://www.stedi.com/docs/healthcare/api-reference/get-event-destinations-list-destinations) endpoint.
   * @public
   */
  destinationId: string | undefined;

  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description?: string | undefined;

  /**
   * The event types you want Stedi to send to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes?: string[] | undefined;

  /**
   * The URL where you want Stedi to deliver payloads through HTTP `POST`.
   * @public
   */
  destinationUrl?: string | undefined;

  /**
   * Maximum concurrent deliveries for this destination. If not set, Stedi applies your account default (typically 5). Stedi rejects requests exceeding your account maximum (typically 20) with a `400` error. Contact Stedi to change your limits.
   * @public
   */
  concurrencyLimit?: number | undefined;

  /**
   * The destination's status. Set to `ENABLED` to receive event deliveries or `DISABLED` to pause them.
   * @public
   */
  status?: EventDestinationsDestinationInputStatus | undefined;

  /**
   * A unique string to identify this request to the server. If not set, Stedi generates one automatically.
   *
   * The key can be up to 255 characters. You can safely retry requests with the same idempotency key within 24 hours of making the first request. This prevents duplicate operations due to network errors or other intermittent failures. [Learn more](https://www.stedi.com/docs/api-reference/index#idempotency-keys).
   * @public
   */
  idempotencyKey?: string | undefined;
}

/**
 * Output containing the updated destination details.
 * @public
 */
export interface UpdateEventDestinationOutput {
  /**
   * The unique identifier for the destination.
   * @public
   */
  id: string | undefined;

  /**
   * Creation timestamp for this destination.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Last update timestamp for this destination.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The destination's current status. Stedi only sends event payloads to `ENABLED` destinations.
   * @public
   */
  status: EventDestinationsDestinationStatus | undefined;

  /**
   * The timestamp for Stedi's most recent delivery attempt to this destination. Absent when Stedi hasn't yet attempted a delivery.
   * @public
   */
  lastDeliveryTime?: Date | undefined;

  /**
   * A human-readable name for the destination. Stedi displays this name in the portal.
   * @public
   */
  name: string | undefined;

  /**
   * A description of the destination's purpose, such as "Receives transaction enrollment task notifications."
   * @public
   */
  description: string | undefined;

  /**
   * The event types Stedi sends to this destination. Visit [event types](https://www.stedi.com/docs/healthcare/event-destinations-event-types) for a complete list.
   * @public
   */
  eventTypes: string[] | undefined;

  /**
   * The URL where Stedi delivers payloads through HTTP `POST`.
   * @public
   */
  destinationUrl: string | undefined;

  /**
   * The maximum number of concurrent deliveries for this destination. Contact Stedi to change your account limits.
   * @public
   */
  concurrencyLimit?: number | undefined;
}
