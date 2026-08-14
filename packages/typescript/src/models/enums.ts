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
   * Original Medicare. Don't use this for Medicare Advantage plans; use `OTHER` instead.
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
