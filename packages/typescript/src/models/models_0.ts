// smithy-typescript generated code
import type {
  ClaimAcknowledgmentStatus,
  ClaimPaymentInformationStatusCode,
  ClaimStatus,
  ClaimStatusReportedBy,
  ClaimType,
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
