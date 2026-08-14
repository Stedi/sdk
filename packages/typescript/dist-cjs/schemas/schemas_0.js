"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalClaimSubmissionSubmitter$ = exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$ = exports.ProfessionalClaimSubmissionServiceLine$ = exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$ = exports.ProfessionalClaimSubmissionServiceFacility$ = exports.ProfessionalClaimSubmissionResubmission$ = exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionRenderingProvider$ = exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$ = exports.ProfessionalClaimSubmissionReferringProvider$ = exports.ProfessionalClaimSubmissionReferenceNumbers$ = exports.ProfessionalClaimSubmissionProcedureCode$ = exports.ProfessionalClaimSubmissionPersonName$ = exports.ProfessionalClaimSubmissionPayer$ = exports.ProfessionalClaimSubmissionPatientCondition$ = exports.ProfessionalClaimSubmissionPatient$ = exports.ProfessionalClaimSubmissionOtherPayer$ = exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$ = exports.ProfessionalClaimSubmissionOtherInsured$ = exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionOrderingProvider$ = exports.ProfessionalClaimSubmissionInsured$ = exports.ProfessionalClaimSubmissionEncounter$ = exports.ProfessionalClaimSubmissionDrugIdentification$ = exports.ProfessionalClaimSubmissionDateRange$ = exports.ProfessionalClaimSubmissionData$ = exports.ProfessionalClaimSubmissionContact$ = exports.ProfessionalClaimSubmissionClinicalDates$ = exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionBillingProvider$ = exports.ProfessionalClaimSubmissionBilling$ = exports.ProfessionalClaimSubmissionAuthorization$ = exports.ProfessionalClaimSubmissionAttachment$ = exports.ProfessionalClaimSubmissionAddress$ = exports.GetProfessionalClaimSubmissionOutput$ = exports.GetProfessionalClaimSubmissionInput$ = exports.CreateProfessionalClaimSubmissionOutput$ = exports.CreateProfessionalClaimSubmissionInput$ = exports.ClaimEditError$ = exports.errorTypeRegistries = exports.TooManyRequestsException$ = exports.NotFoundException$ = exports.InvalidRequestException$ = exports.InternalServerException$ = exports.ForbiddenException$ = exports.ConflictException$ = exports.AuthenticationFailedException$ = exports.InternalFailureException$ = exports.ClaimEditException$ = exports.StediServiceException$ = void 0;
exports.ValidateProfessionalClaimSubmission$ = exports.GetProfessionalClaimSubmission$ = exports.CreateProfessionalClaimSubmission$ = exports.ProfessionalClaimSubmissionTaxId$ = exports.ProfessionalClaimSubmissionQualifiedPersonName$ = exports.ProfessionalClaimSubmissionQualifiedOrganizationName$ = exports.ProfessionalClaimSubmissionQualifiedName$ = exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$ = exports.ProfessionalClaimSubmissionOtherPayerId$ = exports.ProfessionalClaimSubmissionClaimNote$ = exports.ValidationFailure$ = exports.ValidateProfessionalClaimSubmissionOutput$ = exports.ValidateProfessionalClaimSubmissionInput$ = exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionSupervisingProvider$ = void 0;
const _AFE = "AuthenticationFailedException";
const _CE = "ConflictException";
const _CEE = "ClaimEditException";
const _CEEl = "ClaimEditError";
const _CEEla = "ClaimEditErrors";
const _CPCS = "CreateProfessionalClaimSubmission";
const _CPCSI = "CreateProfessionalClaimSubmissionInput";
const _CPCSO = "CreateProfessionalClaimSubmissionOutput";
const _FE = "ForbiddenException";
const _GPCS = "GetProfessionalClaimSubmission";
const _GPCSI = "GetProfessionalClaimSubmissionInput";
const _GPCSO = "GetProfessionalClaimSubmissionOutput";
const _IFE = "InternalFailureException";
const _IK = "Idempotency-Key";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServerException";
const _NFE = "NotFoundException";
const _PCSA = "ProfessionalClaimSubmissionAddress";
const _PCSAL = "ProfessionalClaimSubmissionAttachmentList";
const _PCSAr = "ProfessionalClaimSubmissionAttachment";
const _PCSAro = "ProfessionalClaimSubmissionAuthorization";
const _PCSB = "ProfessionalClaimSubmissionBilling";
const _PCSBP = "ProfessionalClaimSubmissionBillingProvider";
const _PCSBPI = "ProfessionalClaimSubmissionBillingProviderIdentifiers";
const _PCSC = "ProfessionalClaimSubmissionContact";
const _PCSCD = "ProfessionalClaimSubmissionClinicalDates";
const _PCSCN = "ProfessionalClaimSubmissionClaimNote";
const _PCSCNT = "ProfessionalClaimSubmissionClaimNoteText";
const _PCSD = "ProfessionalClaimSubmissionData";
const _PCSDI = "ProfessionalClaimSubmissionDrugIdentification";
const _PCSDOB = "ProfessionalClaimSubmissionDateOfBirth";
const _PCSDR = "ProfessionalClaimSubmissionDateRange";
const _PCSE = "ProfessionalClaimSubmissionEmail";
const _PCSEr = "ProfessionalClaimSubmissionEncounter";
const _PCSGC = "ProfessionalClaimSubmissionGenderCode";
const _PCSI = "ProfessionalClaimSubmissionInsured";
const _PCSMI = "ProfessionalClaimSubmissionMemberId";
const _PCSOI = "ProfessionalClaimSubmissionOtherInsured";
const _PCSOIA = "ProfessionalClaimSubmissionOtherInsuredAuthorization";
const _PCSOIL = "ProfessionalClaimSubmissionOtherInsuredList";
const _PCSOP = "ProfessionalClaimSubmissionOrderingProvider";
const _PCSOPI = "ProfessionalClaimSubmissionOrderingProviderIdentifiers";
const _PCSOPIr = "ProfessionalClaimSubmissionOtherPayerId";
const _PCSOPr = "ProfessionalClaimSubmissionOtherPayer";
const _PCSP = "ProfessionalClaimSubmissionPatient";
const _PCSPC = "ProfessionalClaimSubmissionPatientCondition";
const _PCSPCCN = "ProfessionalClaimSubmissionPropertyCasualtyClaimNumber";
const _PCSPCN = "ProfessionalClaimSubmissionPatientControlNumber";
const _PCSPCr = "ProfessionalClaimSubmissionProcedureCode";
const _PCSPN = "ProfessionalClaimSubmissionPhoneNumber";
const _PCSPNr = "ProfessionalClaimSubmissionPlanName";
const _PCSPNro = "ProfessionalClaimSubmissionPersonName";
const _PCSPOCDAN = "ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber";
const _PCSPOGN = "ProfessionalClaimSubmissionPolicyOrGroupNumber";
const _PCSPr = "ProfessionalClaimSubmissionPayer";
const _PCSQN = "ProfessionalClaimSubmissionQualifiedName";
const _PCSQON = "ProfessionalClaimSubmissionQualifiedOrganizationName";
const _PCSQPN = "ProfessionalClaimSubmissionQualifiedPersonName";
const _PCSR = "ProfessionalClaimSubmissionResubmission";
const _PCSRN = "ProfessionalClaimSubmissionReferenceNumbers";
const _PCSRP = "ProfessionalClaimSubmissionReferringProvider";
const _PCSRPI = "ProfessionalClaimSubmissionReferringProviderIdentifiers";
const _PCSRPIr = "ProfessionalClaimSubmissionRenderingProviderIdentifiers";
const _PCSRPr = "ProfessionalClaimSubmissionRenderingProvider";
const _PCSS = "ProfessionalClaimSubmissionSsn";
const _PCSSF = "ProfessionalClaimSubmissionServiceFacility";
const _PCSSFI = "ProfessionalClaimSubmissionServiceFacilityIdentifiers";
const _PCSSL = "ProfessionalClaimSubmissionServiceLine";
const _PCSSLPAN = "ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber";
const _PCSSLPANr = "ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers";
const _PCSSLr = "ProfessionalClaimSubmissionServiceLines";
const _PCSSP = "ProfessionalClaimSubmissionSupervisingProvider";
const _PCSSPI = "ProfessionalClaimSubmissionSupervisingProviderIdentifiers";
const _PCSSr = "ProfessionalClaimSubmissionSubmitter";
const _PCSTI = "ProfessionalClaimSubmissionTaxId";
const _TMRE = "TooManyRequestsException";
const _VF = "ValidationFailure";
const _VFa = "ValidationFailures";
const _VPCS = "ValidateProfessionalClaimSubmission";
const _VPCSI = "ValidateProfessionalClaimSubmissionInput";
const _VPCSO = "ValidateProfessionalClaimSubmissionOutput";
const _a = "authorization";
const _aAS = "autoAccidentState";
const _aC = "assumedCare";
const _aCN = "attachmentControlNumber";
const _aDC = "additionalDiagnosisCodes";
const _aI = "attachmentId";
const _aId = "additionalInformation";
const _aL = "addressLine1";
const _aLd = "addressLine2";
const _aMOCC = "acuteManifestationOfChronicCondition";
const _aN = "associationNumber";
const _aP = "amountPaid";
const _ac = "accident";
const _ad = "address";
const _at = "attachments";
const _b = "billing";
const _bP = "billingProvider";
const _c = "client";
const _cC = "claimCodes";
const _cD = "clinicalDates";
const _cFI = "claimFilingIndicator";
const _cI = "claimId";
const _cN = "commercialNumber";
const _cNe = "certificationNarrative";
const _cNl = "claimNote";
const _cPI = "cmsPlanId";
const _ci = "city";
const _cl = "clia";
const _co = "code";
const _con = "contact";
const _d = "description";
const _dC = "diagnosisCodes";
const _dD = "diagnosisDescription";
const _dI = "drugIdentification";
const _dOB = "dateOfBirth";
const _dOS = "datesOfService";
const _da = "data";
const _e = "error";
const _eRC = "epsdtReferralCodes";
const _ei = "ein";
const _em = "email";
const _en = "encounter";
const _end = "end";
const _er = "errors";
const _et = "etin";
const _fN = "faxNumber";
const _fNi = "firstName";
const _fVOC = "firstVisitOrConsultation";
const _g = "gender";
const _gRODP = "goalsRehabilitationOrDischargePlans";
const _h = "hospitalization";
const _hE = "httpError";
const _hH = "httpHeader";
const _ht = "http";
const _i = "insured";
const _iAA = "insuredAuthorizesAssignment";
const _iAAR = "isAutoAccidentRelated";
const _iE = "isEmergency";
const _iER = "isEmploymentRelated";
const _iERs = "isEpsdtRelated";
const _iFP = "isFamilyPlanning";
const _iK = "idempotencyKey";
const _iOAR = "isOtherAccidentRelated";
const _iT = "initialTreatment";
const _iTn = "insuranceType";
const _id = "id";
const _ide = "identifiers";
const _lICA = "lineItemChargeAmount";
const _lICN = "lineItemControlNumber";
const _lMP = "lastMenstrualPeriod";
const _lN = "locationNumber";
const _lNa = "lastName";
const _lS = "lastSeen";
const _lSN = "linkSequenceNumber";
const _lW = "lastWorked";
const _lX = "lastXray";
const _m = "message";
const _mC = "mammographyCertification";
const _mI = "memberId";
const _mN = "middleName";
const _mSIT = "medicareSecondaryInsuranceType";
const _mo = "modifiers";
const _n = "name";
const _nDC = "nationalDrugCode";
const _nFUC = "narrativeForUnspecifiedCode";
const _np = "npi";
const _o = "organization";
const _oI = "otherInsured";
const _oN = "originalNdc";
const _oOCI = "onsetOfCurrentIllness";
const _oP = "otherPayer";
const _oPPI = "otherPayerPrimaryId";
const _oPr = "orderingProvider";
const _oRN = "originalReferenceNumber";
const _p = "purpose";
const _pA = "processedAt";
const _pAA = "providerAcceptsAssignment";
const _pAN = "priorAuthorizationNumber";
const _pAr = "priorAuthorization";
const _pAri = "priorAuthorizations";
const _pC = "postalCode";
const _pCCN = "propertyCasualtyClaimNumber";
const _pCN = "patientControlNumber";
const _pCa = "patientCondition";
const _pCr = "procedureCode";
const _pDC = "primaryDiagnosisCode";
const _pE = "phoneExtension";
const _pGPS = "providerGeneratedPatientSignature";
const _pI = "payerId";
const _pN = "phoneNumber";
const _pNl = "planName";
const _pOGN = "policyOrGroupNumber";
const _pOS = "placeOfService";
const _pPN = "pharmacyPrescriptionNumber";
const _pPOS = "primaryPlaceOfService";
const _pRLC = "paymentResponsibilityLevelCode";
const _pRMI = "patientReleasesMedicalInfo";
const _pRP = "priorReferringProvider";
const _pS = "providerSignature";
const _pa = "payer";
const _pat = "patient";
const _path = "path";
const _pe = "person";
const _pr = "prescription";
const _r = "resubmission";
const _rC = "relinquishedCare";
const _rI = "receiverId";
const _rL = "responsibilityLevel";
const _rN = "referenceNumbers";
const _rP = "referringProvider";
const _rPe = "renderingProvider";
const _rR = "repricerReceived";
const _rTC = "reportTypeCode";
const _rTI = "relationshipToInsured";
const _rTW = "returnedToWork";
const _re = "referral";
const _s = "smithy.ts.sdk.synthetic.com.stedi.sdk";
const _sF = "serviceFacility";
const _sI = "submissionId";
const _sL = "serviceLines";
const _sLN = "stateLicenseNumber";
const _sP = "supervisingProvider";
const _sPI = "stediPayerId";
const _se = "server";
const _ss = "ssn";
const _st = "state";
const _sta = "start";
const _su = "submitter";
const _suf = "suffix";
const _tC = "transmissionCode";
const _tCa = "taxonomyCode";
const _tCo = "totalCharge";
const _tI = "taxId";
const _tPO = "thirdPartyOrganization";
const _u = "units";
const _uC = "unitCount";
const _uOM = "unitOfMeasure";
const _uTW = "unableToWork";
const _x = "x12";
const n0 = "com.stedi.claimsmanager";
const n1 = "com.stedi.smithy.model.common";
const n2 = "com.stedi.smithy.model.errors";
const n3 = "com.stedi.claimsmanager.cms1500v2";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const StediServiceException_1 = require("../models/StediServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.StediServiceException$ = [-3, _s, "StediServiceException", 0, [], []];
_s_registry.registerError(exports.StediServiceException$, StediServiceException_1.StediServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
const n1_registry = schema_1.TypeRegistry.for(n1);
const n2_registry = schema_1.TypeRegistry.for(n2);
exports.ClaimEditException$ = [-3, n0, _CEE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _er, _x],
    [0, () => ClaimEditErrors, 0], 2
];
n0_registry.registerError(exports.ClaimEditException$, errors_1.ClaimEditException);
exports.InternalFailureException$ = [-3, n1, _IFE,
    { [_e]: _se, [_hE]: 500 },
    [_m, _co],
    [0, 0], 1
];
n1_registry.registerError(exports.InternalFailureException$, errors_1.InternalFailureException);
exports.AuthenticationFailedException$ = [-3, n2, _AFE,
    { [_e]: _c, [_hE]: 401 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.AuthenticationFailedException$, errors_1.AuthenticationFailedException);
exports.ConflictException$ = [-3, n2, _CE,
    { [_e]: _c, [_hE]: 409 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
exports.ForbiddenException$ = [-3, n2, _FE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.ForbiddenException$, errors_1.ForbiddenException);
exports.InternalServerException$ = [-3, n2, _ISE,
    { [_e]: _se, [_hE]: 500 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.InternalServerException$, errors_1.InternalServerException);
exports.InvalidRequestException$ = [-3, n2, _IRE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _er],
    [0, () => ValidationFailures], 1
];
n2_registry.registerError(exports.InvalidRequestException$, errors_1.InvalidRequestException);
exports.NotFoundException$ = [-3, n2, _NFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.NotFoundException$, errors_1.NotFoundException);
exports.TooManyRequestsException$ = [-3, n2, _TMRE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0], 1
];
n2_registry.registerError(exports.TooManyRequestsException$, errors_1.TooManyRequestsException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
    n1_registry,
    n2_registry,
];
var ProfessionalClaimSubmissionClaimNoteText = [0, n3, _PCSCNT, 8, 0];
var ProfessionalClaimSubmissionDateOfBirth = [0, n3, _PCSDOB, 8, 0];
var ProfessionalClaimSubmissionEmail = [0, n3, _PCSE, 8, 0];
var ProfessionalClaimSubmissionGenderCode = [0, n3, _PCSGC, 8, 0];
var ProfessionalClaimSubmissionMemberId = [0, n3, _PCSMI, 8, 0];
var ProfessionalClaimSubmissionPatientControlNumber = [0, n3, _PCSPCN, 8, 0];
var ProfessionalClaimSubmissionPhoneNumber = [0, n3, _PCSPN, 8, 0];
var ProfessionalClaimSubmissionPlanName = [0, n3, _PCSPNr, 8, 0];
var ProfessionalClaimSubmissionPolicyOrGroupNumber = [0, n3, _PCSPOGN, 8, 0];
var ProfessionalClaimSubmissionPropertyCasualtyClaimNumber = [0, n3, _PCSPCCN, 8, 0];
var ProfessionalClaimSubmissionSsn = [0, n3, _PCSS, 8, 0];
exports.ClaimEditError$ = [3, n0, _CEEl,
    0,
    [_co, _d],
    [0, 0], 2
];
exports.CreateProfessionalClaimSubmissionInput$ = [3, n3, _CPCSI,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI, _iK],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0], [0, { [_hH]: _IK }]], 8
];
exports.CreateProfessionalClaimSubmissionOutput$ = [3, n3, _CPCSO,
    0,
    [_cI, _sI],
    [0, 0], 2
];
exports.GetProfessionalClaimSubmissionInput$ = [3, n3, _GPCSI,
    0,
    [_id],
    [[0, 1]], 1
];
exports.GetProfessionalClaimSubmissionOutput$ = [3, n3, _GPCSO,
    0,
    [_cI, _sI, _da, _pA, _sPI],
    [0, 0, [() => exports.ProfessionalClaimSubmissionData$, 0], 5, 0], 4
];
exports.ProfessionalClaimSubmissionAddress$ = [3, n3, _PCSA,
    8,
    [_aL, _ci, _aLd, _st, _pC],
    [0, 0, 0, 0, 0], 2
];
exports.ProfessionalClaimSubmissionAttachment$ = [3, n3, _PCSAr,
    0,
    [_rTC, _tC, _aCN, _aI],
    [0, 0, 0, 0], 2
];
exports.ProfessionalClaimSubmissionAuthorization$ = [3, n3, _PCSAro,
    0,
    [_pRMI, _iAA, _pAA, _pS],
    [0, 0, 0, 0], 4
];
exports.ProfessionalClaimSubmissionBilling$ = [3, n3, _PCSB,
    0,
    [_tI, _pCN, _tCo, _bP, _aP, _sF],
    [[() => exports.ProfessionalClaimSubmissionTaxId$, 0], [() => ProfessionalClaimSubmissionPatientControlNumber, 0], 0, [() => exports.ProfessionalClaimSubmissionBillingProvider$, 0], 0, [() => exports.ProfessionalClaimSubmissionServiceFacility$, 0]], 4
];
exports.ProfessionalClaimSubmissionBillingProvider$ = [3, n3, _PCSBP,
    0,
    [_n, _ad, _con, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => exports.ProfessionalClaimSubmissionContact$, 0], () => exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$], 2
];
exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$ = [3, n3, _PCSBPI,
    0,
    [_np, _sLN, _tCa, _lN, _cN],
    [0, 0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionClinicalDates$ = [3, n3, _PCSCD,
    0,
    [_oOCI, _lMP, _iT, _lS, _aMOCC, _ac, _lX, _pr, _aC, _rC, _fVOC, _rR, _lW, _rTW, _uTW, _h],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => exports.ProfessionalClaimSubmissionDateRange$, () => exports.ProfessionalClaimSubmissionDateRange$]
];
exports.ProfessionalClaimSubmissionContact$ = [3, n3, _PCSC,
    0,
    [_n, _pN, _pE, _em, _fN],
    [0, [() => ProfessionalClaimSubmissionPhoneNumber, 0], 0, [() => ProfessionalClaimSubmissionEmail, 0], [() => ProfessionalClaimSubmissionPhoneNumber, 0]]
];
exports.ProfessionalClaimSubmissionData$ = [3, n3, _PCSD,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0]], 8
];
exports.ProfessionalClaimSubmissionDateRange$ = [3, n3, _PCSDR,
    0,
    [_sta, _end],
    [0, 0]
];
exports.ProfessionalClaimSubmissionDrugIdentification$ = [3, n3, _PCSDI,
    0,
    [_nDC, _uC, _uOM, _aN, _oN],
    [0, 0, 0, () => exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$, 0], 3
];
exports.ProfessionalClaimSubmissionEncounter$ = [3, n3, _PCSEr,
    0,
    [_pDC, _pPOS, _aDC, _pCa, _cC, _eRC, _cD, _rP, _pRP, _sP, _cNl, _at, _r, _rN],
    [0, 0, 64 | 0, () => exports.ProfessionalClaimSubmissionPatientCondition$, 64 | 0, 64 | 0, () => exports.ProfessionalClaimSubmissionClinicalDates$, [() => exports.ProfessionalClaimSubmissionReferringProvider$, 0], [() => exports.ProfessionalClaimSubmissionReferringProvider$, 0], [() => exports.ProfessionalClaimSubmissionSupervisingProvider$, 0], [() => exports.ProfessionalClaimSubmissionClaimNote$, 0], () => ProfessionalClaimSubmissionAttachmentList, () => exports.ProfessionalClaimSubmissionResubmission$, () => exports.ProfessionalClaimSubmissionReferenceNumbers$], 1
];
exports.ProfessionalClaimSubmissionInsured$ = [3, n3, _PCSI,
    0,
    [_iTn, _n, _pRLC, _mI, _ad, _pOGN, _dOB, _g, _ss, _pCCN, _pNl],
    [0, [() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], 0, [() => ProfessionalClaimSubmissionMemberId, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => ProfessionalClaimSubmissionPolicyOrGroupNumber, 0], [() => ProfessionalClaimSubmissionDateOfBirth, 0], [() => ProfessionalClaimSubmissionGenderCode, 0], [() => ProfessionalClaimSubmissionSsn, 0], [() => ProfessionalClaimSubmissionPropertyCasualtyClaimNumber, 0], [() => ProfessionalClaimSubmissionPlanName, 0]], 3
];
exports.ProfessionalClaimSubmissionOrderingProvider$ = [3, n3, _PCSOP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$ = [3, n3, _PCSOPI,
    0,
    [_np, _sLN, _cN],
    [0, 0, 0]
];
exports.ProfessionalClaimSubmissionOtherInsured$ = [3, n3, _PCSOI,
    0,
    [_n, _mI, _rL, _rTI, _cFI, _oP, _a, _ad, _pOGN, _pNl, _ss, _mSIT],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => ProfessionalClaimSubmissionMemberId, 0], 0, 0, 0, () => exports.ProfessionalClaimSubmissionOtherPayer$, () => exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => ProfessionalClaimSubmissionPolicyOrGroupNumber, 0], [() => ProfessionalClaimSubmissionPlanName, 0], [() => ProfessionalClaimSubmissionSsn, 0], 0], 7
];
exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$ = [3, n3, _PCSOIA,
    0,
    [_iAA, _pRMI, _pGPS],
    [0, 0, 2], 2
];
exports.ProfessionalClaimSubmissionOtherPayer$ = [3, n3, _PCSOPr,
    0,
    [_n, _id],
    [() => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, () => exports.ProfessionalClaimSubmissionOtherPayerId$], 2
];
exports.ProfessionalClaimSubmissionPatient$ = [3, n3, _PCSP,
    0,
    [_n, _dOB, _g, _ad, _rTI],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], [() => ProfessionalClaimSubmissionDateOfBirth, 0], [() => ProfessionalClaimSubmissionGenderCode, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], 0], 5
];
exports.ProfessionalClaimSubmissionPatientCondition$ = [3, n3, _PCSPC,
    0,
    [_iER, _iAAR, _iOAR, _aAS],
    [2, 2, 2, 0]
];
exports.ProfessionalClaimSubmissionPayer$ = [3, n3, _PCSPr,
    0,
    [_id, _n, _ad, _rI],
    [0, () => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], 0], 1
];
exports.ProfessionalClaimSubmissionPersonName$ = [3, n3, _PCSPNro,
    8,
    [_lNa, _fNi, _mN, _suf],
    [0, 0, 0, 0], 1
];
exports.ProfessionalClaimSubmissionProcedureCode$ = [3, n3, _PCSPCr,
    0,
    [_co, _mo],
    [0, 64 | 0], 1
];
exports.ProfessionalClaimSubmissionReferenceNumbers$ = [3, n3, _PCSRN,
    0,
    [_pAr, _re, _cl, _mC],
    [0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionReferringProvider$ = [3, n3, _PCSRP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$ = [3, n3, _PCSRPI,
    0,
    [_np, _sLN, _cN],
    [0, 0, 0]
];
exports.ProfessionalClaimSubmissionRenderingProvider$ = [3, n3, _PCSRPr,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], () => exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$ = [3, n3, _PCSRPIr,
    0,
    [_np, _sLN, _cN, _lN, _tCa],
    [0, 0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionResubmission$ = [3, n3, _PCSR,
    0,
    [_co, _oRN],
    [0, 0]
];
exports.ProfessionalClaimSubmissionServiceFacility$ = [3, n3, _PCSSF,
    0,
    [_n, _ad, _ide],
    [() => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], () => exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$], 2
];
exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$ = [3, n3, _PCSSFI,
    0,
    [_np, _sLN, _cN, _lN],
    [0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionServiceLine$ = [3, n3, _PCSSL,
    0,
    [_dOS, _pCr, _dC, _lICA, _u, _pOS, _iE, _iERs, _iFP, _rPe, _oPr, _lICN, _dI, _nFUC, _at, _pAri],
    [() => exports.ProfessionalClaimSubmissionDateRange$, () => exports.ProfessionalClaimSubmissionProcedureCode$, 64 | 0, 0, 0, 0, 2, 2, 2, [() => exports.ProfessionalClaimSubmissionRenderingProvider$, 0], [() => exports.ProfessionalClaimSubmissionOrderingProvider$, 0], 0, () => exports.ProfessionalClaimSubmissionDrugIdentification$, 0, () => ProfessionalClaimSubmissionAttachmentList, () => ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers], 5
];
exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$ = [3, n3, _PCSSLPAN,
    0,
    [_pAN, _oPPI],
    [0, 0], 1
];
exports.ProfessionalClaimSubmissionSubmitter$ = [3, n3, _PCSSr,
    0,
    [_n, _con, _et],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => exports.ProfessionalClaimSubmissionContact$, 0], 0], 1
];
exports.ProfessionalClaimSubmissionSupervisingProvider$ = [3, n3, _PCSSP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$ = [3, n3, _PCSSPI,
    0,
    [_np, _sLN, _cN, _lN],
    [0, 0, 0, 0]
];
exports.ValidateProfessionalClaimSubmissionInput$ = [3, n3, _VPCSI,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0]], 8
];
exports.ValidateProfessionalClaimSubmissionOutput$ = [3, n3, _VPCSO,
    0,
    [],
    []
];
exports.ValidationFailure$ = [3, n2, _VF,
    0,
    [_m, _path],
    [0, 0], 1
];
var ClaimEditErrors = [1, n0, _CEEla,
    0, () => exports.ClaimEditError$
];
var ProfessionalClaimSubmissionAdditionalDiagnosisCodes = 64 | 0;
var ProfessionalClaimSubmissionAttachmentList = [1, n3, _PCSAL,
    0, () => exports.ProfessionalClaimSubmissionAttachment$
];
var ProfessionalClaimSubmissionClaimsCodeList = 64 | 0;
var ProfessionalClaimSubmissionEPSDTReferralConditionIndicatorList = 64 | 0;
var ProfessionalClaimSubmissionOtherInsuredList = [1, n3, _PCSOIL,
    0, [() => exports.ProfessionalClaimSubmissionOtherInsured$,
        0]
];
var ProfessionalClaimSubmissionProcedureModifierList = 64 | 0;
var ProfessionalClaimSubmissionServiceLineDiagnosisCodes = 64 | 0;
var ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers = [1, n3, _PCSSLPANr,
    0, () => exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$
];
var ProfessionalClaimSubmissionServiceLines = [1, n3, _PCSSLr,
    0, [() => exports.ProfessionalClaimSubmissionServiceLine$,
        0]
];
var ValidationFailures = [1, n2, _VFa,
    0, () => exports.ValidationFailure$
];
exports.ProfessionalClaimSubmissionClaimNote$ = [4, n3, _PCSCN,
    0,
    [_aId, _cNe, _gRODP, _dD, _tPO],
    [[() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0]]
];
exports.ProfessionalClaimSubmissionOtherPayerId$ = [4, n3, _PCSOPIr,
    0,
    [_pI, _cPI],
    [0, 0]
];
exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$ = [4, n3, _PCSPOCDAN,
    0,
    [_lSN, _pPN],
    [0, 0]
];
exports.ProfessionalClaimSubmissionQualifiedName$ = [4, n3, _PCSQN,
    0,
    [_o, _pe],
    [0, [() => exports.ProfessionalClaimSubmissionPersonName$, 0]]
];
exports.ProfessionalClaimSubmissionQualifiedOrganizationName$ = [4, n3, _PCSQON,
    0,
    [_o],
    [0]
];
exports.ProfessionalClaimSubmissionQualifiedPersonName$ = [4, n3, _PCSQPN,
    0,
    [_pe],
    [[() => exports.ProfessionalClaimSubmissionPersonName$, 0]]
];
exports.ProfessionalClaimSubmissionTaxId$ = [4, n3, _PCSTI,
    0,
    [_ss, _ei],
    [[() => ProfessionalClaimSubmissionSsn, 0], 0]
];
exports.CreateProfessionalClaimSubmission$ = [9, n3, _CPCS,
    { [_ht]: ["POST", "/2025-03-07/professional-claim-submissions", 201] }, () => exports.CreateProfessionalClaimSubmissionInput$, () => exports.CreateProfessionalClaimSubmissionOutput$
];
exports.GetProfessionalClaimSubmission$ = [9, n3, _GPCS,
    { [_ht]: ["GET", "/2025-03-07/professional-claim-submissions/{id}", 200] }, () => exports.GetProfessionalClaimSubmissionInput$, () => exports.GetProfessionalClaimSubmissionOutput$
];
exports.ValidateProfessionalClaimSubmission$ = [9, n3, _VPCS,
    { [_ht]: ["POST", "/2025-03-07/professional-claim-submissions/validate", 200] }, () => exports.ValidateProfessionalClaimSubmissionInput$, () => exports.ValidateProfessionalClaimSubmissionOutput$
];
