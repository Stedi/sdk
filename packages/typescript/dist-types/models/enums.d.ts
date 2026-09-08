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
export declare const EligibilityCheckRequestPatientGender: {
    /**
     * Female
     */
    readonly FEMALE: "FEMALE";
    /**
     * Male
     */
    readonly MALE: "MALE";
};
/**
 * @public
 */
export type EligibilityCheckRequestPatientGender = (typeof EligibilityCheckRequestPatientGender)[keyof typeof EligibilityCheckRequestPatientGender];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckRequestEntityProviderCode: {
    /**
     * Admitting
     */
    readonly ADMITTING: "ADMITTING";
    /**
     * Attending
     */
    readonly ATTENDING: "ATTENDING";
    /**
     * Billing
     */
    readonly BILLING: "BILLING";
    /**
     * Consulting
     */
    readonly CONSULTING: "CONSULTING";
    /**
     * Covering
     */
    readonly COVERING: "COVERING";
    /**
     * Home Health Care
     */
    readonly HOME_HEALTH_CARE: "HOME_HEALTH_CARE";
    /**
     * Hospital
     */
    readonly HOSPITAL: "HOSPITAL";
    /**
     * Laboratory
     */
    readonly LABORATORY: "LABORATORY";
    /**
     * Other Physician
     */
    readonly OTHER_PHYSICIAN: "OTHER_PHYSICIAN";
    /**
     * Performing
     */
    readonly PERFORMING: "PERFORMING";
    /**
     * Pharmacist
     */
    readonly PHARMACIST: "PHARMACIST";
    /**
     * Pharmacy
     */
    readonly PHARMACY: "PHARMACY";
    /**
     * Primary Care Physician
     */
    readonly PRIMARY_CARE_PHYSICIAN: "PRIMARY_CARE_PHYSICIAN";
    /**
     * Referring
     */
    readonly REFERRING: "REFERRING";
    /**
     * Rural Health Clinic
     */
    readonly RURAL_HEALTH_CLINIC: "RURAL_HEALTH_CLINIC";
    /**
     * Skilled Nursing Facility
     */
    readonly SKILLED_NURSING_FACILITY: "SKILLED_NURSING_FACILITY";
    /**
     * Submitting
     */
    readonly SUBMITTING: "SUBMITTING";
    /**
     * Supervising
     */
    readonly SUPERVISING: "SUPERVISING";
};
/**
 * @public
 */
