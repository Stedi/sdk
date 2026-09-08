// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator = {
  /**
   * The insured has not authorized assignment of benefits.
   */
  NO: "NO",
  /**
   * Assignment of benefits does not apply, typically because there is no signature on file.
   */
  NOT_APPLICABLE: "NOT_APPLICABLE",
  /**
   * The insured has authorized assignment of benefits.
   */
  YES: "YES",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator =
  (typeof ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator)[keyof typeof ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionReleaseOfInformationCode = {
  /**
   * The provider has informed consent to release medical information, but the signed authorization has not been obtained.
   */
  INFORMED_CONSENT: "INFORMED_CONSENT",
  /**
   * The provider has the patient's signed authorization to release medical information.
   */
  YES: "YES",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionReleaseOfInformationCode =
  (typeof ProfessionalClaimSubmissionReleaseOfInformationCode)[keyof typeof ProfessionalClaimSubmissionReleaseOfInformationCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionProviderAcceptsAssignment = {
  /**
   * The provider accepts assignment and agrees to accept the payer's payment as payment in full, minus any patient responsibility.
   */
  ASSIGNED: "ASSIGNED",
  /**
   * The provider accepts assignment for clinical laboratory services only. This is uncommon.
   */
  CLINICAL_LAB_ONLY: "CLINICAL_LAB_ONLY",
  /**
   * The provider does not accept assignment. The payer typically sends payment directly to the patient, who is then responsible for reimbursing the provider.
   */
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionProviderAcceptsAssignment =
  (typeof ProfessionalClaimSubmissionProviderAcceptsAssignment)[keyof typeof ProfessionalClaimSubmissionProviderAcceptsAssignment];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionProviderSignature = {
  /**
   * The provider does not have the rendering provider's signature on file.
   */
  NOT_ON_FILE: "NOT_ON_FILE",
  /**
   * The provider has the rendering provider's signature on file.
   */
  ON_FILE: "ON_FILE",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionProviderSignature =
  (typeof ProfessionalClaimSubmissionProviderSignature)[keyof typeof ProfessionalClaimSubmissionProviderSignature];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionAttachmentReportTypeCode = {
  /**
   * Admission summary.
   */
  ADMISSION_SUMMARY: "ADMISSION_SUMMARY",
  /**
   * Allergies or sensitivities document.
   */
  ALLERGIES_SENSITIVITIES: "ALLERGIES_SENSITIVITIES",
  /**
   * Ambulance certification.
   */
  AMBULANCE_CERTIFICATION: "AMBULANCE_CERTIFICATION",
  /**
   * Autopsy report.
   */
  AUTOPSY_REPORT: "AUTOPSY_REPORT",
  /**
   * Baseline.
   */
  BASELINE: "BASELINE",
  /**
   * Benchmark testing results.
   */
  BENCHMARK_TESTING_RESULTS: "BENCHMARK_TESTING_RESULTS",
  /**
   * Blanket test results.
   */
  BLANKET_TEST_RESULTS: "BLANKET_TEST_RESULTS",
  /**
   * Certification.
   */
  CERTIFICATION: "CERTIFICATION",
  /**
   * Certified test report.
   */
  CERTIFIED_TEST_REPORT: "CERTIFIED_TEST_REPORT",
  /**
   * Chemical analysis.
   */
  CHEMICAL_ANALYSIS: "CHEMICAL_ANALYSIS",
  /**
   * Chiropractic justification.
   */
  CHIROPRACTIC_JUSTIFICATION: "CHIROPRACTIC_JUSTIFICATION",
  /**
   * Consent forms.
   */
  CONSENT_FORMS: "CONSENT_FORMS",
  /**
   * Continued treatment.
   */
  CONTINUED_TREATMENT: "CONTINUED_TREATMENT",
  /**
   * Death notification.
   */
  DEATH_NOTIFICATION: "DEATH_NOTIFICATION",
  /**
   * Dental models.
   */
  DENTAL_MODELS: "DENTAL_MODELS",
  /**
   * Diagnostic report.
   */
  DIAGNOSTIC_REPORT: "DIAGNOSTIC_REPORT",
  /**
   * Discharge monitoring report.
   */
  DISCHARGE_MONITORING: "DISCHARGE_MONITORING",
  /**
   * Discharge summary.
   */
  DISCHARGE_SUMMARY: "DISCHARGE_SUMMARY",
  /**
   * Durable medical equipment prescription.
   */
  DME_PRESCRIPTION: "DME_PRESCRIPTION",
  /**
   * Drugs administered.
   */
  DRUGS_ADMINISTERED: "DRUGS_ADMINISTERED",
  /**
   * Drug profile document.
   */
  DRUG_PROFILE: "DRUG_PROFILE",
  /**
   * Explanation of benefits, for coordination of benefits or Medicare secondary payer.
   */
  EXPLANATION_OF_BENEFITS: "EXPLANATION_OF_BENEFITS",
  /**
   * Functional goals.
   */
  FUNCTIONAL_GOALS: "FUNCTIONAL_GOALS",
  /**
   * Health certificate.
   */
  HEALTH_CERTIFICATE: "HEALTH_CERTIFICATE",
  /**
   * Health clinic records.
   */
  HEALTH_CLINIC_RECORDS: "HEALTH_CLINIC_RECORDS",
  /**
   * Immunization record.
   */
  IMMUNIZATION_RECORD: "IMMUNIZATION_RECORD",
  /**
   * Initial assessment.
   */
  INITIAL_ASSESSMENT: "INITIAL_ASSESSMENT",
  /**
   * Justification for admission.
   */
  JUSTIFICATION_FOR_ADMISSION: "JUSTIFICATION_FOR_ADMISSION",
  /**
   * Laboratory results.
   */
  LABORATORY_RESULTS: "LABORATORY_RESULTS",
  /**
   * Patient medical history document.
   */
  MEDICAL_HISTORY: "MEDICAL_HISTORY",
  /**
   * Medical record attachment.
   */
  MEDICAL_RECORD_ATTACHMENT: "MEDICAL_RECORD_ATTACHMENT",
  /**
   * Models.
   */
  MODELS: "MODELS",
  /**
   * Nursing notes.
   */
  NURSING_NOTES: "NURSING_NOTES",
  /**
   * Operative note.
   */
  OPERATIVE_NOTE: "OPERATIVE_NOTE",
  /**
   * Orders and treatments document.
   */
  ORDERS_TREATMENTS: "ORDERS_TREATMENTS",
  /**
   * Oxygen content averaging report.
   */
  OXYGEN_CONTENT_AVERAGING: "OXYGEN_CONTENT_AVERAGING",
  /**
   * Oxygen therapy certification.
   */
  OXYGEN_THERAPY_CERTIFICATION: "OXYGEN_THERAPY_CERTIFICATION",
  /**
   * Paramedical results.
   */
  PARAMEDICAL_RESULTS: "PARAMEDICAL_RESULTS",
  /**
   * Parenteral or enteral certification.
   */
  PARENTERAL_ENTERAL_CERTIFICATION: "PARENTERAL_ENTERAL_CERTIFICATION",
  /**
   * Pathology report.
   */
  PATHOLOGY_REPORT: "PATHOLOGY_REPORT",
  /**
   * Photographs.
   */
  PHOTOGRAPHS: "PHOTOGRAPHS",
  /**
   * Objective physical examination document, including vital signs.
   */
  PHYSICAL_EXAMINATION: "PHYSICAL_EXAMINATION",
  /**
   * Physical therapy certification.
   */
  PHYSICAL_THERAPY_CERTIFICATION: "PHYSICAL_THERAPY_CERTIFICATION",
  /**
   * Physical therapy notes.
   */
  PHYSICAL_THERAPY_NOTES: "PHYSICAL_THERAPY_NOTES",
  /**
   * Physician order.
   */
  PHYSICIAN_ORDER: "PHYSICIAN_ORDER",
  /**
   * Physician's report.
   */
  PHYSICIAN_REPORT: "PHYSICIAN_REPORT",
  /**
   * Plan of treatment.
   */
  PLAN_OF_TREATMENT: "PLAN_OF_TREATMENT",
  /**
   * Prescription.
   */
  PRESCRIPTION: "PRESCRIPTION",
  /**
   * Progress report.
   */
  PROGRESS_REPORT: "PROGRESS_REPORT",
  /**
   * Prosthetics or orthotic certification.
   */
  PROSTHETICS_ORTHOTIC_CERTIFICATION: "PROSTHETICS_ORTHOTIC_CERTIFICATION",
  /**
   * Radiology films.
   */
  RADIOLOGY_FILMS: "RADIOLOGY_FILMS",
  /**
   * Radiology reports.
   */
  RADIOLOGY_REPORTS: "RADIOLOGY_REPORTS",
  /**
   * Recovery plan.
   */
  RECOVERY_PLAN: "RECOVERY_PLAN",
  /**
   * Referral form.
   */
  REFERRAL_FORM: "REFERRAL_FORM",
  /**
   * Renewable oxygen content averaging report.
   */
  RENEWABLE_OXYGEN_CONTENT: "RENEWABLE_OXYGEN_CONTENT",
  /**
   * Report justifying treatment beyond utilization guidelines.
   */
  REPORT_JUSTIFYING_TREATMENT: "REPORT_JUSTIFYING_TREATMENT",
  /**
   * State school immunization records.
   */
  STATE_IMMUNIZATION_RECORDS: "STATE_IMMUNIZATION_RECORDS",
  /**
   * Support data for the claim.
   */
  SUPPORT_DATA: "SUPPORT_DATA",
  /**
   * Symptoms document.
   */
  SYMPTOMS_DOCUMENT: "SYMPTOMS_DOCUMENT",
  /**
   * Report of tests and analysis.
   */
  TESTS_ANALYSIS_REPORT: "TESTS_ANALYSIS_REPORT",
  /**
   * Treatment diagnosis.
   */
  TREATMENT_DIAGNOSIS: "TREATMENT_DIAGNOSIS",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionAttachmentReportTypeCode =
  (typeof ProfessionalClaimSubmissionAttachmentReportTypeCode)[keyof typeof ProfessionalClaimSubmissionAttachmentReportTypeCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionAttachmentTransmissionCode = {
  /**
   * The attachment is held by the provider and made available to the payer on request.
   */
  AVAILABLE_ON_REQUEST: "AVAILABLE_ON_REQUEST",
  /**
   * The attachment is sent by fax.
   */
  BY_FAX: "BY_FAX",
  /**
   * The attachment is sent by mail.
   */
  BY_MAIL: "BY_MAIL",
  /**
   * The attachment is sent electronically only.
   */
  ELECTRONICALLY_ONLY: "ELECTRONICALLY_ONLY",
  /**
   * The attachment is sent by email.
   */
  EMAIL: "EMAIL",
  /**
   * The attachment is sent by file transfer.
   */
  FILE_TRANSFER: "FILE_TRANSFER",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionAttachmentTransmissionCode =
  (typeof ProfessionalClaimSubmissionAttachmentTransmissionCode)[keyof typeof ProfessionalClaimSubmissionAttachmentTransmissionCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionEPSDTReferralConditionIndicator = {
  /**
   * A referral was available but not used.
   */
  AVAILABLE_NOT_USED: "AVAILABLE_NOT_USED",
  /**
   * A new service was requested through a referral.
   */
  NEW_SERVICE_REQUESTED: "NEW_SERVICE_REQUESTED",
  /**
   * Not used.
   */
  NOT_USED: "NOT_USED",
  /**
   * The patient is under treatment.
   */
  UNDER_TREATMENT: "UNDER_TREATMENT",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionEPSDTReferralConditionIndicator =
  (typeof ProfessionalClaimSubmissionEPSDTReferralConditionIndicator)[keyof typeof ProfessionalClaimSubmissionEPSDTReferralConditionIndicator];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionClaimFrequencyCode = {
  /**
   * This claim cancels, or voids, a previously submitted claim.
   */
  CANCELLATION_OF_PRIOR_CLAIM: "CANCELLATION_OF_PRIOR_CLAIM",
  /**
   * This claim replaces a previously submitted claim.
   */
  REPLACEMENT_OF_PRIOR_CLAIM: "REPLACEMENT_OF_PRIOR_CLAIM",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionClaimFrequencyCode =
  (typeof ProfessionalClaimSubmissionClaimFrequencyCode)[keyof typeof ProfessionalClaimSubmissionClaimFrequencyCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionGenderCode = {
  /**
   * Female.
   */
  FEMALE: "FEMALE",
  /**
   * Male.
   */
  MALE: "MALE",
  /**
   * Unknown. Use when the person declines to answer or does not identify as male or female. Note that some payers may reject the claim if the sex doesn't match what they have in their member records.
   */
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionGenderCode =
  (typeof ProfessionalClaimSubmissionGenderCode)[keyof typeof ProfessionalClaimSubmissionGenderCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionInsuranceType = {
  /**
   * CHAMPVA, the Civilian Health and Medical Program of the Department of Veterans Affairs, which covers spouses and dependents of certain disabled or deceased veterans.
   */
  CHAMPVA: "CHAMPVA",
  /**
   * Workers' compensation, FECA, or Black Lung coverage for workers injured on the job. FECA stands for the Federal Employees' Compensation Act.
   */
  FECA_BLK_LUNG: "FECA_BLK_LUNG",
  /**
   * Medicaid.
   */
  MEDICAID: "MEDICAID",
  /**
   * Original Medicare. Don't use this for Medicare Advantage plans – use `OTHER` instead.
   */
  MEDICARE: "MEDICARE",
  /**
   * Any other plan type, including commercial payers and Medicare Advantage. Use this for most claims.
   */
  OTHER: "OTHER",
  /**
   * TRICARE, the U.S. Department of Defense's health care program for military members and their families.
   */
  TRICARE: "TRICARE",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionInsuranceType =
  (typeof ProfessionalClaimSubmissionInsuranceType)[keyof typeof ProfessionalClaimSubmissionInsuranceType];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionPaymentResponsibilityLevelCode = {
  /**
   * The payer is the primary payer for this claim.
   */
  PRIMARY: "PRIMARY",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionPaymentResponsibilityLevelCode =
  (typeof ProfessionalClaimSubmissionPaymentResponsibilityLevelCode)[keyof typeof ProfessionalClaimSubmissionPaymentResponsibilityLevelCode];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionClaimFilingIndicator = {
  /**
   * Automobile medical coverage.
   */
  AUTOMOBILE_MEDICAL: "AUTOMOBILE_MEDICAL",
  /**
   * Blue Cross Blue Shield.
   */
  BLUE_CROSS_BLUE_SHIELD: "BLUE_CROSS_BLUE_SHIELD",
  /**
   * A commercial insurance company.
   */
  COMMERCIAL_INSURANCE: "COMMERCIAL_INSURANCE",
  /**
   * A dental maintenance organization.
   */
  DENTAL_MAINTENANCE_ORGANIZATION: "DENTAL_MAINTENANCE_ORGANIZATION",
  /**
   * Disability coverage.
   */
  DISABILITY: "DISABILITY",
  /**
   * An exclusive provider organization (EPO).
   */
  EXCLUSIVE_PROVIDER_ORGANIZATION: "EXCLUSIVE_PROVIDER_ORGANIZATION",
  /**
   * The Federal Employees Program.
   */
  FEDERAL_EMPLOYEES_PROGRAM: "FEDERAL_EMPLOYEES_PROGRAM",
  /**
   * A health maintenance organization (HMO).
   */
  HEALTH_MAINTENANCE_ORGANIZATION: "HEALTH_MAINTENANCE_ORGANIZATION",
  /**
   * An HMO Medicare risk plan.
   */
  HMO_MEDICARE_RISK: "HMO_MEDICARE_RISK",
  /**
   * An indemnity insurance plan.
   */
  INDEMNITY_INSURANCE: "INDEMNITY_INSURANCE",
  /**
   * Liability medical coverage.
   */
  LIABILITY_MEDICAL: "LIABILITY_MEDICAL",
  /**
   * Medicaid.
   */
  MEDICAID: "MEDICAID",
  /**
   * Medicare Part A.
   */
  MEDICARE_PART_A: "MEDICARE_PART_A",
  /**
   * Medicare Part B.
   */
  MEDICARE_PART_B: "MEDICARE_PART_B",
  /**
   * A mutually defined plan type agreed on with the payer.
   */
  MUTUALLY_DEFINED: "MUTUALLY_DEFINED",
  /**
   * Another federal program.
   */
  OTHER_FEDERAL_PROGRAM: "OTHER_FEDERAL_PROGRAM",
  /**
   * Another non-federal program.
   */
  OTHER_NON_FEDERAL_PROGRAMS: "OTHER_NON_FEDERAL_PROGRAMS",
  /**
   * A point-of-service (POS) plan.
   */
  POINT_OF_SERVICE: "POINT_OF_SERVICE",
  /**
   * A preferred provider organization (PPO).
   */
  PREFERRED_PROVIDER_ORGANIZATION: "PREFERRED_PROVIDER_ORGANIZATION",
  /**
   * A Title V program.
   */
  TITLE_V: "TITLE_V",
  /**
   * TRICARE.
   */
  TRICARE: "TRICARE",
  /**
   * A Veterans Affairs plan.
   */
  VETERANS_AFFAIRS_PLAN: "VETERANS_AFFAIRS_PLAN",
  /**
   * A workers' compensation health claim.
   */
  WORKERS_COMPENSATION_HEALTH_CLAIM: "WORKERS_COMPENSATION_HEALTH_CLAIM",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionClaimFilingIndicator =
  (typeof ProfessionalClaimSubmissionClaimFilingIndicator)[keyof typeof ProfessionalClaimSubmissionClaimFilingIndicator];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionMedicareSecondaryInsuranceType = {
  /**
   * Black Lung benefits are primary.
   */
  BLACK_LUNG: "BLACK_LUNG",
  /**
   * A disabled beneficiary under age 65 covered by a large group health plan.
   */
  DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP: "DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP",
  /**
   * End-stage renal disease coverage during the mandated coordination period with an employer group health plan.
   */
  END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP: "END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP",
  /**
   * No-fault insurance, including automobile coverage, is primary.
   */
  NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY: "NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY",
  /**
   * Other liability insurance is primary.
   */
  OTHER_LIABILITY_INSURANCE_IS_PRIMARY: "OTHER_LIABILITY_INSURANCE_IS_PRIMARY",
  /**
   * A public health service or other federal agency is primary.
   */
  PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY: "PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY",
  /**
   * Veterans Administration coverage is primary.
   */
  VETERANS_ADMINISTRATION: "VETERANS_ADMINISTRATION",
  /**
   * Workers' compensation is primary.
   */
  WORKERS_COMPENSATION: "WORKERS_COMPENSATION",
  /**
   * A working aged beneficiary or spouse covered by an employer group health plan.
   */
  WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP: "WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionMedicareSecondaryInsuranceType =
  (typeof ProfessionalClaimSubmissionMedicareSecondaryInsuranceType)[keyof typeof ProfessionalClaimSubmissionMedicareSecondaryInsuranceType];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured = {
  /**
   * The patient is a cadaver donor.
   */
  CADAVER_DONOR: "CADAVER_DONOR",
  /**
   * The patient is the other insured's child.
   */
  CHILD: "CHILD",
  /**
   * The patient is the other insured's employee.
   */
  EMPLOYEE: "EMPLOYEE",
  /**
   * The patient is the other insured's life partner.
   */
  LIFE_PARTNER: "LIFE_PARTNER",
  /**
   * The patient is an organ donor.
   */
  ORGAN_DONOR: "ORGAN_DONOR",
  /**
   * The patient has another relationship to the other insured.
   */
  OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP",
  /**
   * The patient is the other insured.
   */
  SELF: "SELF",
  /**
   * The patient is the other insured's spouse.
   */
  SPOUSE: "SPOUSE",
  /**
   * The relationship is unknown.
   */
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured =
  (typeof ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured)[keyof typeof ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionResponsibilityLevel = {
  /**
   * The primary payer.
   */
  PRIMARY: "PRIMARY",
  /**
   * The secondary payer.
   */
  SECONDARY: "SECONDARY",
  /**
   * The tertiary payer.
   */
  TERTIARY: "TERTIARY",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionResponsibilityLevel =
  (typeof ProfessionalClaimSubmissionResponsibilityLevel)[keyof typeof ProfessionalClaimSubmissionResponsibilityLevel];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionPatientRelationshipToInsured = {
  /**
   * The patient is the insured's child.
   */
  CHILD: "CHILD",
  /**
   * The patient is the insured's employee, typically for workers' compensation claims where the insured is the employer.
   */
  EMPLOYEE: "EMPLOYEE",
  /**
   * The patient has another relationship to the insured.
   */
  OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP",
  /**
   * The patient is the insured's spouse.
   */
  SPOUSE: "SPOUSE",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionPatientRelationshipToInsured =
  (typeof ProfessionalClaimSubmissionPatientRelationshipToInsured)[keyof typeof ProfessionalClaimSubmissionPatientRelationshipToInsured];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionPurpose = {
  /**
   * A standard fee-for-service claim with at least one chargeable line item. Use this for most submissions.
   */
  CHARGEABLE: "CHARGEABLE",
  /**
   * A reporting-only submission that is not a request for payment.
   */
  REPORTING: "REPORTING",
  /**
   * Only for use by state Medicaid agencies performing post-payment recovery.
   */
  SUBROGATION_DEMAND: "SUBROGATION_DEMAND",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionPurpose =
  (typeof ProfessionalClaimSubmissionPurpose)[keyof typeof ProfessionalClaimSubmissionPurpose];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure = {
  /**
   * Gram.
   */
  GRAM: "GRAM",
  /**
   * International unit.
   */
  INTERNATIONAL_UNIT: "INTERNATIONAL_UNIT",
  /**
   * Milligram.
   */
  MILLIGRAM: "MILLIGRAM",
  /**
   * Milliliter.
   */
  MILLILITER: "MILLILITER",
  /**
   * Unit.
   */
  UNIT: "UNIT",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure =
  (typeof ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure)[keyof typeof ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure];

/**
 * @public
 * @enum
 */
export const ProfessionalClaimSubmissionPurchasedServiceProviderEntityType = {
  /**
   * An organization, such as an independent laboratory.
   */
  ORGANIZATION: "ORGANIZATION",
  /**
   * An individual provider, such as a physician who performed a purchased interpretation.
   */
  PERSON: "PERSON",
} as const;
/**
 * @public
 */
export type ProfessionalClaimSubmissionPurchasedServiceProviderEntityType =
  (typeof ProfessionalClaimSubmissionPurchasedServiceProviderEntityType)[keyof typeof ProfessionalClaimSubmissionPurchasedServiceProviderEntityType];

/**
 * @public
 * @enum
 */
export const ClaimAcknowledgmentStatus = {
  /**
   * A clearinghouse or the payer accepted the claim. A clearinghouse acceptance means the claim passed its edits and the clearinghouse forwarded it to the payer. A payer acceptance means the payer will adjudicate the claim.
   */
  ACCEPTED: "ACCEPTED",
  /**
   * Stedi couldn't determine the status because the 277CA carries a status category code Stedi doesn't recognize.
   */
  INVALID: "INVALID",
  /**
   * A clearinghouse or the payer received the claim but hasn't yet accepted or rejected it.
   */
  RECEIVED: "RECEIVED",
  /**
   * A clearinghouse or the payer rejected the claim. The payer won't adjudicate the claim until you correct and resubmit it.
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ClaimAcknowledgmentStatus = (typeof ClaimAcknowledgmentStatus)[keyof typeof ClaimAcknowledgmentStatus];

/**
 * @public
 * @enum
 */
export const ClaimType = {
  /**
   * An 837D dental claim, the electronic equivalent of the ADA Dental Claim Form.
   */
  DENTAL: "DENTAL",
  /**
   * An 837I institutional claim, the electronic equivalent of the UB-04 form.
   */
  INSTITUTIONAL: "INSTITUTIONAL",
  /**
   * An 837P professional claim, the electronic equivalent of the CMS-1500 form.
   */
  PROFESSIONAL: "PROFESSIONAL",
} as const;
/**
 * @public
 */
export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType];

/**
 * @public
 * @enum
 */
export const ClaimStatusReportedBy = {
  /**
   * A clearinghouse reported the status, either Stedi or an intermediary clearinghouse between Stedi and the payer.
   */
  CLEARINGHOUSE: "CLEARINGHOUSE",
  /**
   * The payer reported the status, in a 277CA claim acknowledgment or an 835 ERA.
   */
  PAYER: "PAYER",
} as const;
/**
 * @public
 */
export type ClaimStatusReportedBy = (typeof ClaimStatusReportedBy)[keyof typeof ClaimStatusReportedBy];

/**
 * @public
 * @enum
 */
export const ClaimPaymentInformationStatusCode = {
  /**
   * The payer denied the claim.
   */
  DENIED: "DENIED",
  /**
   * The payer isn't responsible for the claim and forwarded it to additional payers.
   */
  NOT_OUR_CLAIM_FORWARDED_TO_ADDITIONAL_PAYERS: "NOT_OUR_CLAIM_FORWARDED_TO_ADDITIONAL_PAYERS",
  /**
   * The payer priced the claim without paying it.
   */
  PREDETERMINATION_PRICING_ONLY: "PREDETERMINATION_PRICING_ONLY",
  /**
   * The payer processed the claim as the primary payer.
   */
  PROCESSED_AS_PRIMARY: "PROCESSED_AS_PRIMARY",
  /**
   * The payer processed the claim as the primary payer and forwarded it to additional payers.
   */
  PROCESSED_AS_PRIMARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_PRIMARY_FORWARDED_TO_ADDITIONAL_PAYERS",
  /**
   * The payer processed the claim as the secondary payer.
   */
  PROCESSED_AS_SECONDARY: "PROCESSED_AS_SECONDARY",
  /**
   * The payer processed the claim as the secondary payer and forwarded it to additional payers.
   */
  PROCESSED_AS_SECONDARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_SECONDARY_FORWARDED_TO_ADDITIONAL_PAYERS",
  /**
   * The payer processed the claim as the tertiary payer.
   */
  PROCESSED_AS_TERTIARY: "PROCESSED_AS_TERTIARY",
  /**
   * The payer processed the claim as the tertiary payer and forwarded it to additional payers.
   */
  PROCESSED_AS_TERTIARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_TERTIARY_FORWARDED_TO_ADDITIONAL_PAYERS",
  /**
   * The payer reversed a payment it reported earlier. The amounts are negative, so they cancel the earlier payment.
   */
  REVERSAL_OF_PREVIOUS_PAYMENT: "REVERSAL_OF_PREVIOUS_PAYMENT",
} as const;
/**
 * @public
 */
export type ClaimPaymentInformationStatusCode =
  (typeof ClaimPaymentInformationStatusCode)[keyof typeof ClaimPaymentInformationStatusCode];

/**
 * @public
 * @enum
 */
export const ClaimStatus = {
  /**
   * A clearinghouse or the payer accepted the claim. Check `statusReportedBy` to see which one.
   */
  ACCEPTED: "ACCEPTED",
  /**
   * The payer adjudicated the claim and denied it in an 835 ERA.
   */
  DENIED: "DENIED",
  /**
   * The payer adjudicated the claim and reported the result in an 835 ERA. The payer may have paid all, part, or none of the charges. Check `totalClaimPaidAmount` for the amount.
   */
  PROCESSED: "PROCESSED",
  /**
   * A clearinghouse or the payer received the claim but hasn't yet accepted or rejected it.
   */
  RECEIVED: "RECEIVED",
  /**
   * A clearinghouse or the payer rejected the claim. The payer won't adjudicate the claim until you correct and resubmit it.
   */
  REJECTED: "REJECTED",
  /**
   * You submitted the claim. No clearinghouse or payer has acknowledged it yet.
   */
  SUBMITTED: "SUBMITTED",
  /**
   * Stedi couldn't determine the status. The 277CA carries a status category code Stedi doesn't recognize, or the 835 ERA doesn't report a clear outcome for the claim.
   */
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRequestPatientGender = {
  /**
   * Female
   */
  FEMALE: "FEMALE",
  /**
   * Male
   */
  MALE: "MALE",
} as const;
/**
 * @public
 */
export type EligibilityCheckRequestPatientGender =
  (typeof EligibilityCheckRequestPatientGender)[keyof typeof EligibilityCheckRequestPatientGender];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRequestEntityProviderCode = {
  /**
   * Admitting
   */
  ADMITTING: "ADMITTING",
  /**
   * Attending
   */
  ATTENDING: "ATTENDING",
  /**
   * Billing
   */
  BILLING: "BILLING",
  /**
   * Consulting
   */
  CONSULTING: "CONSULTING",
  /**
   * Covering
   */
  COVERING: "COVERING",
  /**
   * Home Health Care
   */
  HOME_HEALTH_CARE: "HOME_HEALTH_CARE",
  /**
   * Hospital
   */
  HOSPITAL: "HOSPITAL",
  /**
   * Laboratory
   */
  LABORATORY: "LABORATORY",
  /**
   * Other Physician
   */
  OTHER_PHYSICIAN: "OTHER_PHYSICIAN",
  /**
   * Performing
   */
  PERFORMING: "PERFORMING",
  /**
   * Pharmacist
   */
  PHARMACIST: "PHARMACIST",
  /**
   * Pharmacy
   */
  PHARMACY: "PHARMACY",
  /**
   * Primary Care Physician
   */
  PRIMARY_CARE_PHYSICIAN: "PRIMARY_CARE_PHYSICIAN",
  /**
   * Referring
   */
  REFERRING: "REFERRING",
  /**
   * Rural Health Clinic
   */
  RURAL_HEALTH_CLINIC: "RURAL_HEALTH_CLINIC",
  /**
   * Skilled Nursing Facility
   */
  SKILLED_NURSING_FACILITY: "SKILLED_NURSING_FACILITY",
  /**
   * Submitting
   */
  SUBMITTING: "SUBMITTING",
  /**
   * Supervising
   */
  SUPERVISING: "SUPERVISING",
} as const;
/**
 * @public
 */
export type EligibilityCheckRequestEntityProviderCode =
  (typeof EligibilityCheckRequestEntityProviderCode)[keyof typeof EligibilityCheckRequestEntityProviderCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRequestDependentRelationship = {
  /**
   * Child
   */
  CHILD: "CHILD",
  /**
   * Other Adult
   */
  OTHER_ADULT: "OTHER_ADULT",
  /**
   * Spouse
   */
  SPOUSE: "SPOUSE",
} as const;
/**
 * @public
 */
export type EligibilityCheckRequestDependentRelationship =
  (typeof EligibilityCheckRequestDependentRelationship)[keyof typeof EligibilityCheckRequestDependentRelationship];

/**
 * @public
 * @enum
 */
export const EligibilityCheckPlaceOfServiceCode = {
  /**
   * Ambulance - Air or Water
   */
  AMBULANCE_AIR_OR_WATER: "42",
  /**
   * Ambulance - Land
   */
  AMBULANCE_LAND: "41",
  /**
   * Ambulatory Surgical Center
   */
  AMBULATORY_SURGICAL_CENTER: "24",
  /**
   * Assisted Living Facility
   */
  ASSISTED_LIVING_FACILITY: "13",
  /**
   * Birthing Center
   */
  BIRTHING_CENTER: "25",
  /**
   * Community Mental Health Center
   */
  COMMUNITY_MENTAL_HEALTH_CENTER: "53",
  /**
   * Comprehensive Inpatient Rehabilitation Facility
   */
  COMPREHENSIVE_INPATIENT_REHABILITATION_FACILITY: "61",
  /**
   * Comprehensive Outpatient Rehabilitation Facility
   */
  COMPREHENSIVE_OUTPATIENT_REHABILITATION_FACILITY: "62",
  /**
   * Custodial Care Facility
   */
  CUSTODIAL_CARE_FACILITY: "33",
  /**
   * Emergency Room - Hospital
   */
  EMERGENCY_ROOM_HOSPITAL: "23",
  /**
   * End-Stage Renal Disease Treatment Facility
   */
  END_STAGE_RENAL_DISEASE_TREATMENT_FACILITY: "65",
  /**
   * Federally Qualified Health Center
   */
  FEDERALLY_QUALIFIED_HEALTH_CENTER: "50",
  /**
   * Group Home
   */
  GROUP_HOME: "14",
  /**
   * Home
   */
  HOME: "12",
  /**
   * Homeless Shelter
   */
  HOMELESS_SHELTER: "04",
  /**
   * Hospice
   */
  HOSPICE: "34",
  /**
   * Independent Clinic
   */
  INDEPENDENT_CLINIC: "49",
  /**
   * Independent Laboratory
   */
  INDEPENDENT_LABORATORY: "81",
  /**
   * Indian Health Service Free-standing Facility
   */
  INDIAN_HEALTH_SERVICE_FREE_STANDING_FACILITY: "05",
  /**
   * Indian Health Service Provider-based Facility
   */
  INDIAN_HEALTH_SERVICE_PROVIDER_BASED_FACILITY: "06",
  /**
   * Inpatient Hospital
   */
  INPATIENT_HOSPITAL: "21",
  /**
   * Inpatient Psychiatric Facility
   */
  INPATIENT_PSYCHIATRIC_FACILITY: "51",
  /**
   * Intermediate Care Facility/Mentally Retarded
   */
  INTERMEDIATE_CARE_FACILITY_MENTALLY_RETARDED: "54",
  /**
   * Mass Immunization Center
   */
  MASS_IMMUNIZATION_CENTER: "60",
  /**
   * Military Treatment Facility
   */
  MILITARY_TREATMENT_FACILITY: "26",
  /**
   * Mobile Unit
   */
  MOBILE_UNIT: "15",
  /**
   * Non-residential Substance Abuse Treatment Facility
   */
  NON_RESIDENTIAL_SUBSTANCE_ABUSE_TREATMENT_FACILITY: "57",
  /**
   * Nursing Facility
   */
  NURSING_FACILITY: "32",
  /**
   * Office
   */
  OFFICE: "11",
  /**
   * Other Place of Service
   */
  OTHER_PLACE_OF_SERVICE: "99",
  /**
   * Outpatient Hospital
   */
  OUTPATIENT_HOSPITAL: "22",
  /**
   * Pharmacy
   */
  PHARMACY: "01",
  /**
   * Psychiatric Facility - Partial Hospitalization
   */
  PSYCHIATRIC_FACILITY_PARTIAL_HOSPITALIZATION: "52",
  /**
   * Psychiatric Residential Treatment Center
   */
  PSYCHIATRIC_RESIDENTIAL_TREATMENT_CENTER: "56",
  /**
   * Residential Substance Abuse Treatment Facility
   */
  RESIDENTIAL_SUBSTANCE_ABUSE_TREATMENT_FACILITY: "55",
  /**
   * Rural Health Clinic
   */
  RURAL_HEALTH_CLINIC: "72",
  /**
   * School
   */
  SCHOOL: "03",
  /**
   * Skilled Nursing Facility
   */
  SKILLED_NURSING_FACILITY: "31",
  /**
   * State or Local Public Health Clinic
   */
  STATE_OR_LOCAL_PUBLIC_HEALTH_CLINIC: "71",
  /**
   * Tribal 638 Free-standing Facility
   */
  TRIBAL_638_FREE_STANDING_FACILITY: "07",
  /**
   * Tribal 638 Provider-based Facility
   */
  TRIBAL_638_PROVIDER_BASED_FACILITY: "08",
  /**
   * Urgent Care Facility
   */
  URGENT_CARE_FACILITY: "20",
} as const;
/**
 * @public
 */
export type EligibilityCheckPlaceOfServiceCode =
  (typeof EligibilityCheckPlaceOfServiceCode)[keyof typeof EligibilityCheckPlaceOfServiceCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRequestServiceCodeSystem = {
  /**
   * Current Dental Terminology (CDT) procedure code
   */
  CDT: "CDT",
  /**
   * Current Procedural Terminology (CPT) procedure code
   */
  CPT: "CPT",
  /**
   * Healthcare Common Procedure Coding System (HCPCS) code
   */
  HCPCS: "HCPCS",
  /**
   * ICD-10 Procedure Coding System (ICD-10-PCS) code
   */
  ICD_10_PCS: "ICD-10-PCS",
  /**
   * National Drug Code (NDC)
   */
  NDC: "NDC",
  /**
   * Service Type Code
   */
  STC: "STC",
} as const;
/**
 * @public
 */
export type EligibilityCheckRequestServiceCodeSystem =
  (typeof EligibilityCheckRequestServiceCodeSystem)[keyof typeof EligibilityCheckRequestServiceCodeSystem];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRequestProviderType = {
  /**
   * Employer
   */
  EMPLOYER: "EMPLOYER",
  /**
   * Facility
   */
  FACILITY: "FACILITY",
  /**
   * Gateway Provider
   */
  GATEWAY_PROVIDER: "GATEWAY_PROVIDER",
  /**
   * Hospital
   */
  HOSPITAL: "HOSPITAL",
  /**
   * Plan Sponsor
   */
  PLAN_SPONSOR: "PLAN_SPONSOR",
  /**
   * Provider
   */
  PROVIDER: "PROVIDER",
  /**
   * Third Party Administrator
   */
  THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR",
} as const;
/**
 * @public
 */
export type EligibilityCheckRequestProviderType =
  (typeof EligibilityCheckRequestProviderType)[keyof typeof EligibilityCheckRequestProviderType];

/**
 * @public
 * @enum
 */
export const EligibilityCheckResponsePatientGender = {
  /**
   * Female
   */
  FEMALE: "FEMALE",
  /**
   * Male
   */
  MALE: "MALE",
  /**
   * Unknown. The payer stated that the patient's gender is unknown.
   */
  REPORTED_UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type EligibilityCheckResponsePatientGender =
  (typeof EligibilityCheckResponsePatientGender)[keyof typeof EligibilityCheckResponsePatientGender];

/**
 * @public
 * @enum
 */
export const EligibilityCheckMaintenanceIndicator = {
  /**
   * The payer didn't signal a change to the patient's identifying information.
   */
  NONE: "NONE",
  /**
   * The payer indicated that the patient's identifying information differs from the information you submitted. The values returned in this response reflect the payer's records.
   */
  PAYER_INDICATED: "PAYER_INDICATED",
} as const;
/**
 * @public
 */
export type EligibilityCheckMaintenanceIndicator =
  (typeof EligibilityCheckMaintenanceIndicator)[keyof typeof EligibilityCheckMaintenanceIndicator];

/**
 * @public
 * @enum
 */
export const EligibilityCheckEntityProviderCode = {
  /**
   * Admitting
   */
  ADMITTING: "ADMITTING",
  /**
   * Attending
   */
  ATTENDING: "ATTENDING",
  /**
   * Billing
   */
  BILLING: "BILLING",
  /**
   * Consulting
   */
  CONSULTING: "CONSULTING",
  /**
   * Covering
   */
  COVERING: "COVERING",
  /**
   * Home Health Care
   */
  HOME_HEALTH_CARE: "HOME_HEALTH_CARE",
  /**
   * Hospital
   */
  HOSPITAL: "HOSPITAL",
  /**
   * Laboratory
   */
  LABORATORY: "LABORATORY",
  /**
   * Other Physician
   */
  OTHER_PHYSICIAN: "OTHER_PHYSICIAN",
  /**
   * Performing
   */
  PERFORMING: "PERFORMING",
  /**
   * Pharmacist
   */
  PHARMACIST: "PHARMACIST",
  /**
   * Pharmacy
   */
  PHARMACY: "PHARMACY",
  /**
   * Primary Care Physician
   */
  PRIMARY_CARE_PHYSICIAN: "PRIMARY_CARE_PHYSICIAN",
  /**
   * Referring
   */
  REFERRING: "REFERRING",
  /**
   * Rural Health Clinic
   */
  RURAL_HEALTH_CLINIC: "RURAL_HEALTH_CLINIC",
  /**
   * Skilled Nursing Facility
   */
  SKILLED_NURSING_FACILITY: "SKILLED_NURSING_FACILITY",
  /**
   * Submitting
   */
  SUBMITTING: "SUBMITTING",
  /**
   * Supervising
   */
  SUPERVISING: "SUPERVISING",
} as const;
/**
 * @public
 */
export type EligibilityCheckEntityProviderCode =
  (typeof EligibilityCheckEntityProviderCode)[keyof typeof EligibilityCheckEntityProviderCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckDependentRelationship = {
  /**
   * Cadaver Donor
   */
  CADAVER_DONOR: "CADAVER_DONOR",
  /**
   * Child
   */
  CHILD: "CHILD",
  /**
   * Employee
   */
  EMPLOYEE: "EMPLOYEE",
  /**
   * Life Partner
   */
  LIFE_PARTNER: "LIFE_PARTNER",
  /**
   * Organ Donor
   */
  ORGAN_DONOR: "ORGAN_DONOR",
  /**
   * Other Relationship
   */
  OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP",
  /**
   * Unknown. The payer reported that relationship information is unavailable.
   */
  REPORTED_UNKNOWN: "UNKNOWN",
  /**
   * Spouse
   */
  SPOUSE: "SPOUSE",
} as const;
/**
 * @public
 */
export type EligibilityCheckDependentRelationship =
  (typeof EligibilityCheckDependentRelationship)[keyof typeof EligibilityCheckDependentRelationship];

/**
 * @public
 * @enum
 */
export const EligibilityCheckResponseErrorLocation = {
  /**
   * Error from the 2100D loop (dependent name level).
   */
  DEPENDENT: "DEPENDENT",
  /**
   * Error from the 2110D loop (dependent eligibility/benefit information level).
   */
  DEPENDENT_BENEFITS: "DEPENDENT_BENEFITS",
  /**
   * Error from the 2000A loop (envelope/information source level).
   */
  ENVELOPE: "ENVELOPE",
  /**
   * Error from the 2100A loop (payer name level).
   */
  PAYER: "PAYER",
  /**
   * Error from the 2100B loop (provider/information receiver level).
   */
  PROVIDER: "PROVIDER",
  /**
   * Error from the 2100C loop (subscriber name level).
   */
  SUBSCRIBER: "SUBSCRIBER",
  /**
   * Error from the 2110C loop (subscriber eligibility/benefit information level).
   */
  SUBSCRIBER_BENEFITS: "SUBSCRIBER_BENEFITS",
} as const;
/**
 * @public
 */
export type EligibilityCheckResponseErrorLocation =
  (typeof EligibilityCheckResponseErrorLocation)[keyof typeof EligibilityCheckResponseErrorLocation];

/**
 * @public
 * @enum
 */
export const EligibilityCheckTraceType = {
  /**
   * Current Transaction Trace Numbers. The payer assigned this trace number to this response.
   */
  CURRENT_TRANSACTION: "CURRENT_TRANSACTION",
  /**
   * Referenced Transaction Trace Numbers. The payer is echoing a trace number that was sent in the original eligibility check request.
   */
  REFERENCED_TRANSACTION: "REFERENCED_TRANSACTION",
} as const;
/**
 * @public
 */
export type EligibilityCheckTraceType = (typeof EligibilityCheckTraceType)[keyof typeof EligibilityCheckTraceType];

/**
 * @public
 * @enum
 */
export const EligibilityCheckPayerEntityIdentifierCode = {
  /**
   * Employer
   */
  EMPLOYER: "EMPLOYER",
  /**
   * Gateway Provider
   */
  GATEWAY_PROVIDER: "GATEWAY_PROVIDER",
  /**
   * Payer
   */
  PAYER: "PAYER",
  /**
   * Plan Sponsor
   */
  PLAN_SPONSOR: "PLAN_SPONSOR",
  /**
   * Third Party Administrator
   */
  THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR",
} as const;
/**
 * @public
 */
export type EligibilityCheckPayerEntityIdentifierCode =
  (typeof EligibilityCheckPayerEntityIdentifierCode)[keyof typeof EligibilityCheckPayerEntityIdentifierCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckCoverageLevel = {
  /**
   * Children Only
   */
  CHILDREN_ONLY: "CHILDREN_ONLY",
  /**
   * Dependents Only
   */
  DEPENDENTS_ONLY: "DEPENDENTS_ONLY",
  /**
   * Employee and Children
   */
  EMPLOYEE_AND_CHILDREN: "EMPLOYEE_AND_CHILDREN",
  /**
   * Employee and Spouse
   */
  EMPLOYEE_AND_SPOUSE: "EMPLOYEE_AND_SPOUSE",
  /**
   * Employee Only
   */
  EMPLOYEE_ONLY: "EMPLOYEE_ONLY",
  /**
   * Family
   */
  FAMILY: "FAMILY",
  /**
   * Individual
   */
  INDIVIDUAL: "INDIVIDUAL",
  /**
   * Spouse and Children
   */
  SPOUSE_AND_CHILDREN: "SPOUSE_AND_CHILDREN",
  /**
   * Spouse Only
   */
  SPOUSE_ONLY: "SPOUSE_ONLY",
} as const;
/**
 * @public
 */
export type EligibilityCheckCoverageLevel =
  (typeof EligibilityCheckCoverageLevel)[keyof typeof EligibilityCheckCoverageLevel];

/**
 * @public
 * @enum
 */
export const EligibilityCheckDiagnosisCodeSystem = {
  /**
   * International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM), the diagnosis code set maintained by CMS.
   */
  ICD_10_CM: "ICD-10-CM",
} as const;
/**
 * @public
 */
export type EligibilityCheckDiagnosisCodeSystem =
  (typeof EligibilityCheckDiagnosisCodeSystem)[keyof typeof EligibilityCheckDiagnosisCodeSystem];

/**
 * @public
 * @enum
 */
export const EligibilityCheckInsuranceType = {
  /**
   * Auto Insurance Policy
   */
  AUTO_INSURANCE_POLICY: "AUTO_INSURANCE_POLICY",
  /**
   * Commercial
   */
  COMMERCIAL: "COMMERCIAL",
  /**
   * Consolidated Omnibus Budget Reconciliation Act (COBRA)
   */
  CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA: "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA",
  /**
   * Disability
   */
  DISABILITY: "DISABILITY",
  /**
   * Disability Benefits
   */
  DISABILITY_BENEFITS: "DISABILITY_BENEFITS",
  /**
   * Exclusive Provider Organization
   */
  EXCLUSIVE_PROVIDER_ORGANIZATION: "EXCLUSIVE_PROVIDER_ORGANIZATION",
  /**
   * Family or Friends
   */
  FAMILY_OR_FRIENDS: "FAMILY_OR_FRIENDS",
  /**
   * Group Policy
   */
  GROUP_POLICY: "GROUP_POLICY",
  /**
   * Health Maintenance Organization (HMO)
   */
  HEALTH_MAINTENANCE_ORGANIZATION_HMO: "HEALTH_MAINTENANCE_ORGANIZATION_HMO",
  /**
   * Health Maintenance Organization (HMO) - Medicare Risk
   */
  HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK: "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK",
  /**
   * Indemnity
   */
  INDEMNITY: "INDEMNITY",
  /**
   * Individual Policy
   */
  INDIVIDUAL_POLICY: "INDIVIDUAL_POLICY",
  /**
   * Life Insurance
   */
  LIFE_INSURANCE: "LIFE_INSURANCE",
  /**
   * Litigation
   */
  LITIGATION: "LITIGATION",
  /**
   * Long Term Care
   */
  LONG_TERM_CARE: "LONG_TERM_CARE",
  /**
   * Long Term Policy
   */
  LONG_TERM_POLICY: "LONG_TERM_POLICY",
  /**
   * Medicaid
   */
  MEDICAID: "MEDICAID",
  /**
   * Medicare Conditionally Primary
   */
  MEDICARE_CONDITIONALLY_PRIMARY: "MEDICARE_CONDITIONALLY_PRIMARY",
  /**
   * Medicare Part A
   */
  MEDICARE_PART_A: "MEDICARE_PART_A",
  /**
   * Medicare Part B
   */
  MEDICARE_PART_B: "MEDICARE_PART_B",
  /**
   * Medicare Point of Service (POS)
   */
  MEDICARE_POINT_OF_SERVICE_POS: "MEDICARE_POINT_OF_SERVICE_POS",
  /**
   * Medicare Primary
   */
  MEDICARE_PRIMARY: "MEDICARE_PRIMARY",
  /**
   * Medicare Secondary Black Lung
   */
  MEDICARE_SECONDARY_BLACK_LUNG: "MEDICARE_SECONDARY_BLACK_LUNG",
  /**
   * Medicare Secondary Disabled Beneficiary Under Age 65 with Large Group Health Plan (LGHP)
   */
  MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP: "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP",
  /**
   * Medicare Secondary End-Stage Renal Disease Beneficiary in the Mandated Coordination Period with an Employer's Group Health Plan
   */
  MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN: "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN",
  /**
   * Medicare Secondary, No-fault Insurance including Auto is Primary
   */
  MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY: "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY",
  /**
   * Medicare Secondary, Other Liability Insurance is Primary
   */
  MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY: "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY",
  /**
   * Medicare Secondary Public Health Service (PHS) or Other Federal Agency
   */
  MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY: "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY",
  /**
   * Medicare Secondary Veteran's Administration
   */
  MEDICARE_SECONDARY_VETERANS_ADMINISTRATION: "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION",
  /**
   * Medicare Secondary Worker's Compensation
   */
  MEDICARE_SECONDARY_WORKERS_COMPENSATION: "MEDICARE_SECONDARY_WORKERS_COMPENSATION",
  /**
   * Medicare Secondary Working Aged Beneficiary or Spouse with Employer Group Health Plan
   */
  MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN: "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN",
  /**
   * Medigap Part A
   */
  MEDIGAP_PART_A: "MEDIGAP_PART_A",
  /**
   * Medigap Part B
   */
  MEDIGAP_PART_B: "MEDIGAP_PART_B",
  /**
   * Multiple Options Health Plan
   */
  MULTIPLE_OPTIONS_HEALTH_PLAN: "MULTIPLE_OPTIONS_HEALTH_PLAN",
  /**
   * Other. When Medicare or a Medicare Part D administrator returns this value, it indicates Medicare Part D coverage.
   */
  OTHER: "OTHER",
  /**
   * Personal
   */
  PERSONAL: "PERSONAL",
  /**
   * Personal Payment (Cash - No Insurance)
   */
  PERSONAL_PAYMENT_CASH_NO_INSURANCE: "PERSONAL_PAYMENT_CASH_NO_INSURANCE",
  /**
   * Point of Service (POS)
   */
  POINT_OF_SERVICE_POS: "POINT_OF_SERVICE_POS",
  /**
   * Preferred Provider Organization (PPO)
   */
  PREFERRED_PROVIDER_ORGANIZATION_PPO: "PREFERRED_PROVIDER_ORGANIZATION_PPO",
  /**
   * Property Insurance - Personal
   */
  PROPERTY_INSURANCE_PERSONAL: "PROPERTY_INSURANCE_PERSONAL",
  /**
   * Property Insurance - Real
   */
  PROPERTY_INSURANCE_REAL: "PROPERTY_INSURANCE_REAL",
  /**
   * Qualified Medicare Beneficiary
   */
  QUALIFIED_MEDICARE_BENEFICIARY: "QUALIFIED_MEDICARE_BENEFICIARY",
  /**
   * Special Low Income Medicare Beneficiary
   */
  SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY: "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY",
  /**
   * Supplemental Policy
   */
  SUPPLEMENTAL_POLICY: "SUPPLEMENTAL_POLICY",
  /**
   * Tax Equity Fiscal Responsibility Act (TEFRA)
   */
  TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA: "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA",
  /**
   * Workers Compensation
   */
  WORKERS_COMPENSATION: "WORKERS_COMPENSATION",
  /**
   * Wrap Up Policy
   */
  WRAP_UP_POLICY: "WRAP_UP_POLICY",
} as const;
/**
 * @public
 */
export type EligibilityCheckInsuranceType =
  (typeof EligibilityCheckInsuranceType)[keyof typeof EligibilityCheckInsuranceType];

/**
 * @public
 * @enum
 */
export const EligibilityCheckNetworkIndicator = {
  /**
   * In and Out of Network. The benefit applies to both in-network and out-of-network care.
   */
  IN_AND_OUT_OF_NETWORK: "IN_AND_OUT_OF_NETWORK",
  /**
   * In Network. The benefit applies when the service is delivered in-network.
   */
  IN_NETWORK: "IN_NETWORK",
  /**
   * Out of Network. The benefit applies when the service is delivered out-of-network.
   */
  OUT_OF_NETWORK: "OUT_OF_NETWORK",
} as const;
/**
 * @public
 */
export type EligibilityCheckNetworkIndicator =
  (typeof EligibilityCheckNetworkIndicator)[keyof typeof EligibilityCheckNetworkIndicator];

/**
 * @public
 * @enum
 */
export const EligibilityCheckPriorAuthIndicator = {
  /**
   * Not Required. The benefit isn't subject to prior authorization or certification.
   */
  NOT_REQUIRED: "NOT_REQUIRED",
  /**
   * Required. The benefit is subject to prior authorization or certification.
   */
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type EligibilityCheckPriorAuthIndicator =
  (typeof EligibilityCheckPriorAuthIndicator)[keyof typeof EligibilityCheckPriorAuthIndicator];

/**
 * @public
 * @enum
 */
export const EligibilityCheckEntityRelationship = {
  /**
   * Child
   */
  CHILD: "CHILD",
  /**
   * Domestic Partner
   */
  DOMESTIC_PARTNER: "DOMESTIC_PARTNER",
  /**
   * Employee
   */
  EMPLOYEE: "EMPLOYEE",
  /**
   * Other
   */
  OTHER: "OTHER",
  /**
   * Parent
   */
  PARENT: "PARENT",
  /**
   * Spouse
   */
  SPOUSE: "SPOUSE",
  /**
   * Unknown
   */
  UNKNOWN_RELATIONSHIP: "UNKNOWN_RELATIONSHIP",
} as const;
/**
 * @public
 */
export type EligibilityCheckEntityRelationship =
  (typeof EligibilityCheckEntityRelationship)[keyof typeof EligibilityCheckEntityRelationship];

/**
 * @public
 * @enum
 */
export const EligibilityCheckRelatedEntityIdentifierCode = {
  /**
   * Contracted Service Provider
   */
  CONTRACTED_SERVICE_PROVIDER: "CONTRACTED_SERVICE_PROVIDER",
  /**
   * Employer
   */
  EMPLOYER: "EMPLOYER",
  /**
   * Facility
   */
  FACILITY: "FACILITY",
  /**
   * Gateway Provider
   */
  GATEWAY_PROVIDER: "GATEWAY_PROVIDER",
  /**
   * Group
   */
  GROUP: "GROUP",
  /**
   * Independent Physicians Association
   */
  INDEPENDENT_PHYSICIANS_ASSOCIATION: "INDEPENDENT_PHYSICIANS_ASSOCIATION",
  /**
   * Insured or Subscriber
   */
  INSURED_OR_SUBSCRIBER: "INSURED_OR_SUBSCRIBER",
  /**
   * Legal Representative
   */
  LEGAL_REPRESENTATIVE: "LEGAL_REPRESENTATIVE",
  /**
   * Managed Care Organization
   */
  MANAGED_CARE_ORGANIZATION: "MANAGED_CARE_ORGANIZATION",
  /**
   * Organization Completing Configuration Change
   */
  ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE: "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE",
  /**
   * Origin Carrier
   */
  ORIGIN_CARRIER: "ORIGIN_CARRIER",
  /**
   * Other Physician
   */
  OTHER_PHYSICIAN: "OTHER_PHYSICIAN",
  /**
   * Party Performing Verification
   */
  PARTY_PERFORMING_VERIFICATION: "PARTY_PERFORMING_VERIFICATION",
  /**
   * Payer
   */
  PAYER: "PAYER",
  /**
   * Plan Sponsor
   */
  PLAN_SPONSOR: "PLAN_SPONSOR",
  /**
   * Preferred Provider Organization
   */
  PREFERRED_PROVIDER_ORGANIZATION: "PREFERRED_PROVIDER_ORGANIZATION",
  /**
   * Primary Care Provider
   */
  PRIMARY_CARE_PROVIDER: "PRIMARY_CARE_PROVIDER",
  /**
   * Primary Payer
   */
  PRIMARY_PAYER: "PRIMARY_PAYER",
  /**
   * Prior Insurance Carrier
   */
  PRIOR_INSURANCE_CARRIER: "PRIOR_INSURANCE_CARRIER",
  /**
   * Provider
   */
  PROVIDER: "PROVIDER",
  /**
   * Secondary Payer
   */
  SECONDARY_PAYER: "SECONDARY_PAYER",
  /**
   * Tertiary Payer
   */
  TERTIARY_PAYER: "TERTIARY_PAYER",
  /**
   * Third Party Administrator
   */
  THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR",
  /**
   * Utilization Management Organization
   */
  UTILIZATION_MANAGEMENT_ORGANIZATION: "UTILIZATION_MANAGEMENT_ORGANIZATION",
  /**
   * Vendor
   */
  VENDOR: "VENDOR",
} as const;
/**
 * @public
 */
export type EligibilityCheckRelatedEntityIdentifierCode =
  (typeof EligibilityCheckRelatedEntityIdentifierCode)[keyof typeof EligibilityCheckRelatedEntityIdentifierCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckResponseServiceCodeSystem = {
  /**
   * Current Dental Terminology (CDT), the dental procedure code set maintained by the American Dental Association.
   */
  CDT: "CDT",
  /**
   * Current Procedural Terminology (CPT), the procedure code set maintained by the American Medical Association.
   */
  CPT: "CPT",
  /**
   * Healthcare Common Procedure Coding System (HCPCS), the procedure and supply code set maintained by CMS.
   */
  HCPCS: "HCPCS",
  /**
   * ICD-10 Procedure Coding System (ICD-10-PCS), the inpatient procedure code set maintained by CMS.
   */
  ICD_10_PCS: "ICD-10-PCS",
  /**
   * National Drug Code (NDC), the drug identifier maintained by the FDA.
   */
  NDC: "NDC",
  /**
   * Service Type Code. The X12 code list that identifies categories of service, like `30` (Health Benefit Plan Coverage).
   */
  STC: "STC",
} as const;
/**
 * @public
 */
export type EligibilityCheckResponseServiceCodeSystem =
  (typeof EligibilityCheckResponseServiceCodeSystem)[keyof typeof EligibilityCheckResponseServiceCodeSystem];

/**
 * @public
 * @enum
 */
export const EligibilityCheckServiceDeliveryLimitPattern = {
  /**
   * A.M.
   */
  AM: "AM",
  /**
   * Any Shift
   */
  ANY_SHIFT: "ANY_SHIFT",
  /**
   * As Directed
   */
  AS_DIRECTED: "AS_DIRECTED",
  /**
   * 1st Shift (Normal Working Hours)
   */
  FIRST_SHIFT: "FIRST_SHIFT",
  /**
   * None. Also used to cancel or override a previously sent pattern.
   */
  NONE: "NONE",
  /**
   * P.M.
   */
  PM: "PM",
  /**
   * 2nd Shift
   */
  SECOND_SHIFT: "SECOND_SHIFT",
  /**
   * 3rd Shift
   */
  THIRD_SHIFT: "THIRD_SHIFT",
} as const;
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitPattern =
  (typeof EligibilityCheckServiceDeliveryLimitPattern)[keyof typeof EligibilityCheckServiceDeliveryLimitPattern];

/**
 * @public
 * @enum
 */
export const EligibilityCheckServiceDeliveryLimitSchedule = {
  /**
   * As Directed
   */
  AS_DIRECTED: "AS_DIRECTED",
  /**
   * Daily Mon. through Fri.
   */
  DAILY_MONDAY_THROUGH_FRIDAY: "DAILY_MONDAY_THROUGH_FRIDAY",
  /**
   * 5th Week of the Month
   */
  FIFTH_WEEK_OF_THE_MONTH: "FIFTH_WEEK_OF_THE_MONTH",
  /**
   * 1st & 3rd Weeks of the Month
   */
  FIRST_AND_THIRD_WEEKS_OF_THE_MONTH: "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH",
  /**
   * 1st Week of the Month
   */
  FIRST_WEEK_OF_THE_MONTH: "FIRST_WEEK_OF_THE_MONTH",
  /**
   * 1st Working Day of Period
   */
  FIRST_WORKING_DAY_OF_PERIOD: "FIRST_WORKING_DAY_OF_PERIOD",
  /**
   * 4th Week of the Month
   */
  FOURTH_WEEK_OF_THE_MONTH: "FOURTH_WEEK_OF_THE_MONTH",
  /**
   * Friday
   */
  FRIDAY: "FRIDAY",
  /**
   * 1/2 By Wed., Bal. By Fri. Half the service is delivered by Wednesday and the balance by Friday.
   */
  HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY: "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY",
  /**
   * 1/2 Mon. & 1/2 Thurs. The service is split, with half delivered on Monday and half on Thursday.
   */
  HALF_MONDAY_AND_HALF_THURSDAY: "HALF_MONDAY_AND_HALF_THURSDAY",
  /**
   * 1/2 Mon. & 1/2 Wed. The service is split, with half delivered on Monday and half on Wednesday.
   */
  HALF_MONDAY_AND_HALF_WEDNESDAY: "HALF_MONDAY_AND_HALF_WEDNESDAY",
  /**
   * 1/2 Tue. & 1/2 Fri. The service is split, with half delivered on Tuesday and half on Friday.
   */
  HALF_TUESDAY_AND_HALF_FRIDAY: "HALF_TUESDAY_AND_HALF_FRIDAY",
  /**
   * 1/2 Tues. & 1/2 Thurs. The service is split, with half delivered on Tuesday and half on Thursday.
   */
  HALF_TUESDAY_AND_HALF_THURSDAY: "HALF_TUESDAY_AND_HALF_THURSDAY",
  /**
   * 1/2 Wed. & 1/2 Fri. The service is split, with half delivered on Wednesday and half on Friday.
   */
  HALF_WEDNESDAY_AND_HALF_FRIDAY: "HALF_WEDNESDAY_AND_HALF_FRIDAY",
  /**
   * Immediately
   */
  IMMEDIATELY: "IMMEDIATELY",
  /**
   * Last Working Day of Period
   */
  LAST_WORKING_DAY_OF_PERIOD: "LAST_WORKING_DAY_OF_PERIOD",
  /**
   * Monday
   */
  MONDAY: "MONDAY",
  /**
   * Monday through Friday
   */
  MONDAY_THROUGH_FRIDAY: "MONDAY_THROUGH_FRIDAY",
  /**
   * Monday through Saturday
   */
  MONDAY_THROUGH_SATURDAY: "MONDAY_THROUGH_SATURDAY",
  /**
   * Monday through Sunday
   */
  MONDAY_THROUGH_SUNDAY: "MONDAY_THROUGH_SUNDAY",
  /**
   * Monday through Thursday
   */
  MONDAY_THROUGH_THURSDAY: "MONDAY_THROUGH_THURSDAY",
  /**
   * Monday, Tuesday and Friday
   */
  MONDAY_TUESDAY_AND_FRIDAY: "MONDAY_TUESDAY_AND_FRIDAY",
  /**
   * Monday, Tuesday and Thursday
   */
  MONDAY_TUESDAY_AND_THURSDAY: "MONDAY_TUESDAY_AND_THURSDAY",
  /**
   * Monday, Wednesday and Thursday
   */
  MONDAY_WEDNESDAY_AND_THURSDAY: "MONDAY_WEDNESDAY_AND_THURSDAY",
  /**
   * None. Also used to cancel or override a previously sent pattern.
   */
  NONE: "NONE",
  /**
   * Once Anytime Mon. through Fri.
   */
  ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY: "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY",
  /**
   * Saturday
   */
  SATURDAY: "SATURDAY",
  /**
   * 2nd & 4th Weeks of the Month
   */
  SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH: "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH",
  /**
   * 2nd Week of the Month
   */
  SECOND_WEEK_OF_THE_MONTH: "SECOND_WEEK_OF_THE_MONTH",
  /**
   * Sunday
   */
  SUNDAY: "SUNDAY",
  /**
   * 1/3 Mon., 1/3 Wed., 1/3 Fri. The service is split into thirds delivered on Monday, Wednesday, and Friday.
   */
  THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY: "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY",
  /**
   * 3rd Week of the Month
   */
  THIRD_WEEK_OF_THE_MONTH: "THIRD_WEEK_OF_THE_MONTH",
  /**
   * Thursday
   */
  THURSDAY: "THURSDAY",
  /**
   * Tuesday
   */
  TUESDAY: "TUESDAY",
  /**
   * Tuesday through Friday
   */
  TUESDAY_THROUGH_FRIDAY: "TUESDAY_THROUGH_FRIDAY",
  /**
   * Tuesday, Thursday and Friday
   */
  TUESDAY_THURSDAY_AND_FRIDAY: "TUESDAY_THURSDAY_AND_FRIDAY",
  /**
   * Wednesday
   */
  WEDNESDAY: "WEDNESDAY",
  /**
   * Wednesday and Thursday
   */
  WEDNESDAY_AND_THURSDAY: "WEDNESDAY_AND_THURSDAY",
  /**
   * Whenever Necessary
   */
  WHENEVER_NECESSARY: "WHENEVER_NECESSARY",
} as const;
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitSchedule =
  (typeof EligibilityCheckServiceDeliveryLimitSchedule)[keyof typeof EligibilityCheckServiceDeliveryLimitSchedule];

/**
 * @public
 * @enum
 */
export const EligibilityCheckServiceDeliveryLimitFrequencyQualifier = {
  /**
   * Days
   */
  DAYS: "DAYS",
  /**
   * Months
   */
  MONTHS: "MONTHS",
  /**
   * Visit
   */
  VISIT: "VISIT",
  /**
   * Week
   */
  WEEK: "WEEK",
  /**
   * Years
   */
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitFrequencyQualifier =
  (typeof EligibilityCheckServiceDeliveryLimitFrequencyQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitFrequencyQualifier];

/**
 * @public
 * @enum
 */
export const EligibilityCheckServiceDeliveryLimitPeriodQualifier = {
  /**
   * Calendar Year
   */
  CALENDAR_YEAR: "CALENDAR_YEAR",
  /**
   * Contract. The term of the patient's contract with the plan.
   */
  CONTRACT: "CONTRACT",
  /**
   * Day
   */
  DAY: "DAY",
  /**
   * Episode. A single episode of care.
   */
  EPISODE: "EPISODE",
  /**
   * Exceeded. The patient has gone past the limit.
   */
  EXCEEDED: "EXCEEDED",
  /**
   * Hour
   */
  HOUR: "HOUR",
  /**
   * Lifetime
   */
  LIFETIME: "LIFETIME",
  /**
   * Lifetime Remaining. The portion of the lifetime limit the patient hasn't used yet.
   */
  LIFETIME_REMAINING: "LIFETIME_REMAINING",
  /**
   * Month
   */
  MONTH: "MONTH",
  /**
   * Not Exceeded. The patient hasn't reached the limit.
   */
  NOT_EXCEEDED: "NOT_EXCEEDED",
  /**
   * Outlier. Applies to care that falls outside the plan's normal limits.
   */
  OUTLIER: "OUTLIER",
  /**
   * Remaining. The portion of the limit the patient hasn't used yet.
   */
  REMAINING: "REMAINING",
  /**
   * Service Year. The plan's own 12-month benefit year, which may not align with the calendar year.
   */
  SERVICE_YEAR: "SERVICE_YEAR",
  /**
   * Visit
   */
  VISIT: "VISIT",
  /**
   * Week
   */
  WEEK: "WEEK",
  /**
   * Years
   */
  YEARS: "YEARS",
  /**
   * Year to Date. Accumulated from the start of the year through the date of the response.
   */
  YEAR_TO_DATE: "YEAR_TO_DATE",
} as const;
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitPeriodQualifier =
  (typeof EligibilityCheckServiceDeliveryLimitPeriodQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitPeriodQualifier];

/**
 * @public
 * @enum
 */
export const EligibilityCheckServiceDeliveryLimitQuantityQualifier = {
  /**
   * Days
   */
  DAYS: "DAYS",
  /**
   * Hours
   */
  HOURS: "HOURS",
  /**
   * Month
   */
  MONTH: "MONTH",
  /**
   * Units
   */
  UNITS: "UNITS",
  /**
   * Visits
   */
  VISITS: "VISITS",
} as const;
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitQuantityQualifier =
  (typeof EligibilityCheckServiceDeliveryLimitQuantityQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitQuantityQualifier];

/**
 * @public
 * @enum
 */
export const EligibilityCheckTimePeriod = {
  /**
   * Admission. Applies per hospital admission.
   */
  ADMISSION: "ADMISSION",
  /**
   * Calendar Year. For a deductible, this is the patient's total for the year rather than the amount they still owe.
   */
  CALENDAR_YEAR: "CALENDAR_YEAR",
  /**
   * Contract. The term of the patient's contract with the plan.
   */
  CONTRACT: "CONTRACT",
  /**
   * Day
   */
  DAY: "DAY",
  /**
   * Episode. A single episode of care.
   */
  EPISODE: "EPISODE",
  /**
   * Exceeded. The patient has gone past the limit.
   */
  EXCEEDED: "EXCEEDED",
  /**
   * Hour
   */
  HOUR: "HOUR",
  /**
   * Lifetime
   */
  LIFETIME: "LIFETIME",
  /**
   * Lifetime Remaining. The portion of the lifetime limit the patient hasn't used yet.
   */
  LIFETIME_REMAINING: "LIFETIME_REMAINING",
  /**
   * Month
   */
  MONTH: "MONTH",
  /**
   * 24 Hours
   */
  N24_HOURS: "24_HOURS",
  /**
   * Not Exceeded. The patient hasn't reached the limit.
   */
  NOT_EXCEEDED: "NOT_EXCEEDED",
  /**
   * Outlier. Applies to care that falls outside the plan's normal limits.
   */
  OUTLIER: "OUTLIER",
  /**
   * Remaining. For a deductible, this is the amount the patient still owes rather than their total for the year.
   */
  REMAINING: "REMAINING",
  /**
   * Service Year. The plan's own 12-month benefit year, which may not align with the calendar year.
   */
  SERVICE_YEAR: "SERVICE_YEAR",
  /**
   * Visit
   */
  VISIT: "VISIT",
  /**
   * Week
   */
  WEEK: "WEEK",
  /**
   * Years
   */
  YEARS: "YEARS",
  /**
   * Year to Date. Accumulated from the start of the year through the date of the response.
   */
  YEAR_TO_DATE: "YEAR_TO_DATE",
} as const;
/**
 * @public
 */
export type EligibilityCheckTimePeriod = (typeof EligibilityCheckTimePeriod)[keyof typeof EligibilityCheckTimePeriod];

/**
 * @public
 * @enum
 */
export const EligibilityCheckQuantityQualifier = {
  /**
   * Covered - Actual. A confirmed count of covered units.
   */
  COVERED_ACTUAL: "COVERED_ACTUAL",
  /**
   * Covered - Estimated. An estimated count of covered units.
   */
  COVERED_ESTIMATED: "COVERED_ESTIMATED",
  /**
   * Days
   */
  DAYS: "DAYS",
  /**
   * Deductible Blood Units. The number of units of blood the patient must pay for before the plan covers them.
   */
  DEDUCTIBLE_BLOOD_UNITS: "DEDUCTIBLE_BLOOD_UNITS",
  /**
   * Hours
   */
  HOURS: "HOURS",
  /**
   * Life-time Reserve - Actual. A confirmed count of Medicare lifetime reserve days.
   */
  LIFE_TIME_RESERVE_ACTUAL: "LIFE_TIME_RESERVE_ACTUAL",
  /**
   * Life-time Reserve - Estimated. An estimated count of Medicare lifetime reserve days.
   */
  LIFE_TIME_RESERVE_ESTIMATED: "LIFE_TIME_RESERVE_ESTIMATED",
  /**
   * Maximum
   */
  MAXIMUM: "MAXIMUM",
  /**
   * Minimum
   */
  MINIMUM: "MINIMUM",
  /**
   * Month
   */
  MONTH: "MONTH",
  /**
   * Number of Co-insurance Days
   */
  NUMBER_OF_CO_INSURANCE_DAYS: "NUMBER_OF_CO_INSURANCE_DAYS",
  /**
   * Number of Services or Procedures
   */
  NUMBER_OF_SERVICES_OR_PROCEDURES: "NUMBER_OF_SERVICES_OR_PROCEDURES",
  /**
   * Quantity Approved. The number of units the payer has authorized.
   */
  QUANTITY_APPROVED: "QUANTITY_APPROVED",
  /**
   * Quantity Used. The portion of the benefit the patient has already consumed.
   */
  QUANTITY_USED: "QUANTITY_USED",
  /**
   * Visits
   */
  VISITS: "VISITS",
  /**
   * Years
   */
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type EligibilityCheckQuantityQualifier =
  (typeof EligibilityCheckQuantityQualifier)[keyof typeof EligibilityCheckQuantityQualifier];

/**
 * @public
 * @enum
 */
export const EligibilityCheckInvalidEntryReasonCode = {
  /**
   * Required amount is missing for a benefit that expects an amount.
   */
  MISSING_AMOUNT: "MISSING_AMOUNT",
  /**
   * Required percent is missing for a benefit that expects a percent.
   */
  MISSING_PERCENT: "MISSING_PERCENT",
  /**
   * Benefit has an unexpected amount value.
   */
  UNEXPECTED_AMOUNT: "UNEXPECTED_AMOUNT",
  /**
   * Benefit has an unexpected percent value.
   */
  UNEXPECTED_PERCENT: "UNEXPECTED_PERCENT",
} as const;
/**
 * @public
 */
export type EligibilityCheckInvalidEntryReasonCode =
  (typeof EligibilityCheckInvalidEntryReasonCode)[keyof typeof EligibilityCheckInvalidEntryReasonCode];

/**
 * @public
 * @enum
 */
export const EligibilityCheckCoverageStatus = {
  /**
   * The patient has active coverage for the specified service.
   */
  ACTIVE_COVERAGE: "ACTIVE_COVERAGE",
  /**
   * The patient has active coverage under a full risk capitation arrangement, where the provider receives a fixed payment per patient regardless of the services provided.
   */
  ACTIVE_FULL_RISK_CAPITATION: "ACTIVE_FULL_RISK_CAPITATION",
  /**
   * The patient has active coverage, but the payer is investigating the patient's eligibility or coverage details.
   */
  ACTIVE_PENDING_INVESTIGATION: "ACTIVE_PENDING_INVESTIGATION",
  /**
   * The patient has active coverage where some services are capitated (the provider receives a fixed payment) and others aren't.
   */
  ACTIVE_SERVICES_CAPITATED: "ACTIVE_SERVICES_CAPITATED",
  /**
   * The patient has active coverage where services provided by the primary care physician are capitated (the provider receives a fixed payment).
   */
  ACTIVE_SERVICES_CAPITATED_TO_PRIMARY_CARE_PROVIDER: "ACTIVE_SERVICES_CAPITATED_TO_PRIMARY_CARE_PROVIDER",
  /**
   * The patient doesn't have active coverage for the specified service.
   */
  INACTIVE: "INACTIVE",
  /**
   * The patient's coverage is inactive while the payer updates their eligibility information.
   */
  INACTIVE_PENDING_ELIGIBILITY_UPDATE: "INACTIVE_PENDING_ELIGIBILITY_UPDATE",
  /**
   * The patient's coverage is inactive while the payer investigates the patient's eligibility or coverage details.
   */
  INACTIVE_PENDING_INVESTIGATION: "INACTIVE_PENDING_INVESTIGATION",
} as const;
/**
 * @public
 */
export type EligibilityCheckCoverageStatus =
  (typeof EligibilityCheckCoverageStatus)[keyof typeof EligibilityCheckCoverageStatus];

/**
 * @public
 * @enum
 */
export const EligibilityCheckProviderEntityIdentifierCode = {
  /**
   * Employer
   */
  EMPLOYER: "EMPLOYER",
  /**
   * Facility
   */
  FACILITY: "FACILITY",
  /**
   * Gateway Provider
   */
  GATEWAY_PROVIDER: "GATEWAY_PROVIDER",
  /**
   * Hospital
   */
  HOSPITAL: "HOSPITAL",
  /**
   * Payer
   */
  PAYER: "PAYER",
  /**
   * Plan Sponsor
   */
  PLAN_SPONSOR: "PLAN_SPONSOR",
  /**
   * Provider
   */
  PROVIDER: "PROVIDER",
  /**
   * Third Party Administrator
   */
  THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR",
} as const;
/**
 * @public
 */
export type EligibilityCheckProviderEntityIdentifierCode =
  (typeof EligibilityCheckProviderEntityIdentifierCode)[keyof typeof EligibilityCheckProviderEntityIdentifierCode];

/**
 * @public
 * @enum
 */
export const EventDestinationsDestinationInputStatus = {
  /**
   * The destination is paused and will not receive event deliveries.
   */
  DISABLED: "DISABLED",
  /**
   * The destination is active and will receive event deliveries.
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EventDestinationsDestinationInputStatus =
  (typeof EventDestinationsDestinationInputStatus)[keyof typeof EventDestinationsDestinationInputStatus];

/**
 * @public
 * @enum
 */
export const EventDestinationsDestinationStatus = {
  /**
   * The destination is paused and will not receive event deliveries.
   */
  DISABLED: "DISABLED",
  /**
   * The destination is active and will receive event deliveries.
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EventDestinationsDestinationStatus =
  (typeof EventDestinationsDestinationStatus)[keyof typeof EventDestinationsDestinationStatus];

/**
 * @public
 * @enum
 */
export const EventDestinationsEventEnvironment = {
  /**
   * Production environment.
   */
  PRODUCTION: "PRODUCTION",
  /**
   * Test environment.
   */
  TEST: "TEST",
} as const;
/**
 * @public
 */
export type EventDestinationsEventEnvironment =
  (typeof EventDestinationsEventEnvironment)[keyof typeof EventDestinationsEventEnvironment];

/**
 * @public
 * @enum
 */
export const EventDestinationsEventPayloadObjectType = {
  /**
   * Version 1 thin event schema.
   */
  V1_EVENT: "v1.event",
} as const;
/**
 * @public
 */
export type EventDestinationsEventPayloadObjectType =
  (typeof EventDestinationsEventPayloadObjectType)[keyof typeof EventDestinationsEventPayloadObjectType];

/**
 * @public
 * @enum
 */
export const EventDestinationsEventStatus = {
  /**
   * Stedi successfully delivered the event to all relevant event destinations.
   */
  DELIVERED: "DELIVERED",
  /**
   * Stedi couldn't deliver the event to at least one event destination and is no longer retrying. Deliveries to some event destinations may have been successful.
   */
  FAILED: "FAILED",
  /**
   * Stedi is still trying to deliver the event to one or more event destinations. Events may stay in this state for multiple days as Stedi automatically retries.
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type EventDestinationsEventStatus =
  (typeof EventDestinationsEventStatus)[keyof typeof EventDestinationsEventStatus];
