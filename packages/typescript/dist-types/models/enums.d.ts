/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator: {
    /**
     * The insured has not authorized assignment of benefits.
     */
    readonly NO: "NO";
    /**
     * Assignment of benefits does not apply, typically because there is no signature on file.
     */
    readonly NOT_APPLICABLE: "NOT_APPLICABLE";
    /**
     * The insured has authorized assignment of benefits.
     */
    readonly YES: "YES";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator = (typeof ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator)[keyof typeof ProfessionalClaimSubmissionBenefitsAssignmentCertificationIndicator];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionReleaseOfInformationCode: {
    /**
     * The provider has informed consent to release medical information, but the signed authorization has not been obtained.
     */
    readonly INFORMED_CONSENT: "INFORMED_CONSENT";
    /**
     * The provider has the patient's signed authorization to release medical information.
     */
    readonly YES: "YES";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionReleaseOfInformationCode = (typeof ProfessionalClaimSubmissionReleaseOfInformationCode)[keyof typeof ProfessionalClaimSubmissionReleaseOfInformationCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionProviderAcceptsAssignment: {
    /**
     * The provider accepts assignment and agrees to accept the payer's payment as payment in full, minus any patient responsibility.
     */
    readonly ASSIGNED: "ASSIGNED";
    /**
     * The provider accepts assignment for clinical laboratory services only. This is uncommon.
     */
    readonly CLINICAL_LAB_ONLY: "CLINICAL_LAB_ONLY";
    /**
     * The provider does not accept assignment. The payer typically sends payment directly to the patient, who is then responsible for reimbursing the provider.
     */
    readonly NOT_ASSIGNED: "NOT_ASSIGNED";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionProviderAcceptsAssignment = (typeof ProfessionalClaimSubmissionProviderAcceptsAssignment)[keyof typeof ProfessionalClaimSubmissionProviderAcceptsAssignment];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionProviderSignature: {
    /**
     * The provider does not have the rendering provider's signature on file.
     */
    readonly NOT_ON_FILE: "NOT_ON_FILE";
    /**
     * The provider has the rendering provider's signature on file.
     */
    readonly ON_FILE: "ON_FILE";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionProviderSignature = (typeof ProfessionalClaimSubmissionProviderSignature)[keyof typeof ProfessionalClaimSubmissionProviderSignature];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionAttachmentReportTypeCode: {
    /**
     * Admission summary.
     */
    readonly ADMISSION_SUMMARY: "ADMISSION_SUMMARY";
    /**
     * Allergies or sensitivities document.
     */
    readonly ALLERGIES_SENSITIVITIES: "ALLERGIES_SENSITIVITIES";
    /**
     * Ambulance certification.
     */
    readonly AMBULANCE_CERTIFICATION: "AMBULANCE_CERTIFICATION";
    /**
     * Autopsy report.
     */
    readonly AUTOPSY_REPORT: "AUTOPSY_REPORT";
    /**
     * Baseline.
     */
    readonly BASELINE: "BASELINE";
    /**
     * Benchmark testing results.
     */
    readonly BENCHMARK_TESTING_RESULTS: "BENCHMARK_TESTING_RESULTS";
    /**
     * Blanket test results.
     */
    readonly BLANKET_TEST_RESULTS: "BLANKET_TEST_RESULTS";
    /**
     * Certification.
     */
    readonly CERTIFICATION: "CERTIFICATION";
    /**
     * Certified test report.
     */
    readonly CERTIFIED_TEST_REPORT: "CERTIFIED_TEST_REPORT";
    /**
     * Chemical analysis.
     */
    readonly CHEMICAL_ANALYSIS: "CHEMICAL_ANALYSIS";
    /**
     * Chiropractic justification.
     */
    readonly CHIROPRACTIC_JUSTIFICATION: "CHIROPRACTIC_JUSTIFICATION";
    /**
     * Consent forms.
     */
    readonly CONSENT_FORMS: "CONSENT_FORMS";
    /**
     * Continued treatment.
     */
    readonly CONTINUED_TREATMENT: "CONTINUED_TREATMENT";
    /**
     * Death notification.
     */
    readonly DEATH_NOTIFICATION: "DEATH_NOTIFICATION";
    /**
     * Dental models.
     */
    readonly DENTAL_MODELS: "DENTAL_MODELS";
    /**
     * Diagnostic report.
     */
    readonly DIAGNOSTIC_REPORT: "DIAGNOSTIC_REPORT";
    /**
     * Discharge monitoring report.
     */
    readonly DISCHARGE_MONITORING: "DISCHARGE_MONITORING";
    /**
     * Discharge summary.
     */
    readonly DISCHARGE_SUMMARY: "DISCHARGE_SUMMARY";
    /**
     * Durable medical equipment prescription.
     */
    readonly DME_PRESCRIPTION: "DME_PRESCRIPTION";
    /**
     * Drugs administered.
     */
    readonly DRUGS_ADMINISTERED: "DRUGS_ADMINISTERED";
    /**
     * Drug profile document.
     */
    readonly DRUG_PROFILE: "DRUG_PROFILE";
    /**
     * Explanation of benefits, for coordination of benefits or Medicare secondary payer.
     */
    readonly EXPLANATION_OF_BENEFITS: "EXPLANATION_OF_BENEFITS";
    /**
     * Functional goals.
     */
    readonly FUNCTIONAL_GOALS: "FUNCTIONAL_GOALS";
    /**
     * Health certificate.
     */
    readonly HEALTH_CERTIFICATE: "HEALTH_CERTIFICATE";
    /**
     * Health clinic records.
     */
    readonly HEALTH_CLINIC_RECORDS: "HEALTH_CLINIC_RECORDS";
    /**
     * Immunization record.
     */
    readonly IMMUNIZATION_RECORD: "IMMUNIZATION_RECORD";
    /**
     * Initial assessment.
     */
    readonly INITIAL_ASSESSMENT: "INITIAL_ASSESSMENT";
    /**
     * Justification for admission.
     */
    readonly JUSTIFICATION_FOR_ADMISSION: "JUSTIFICATION_FOR_ADMISSION";
    /**
     * Laboratory results.
     */
    readonly LABORATORY_RESULTS: "LABORATORY_RESULTS";
    /**
     * Patient medical history document.
     */
    readonly MEDICAL_HISTORY: "MEDICAL_HISTORY";
    /**
     * Medical record attachment.
     */
    readonly MEDICAL_RECORD_ATTACHMENT: "MEDICAL_RECORD_ATTACHMENT";
    /**
     * Models.
     */
    readonly MODELS: "MODELS";
    /**
     * Nursing notes.
     */
    readonly NURSING_NOTES: "NURSING_NOTES";
    /**
     * Operative note.
     */
    readonly OPERATIVE_NOTE: "OPERATIVE_NOTE";
    /**
     * Orders and treatments document.
     */
    readonly ORDERS_TREATMENTS: "ORDERS_TREATMENTS";
    /**
     * Oxygen content averaging report.
     */
    readonly OXYGEN_CONTENT_AVERAGING: "OXYGEN_CONTENT_AVERAGING";
    /**
     * Oxygen therapy certification.
     */
    readonly OXYGEN_THERAPY_CERTIFICATION: "OXYGEN_THERAPY_CERTIFICATION";
    /**
     * Paramedical results.
     */
    readonly PARAMEDICAL_RESULTS: "PARAMEDICAL_RESULTS";
    /**
     * Parenteral or enteral certification.
     */
    readonly PARENTERAL_ENTERAL_CERTIFICATION: "PARENTERAL_ENTERAL_CERTIFICATION";
    /**
     * Pathology report.
     */
    readonly PATHOLOGY_REPORT: "PATHOLOGY_REPORT";
    /**
     * Photographs.
     */
    readonly PHOTOGRAPHS: "PHOTOGRAPHS";
    /**
     * Objective physical examination document, including vital signs.
     */
    readonly PHYSICAL_EXAMINATION: "PHYSICAL_EXAMINATION";
    /**
     * Physical therapy certification.
     */
    readonly PHYSICAL_THERAPY_CERTIFICATION: "PHYSICAL_THERAPY_CERTIFICATION";
    /**
     * Physical therapy notes.
     */
    readonly PHYSICAL_THERAPY_NOTES: "PHYSICAL_THERAPY_NOTES";
    /**
     * Physician order.
     */
    readonly PHYSICIAN_ORDER: "PHYSICIAN_ORDER";
    /**
     * Physician's report.
     */
    readonly PHYSICIAN_REPORT: "PHYSICIAN_REPORT";
    /**
     * Plan of treatment.
     */
    readonly PLAN_OF_TREATMENT: "PLAN_OF_TREATMENT";
    /**
     * Prescription.
     */
    readonly PRESCRIPTION: "PRESCRIPTION";
    /**
     * Progress report.
     */
    readonly PROGRESS_REPORT: "PROGRESS_REPORT";
    /**
     * Prosthetics or orthotic certification.
     */
    readonly PROSTHETICS_ORTHOTIC_CERTIFICATION: "PROSTHETICS_ORTHOTIC_CERTIFICATION";
    /**
     * Radiology films.
     */
    readonly RADIOLOGY_FILMS: "RADIOLOGY_FILMS";
    /**
     * Radiology reports.
     */
    readonly RADIOLOGY_REPORTS: "RADIOLOGY_REPORTS";
    /**
     * Recovery plan.
     */
    readonly RECOVERY_PLAN: "RECOVERY_PLAN";
    /**
     * Referral form.
     */
    readonly REFERRAL_FORM: "REFERRAL_FORM";
    /**
     * Renewable oxygen content averaging report.
     */
    readonly RENEWABLE_OXYGEN_CONTENT: "RENEWABLE_OXYGEN_CONTENT";
    /**
     * Report justifying treatment beyond utilization guidelines.
     */
    readonly REPORT_JUSTIFYING_TREATMENT: "REPORT_JUSTIFYING_TREATMENT";
    /**
     * State school immunization records.
     */
    readonly STATE_IMMUNIZATION_RECORDS: "STATE_IMMUNIZATION_RECORDS";
    /**
     * Support data for the claim.
     */
    readonly SUPPORT_DATA: "SUPPORT_DATA";
    /**
     * Symptoms document.
     */
    readonly SYMPTOMS_DOCUMENT: "SYMPTOMS_DOCUMENT";
    /**
     * Report of tests and analysis.
     */
    readonly TESTS_ANALYSIS_REPORT: "TESTS_ANALYSIS_REPORT";
    /**
     * Treatment diagnosis.
     */
    readonly TREATMENT_DIAGNOSIS: "TREATMENT_DIAGNOSIS";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionAttachmentReportTypeCode = (typeof ProfessionalClaimSubmissionAttachmentReportTypeCode)[keyof typeof ProfessionalClaimSubmissionAttachmentReportTypeCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionAttachmentTransmissionCode: {
    /**
     * The attachment is held by the provider and made available to the payer on request.
     */
    readonly AVAILABLE_ON_REQUEST: "AVAILABLE_ON_REQUEST";
    /**
     * The attachment is sent by fax.
     */
    readonly BY_FAX: "BY_FAX";
    /**
     * The attachment is sent by mail.
     */
    readonly BY_MAIL: "BY_MAIL";
    /**
     * The attachment is sent electronically only.
     */
    readonly ELECTRONICALLY_ONLY: "ELECTRONICALLY_ONLY";
    /**
     * The attachment is sent by email.
     */
    readonly EMAIL: "EMAIL";
    /**
     * The attachment is sent by file transfer.
     */
    readonly FILE_TRANSFER: "FILE_TRANSFER";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionAttachmentTransmissionCode = (typeof ProfessionalClaimSubmissionAttachmentTransmissionCode)[keyof typeof ProfessionalClaimSubmissionAttachmentTransmissionCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionEPSDTReferralConditionIndicator: {
    /**
     * A referral was available but not used.
     */
    readonly AVAILABLE_NOT_USED: "AVAILABLE_NOT_USED";
    /**
     * A new service was requested through a referral.
     */
    readonly NEW_SERVICE_REQUESTED: "NEW_SERVICE_REQUESTED";
    /**
     * Not used.
     */
    readonly NOT_USED: "NOT_USED";
    /**
     * The patient is under treatment.
     */
    readonly UNDER_TREATMENT: "UNDER_TREATMENT";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionEPSDTReferralConditionIndicator = (typeof ProfessionalClaimSubmissionEPSDTReferralConditionIndicator)[keyof typeof ProfessionalClaimSubmissionEPSDTReferralConditionIndicator];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionClaimFrequencyCode: {
    /**
     * This claim cancels, or voids, a previously submitted claim.
     */
    readonly CANCELLATION_OF_PRIOR_CLAIM: "CANCELLATION_OF_PRIOR_CLAIM";
    /**
     * This claim replaces a previously submitted claim.
     */
    readonly REPLACEMENT_OF_PRIOR_CLAIM: "REPLACEMENT_OF_PRIOR_CLAIM";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionClaimFrequencyCode = (typeof ProfessionalClaimSubmissionClaimFrequencyCode)[keyof typeof ProfessionalClaimSubmissionClaimFrequencyCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionGenderCode: {
    /**
     * Female.
     */
    readonly FEMALE: "FEMALE";
    /**
     * Male.
     */
    readonly MALE: "MALE";
    /**
     * Unknown. Use when the person declines to answer or does not identify as male or female. Note that some payers may reject the claim if the sex doesn't match what they have in their member records.
     */
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionGenderCode = (typeof ProfessionalClaimSubmissionGenderCode)[keyof typeof ProfessionalClaimSubmissionGenderCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionInsuranceType: {
    /**
     * CHAMPVA, the Civilian Health and Medical Program of the Department of Veterans Affairs, which covers spouses and dependents of certain disabled or deceased veterans.
     */
    readonly CHAMPVA: "CHAMPVA";
    /**
     * Workers' compensation, FECA, or Black Lung coverage for workers injured on the job. FECA stands for the Federal Employees' Compensation Act.
     */
    readonly FECA_BLK_LUNG: "FECA_BLK_LUNG";
    /**
     * Medicaid.
     */
    readonly MEDICAID: "MEDICAID";
    /**
     * Original Medicare. Don't use this for Medicare Advantage plans – use `OTHER` instead.
     */
    readonly MEDICARE: "MEDICARE";
    /**
     * Any other plan type, including commercial payers and Medicare Advantage. Use this for most claims.
     */
    readonly OTHER: "OTHER";
    /**
     * TRICARE, the U.S. Department of Defense's health care program for military members and their families.
     */
    readonly TRICARE: "TRICARE";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionInsuranceType = (typeof ProfessionalClaimSubmissionInsuranceType)[keyof typeof ProfessionalClaimSubmissionInsuranceType];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionPaymentResponsibilityLevelCode: {
    /**
     * The payer is the primary payer for this claim.
     */
    readonly PRIMARY: "PRIMARY";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionPaymentResponsibilityLevelCode = (typeof ProfessionalClaimSubmissionPaymentResponsibilityLevelCode)[keyof typeof ProfessionalClaimSubmissionPaymentResponsibilityLevelCode];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionClaimFilingIndicator: {
    /**
     * Automobile medical coverage.
     */
    readonly AUTOMOBILE_MEDICAL: "AUTOMOBILE_MEDICAL";
    /**
     * Blue Cross Blue Shield.
     */
    readonly BLUE_CROSS_BLUE_SHIELD: "BLUE_CROSS_BLUE_SHIELD";
    /**
     * A commercial insurance company.
     */
    readonly COMMERCIAL_INSURANCE: "COMMERCIAL_INSURANCE";
    /**
     * A dental maintenance organization.
     */
    readonly DENTAL_MAINTENANCE_ORGANIZATION: "DENTAL_MAINTENANCE_ORGANIZATION";
    /**
     * Disability coverage.
     */
    readonly DISABILITY: "DISABILITY";
    /**
     * An exclusive provider organization (EPO).
     */
    readonly EXCLUSIVE_PROVIDER_ORGANIZATION: "EXCLUSIVE_PROVIDER_ORGANIZATION";
    /**
     * The Federal Employees Program.
     */
    readonly FEDERAL_EMPLOYEES_PROGRAM: "FEDERAL_EMPLOYEES_PROGRAM";
    /**
     * A health maintenance organization (HMO).
     */
    readonly HEALTH_MAINTENANCE_ORGANIZATION: "HEALTH_MAINTENANCE_ORGANIZATION";
    /**
     * An HMO Medicare risk plan.
     */
    readonly HMO_MEDICARE_RISK: "HMO_MEDICARE_RISK";
    /**
     * An indemnity insurance plan.
     */
    readonly INDEMNITY_INSURANCE: "INDEMNITY_INSURANCE";
    /**
     * Liability medical coverage.
     */
    readonly LIABILITY_MEDICAL: "LIABILITY_MEDICAL";
    /**
     * Medicaid.
     */
    readonly MEDICAID: "MEDICAID";
    /**
     * Medicare Part A.
     */
    readonly MEDICARE_PART_A: "MEDICARE_PART_A";
    /**
     * Medicare Part B.
     */
    readonly MEDICARE_PART_B: "MEDICARE_PART_B";
    /**
     * A mutually defined plan type agreed on with the payer.
     */
    readonly MUTUALLY_DEFINED: "MUTUALLY_DEFINED";
    /**
     * Another federal program.
     */
    readonly OTHER_FEDERAL_PROGRAM: "OTHER_FEDERAL_PROGRAM";
    /**
     * Another non-federal program.
     */
    readonly OTHER_NON_FEDERAL_PROGRAMS: "OTHER_NON_FEDERAL_PROGRAMS";
    /**
     * A point-of-service (POS) plan.
     */
    readonly POINT_OF_SERVICE: "POINT_OF_SERVICE";
    /**
     * A preferred provider organization (PPO).
     */
    readonly PREFERRED_PROVIDER_ORGANIZATION: "PREFERRED_PROVIDER_ORGANIZATION";
    /**
     * A Title V program.
     */
    readonly TITLE_V: "TITLE_V";
    /**
     * TRICARE.
     */
    readonly TRICARE: "TRICARE";
    /**
     * A Veterans Affairs plan.
     */
    readonly VETERANS_AFFAIRS_PLAN: "VETERANS_AFFAIRS_PLAN";
    /**
     * A workers' compensation health claim.
     */
    readonly WORKERS_COMPENSATION_HEALTH_CLAIM: "WORKERS_COMPENSATION_HEALTH_CLAIM";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionClaimFilingIndicator = (typeof ProfessionalClaimSubmissionClaimFilingIndicator)[keyof typeof ProfessionalClaimSubmissionClaimFilingIndicator];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionMedicareSecondaryInsuranceType: {
    /**
     * Black Lung benefits are primary.
     */
    readonly BLACK_LUNG: "BLACK_LUNG";
    /**
     * A disabled beneficiary under age 65 covered by a large group health plan.
     */
    readonly DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP: "DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LGHP";
    /**
     * End-stage renal disease coverage during the mandated coordination period with an employer group health plan.
     */
    readonly END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP: "END_STAGE_RENAL_DISEASE_IN_MANDATED_COORDINATION_PERIOD_WITH_EGHP";
    /**
     * No-fault insurance, including automobile coverage, is primary.
     */
    readonly NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY: "NO_FAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY";
    /**
     * Other liability insurance is primary.
     */
    readonly OTHER_LIABILITY_INSURANCE_IS_PRIMARY: "OTHER_LIABILITY_INSURANCE_IS_PRIMARY";
    /**
     * A public health service or other federal agency is primary.
     */
    readonly PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY: "PUBLIC_HEALTH_SERVICE_OR_OTHER_FEDERAL_AGENCY";
    /**
     * Veterans Administration coverage is primary.
     */
    readonly VETERANS_ADMINISTRATION: "VETERANS_ADMINISTRATION";
    /**
     * Workers' compensation is primary.
     */
    readonly WORKERS_COMPENSATION: "WORKERS_COMPENSATION";
    /**
     * A working aged beneficiary or spouse covered by an employer group health plan.
     */
    readonly WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP: "WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EGHP";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionMedicareSecondaryInsuranceType = (typeof ProfessionalClaimSubmissionMedicareSecondaryInsuranceType)[keyof typeof ProfessionalClaimSubmissionMedicareSecondaryInsuranceType];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured: {
    /**
     * The patient is a cadaver donor.
     */
    readonly CADAVER_DONOR: "CADAVER_DONOR";
    /**
     * The patient is the other insured's child.
     */
    readonly CHILD: "CHILD";
    /**
     * The patient is the other insured's employee.
     */
    readonly EMPLOYEE: "EMPLOYEE";
    /**
     * The patient is the other insured's life partner.
     */
    readonly LIFE_PARTNER: "LIFE_PARTNER";
    /**
     * The patient is an organ donor.
     */
    readonly ORGAN_DONOR: "ORGAN_DONOR";
    /**
     * The patient has another relationship to the other insured.
     */
    readonly OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP";
    /**
     * The patient is the other insured.
     */
    readonly SELF: "SELF";
    /**
     * The patient is the other insured's spouse.
     */
    readonly SPOUSE: "SPOUSE";
    /**
     * The relationship is unknown.
     */
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured = (typeof ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured)[keyof typeof ProfessionalClaimSubmissionOtherInsuredRelationshipToInsured];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionResponsibilityLevel: {
    /**
     * The primary payer.
     */
    readonly PRIMARY: "PRIMARY";
    /**
     * The secondary payer.
     */
    readonly SECONDARY: "SECONDARY";
    /**
     * The tertiary payer.
     */
    readonly TERTIARY: "TERTIARY";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionResponsibilityLevel = (typeof ProfessionalClaimSubmissionResponsibilityLevel)[keyof typeof ProfessionalClaimSubmissionResponsibilityLevel];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionPatientRelationshipToInsured: {
    /**
     * The patient is the insured's child.
     */
    readonly CHILD: "CHILD";
    /**
     * The patient is the insured's employee, typically for workers' compensation claims where the insured is the employer.
     */
    readonly EMPLOYEE: "EMPLOYEE";
    /**
     * The patient has another relationship to the insured.
     */
    readonly OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP";
    /**
     * The patient is the insured's spouse.
     */
    readonly SPOUSE: "SPOUSE";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionPatientRelationshipToInsured = (typeof ProfessionalClaimSubmissionPatientRelationshipToInsured)[keyof typeof ProfessionalClaimSubmissionPatientRelationshipToInsured];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionPurpose: {
    /**
     * A standard fee-for-service claim with at least one chargeable line item. Use this for most submissions.
     */
    readonly CHARGEABLE: "CHARGEABLE";
    /**
     * A reporting-only submission that is not a request for payment.
     */
    readonly REPORTING: "REPORTING";
    /**
     * Only for use by state Medicaid agencies performing post-payment recovery.
     */
    readonly SUBROGATION_DEMAND: "SUBROGATION_DEMAND";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionPurpose = (typeof ProfessionalClaimSubmissionPurpose)[keyof typeof ProfessionalClaimSubmissionPurpose];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure: {
    /**
     * Gram.
     */
    readonly GRAM: "GRAM";
    /**
     * International unit.
     */
    readonly INTERNATIONAL_UNIT: "INTERNATIONAL_UNIT";
    /**
     * Milligram.
     */
    readonly MILLIGRAM: "MILLIGRAM";
    /**
     * Milliliter.
     */
    readonly MILLILITER: "MILLILITER";
    /**
     * Unit.
     */
    readonly UNIT: "UNIT";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure = (typeof ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure)[keyof typeof ProfessionalClaimSubmissionDrugIdentificationUnitOfMeasure];
/**
 * @public
 * @enum
 */
export declare const ProfessionalClaimSubmissionPurchasedServiceProviderEntityType: {
    /**
     * An organization, such as an independent laboratory.
     */
    readonly ORGANIZATION: "ORGANIZATION";
    /**
     * An individual provider, such as a physician who performed a purchased interpretation.
     */
    readonly PERSON: "PERSON";
};
/**
 * @public
 */
export type ProfessionalClaimSubmissionPurchasedServiceProviderEntityType = (typeof ProfessionalClaimSubmissionPurchasedServiceProviderEntityType)[keyof typeof ProfessionalClaimSubmissionPurchasedServiceProviderEntityType];
/**
 * @public
 * @enum
 */
export declare const ClaimAcknowledgmentStatus: {
    /**
     * A clearinghouse or the payer accepted the claim. A clearinghouse acceptance means the claim passed its edits and the clearinghouse forwarded it to the payer. A payer acceptance means the payer will adjudicate the claim.
     */
    readonly ACCEPTED: "ACCEPTED";
    /**
     * Stedi couldn't determine the status because the 277CA carries a status category code Stedi doesn't recognize.
     */
    readonly INVALID: "INVALID";
    /**
     * A clearinghouse or the payer received the claim but hasn't yet accepted or rejected it.
     */
    readonly RECEIVED: "RECEIVED";
    /**
     * A clearinghouse or the payer rejected the claim. The payer won't adjudicate the claim until you correct and resubmit it.
     */
    readonly REJECTED: "REJECTED";
};
/**
 * @public
 */
export type ClaimAcknowledgmentStatus = (typeof ClaimAcknowledgmentStatus)[keyof typeof ClaimAcknowledgmentStatus];
/**
 * @public
 * @enum
 */
export declare const ClaimType: {
    /**
     * An 837D dental claim, the electronic equivalent of the ADA Dental Claim Form.
     */
    readonly DENTAL: "DENTAL";
    /**
     * An 837I institutional claim, the electronic equivalent of the UB-04 form.
     */
    readonly INSTITUTIONAL: "INSTITUTIONAL";
    /**
     * An 837P professional claim, the electronic equivalent of the CMS-1500 form.
     */
    readonly PROFESSIONAL: "PROFESSIONAL";
};
/**
 * @public
 */
export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType];
/**
 * @public
 * @enum
 */
export declare const ClaimStatusReportedBy: {
    /**
     * A clearinghouse reported the status, either Stedi or an intermediary clearinghouse between Stedi and the payer.
     */
    readonly CLEARINGHOUSE: "CLEARINGHOUSE";
    /**
     * The payer reported the status, in a 277CA claim acknowledgment or an 835 ERA.
     */
    readonly PAYER: "PAYER";
};
/**
 * @public
 */
export type ClaimStatusReportedBy = (typeof ClaimStatusReportedBy)[keyof typeof ClaimStatusReportedBy];
/**
 * @public
 * @enum
 */
export declare const ClaimPaymentInformationStatusCode: {
    /**
     * The payer denied the claim.
     */
    readonly DENIED: "DENIED";
    /**
     * The payer isn't responsible for the claim and forwarded it to additional payers.
     */
    readonly NOT_OUR_CLAIM_FORWARDED_TO_ADDITIONAL_PAYERS: "NOT_OUR_CLAIM_FORWARDED_TO_ADDITIONAL_PAYERS";
    /**
     * The payer priced the claim without paying it.
     */
    readonly PREDETERMINATION_PRICING_ONLY: "PREDETERMINATION_PRICING_ONLY";
    /**
     * The payer processed the claim as the primary payer.
     */
    readonly PROCESSED_AS_PRIMARY: "PROCESSED_AS_PRIMARY";
    /**
     * The payer processed the claim as the primary payer and forwarded it to additional payers.
     */
    readonly PROCESSED_AS_PRIMARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_PRIMARY_FORWARDED_TO_ADDITIONAL_PAYERS";
    /**
     * The payer processed the claim as the secondary payer.
     */
    readonly PROCESSED_AS_SECONDARY: "PROCESSED_AS_SECONDARY";
    /**
     * The payer processed the claim as the secondary payer and forwarded it to additional payers.
     */
    readonly PROCESSED_AS_SECONDARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_SECONDARY_FORWARDED_TO_ADDITIONAL_PAYERS";
    /**
     * The payer processed the claim as the tertiary payer.
     */
    readonly PROCESSED_AS_TERTIARY: "PROCESSED_AS_TERTIARY";
    /**
     * The payer processed the claim as the tertiary payer and forwarded it to additional payers.
     */
    readonly PROCESSED_AS_TERTIARY_FORWARDED_TO_ADDITIONAL_PAYERS: "PROCESSED_AS_TERTIARY_FORWARDED_TO_ADDITIONAL_PAYERS";
    /**
     * The payer reversed a payment it reported earlier. The amounts are negative, so they cancel the earlier payment.
     */
    readonly REVERSAL_OF_PREVIOUS_PAYMENT: "REVERSAL_OF_PREVIOUS_PAYMENT";
};
/**
 * @public
 */
export type ClaimPaymentInformationStatusCode = (typeof ClaimPaymentInformationStatusCode)[keyof typeof ClaimPaymentInformationStatusCode];
/**
 * @public
 * @enum
 */
export declare const ClaimStatus: {
    /**
     * A clearinghouse or the payer accepted the claim. Check `statusReportedBy` to see which one.
     */
    readonly ACCEPTED: "ACCEPTED";
    /**
     * The payer adjudicated the claim and denied it in an 835 ERA.
     */
    readonly DENIED: "DENIED";
    /**
     * The payer adjudicated the claim and reported the result in an 835 ERA. The payer may have paid all, part, or none of the charges. Check `totalClaimPaidAmount` for the amount.
     */
    readonly PROCESSED: "PROCESSED";
    /**
     * A clearinghouse or the payer received the claim but hasn't yet accepted or rejected it.
     */
    readonly RECEIVED: "RECEIVED";
    /**
     * A clearinghouse or the payer rejected the claim. The payer won't adjudicate the claim until you correct and resubmit it.
     */
    readonly REJECTED: "REJECTED";
    /**
     * You submitted the claim. No clearinghouse or payer has acknowledged it yet.
     */
    readonly SUBMITTED: "SUBMITTED";
    /**
     * Stedi couldn't determine the status. The 277CA carries a status category code Stedi doesn't recognize, or the 835 ERA doesn't report a clear outcome for the claim.
     */
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus];
/**
 * @public
 * @enum
 */
export declare const EventDestinationsDestinationInputStatus: {
    /**
     * The destination is paused and will not receive event deliveries.
     */
    readonly DISABLED: "DISABLED";
    /**
     * The destination is active and will receive event deliveries.
     */
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type EventDestinationsDestinationInputStatus = (typeof EventDestinationsDestinationInputStatus)[keyof typeof EventDestinationsDestinationInputStatus];
/**
 * @public
 * @enum
 */
export declare const EventDestinationsDestinationStatus: {
    /**
     * The destination is paused and will not receive event deliveries.
     */
    readonly DISABLED: "DISABLED";
    /**
     * The destination is active and will receive event deliveries.
     */
    readonly ENABLED: "ENABLED";
};
/**
 * @public
 */
export type EventDestinationsDestinationStatus = (typeof EventDestinationsDestinationStatus)[keyof typeof EventDestinationsDestinationStatus];
/**
 * @public
 * @enum
 */
export declare const EventDestinationsEventEnvironment: {
    /**
     * Production environment.
     */
    readonly PRODUCTION: "PRODUCTION";
    /**
     * Test environment.
     */
    readonly TEST: "TEST";
};
/**
 * @public
 */
export type EventDestinationsEventEnvironment = (typeof EventDestinationsEventEnvironment)[keyof typeof EventDestinationsEventEnvironment];
/**
 * @public
 * @enum
 */
export declare const EventDestinationsEventPayloadObjectType: {
    /**
     * Version 1 thin event schema.
     */
    readonly V1_EVENT: "v1.event";
};
/**
 * @public
 */
export type EventDestinationsEventPayloadObjectType = (typeof EventDestinationsEventPayloadObjectType)[keyof typeof EventDestinationsEventPayloadObjectType];
/**
 * @public
 * @enum
 */
export declare const EventDestinationsEventStatus: {
    /**
     * Stedi successfully delivered the event to all relevant event destinations.
     */
    readonly DELIVERED: "DELIVERED";
    /**
     * Stedi couldn't deliver the event to at least one event destination and is no longer retrying. Deliveries to some event destinations may have been successful.
     */
    readonly FAILED: "FAILED";
    /**
     * Stedi is still trying to deliver the event to one or more event destinations. Events may stay in this state for multiple days as Stedi automatically retries.
     */
    readonly PENDING: "PENDING";
};
/**
 * @public
 */
export type EventDestinationsEventStatus = (typeof EventDestinationsEventStatus)[keyof typeof EventDestinationsEventStatus];