export type EligibilityCheckRequestEntityProviderCode = (typeof EligibilityCheckRequestEntityProviderCode)[keyof typeof EligibilityCheckRequestEntityProviderCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckRequestDependentRelationship: {
    /**
     * Child
     */
    readonly CHILD: "CHILD";
    /**
     * Other Adult
     */
    readonly OTHER_ADULT: "OTHER_ADULT";
    /**
     * Spouse
     */
    readonly SPOUSE: "SPOUSE";
};
/**
 * @public
 */
export type EligibilityCheckRequestDependentRelationship = (typeof EligibilityCheckRequestDependentRelationship)[keyof typeof EligibilityCheckRequestDependentRelationship];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckPlaceOfServiceCode: {
    /**
     * Ambulance - Air or Water
     */
    readonly AMBULANCE_AIR_OR_WATER: "42";
    /**
     * Ambulance - Land
     */
    readonly AMBULANCE_LAND: "41";
    /**
     * Ambulatory Surgical Center
     */
    readonly AMBULATORY_SURGICAL_CENTER: "24";
    /**
     * Assisted Living Facility
     */
    readonly ASSISTED_LIVING_FACILITY: "13";
    /**
     * Birthing Center
     */
    readonly BIRTHING_CENTER: "25";
    /**
     * Community Mental Health Center
     */
    readonly COMMUNITY_MENTAL_HEALTH_CENTER: "53";
    /**
     * Comprehensive Inpatient Rehabilitation Facility
     */
    readonly COMPREHENSIVE_INPATIENT_REHABILITATION_FACILITY: "61";
    /**
     * Comprehensive Outpatient Rehabilitation Facility
     */
    readonly COMPREHENSIVE_OUTPATIENT_REHABILITATION_FACILITY: "62";
    /**
     * Custodial Care Facility
     */
    readonly CUSTODIAL_CARE_FACILITY: "33";
    /**
     * Emergency Room - Hospital
     */
    readonly EMERGENCY_ROOM_HOSPITAL: "23";
    /**
     * End-Stage Renal Disease Treatment Facility
     */
    readonly END_STAGE_RENAL_DISEASE_TREATMENT_FACILITY: "65";
    /**
     * Federally Qualified Health Center
     */
    readonly FEDERALLY_QUALIFIED_HEALTH_CENTER: "50";
    /**
     * Group Home
     */
    readonly GROUP_HOME: "14";
    /**
     * Home
     */
    readonly HOME: "12";
    /**
     * Homeless Shelter
     */
    readonly HOMELESS_SHELTER: "04";
    /**
     * Hospice
     */
    readonly HOSPICE: "34";
    /**
     * Independent Clinic
     */
    readonly INDEPENDENT_CLINIC: "49";
    /**
     * Independent Laboratory
     */
    readonly INDEPENDENT_LABORATORY: "81";
    /**
     * Indian Health Service Free-standing Facility
     */
    readonly INDIAN_HEALTH_SERVICE_FREE_STANDING_FACILITY: "05";
    /**
     * Indian Health Service Provider-based Facility
     */
    readonly INDIAN_HEALTH_SERVICE_PROVIDER_BASED_FACILITY: "06";
    /**
     * Inpatient Hospital
     */
    readonly INPATIENT_HOSPITAL: "21";
    /**
     * Inpatient Psychiatric Facility
     */
    readonly INPATIENT_PSYCHIATRIC_FACILITY: "51";
    /**
     * Intermediate Care Facility/Mentally Retarded
     */
    readonly INTERMEDIATE_CARE_FACILITY_MENTALLY_RETARDED: "54";
    /**
     * Mass Immunization Center
     */
    readonly MASS_IMMUNIZATION_CENTER: "60";
    /**
     * Military Treatment Facility
     */
    readonly MILITARY_TREATMENT_FACILITY: "26";
    /**
     * Mobile Unit
     */
    readonly MOBILE_UNIT: "15";
    /**
     * Non-residential Substance Abuse Treatment Facility
     */
    readonly NON_RESIDENTIAL_SUBSTANCE_ABUSE_TREATMENT_FACILITY: "57";
    /**
     * Nursing Facility
     */
    readonly NURSING_FACILITY: "32";
    /**
     * Office
     */
    readonly OFFICE: "11";
    /**
     * Other Place of Service
     */
    readonly OTHER_PLACE_OF_SERVICE: "99";
    /**
     * Outpatient Hospital
     */
    readonly OUTPATIENT_HOSPITAL: "22";
    /**
     * Pharmacy
     */
    readonly PHARMACY: "01";
    /**
     * Psychiatric Facility - Partial Hospitalization
     */
    readonly PSYCHIATRIC_FACILITY_PARTIAL_HOSPITALIZATION: "52";
    /**
     * Psychiatric Residential Treatment Center
     */
    readonly PSYCHIATRIC_RESIDENTIAL_TREATMENT_CENTER: "56";
    /**
     * Residential Substance Abuse Treatment Facility
     */
    readonly RESIDENTIAL_SUBSTANCE_ABUSE_TREATMENT_FACILITY: "55";
    /**
     * Rural Health Clinic
     */
    readonly RURAL_HEALTH_CLINIC: "72";
    /**
     * School
     */
    readonly SCHOOL: "03";
    /**
     * Skilled Nursing Facility
     */
    readonly SKILLED_NURSING_FACILITY: "31";
    /**
     * State or Local Public Health Clinic
     */
    readonly STATE_OR_LOCAL_PUBLIC_HEALTH_CLINIC: "71";
    /**
     * Tribal 638 Free-standing Facility
     */
    readonly TRIBAL_638_FREE_STANDING_FACILITY: "07";
    /**
     * Tribal 638 Provider-based Facility
     */
    readonly TRIBAL_638_PROVIDER_BASED_FACILITY: "08";
    /**
     * Urgent Care Facility
     */
    readonly URGENT_CARE_FACILITY: "20";
};
/**
 * @public
 */
export type EligibilityCheckPlaceOfServiceCode = (typeof EligibilityCheckPlaceOfServiceCode)[keyof typeof EligibilityCheckPlaceOfServiceCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckRequestServiceCodeSystem: {
    /**
     * Current Dental Terminology (CDT) procedure code
     */
    readonly CDT: "CDT";
    /**
     * Current Procedural Terminology (CPT) procedure code
     */
    readonly CPT: "CPT";
    /**
     * Healthcare Common Procedure Coding System (HCPCS) code
     */
    readonly HCPCS: "HCPCS";
    /**
     * ICD-10 Procedure Coding System (ICD-10-PCS) code
     */
    readonly ICD_10_PCS: "ICD-10-PCS";
    /**
     * National Drug Code (NDC)
     */
    readonly NDC: "NDC";
    /**
     * Service Type Code
     */
    readonly STC: "STC";
};
/**
 * @public
 */
export type EligibilityCheckRequestServiceCodeSystem = (typeof EligibilityCheckRequestServiceCodeSystem)[keyof typeof EligibilityCheckRequestServiceCodeSystem];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckRequestProviderType: {
    /**
     * Employer
     */
    readonly EMPLOYER: "EMPLOYER";
    /**
     * Facility
     */
    readonly FACILITY: "FACILITY";
    /**
     * Gateway Provider
     */
    readonly GATEWAY_PROVIDER: "GATEWAY_PROVIDER";
    /**
     * Hospital
     */
    readonly HOSPITAL: "HOSPITAL";
    /**
     * Plan Sponsor
     */
    readonly PLAN_SPONSOR: "PLAN_SPONSOR";
    /**
     * Provider
     */
    readonly PROVIDER: "PROVIDER";
    /**
     * Third Party Administrator
     */
    readonly THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR";
};
/**
 * @public
 */
export type EligibilityCheckRequestProviderType = (typeof EligibilityCheckRequestProviderType)[keyof typeof EligibilityCheckRequestProviderType];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckResponsePatientGender: {
    /**
     * Female
     */
    readonly FEMALE: "FEMALE";
    /**
     * Male
     */
    readonly MALE: "MALE";
    /**
     * Unknown. The payer stated that the patient's gender is unknown.
     */
    readonly REPORTED_UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type EligibilityCheckResponsePatientGender = (typeof EligibilityCheckResponsePatientGender)[keyof typeof EligibilityCheckResponsePatientGender];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckMaintenanceIndicator: {
    /**
     * The payer didn't signal a change to the patient's identifying information.
     */
    readonly NONE: "NONE";
    /**
     * The payer indicated that the patient's identifying information differs from the information you submitted. The values returned in this response reflect the payer's records.
     */
    readonly PAYER_INDICATED: "PAYER_INDICATED";
};
/**
 * @public
 */
export type EligibilityCheckMaintenanceIndicator = (typeof EligibilityCheckMaintenanceIndicator)[keyof typeof EligibilityCheckMaintenanceIndicator];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckEntityProviderCode: {
    /**
     * Admitting
     */
    readonly ADMITTING: "ADMITTING";
    /**
     * Attending
     */
    readonly ATTENDING: "ATTENDING";
    /**
     * Billing
     */
    readonly BILLING: "BILLING";
    /**
     * Consulting
     */
    readonly CONSULTING: "CONSULTING";
    /**
     * Covering
     */
    readonly COVERING: "COVERING";
    /**
     * Home Health Care
     */
    readonly HOME_HEALTH_CARE: "HOME_HEALTH_CARE";
    /**
     * Hospital
     */
    readonly HOSPITAL: "HOSPITAL";
    /**
     * Laboratory
     */
    readonly LABORATORY: "LABORATORY";
    /**
     * Other Physician
     */
    readonly OTHER_PHYSICIAN: "OTHER_PHYSICIAN";
    /**
     * Performing
     */
    readonly PERFORMING: "PERFORMING";
    /**
     * Pharmacist
     */
    readonly PHARMACIST: "PHARMACIST";
    /**
     * Pharmacy
     */
    readonly PHARMACY: "PHARMACY";
    /**
     * Primary Care Physician
     */
    readonly PRIMARY_CARE_PHYSICIAN: "PRIMARY_CARE_PHYSICIAN";
    /**
     * Referring
     */
    readonly REFERRING: "REFERRING";
    /**
     * Rural Health Clinic
     */
    readonly RURAL_HEALTH_CLINIC: "RURAL_HEALTH_CLINIC";
    /**
     * Skilled Nursing Facility
     */
    readonly SKILLED_NURSING_FACILITY: "SKILLED_NURSING_FACILITY";
    /**
     * Submitting
     */
    readonly SUBMITTING: "SUBMITTING";
    /**
     * Supervising
     */
    readonly SUPERVISING: "SUPERVISING";
};
/**
 * @public
 */
export type EligibilityCheckEntityProviderCode = (typeof EligibilityCheckEntityProviderCode)[keyof typeof EligibilityCheckEntityProviderCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckDependentRelationship: {
    /**
     * Cadaver Donor
     */
    readonly CADAVER_DONOR: "CADAVER_DONOR";
    /**
     * Child
     */
    readonly CHILD: "CHILD";
    /**
     * Employee
     */
    readonly EMPLOYEE: "EMPLOYEE";
    /**
     * Life Partner
     */
    readonly LIFE_PARTNER: "LIFE_PARTNER";
    /**
     * Organ Donor
     */
    readonly ORGAN_DONOR: "ORGAN_DONOR";
    /**
     * Other Relationship
     */
    readonly OTHER_RELATIONSHIP: "OTHER_RELATIONSHIP";
    /**
     * Unknown. The payer reported that relationship information is unavailable.
     */
    readonly REPORTED_UNKNOWN: "UNKNOWN";
    /**
     * Spouse
     */
    readonly SPOUSE: "SPOUSE";
};
/**
 * @public
 */
export type EligibilityCheckDependentRelationship = (typeof EligibilityCheckDependentRelationship)[keyof typeof EligibilityCheckDependentRelationship];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckResponseErrorLocation: {
    /**
     * Error from the 2100D loop (dependent name level).
     */
    readonly DEPENDENT: "DEPENDENT";
    /**
     * Error from the 2110D loop (dependent eligibility/benefit information level).
     */
    readonly DEPENDENT_BENEFITS: "DEPENDENT_BENEFITS";
    /**
     * Error from the 2000A loop (envelope/information source level).
     */
    readonly ENVELOPE: "ENVELOPE";
    /**
     * Error from the 2100A loop (payer name level).
     */
    readonly PAYER: "PAYER";
    /**
     * Error from the 2100B loop (provider/information receiver level).
     */
    readonly PROVIDER: "PROVIDER";
    /**
     * Error from the 2100C loop (subscriber name level).
     */
    readonly SUBSCRIBER: "SUBSCRIBER";
    /**
     * Error from the 2110C loop (subscriber eligibility/benefit information level).
     */
    readonly SUBSCRIBER_BENEFITS: "SUBSCRIBER_BENEFITS";
};
/**
 * @public
 */
export type EligibilityCheckResponseErrorLocation = (typeof EligibilityCheckResponseErrorLocation)[keyof typeof EligibilityCheckResponseErrorLocation];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckTraceType: {
    /**
     * Current Transaction Trace Numbers. The payer assigned this trace number to this response.
     */
    readonly CURRENT_TRANSACTION: "CURRENT_TRANSACTION";
    /**
     * Referenced Transaction Trace Numbers. The payer is echoing a trace number that was sent in the original eligibility check request.
     */
    readonly REFERENCED_TRANSACTION: "REFERENCED_TRANSACTION";
};
/**
 * @public
 */
export type EligibilityCheckTraceType = (typeof EligibilityCheckTraceType)[keyof typeof EligibilityCheckTraceType];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckPayerEntityIdentifierCode: {
    /**
     * Employer
     */
    readonly EMPLOYER: "EMPLOYER";
    /**
     * Gateway Provider
     */
    readonly GATEWAY_PROVIDER: "GATEWAY_PROVIDER";
    /**
     * Payer
     */
    readonly PAYER: "PAYER";
    /**
     * Plan Sponsor
     */
    readonly PLAN_SPONSOR: "PLAN_SPONSOR";
    /**
     * Third Party Administrator
     */
    readonly THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR";
};
/**
 * @public
 */
export type EligibilityCheckPayerEntityIdentifierCode = (typeof EligibilityCheckPayerEntityIdentifierCode)[keyof typeof EligibilityCheckPayerEntityIdentifierCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckCoverageLevel: {
    /**
     * Children Only
     */
    readonly CHILDREN_ONLY: "CHILDREN_ONLY";
    /**
     * Dependents Only
     */
    readonly DEPENDENTS_ONLY: "DEPENDENTS_ONLY";
    /**
     * Employee and Children
     */
    readonly EMPLOYEE_AND_CHILDREN: "EMPLOYEE_AND_CHILDREN";
    /**
     * Employee and Spouse
     */
    readonly EMPLOYEE_AND_SPOUSE: "EMPLOYEE_AND_SPOUSE";
    /**
     * Employee Only
     */
    readonly EMPLOYEE_ONLY: "EMPLOYEE_ONLY";
    /**
     * Family
     */
    readonly FAMILY: "FAMILY";
    /**
     * Individual
     */
    readonly INDIVIDUAL: "INDIVIDUAL";
    /**
     * Spouse and Children
     */
    readonly SPOUSE_AND_CHILDREN: "SPOUSE_AND_CHILDREN";
    /**
     * Spouse Only
     */
    readonly SPOUSE_ONLY: "SPOUSE_ONLY";
};
/**
 * @public
 */
export type EligibilityCheckCoverageLevel = (typeof EligibilityCheckCoverageLevel)[keyof typeof EligibilityCheckCoverageLevel];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckDiagnosisCodeSystem: {
    /**
     * International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM), the diagnosis code set maintained by CMS.
     */
    readonly ICD_10_CM: "ICD-10-CM";
};
/**
 * @public
 */
export type EligibilityCheckDiagnosisCodeSystem = (typeof EligibilityCheckDiagnosisCodeSystem)[keyof typeof EligibilityCheckDiagnosisCodeSystem];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckInsuranceType: {
    /**
     * Auto Insurance Policy
     */
    readonly AUTO_INSURANCE_POLICY: "AUTO_INSURANCE_POLICY";
    /**
     * Commercial
     */
    readonly COMMERCIAL: "COMMERCIAL";
    /**
     * Consolidated Omnibus Budget Reconciliation Act (COBRA)
     */
    readonly CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA: "CONSOLIDATED_OMNIBUS_BUDGET_RECONCILIATION_ACT_COBRA";
    /**
     * Disability
     */
    readonly DISABILITY: "DISABILITY";
    /**
     * Disability Benefits
     */
    readonly DISABILITY_BENEFITS: "DISABILITY_BENEFITS";
    /**
     * Exclusive Provider Organization
     */
    readonly EXCLUSIVE_PROVIDER_ORGANIZATION: "EXCLUSIVE_PROVIDER_ORGANIZATION";
    /**
     * Family or Friends
     */
    readonly FAMILY_OR_FRIENDS: "FAMILY_OR_FRIENDS";
    /**
     * Group Policy
     */
    readonly GROUP_POLICY: "GROUP_POLICY";
    /**
     * Health Maintenance Organization (HMO)
     */
    readonly HEALTH_MAINTENANCE_ORGANIZATION_HMO: "HEALTH_MAINTENANCE_ORGANIZATION_HMO";
    /**
     * Health Maintenance Organization (HMO) - Medicare Risk
     */
    readonly HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK: "HEALTH_MAINTENANCE_ORGANIZATION_HMO_MEDICARE_RISK";
    /**
     * Indemnity
     */
    readonly INDEMNITY: "INDEMNITY";
    /**
     * Individual Policy
     */
    readonly INDIVIDUAL_POLICY: "INDIVIDUAL_POLICY";
    /**
     * Life Insurance
     */
    readonly LIFE_INSURANCE: "LIFE_INSURANCE";
    /**
     * Litigation
     */
    readonly LITIGATION: "LITIGATION";
    /**
     * Long Term Care
     */
    readonly LONG_TERM_CARE: "LONG_TERM_CARE";
    /**
     * Long Term Policy
     */
    readonly LONG_TERM_POLICY: "LONG_TERM_POLICY";
    /**
     * Medicaid
     */
    readonly MEDICAID: "MEDICAID";
    /**
     * Medicare Conditionally Primary
     */
    readonly MEDICARE_CONDITIONALLY_PRIMARY: "MEDICARE_CONDITIONALLY_PRIMARY";
    /**
     * Medicare Part A
     */
    readonly MEDICARE_PART_A: "MEDICARE_PART_A";
    /**
     * Medicare Part B
     */
    readonly MEDICARE_PART_B: "MEDICARE_PART_B";
    /**
     * Medicare Point of Service (POS)
     */
    readonly MEDICARE_POINT_OF_SERVICE_POS: "MEDICARE_POINT_OF_SERVICE_POS";
    /**
     * Medicare Primary
     */
    readonly MEDICARE_PRIMARY: "MEDICARE_PRIMARY";
    /**
     * Medicare Secondary Black Lung
     */
    readonly MEDICARE_SECONDARY_BLACK_LUNG: "MEDICARE_SECONDARY_BLACK_LUNG";
    /**
     * Medicare Secondary Disabled Beneficiary Under Age 65 with Large Group Health Plan (LGHP)
     */
    readonly MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP: "MEDICARE_SECONDARY_DISABLED_BENEFICIARY_UNDER_AGE_65_WITH_LARGE_GROUP_HEALTH_PLAN_LGHP";
    /**
     * Medicare Secondary End-Stage Renal Disease Beneficiary in the Mandated Coordination Period with an Employer's Group Health Plan
     */
    readonly MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN: "MEDICARE_SECONDARY_ENDSTAGE_RENAL_DISEASE_BENEFICIARY_IN_THE_MANDATED_COORDINATION_PERIOD_WITH_AN_EMPLOYERS_GROUP_HEALTH_PLAN";
    /**
     * Medicare Secondary, No-fault Insurance including Auto is Primary
     */
    readonly MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY: "MEDICARE_SECONDARY_NOFAULT_INSURANCE_INCLUDING_AUTO_IS_PRIMARY";
    /**
     * Medicare Secondary, Other Liability Insurance is Primary
     */
    readonly MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY: "MEDICARE_SECONDARY_OTHER_LIABILITY_INSURANCE_IS_PRIMARY";
    /**
     * Medicare Secondary Public Health Service (PHS) or Other Federal Agency
     */
    readonly MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY: "MEDICARE_SECONDARY_PUBLIC_HEALTH_SERVICE_PHS_OR_OTHER_FEDERAL_AGENCY";
    /**
     * Medicare Secondary Veteran's Administration
     */
    readonly MEDICARE_SECONDARY_VETERANS_ADMINISTRATION: "MEDICARE_SECONDARY_VETERANS_ADMINISTRATION";
    /**
     * Medicare Secondary Worker's Compensation
     */
    readonly MEDICARE_SECONDARY_WORKERS_COMPENSATION: "MEDICARE_SECONDARY_WORKERS_COMPENSATION";
    /**
     * Medicare Secondary Working Aged Beneficiary or Spouse with Employer Group Health Plan
     */
    readonly MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN: "MEDICARE_SECONDARY_WORKING_AGED_BENEFICIARY_OR_SPOUSE_WITH_EMPLOYER_GROUP_HEALTH_PLAN";
    /**
     * Medigap Part A
     */
    readonly MEDIGAP_PART_A: "MEDIGAP_PART_A";
    /**
     * Medigap Part B
     */
    readonly MEDIGAP_PART_B: "MEDIGAP_PART_B";
    /**
     * Multiple Options Health Plan
     */
    readonly MULTIPLE_OPTIONS_HEALTH_PLAN: "MULTIPLE_OPTIONS_HEALTH_PLAN";
    /**
     * Other. When Medicare or a Medicare Part D administrator returns this value, it indicates Medicare Part D coverage.
     */
    readonly OTHER: "OTHER";
    /**
     * Personal
     */
    readonly PERSONAL: "PERSONAL";
    /**
     * Personal Payment (Cash - No Insurance)
     */
    readonly PERSONAL_PAYMENT_CASH_NO_INSURANCE: "PERSONAL_PAYMENT_CASH_NO_INSURANCE";
    /**
     * Point of Service (POS)
     */
    readonly POINT_OF_SERVICE_POS: "POINT_OF_SERVICE_POS";
    /**
     * Preferred Provider Organization (PPO)
     */
    readonly PREFERRED_PROVIDER_ORGANIZATION_PPO: "PREFERRED_PROVIDER_ORGANIZATION_PPO";
    /**
     * Property Insurance - Personal
     */
    readonly PROPERTY_INSURANCE_PERSONAL: "PROPERTY_INSURANCE_PERSONAL";
    /**
     * Property Insurance - Real
     */
    readonly PROPERTY_INSURANCE_REAL: "PROPERTY_INSURANCE_REAL";
    /**
     * Qualified Medicare Beneficiary
     */
    readonly QUALIFIED_MEDICARE_BENEFICIARY: "QUALIFIED_MEDICARE_BENEFICIARY";
    /**
     * Special Low Income Medicare Beneficiary
     */
    readonly SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY: "SPECIAL_LOW_INCOME_MEDICARE_BENEFICIARY";
    /**
     * Supplemental Policy
     */
    readonly SUPPLEMENTAL_POLICY: "SUPPLEMENTAL_POLICY";
    /**
     * Tax Equity Fiscal Responsibility Act (TEFRA)
     */
    readonly TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA: "TAX_EQUITY_FISCAL_RESPONSIBILITY_ACT_TEFRA";
    /**
     * Workers Compensation
     */
    readonly WORKERS_COMPENSATION: "WORKERS_COMPENSATION";
    /**
     * Wrap Up Policy
     */
    readonly WRAP_UP_POLICY: "WRAP_UP_POLICY";
};
/**
 * @public
 */
export type EligibilityCheckInsuranceType = (typeof EligibilityCheckInsuranceType)[keyof typeof EligibilityCheckInsuranceType];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckNetworkIndicator: {
    /**
     * In and Out of Network. The benefit applies to both in-network and out-of-network care.
     */
    readonly IN_AND_OUT_OF_NETWORK: "IN_AND_OUT_OF_NETWORK";
    /**
     * In Network. The benefit applies when the service is delivered in-network.
     */
    readonly IN_NETWORK: "IN_NETWORK";
    /**
     * Out of Network. The benefit applies when the service is delivered out-of-network.
     */
    readonly OUT_OF_NETWORK: "OUT_OF_NETWORK";
};
/**
 * @public
 */
export type EligibilityCheckNetworkIndicator = (typeof EligibilityCheckNetworkIndicator)[keyof typeof EligibilityCheckNetworkIndicator];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckPriorAuthIndicator: {
    /**
     * Not Required. The benefit isn't subject to prior authorization or certification.
     */
    readonly NOT_REQUIRED: "NOT_REQUIRED";
    /**
     * Required. The benefit is subject to prior authorization or certification.
     */
    readonly REQUIRED: "REQUIRED";
};
/**
 * @public
 */
export type EligibilityCheckPriorAuthIndicator = (typeof EligibilityCheckPriorAuthIndicator)[keyof typeof EligibilityCheckPriorAuthIndicator];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckEntityRelationship: {
    /**
     * Child
     */
    readonly CHILD: "CHILD";
    /**
     * Domestic Partner
     */
    readonly DOMESTIC_PARTNER: "DOMESTIC_PARTNER";
    /**
     * Employee
     */
    readonly EMPLOYEE: "EMPLOYEE";
    /**
     * Other
     */
    readonly OTHER: "OTHER";
    /**
     * Parent
     */
    readonly PARENT: "PARENT";
    /**
     * Spouse
     */
    readonly SPOUSE: "SPOUSE";
    /**
     * Unknown
     */
    readonly UNKNOWN_RELATIONSHIP: "UNKNOWN_RELATIONSHIP";
};
/**
 * @public
 */
export type EligibilityCheckEntityRelationship = (typeof EligibilityCheckEntityRelationship)[keyof typeof EligibilityCheckEntityRelationship];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckRelatedEntityIdentifierCode: {
    /**
     * Contracted Service Provider
     */
    readonly CONTRACTED_SERVICE_PROVIDER: "CONTRACTED_SERVICE_PROVIDER";
    /**
     * Employer
     */
    readonly EMPLOYER: "EMPLOYER";
    /**
     * Facility
     */
    readonly FACILITY: "FACILITY";
    /**
     * Gateway Provider
     */
    readonly GATEWAY_PROVIDER: "GATEWAY_PROVIDER";
    /**
     * Group
     */
    readonly GROUP: "GROUP";
    /**
     * Independent Physicians Association
     */
    readonly INDEPENDENT_PHYSICIANS_ASSOCIATION: "INDEPENDENT_PHYSICIANS_ASSOCIATION";
    /**
     * Insured or Subscriber
     */
    readonly INSURED_OR_SUBSCRIBER: "INSURED_OR_SUBSCRIBER";
    /**
     * Legal Representative
     */
    readonly LEGAL_REPRESENTATIVE: "LEGAL_REPRESENTATIVE";
    /**
     * Managed Care Organization
     */
    readonly MANAGED_CARE_ORGANIZATION: "MANAGED_CARE_ORGANIZATION";
    /**
     * Organization Completing Configuration Change
     */
    readonly ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE: "ORGANIZATION_COMPLETING_CONFIGURATION_CHANGE";
    /**
     * Origin Carrier
     */
    readonly ORIGIN_CARRIER: "ORIGIN_CARRIER";
    /**
     * Other Physician
     */
    readonly OTHER_PHYSICIAN: "OTHER_PHYSICIAN";
    /**
     * Party Performing Verification
     */
    readonly PARTY_PERFORMING_VERIFICATION: "PARTY_PERFORMING_VERIFICATION";
    /**
     * Payer
     */
    readonly PAYER: "PAYER";
    /**
     * Plan Sponsor
     */
    readonly PLAN_SPONSOR: "PLAN_SPONSOR";
    /**
     * Preferred Provider Organization
     */
    readonly PREFERRED_PROVIDER_ORGANIZATION: "PREFERRED_PROVIDER_ORGANIZATION";
    /**
     * Primary Care Provider
     */
    readonly PRIMARY_CARE_PROVIDER: "PRIMARY_CARE_PROVIDER";
    /**
     * Primary Payer
     */
    readonly PRIMARY_PAYER: "PRIMARY_PAYER";
    /**
     * Prior Insurance Carrier
     */
    readonly PRIOR_INSURANCE_CARRIER: "PRIOR_INSURANCE_CARRIER";
    /**
     * Provider
     */
    readonly PROVIDER: "PROVIDER";
    /**
     * Secondary Payer
     */
    readonly SECONDARY_PAYER: "SECONDARY_PAYER";
    /**
     * Tertiary Payer
     */
    readonly TERTIARY_PAYER: "TERTIARY_PAYER";
    /**
     * Third Party Administrator
     */
    readonly THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR";
    /**
     * Utilization Management Organization
     */
    readonly UTILIZATION_MANAGEMENT_ORGANIZATION: "UTILIZATION_MANAGEMENT_ORGANIZATION";
    /**
     * Vendor
     */
    readonly VENDOR: "VENDOR";
};
/**
 * @public
 */
export type EligibilityCheckRelatedEntityIdentifierCode = (typeof EligibilityCheckRelatedEntityIdentifierCode)[keyof typeof EligibilityCheckRelatedEntityIdentifierCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckResponseServiceCodeSystem: {
    /**
     * Current Dental Terminology (CDT), the dental procedure code set maintained by the American Dental Association.
     */
    readonly CDT: "CDT";
    /**
     * Current Procedural Terminology (CPT), the procedure code set maintained by the American Medical Association.
     */
    readonly CPT: "CPT";
    /**
     * Healthcare Common Procedure Coding System (HCPCS), the procedure and supply code set maintained by CMS.
     */
    readonly HCPCS: "HCPCS";
    /**
     * ICD-10 Procedure Coding System (ICD-10-PCS), the inpatient procedure code set maintained by CMS.
     */
    readonly ICD_10_PCS: "ICD-10-PCS";
    /**
     * National Drug Code (NDC), the drug identifier maintained by the FDA.
     */
    readonly NDC: "NDC";
    /**
     * Service Type Code. The X12 code list that identifies categories of service, like `30` (Health Benefit Plan Coverage).
     */
    readonly STC: "STC";
};
/**
 * @public
 */
export type EligibilityCheckResponseServiceCodeSystem = (typeof EligibilityCheckResponseServiceCodeSystem)[keyof typeof EligibilityCheckResponseServiceCodeSystem];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckServiceDeliveryLimitPattern: {
    /**
     * A.M.
     */
    readonly AM: "AM";
    /**
     * Any Shift
     */
    readonly ANY_SHIFT: "ANY_SHIFT";
    /**
     * As Directed
     */
    readonly AS_DIRECTED: "AS_DIRECTED";
    /**
     * 1st Shift (Normal Working Hours)
     */
    readonly FIRST_SHIFT: "FIRST_SHIFT";
    /**
     * None. Also used to cancel or override a previously sent pattern.
     */
    readonly NONE: "NONE";
    /**
     * P.M.
     */
    readonly PM: "PM";
    /**
     * 2nd Shift
     */
    readonly SECOND_SHIFT: "SECOND_SHIFT";
    /**
     * 3rd Shift
     */
    readonly THIRD_SHIFT: "THIRD_SHIFT";
};
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitPattern = (typeof EligibilityCheckServiceDeliveryLimitPattern)[keyof typeof EligibilityCheckServiceDeliveryLimitPattern];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckServiceDeliveryLimitSchedule: {
    /**
     * As Directed
     */
    readonly AS_DIRECTED: "AS_DIRECTED";
    /**
     * Daily Mon. through Fri.
     */
    readonly DAILY_MONDAY_THROUGH_FRIDAY: "DAILY_MONDAY_THROUGH_FRIDAY";
    /**
     * 5th Week of the Month
     */
    readonly FIFTH_WEEK_OF_THE_MONTH: "FIFTH_WEEK_OF_THE_MONTH";
    /**
     * 1st & 3rd Weeks of the Month
     */
    readonly FIRST_AND_THIRD_WEEKS_OF_THE_MONTH: "FIRST_AND_THIRD_WEEKS_OF_THE_MONTH";
    /**
     * 1st Week of the Month
     */
    readonly FIRST_WEEK_OF_THE_MONTH: "FIRST_WEEK_OF_THE_MONTH";
    /**
     * 1st Working Day of Period
     */
    readonly FIRST_WORKING_DAY_OF_PERIOD: "FIRST_WORKING_DAY_OF_PERIOD";
    /**
     * 4th Week of the Month
     */
    readonly FOURTH_WEEK_OF_THE_MONTH: "FOURTH_WEEK_OF_THE_MONTH";
    /**
     * Friday
     */
    readonly FRIDAY: "FRIDAY";
    /**
     * 1/2 By Wed., Bal. By Fri. Half the service is delivered by Wednesday and the balance by Friday.
     */
    readonly HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY: "HALF_BY_WEDNESDAY_BALANCE_BY_FRIDAY";
    /**
     * 1/2 Mon. & 1/2 Thurs. The service is split, with half delivered on Monday and half on Thursday.
     */
    readonly HALF_MONDAY_AND_HALF_THURSDAY: "HALF_MONDAY_AND_HALF_THURSDAY";
    /**
     * 1/2 Mon. & 1/2 Wed. The service is split, with half delivered on Monday and half on Wednesday.
     */
    readonly HALF_MONDAY_AND_HALF_WEDNESDAY: "HALF_MONDAY_AND_HALF_WEDNESDAY";
    /**
     * 1/2 Tue. & 1/2 Fri. The service is split, with half delivered on Tuesday and half on Friday.
     */
    readonly HALF_TUESDAY_AND_HALF_FRIDAY: "HALF_TUESDAY_AND_HALF_FRIDAY";
    /**
     * 1/2 Tues. & 1/2 Thurs. The service is split, with half delivered on Tuesday and half on Thursday.
     */
    readonly HALF_TUESDAY_AND_HALF_THURSDAY: "HALF_TUESDAY_AND_HALF_THURSDAY";
    /**
     * 1/2 Wed. & 1/2 Fri. The service is split, with half delivered on Wednesday and half on Friday.
     */
    readonly HALF_WEDNESDAY_AND_HALF_FRIDAY: "HALF_WEDNESDAY_AND_HALF_FRIDAY";
    /**
     * Immediately
     */
    readonly IMMEDIATELY: "IMMEDIATELY";
    /**
     * Last Working Day of Period
     */
    readonly LAST_WORKING_DAY_OF_PERIOD: "LAST_WORKING_DAY_OF_PERIOD";
    /**
     * Monday
     */
    readonly MONDAY: "MONDAY";
    /**
     * Monday through Friday
     */
    readonly MONDAY_THROUGH_FRIDAY: "MONDAY_THROUGH_FRIDAY";
    /**
     * Monday through Saturday
     */
    readonly MONDAY_THROUGH_SATURDAY: "MONDAY_THROUGH_SATURDAY";
    /**
     * Monday through Sunday
     */
    readonly MONDAY_THROUGH_SUNDAY: "MONDAY_THROUGH_SUNDAY";
    /**
     * Monday through Thursday
     */
    readonly MONDAY_THROUGH_THURSDAY: "MONDAY_THROUGH_THURSDAY";
    /**
     * Monday, Tuesday and Friday
     */
    readonly MONDAY_TUESDAY_AND_FRIDAY: "MONDAY_TUESDAY_AND_FRIDAY";
    /**
     * Monday, Tuesday and Thursday
     */
    readonly MONDAY_TUESDAY_AND_THURSDAY: "MONDAY_TUESDAY_AND_THURSDAY";
    /**
     * Monday, Wednesday and Thursday
     */
    readonly MONDAY_WEDNESDAY_AND_THURSDAY: "MONDAY_WEDNESDAY_AND_THURSDAY";
    /**
     * None. Also used to cancel or override a previously sent pattern.
     */
    readonly NONE: "NONE";
    /**
     * Once Anytime Mon. through Fri.
     */
    readonly ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY: "ONCE_ANYTIME_MONDAY_THROUGH_FRIDAY";
    /**
     * Saturday
     */
    readonly SATURDAY: "SATURDAY";
    /**
     * 2nd & 4th Weeks of the Month
     */
    readonly SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH: "SECOND_AND_FOURTH_WEEKS_OF_THE_MONTH";
    /**
     * 2nd Week of the Month
     */
    readonly SECOND_WEEK_OF_THE_MONTH: "SECOND_WEEK_OF_THE_MONTH";
    /**
     * Sunday
     */
    readonly SUNDAY: "SUNDAY";
    /**
     * 1/3 Mon., 1/3 Wed., 1/3 Fri. The service is split into thirds delivered on Monday, Wednesday, and Friday.
     */
    readonly THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY: "THIRD_MONDAY_THIRD_WEDNESDAY_AND_THIRD_FRIDAY";
    /**
     * 3rd Week of the Month
     */
    readonly THIRD_WEEK_OF_THE_MONTH: "THIRD_WEEK_OF_THE_MONTH";
    /**
     * Thursday
     */
    readonly THURSDAY: "THURSDAY";
    /**
     * Tuesday
     */
    readonly TUESDAY: "TUESDAY";
    /**
     * Tuesday through Friday
     */
    readonly TUESDAY_THROUGH_FRIDAY: "TUESDAY_THROUGH_FRIDAY";
    /**
     * Tuesday, Thursday and Friday
     */
    readonly TUESDAY_THURSDAY_AND_FRIDAY: "TUESDAY_THURSDAY_AND_FRIDAY";
    /**
     * Wednesday
     */
    readonly WEDNESDAY: "WEDNESDAY";
    /**
     * Wednesday and Thursday
     */
    readonly WEDNESDAY_AND_THURSDAY: "WEDNESDAY_AND_THURSDAY";
    /**
     * Whenever Necessary
     */
    readonly WHENEVER_NECESSARY: "WHENEVER_NECESSARY";
};
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitSchedule = (typeof EligibilityCheckServiceDeliveryLimitSchedule)[keyof typeof EligibilityCheckServiceDeliveryLimitSchedule];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckServiceDeliveryLimitFrequencyQualifier: {
    /**
     * Days
     */
    readonly DAYS: "DAYS";
    /**
     * Months
     */
    readonly MONTHS: "MONTHS";
    /**
     * Visit
     */
    readonly VISIT: "VISIT";
    /**
     * Week
     */
    readonly WEEK: "WEEK";
    /**
     * Years
     */
    readonly YEARS: "YEARS";
};
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitFrequencyQualifier = (typeof EligibilityCheckServiceDeliveryLimitFrequencyQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitFrequencyQualifier];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckServiceDeliveryLimitPeriodQualifier: {
    /**
     * Calendar Year
     */
    readonly CALENDAR_YEAR: "CALENDAR_YEAR";
    /**
     * Contract. The term of the patient's contract with the plan.
     */
    readonly CONTRACT: "CONTRACT";
    /**
     * Day
     */
    readonly DAY: "DAY";
    /**
     * Episode. A single episode of care.
     */
    readonly EPISODE: "EPISODE";
    /**
     * Exceeded. The patient has gone past the limit.
     */
    readonly EXCEEDED: "EXCEEDED";
    /**
     * Hour
     */
    readonly HOUR: "HOUR";
    /**
     * Lifetime
     */
    readonly LIFETIME: "LIFETIME";
    /**
     * Lifetime Remaining. The portion of the lifetime limit the patient hasn't used yet.
     */
    readonly LIFETIME_REMAINING: "LIFETIME_REMAINING";
    /**
     * Month
     */
    readonly MONTH: "MONTH";
    /**
     * Not Exceeded. The patient hasn't reached the limit.
     */
    readonly NOT_EXCEEDED: "NOT_EXCEEDED";
    /**
     * Outlier. Applies to care that falls outside the plan's normal limits.
     */
    readonly OUTLIER: "OUTLIER";
    /**
     * Remaining. The portion of the limit the patient hasn't used yet.
     */
    readonly REMAINING: "REMAINING";
    /**
     * Service Year. The plan's own 12-month benefit year, which may not align with the calendar year.
     */
    readonly SERVICE_YEAR: "SERVICE_YEAR";
    /**
     * Visit
     */
    readonly VISIT: "VISIT";
    /**
     * Week
     */
    readonly WEEK: "WEEK";
    /**
     * Years
     */
    readonly YEARS: "YEARS";
    /**
     * Year to Date. Accumulated from the start of the year through the date of the response.
     */
    readonly YEAR_TO_DATE: "YEAR_TO_DATE";
};
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitPeriodQualifier = (typeof EligibilityCheckServiceDeliveryLimitPeriodQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitPeriodQualifier];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckServiceDeliveryLimitQuantityQualifier: {
    /**
     * Days
     */
    readonly DAYS: "DAYS";
    /**
     * Hours
     */
    readonly HOURS: "HOURS";
    /**
     * Month
     */
    readonly MONTH: "MONTH";
    /**
     * Units
     */
    readonly UNITS: "UNITS";
    /**
     * Visits
     */
    readonly VISITS: "VISITS";
};
/**
 * @public
 */
export type EligibilityCheckServiceDeliveryLimitQuantityQualifier = (typeof EligibilityCheckServiceDeliveryLimitQuantityQualifier)[keyof typeof EligibilityCheckServiceDeliveryLimitQuantityQualifier];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckTimePeriod: {
    /**
     * Admission. Applies per hospital admission.
     */
    readonly ADMISSION: "ADMISSION";
    /**
     * Calendar Year. For a deductible, this is the patient's total for the year rather than the amount they still owe.
     */
    readonly CALENDAR_YEAR: "CALENDAR_YEAR";
    /**
     * Contract. The term of the patient's contract with the plan.
     */
    readonly CONTRACT: "CONTRACT";
    /**
     * Day
     */
    readonly DAY: "DAY";
    /**
     * Episode. A single episode of care.
     */
    readonly EPISODE: "EPISODE";
    /**
     * Exceeded. The patient has gone past the limit.
     */
    readonly EXCEEDED: "EXCEEDED";
    /**
     * Hour
     */
    readonly HOUR: "HOUR";
    /**
     * Lifetime
     */
    readonly LIFETIME: "LIFETIME";
    /**
     * Lifetime Remaining. The portion of the lifetime limit the patient hasn't used yet.
     */
    readonly LIFETIME_REMAINING: "LIFETIME_REMAINING";
    /**
     * Month
     */
    readonly MONTH: "MONTH";
    /**
     * 24 Hours
     */
    readonly N24_HOURS: "24_HOURS";
    /**
     * Not Exceeded. The patient hasn't reached the limit.
     */
    readonly NOT_EXCEEDED: "NOT_EXCEEDED";
    /**
     * Outlier. Applies to care that falls outside the plan's normal limits.
     */
    readonly OUTLIER: "OUTLIER";
    /**
     * Remaining. For a deductible, this is the amount the patient still owes rather than their total for the year.
     */
    readonly REMAINING: "REMAINING";
    /**
     * Service Year. The plan's own 12-month benefit year, which may not align with the calendar year.
     */
    readonly SERVICE_YEAR: "SERVICE_YEAR";
    /**
     * Visit
     */
    readonly VISIT: "VISIT";
    /**
     * Week
     */
    readonly WEEK: "WEEK";
    /**
     * Years
     */
    readonly YEARS: "YEARS";
    /**
     * Year to Date. Accumulated from the start of the year through the date of the response.
     */
    readonly YEAR_TO_DATE: "YEAR_TO_DATE";
};
/**
 * @public
 */
export type EligibilityCheckTimePeriod = (typeof EligibilityCheckTimePeriod)[keyof typeof EligibilityCheckTimePeriod];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckQuantityQualifier: {
    /**
     * Covered - Actual. A confirmed count of covered units.
     */
    readonly COVERED_ACTUAL: "COVERED_ACTUAL";
    /**
     * Covered - Estimated. An estimated count of covered units.
     */
    readonly COVERED_ESTIMATED: "COVERED_ESTIMATED";
    /**
     * Days
     */
    readonly DAYS: "DAYS";
    /**
     * Deductible Blood Units. The number of units of blood the patient must pay for before the plan covers them.
     */
    readonly DEDUCTIBLE_BLOOD_UNITS: "DEDUCTIBLE_BLOOD_UNITS";
    /**
     * Hours
     */
    readonly HOURS: "HOURS";
    /**
     * Life-time Reserve - Actual. A confirmed count of Medicare lifetime reserve days.
     */
    readonly LIFE_TIME_RESERVE_ACTUAL: "LIFE_TIME_RESERVE_ACTUAL";
    /**
     * Life-time Reserve - Estimated. An estimated count of Medicare lifetime reserve days.
     */
    readonly LIFE_TIME_RESERVE_ESTIMATED: "LIFE_TIME_RESERVE_ESTIMATED";
    /**
     * Maximum
     */
    readonly MAXIMUM: "MAXIMUM";
    /**
     * Minimum
     */
    readonly MINIMUM: "MINIMUM";
    /**
     * Month
     */
    readonly MONTH: "MONTH";
    /**
     * Number of Co-insurance Days
     */
    readonly NUMBER_OF_CO_INSURANCE_DAYS: "NUMBER_OF_CO_INSURANCE_DAYS";
    /**
     * Number of Services or Procedures
     */
    readonly NUMBER_OF_SERVICES_OR_PROCEDURES: "NUMBER_OF_SERVICES_OR_PROCEDURES";
    /**
     * Quantity Approved. The number of units the payer has authorized.
     */
    readonly QUANTITY_APPROVED: "QUANTITY_APPROVED";
    /**
     * Quantity Used. The portion of the benefit the patient has already consumed.
     */
    readonly QUANTITY_USED: "QUANTITY_USED";
    /**
     * Visits
     */
    readonly VISITS: "VISITS";
    /**
     * Years
     */
    readonly YEARS: "YEARS";
};
/**
 * @public
 */
export type EligibilityCheckQuantityQualifier = (typeof EligibilityCheckQuantityQualifier)[keyof typeof EligibilityCheckQuantityQualifier];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckInvalidEntryReasonCode: {
    /**
     * Required amount is missing for a benefit that expects an amount.
     */
    readonly MISSING_AMOUNT: "MISSING_AMOUNT";
    /**
     * Required percent is missing for a benefit that expects a percent.
     */
    readonly MISSING_PERCENT: "MISSING_PERCENT";
    /**
     * Benefit has an unexpected amount value.
     */
    readonly UNEXPECTED_AMOUNT: "UNEXPECTED_AMOUNT";
    /**
     * Benefit has an unexpected percent value.
     */
    readonly UNEXPECTED_PERCENT: "UNEXPECTED_PERCENT";
};
/**
 * @public
 */
export type EligibilityCheckInvalidEntryReasonCode = (typeof EligibilityCheckInvalidEntryReasonCode)[keyof typeof EligibilityCheckInvalidEntryReasonCode];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckCoverageStatus: {
    /**
     * The patient has active coverage for the specified service.
     */
    readonly ACTIVE_COVERAGE: "ACTIVE_COVERAGE";
    /**
     * The patient has active coverage under a full risk capitation arrangement, where the provider receives a fixed payment per patient regardless of the services provided.
     */
    readonly ACTIVE_FULL_RISK_CAPITATION: "ACTIVE_FULL_RISK_CAPITATION";
    /**
     * The patient has active coverage, but the payer is investigating the patient's eligibility or coverage details.
     */
    readonly ACTIVE_PENDING_INVESTIGATION: "ACTIVE_PENDING_INVESTIGATION";
    /**
     * The patient has active coverage where some services are capitated (the provider receives a fixed payment) and others aren't.
     */
    readonly ACTIVE_SERVICES_CAPITATED: "ACTIVE_SERVICES_CAPITATED";
    /**
     * The patient has active coverage where services provided by the primary care physician are capitated (the provider receives a fixed payment).
     */
    readonly ACTIVE_SERVICES_CAPITATED_TO_PRIMARY_CARE_PROVIDER: "ACTIVE_SERVICES_CAPITATED_TO_PRIMARY_CARE_PROVIDER";
    /**
     * The patient doesn't have active coverage for the specified service.
     */
    readonly INACTIVE: "INACTIVE";
    /**
     * The patient's coverage is inactive while the payer updates their eligibility information.
     */
    readonly INACTIVE_PENDING_ELIGIBILITY_UPDATE: "INACTIVE_PENDING_ELIGIBILITY_UPDATE";
    /**
     * The patient's coverage is inactive while the payer investigates the patient's eligibility or coverage details.
     */
    readonly INACTIVE_PENDING_INVESTIGATION: "INACTIVE_PENDING_INVESTIGATION";
};
/**
 * @public
 */
export type EligibilityCheckCoverageStatus = (typeof EligibilityCheckCoverageStatus)[keyof typeof EligibilityCheckCoverageStatus];
/**
 * @public
 * @enum
 */
export declare const EligibilityCheckProviderEntityIdentifierCode: {
    /**
     * Employer
     */
    readonly EMPLOYER: "EMPLOYER";
    /**
     * Facility
     */
    readonly FACILITY: "FACILITY";
    /**
     * Gateway Provider
     */
    readonly GATEWAY_PROVIDER: "GATEWAY_PROVIDER";
    /**
     * Hospital
     */
    readonly HOSPITAL: "HOSPITAL";
    /**
     * Payer
     */
    readonly PAYER: "PAYER";
    /**
     * Plan Sponsor
     */
    readonly PLAN_SPONSOR: "PLAN_SPONSOR";
    /**
     * Provider
     */
    readonly PROVIDER: "PROVIDER";
    /**
     * Third Party Administrator
     */
    readonly THIRD_PARTY_ADMINISTRATOR: "THIRD_PARTY_ADMINISTRATOR";
};
/**
 * @public
 */
export type EligibilityCheckProviderEntityIdentifierCode = (typeof EligibilityCheckProviderEntityIdentifierCode)[keyof typeof EligibilityCheckProviderEntityIdentifierCode];
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
