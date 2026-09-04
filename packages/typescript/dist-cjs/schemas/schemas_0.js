"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$ = exports.ProfessionalClaimSubmissionServiceFacility$ = exports.ProfessionalClaimSubmissionResubmission$ = exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionRenderingProvider$ = exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$ = exports.ProfessionalClaimSubmissionReferringProvider$ = exports.ProfessionalClaimSubmissionReferenceNumbers$ = exports.ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers$ = exports.ProfessionalClaimSubmissionPurchasedServiceProvider$ = exports.ProfessionalClaimSubmissionPurchasedService$ = exports.ProfessionalClaimSubmissionProcedureCode$ = exports.ProfessionalClaimSubmissionPersonName$ = exports.ProfessionalClaimSubmissionPayer$ = exports.ProfessionalClaimSubmissionPatientCondition$ = exports.ProfessionalClaimSubmissionPatient$ = exports.ProfessionalClaimSubmissionOtherPayer$ = exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$ = exports.ProfessionalClaimSubmissionOtherInsured$ = exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionOrderingProvider$ = exports.ProfessionalClaimSubmissionInsured$ = exports.ProfessionalClaimSubmissionEncounter$ = exports.ProfessionalClaimSubmissionDrugIdentification$ = exports.ProfessionalClaimSubmissionDateRange$ = exports.ProfessionalClaimSubmissionData$ = exports.ProfessionalClaimSubmissionContact$ = exports.ProfessionalClaimSubmissionClinicalDates$ = exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionBillingProvider$ = exports.ProfessionalClaimSubmissionBilling$ = exports.ProfessionalClaimSubmissionAuthorization$ = exports.ProfessionalClaimSubmissionAttachment$ = exports.ProfessionalClaimSubmissionAddress$ = exports.GetProfessionalClaimSubmissionOutput$ = exports.GetProfessionalClaimSubmissionInput$ = exports.CreateProfessionalClaimSubmissionOutput$ = exports.CreateProfessionalClaimSubmissionInput$ = exports.ClaimRejectionError$ = exports.errorTypeRegistries = exports.TooManyRequestsException$ = exports.NotFoundException$ = exports.InvalidRequestException$ = exports.InternalServerException$ = exports.ForbiddenException$ = exports.ContentTooLargeException$ = exports.ConflictException$ = exports.AuthenticationFailedException$ = exports.EventDestinationsLimitExceededException$ = exports.StediServiceException$ = void 0;
exports.ClaimTimelineEvent$ = exports.ProfessionalClaimSubmissionTaxId$ = exports.ProfessionalClaimSubmissionQualifiedPersonName$ = exports.ProfessionalClaimSubmissionQualifiedOrganizationName$ = exports.ProfessionalClaimSubmissionQualifiedName$ = exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$ = exports.ProfessionalClaimSubmissionOtherPayerId$ = exports.ProfessionalClaimSubmissionClaimNote$ = exports.ValidationFailure$ = exports.UpdateEventDestinationOutput$ = exports.UpdateEventDestinationInput$ = exports.RotateEventDestinationSecretOutput$ = exports.RotateEventDestinationSecretInput$ = exports.ListEventDestinationsOutput$ = exports.ListEventDestinationsInput$ = exports.ListEventDestinationEventsOutput$ = exports.ListEventDestinationEventsInput$ = exports.GetEventDestinationSecretOutput$ = exports.GetEventDestinationSecretInput$ = exports.GetEventDestinationOutput$ = exports.GetEventDestinationInput$ = exports.GetEventDestinationEventOutput$ = exports.GetEventDestinationEventInput$ = exports.EventDestinationsV1EventPayload$ = exports.EventDestinationsEventSummary$ = exports.EventDestinationsEventPayloadResourceRef$ = exports.EventDestinationsDestinationSummary$ = exports.DeleteEventDestinationOutput$ = exports.DeleteEventDestinationInput$ = exports.CreateEventDestinationOutput$ = exports.CreateEventDestinationInput$ = exports.ListClaimsOutput$ = exports.ListClaimsInput$ = exports.GetClaimTimelineOutput$ = exports.GetClaimTimelineInput$ = exports.GetClaimOutput$ = exports.GetClaimInput$ = exports.ClaimSummary$ = exports.ClaimSubmissionSummary$ = exports.ClaimPaymentInformationSummary$ = exports.ClaimPatientName$ = exports.ClaimAcknowledgmentSummary$ = exports.ClaimDateRange$ = exports.ValidateProfessionalClaimSubmissionOutput$ = exports.ValidateProfessionalClaimSubmissionInput$ = exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$ = exports.ProfessionalClaimSubmissionSupervisingProvider$ = exports.ProfessionalClaimSubmissionSubmitter$ = exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$ = exports.ProfessionalClaimSubmissionServiceLine$ = void 0;
exports.UpdateEventDestination$ = exports.RotateEventDestinationSecret$ = exports.ListEventDestinations$ = exports.ListEventDestinationEvents$ = exports.GetEventDestinationSecret$ = exports.GetEventDestinationEvent$ = exports.GetEventDestination$ = exports.DeleteEventDestination$ = exports.CreateEventDestination$ = exports.ListClaims$ = exports.GetClaimTimeline$ = exports.GetClaim$ = exports.ValidateProfessionalClaimSubmission$ = exports.GetProfessionalClaimSubmission$ = exports.CreateProfessionalClaimSubmission$ = exports.EventDestinationsEventPayload$ = void 0;
const _AFE = "AuthenticationFailedException";
const _CAS = "ClaimAcknowledgmentSummary";
const _CDR = "ClaimDateRange";
const _CE = "ConflictException";
const _CED = "CreateEventDestination";
const _CEDI = "CreateEventDestinationInput";
const _CEDO = "CreateEventDestinationOutput";
const _CPCS = "CreateProfessionalClaimSubmission";
const _CPCSI = "CreateProfessionalClaimSubmissionInput";
const _CPCSO = "CreateProfessionalClaimSubmissionOutput";
const _CPIS = "ClaimPaymentInformationSummary";
const _CPN = "ClaimPatientName";
const _CRE = "ClaimRejectionError";
const _CREl = "ClaimRejectionErrors";
const _CS = "ClaimSummary";
const _CSS = "ClaimSubmissionSummary";
const _CSl = "ClaimSummaries";
const _CTE = "ClaimTimelineEvents";
const _CTEl = "ClaimTimelineEvent";
const _CTLE = "ContentTooLargeException";
const _DED = "DeleteEventDestination";
const _DEDI = "DeleteEventDestinationInput";
const _DEDO = "DeleteEventDestinationOutput";
const _EDDS = "EventDestinationsDestinationSummary";
const _EDDSL = "EventDestinationsDestinationSummaryList";
const _EDEP = "EventDestinationsEventPayload";
const _EDEPRR = "EventDestinationsEventPayloadResourceRef";
const _EDEPRRL = "EventDestinationsEventPayloadResourceRefList";
const _EDES = "EventDestinationsEventSummary";
const _EDESL = "EventDestinationsEventSummaryList";
const _EDLEE = "EventDestinationsLimitExceededException";
const _EDSS = "EventDestinationsSigningSecret";
const _EDVEP = "EventDestinationsV1EventPayload";
const _FE = "ForbiddenException";
const _GC = "GetClaim";
const _GCI = "GetClaimInput";
const _GCO = "GetClaimOutput";
const _GCT = "GetClaimTimeline";
const _GCTI = "GetClaimTimelineInput";
const _GCTO = "GetClaimTimelineOutput";
const _GED = "GetEventDestination";
const _GEDE = "GetEventDestinationEvent";
const _GEDEI = "GetEventDestinationEventInput";
const _GEDEO = "GetEventDestinationEventOutput";
const _GEDI = "GetEventDestinationInput";
const _GEDO = "GetEventDestinationOutput";
const _GEDS = "GetEventDestinationSecret";
const _GEDSI = "GetEventDestinationSecretInput";
const _GEDSO = "GetEventDestinationSecretOutput";
const _GPCS = "GetProfessionalClaimSubmission";
const _GPCSI = "GetProfessionalClaimSubmissionInput";
const _GPCSO = "GetProfessionalClaimSubmissionOutput";
const _IK = "Idempotency-Key";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServerException";
const _LC = "ListClaims";
const _LCI = "ListClaimsInput";
const _LCO = "ListClaimsOutput";
const _LED = "ListEventDestinations";
const _LEDE = "ListEventDestinationEvents";
const _LEDEI = "ListEventDestinationEventsInput";
const _LEDEO = "ListEventDestinationEventsOutput";
const _LEDI = "ListEventDestinationsInput";
const _LEDO = "ListEventDestinationsOutput";
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
const _PCSPS = "ProfessionalClaimSubmissionPurchasedService";
const _PCSPSP = "ProfessionalClaimSubmissionPurchasedServiceProvider";
const _PCSPSPI = "ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers";
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
const _REDS = "RotateEventDestinationSecret";
const _REDSI = "RotateEventDestinationSecretInput";
const _REDSO = "RotateEventDestinationSecretOutput";
const _TMRE = "TooManyRequestsException";
const _UED = "UpdateEventDestination";
const _UEDI = "UpdateEventDestinationInput";
const _UEDO = "UpdateEventDestinationOutput";
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
const _acc = "account";
const _ad = "address";
const _at = "attachments";
const _b = "billing";
const _bP = "billingProvider";
const _c = "client";
const _cA = "chargeAmount";
const _cAl = "claimAcknowledgment";
const _cAr = "createdAt";
const _cC = "claimCodes";
const _cD = "clinicalDates";
const _cFI = "claimFilingIndicator";
const _cI = "claimId";
const _cL = "concurrencyLimit";
const _cN = "commercialNumber";
const _cNe = "certificationNarrative";
const _cNl = "claimNote";
const _cOETN = "checkOrEftTraceNumber";
const _cPA = "claimPaymentAmount";
const _cPI = "cmsPlanId";
const _cPIl = "claimPaymentInformation";
const _ci = "city";
const _cl = "clia";
const _co = "contact";
const _cod = "code";
const _cr = "created";
const _d = "description";
const _dC = "diagnosisCodes";
const _dCS = "dentalClaimSubmission";
const _dD = "diagnosisDescription";
const _dI = "drugIdentification";
const _dIe = "destinationId";
const _dOB = "dateOfBirth";
const _dOS = "datesOfService";
const _dU = "destinationUrl";
const _da = "data";
const _e = "error";
const _eI = "eventId";
const _eP = "eventPayload";
const _eRC = "epsdtReferralCodes";
const _eT = "entityType";
const _eTv = "eventTypes";
const _eTve = "eventType";
const _ei = "ein";
const _em = "email";
const _en = "encounter";
const _end = "end";
const _env = "environment";
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
const _hQ = "httpQuery";
const _ht = "http";
const _i = "insured";
const _iAA = "insuredAuthorizesAssignment";
const _iAAR = "isAutoAccidentRelated";
const _iCS = "institutionalClaimSubmission";
const _iE = "isEmergency";
const _iER = "isEmploymentRelated";
const _iERs = "isEpsdtRelated";
const _iFP = "isFamilyPlanning";
const _iK = "idempotencyKey";
const _iOAR = "isOtherAccidentRelated";
const _iT = "initialTreatment";
const _iTd = "idempotencyToken";
const _iTn = "insuranceType";
const _id = "id";
const _ide = "identifiers";
const _it = "items";
const _lDT = "lastDeliveryTime";
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
const _nPT = "nextPageToken";
const _np = "npi";
const _o = "object";
const _oI = "otherInsured";
const _oN = "originalNdc";
const _oOCI = "onsetOfCurrentIllness";
const _oP = "otherPayer";
const _oPPI = "otherPayerPrimaryId";
const _oPr = "orderingProvider";
const _oRN = "originalReferenceNumber";
const _or = "organization";
const _p = "purpose";
const _pA = "processedAt";
const _pAA = "providerAcceptsAssignment";
const _pAN = "priorAuthorizationNumber";
const _pAr = "priorAuthorization";
const _pAri = "priorAuthorizations";
const _pC = "postalCode";
const _pCCN = "propertyCasualtyClaimNumber";
const _pCN = "patientControlNumber";
const _pCNa = "patientControlNumbers";
const _pCS = "professionalClaimSubmission";
const _pCa = "patientCondition";
const _pCr = "procedureCode";
const _pDC = "primaryDiagnosisCode";
const _pE = "phoneExtension";
const _pGPS = "providerGeneratedPatientSignature";
const _pI = "payerId";
const _pN = "phoneNumber";
const _pNa = "patientName";
const _pNl = "planName";
const _pOGN = "policyOrGroupNumber";
const _pOS = "placeOfService";
const _pPN = "pharmacyPrescriptionNumber";
const _pPOS = "primaryPlaceOfService";
const _pRA = "patientResponsibilityAmount";
const _pRLC = "paymentResponsibilityLevelCode";
const _pRMI = "patientReleasesMedicalInfo";
const _pRP = "priorReferringProvider";
const _pS = "providerSignature";
const _pSEA = "previousSecretExpiresAt";
const _pSEH = "previousSecretExpiryHours";
const _pSa = "pageSize";
const _pSu = "purchasedService";
const _pT = "pageToken";
const _pa = "payer";
const _pat = "patient";
const _path = "path";
const _pe = "person";
const _pr = "prescription";
const _pro = "provider";
const _r = "resubmission";
const _rB = "reportedBy";
const _rC = "relinquishedCare";
const _rI = "receiverId";
const _rL = "responsibilityLevel";
const _rN = "referenceNumbers";
const _rP = "referringProvider";
const _rPe = "renderingProvider";
const _rR = "repricerReceived";
const _rRe = "relatedResources";
const _rTC = "reportTypeCode";
const _rTI = "relationshipToInsured";
const _rTW = "returnedToWork";
const _re = "referral";
const _res = "resource";
const _s = "smithy.ts.sdk.synthetic.com.stedi.sdk";
const _sA = "submittedAt";
const _sAu = "submittedAfter";
const _sB = "submittedBefore";
const _sC = "statusCode";
const _sF = "serviceFacility";
const _sI = "submissionId";
const _sL = "serviceLines";
const _sLN = "stateLicenseNumber";
const _sN = "sourceName";
const _sP = "supervisingProvider";
const _sPI = "stediPayerId";
const _sRB = "statusReportedBy";
const _sS = "signingSecret";
const _se = "server";
const _ss = "ssn";
const _st = "state";
const _sta = "start";
const _stat = "status";
const _su = "submitter";
const _suf = "suffix";
const _t = "type";
const _tC = "transmissionCode";
const _tCCA = "totalClaimChargeAmount";
const _tCPA = "totalClaimPaidAmount";
const _tCa = "taxonomyCode";
const _tCo = "totalCharge";
const _tI = "taxId";
const _tPO = "thirdPartyOrganization";
const _u = "units";
const _uA = "updatedAt";
const _uC = "unitCount";
const _uOM = "unitOfMeasure";
const _uTW = "unableToWork";
const _vE = "v1Event";
const n0 = "com.stedi.events";
const n1 = "com.stedi.smithy.model.errors";
const n2 = "com.stedi.claimsmanager.cms1500v2";
const n3 = "com.stedi.claimsmanager";
const n4 = "com.stedi.claimsmanager.public";
const n5 = "com.stedi.claimsmanager.public.claim";
const schema_1 = require("@smithy/core/schema");
const errors_1 = require("../models/errors");
const StediServiceException_1 = require("../models/StediServiceException");
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.StediServiceException$ = [-3, _s, "StediServiceException", 0, [], []];
_s_registry.registerError(exports.StediServiceException$, StediServiceException_1.StediServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
const n1_registry = schema_1.TypeRegistry.for(n1);
exports.EventDestinationsLimitExceededException$ = [-3, n0, _EDLEE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0], 1
];
n0_registry.registerError(exports.EventDestinationsLimitExceededException$, errors_1.EventDestinationsLimitExceededException);
exports.AuthenticationFailedException$ = [-3, n1, _AFE,
    { [_e]: _c, [_hE]: 401 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.AuthenticationFailedException$, errors_1.AuthenticationFailedException);
exports.ConflictException$ = [-3, n1, _CE,
    { [_e]: _c, [_hE]: 409 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
exports.ContentTooLargeException$ = [-3, n1, _CTLE,
    { [_e]: _c, [_hE]: 413 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.ContentTooLargeException$, errors_1.ContentTooLargeException);
exports.ForbiddenException$ = [-3, n1, _FE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.ForbiddenException$, errors_1.ForbiddenException);
exports.InternalServerException$ = [-3, n1, _ISE,
    { [_e]: _se, [_hE]: 500 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.InternalServerException$, errors_1.InternalServerException);
exports.InvalidRequestException$ = [-3, n1, _IRE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _er],
    [0, () => ValidationFailures], 1
];
n1_registry.registerError(exports.InvalidRequestException$, errors_1.InvalidRequestException);
exports.NotFoundException$ = [-3, n1, _NFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.NotFoundException$, errors_1.NotFoundException);
exports.TooManyRequestsException$ = [-3, n1, _TMRE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0], 1
];
n1_registry.registerError(exports.TooManyRequestsException$, errors_1.TooManyRequestsException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
    n1_registry,
];
var ProfessionalClaimSubmissionClaimNoteText = [0, n2, _PCSCNT, 8, 0];
var ProfessionalClaimSubmissionDateOfBirth = [0, n2, _PCSDOB, 8, 0];
var ProfessionalClaimSubmissionEmail = [0, n2, _PCSE, 8, 0];
var ProfessionalClaimSubmissionGenderCode = [0, n2, _PCSGC, 8, 0];
var ProfessionalClaimSubmissionMemberId = [0, n2, _PCSMI, 8, 0];
var ProfessionalClaimSubmissionPatientControlNumber = [0, n2, _PCSPCN, 8, 0];
var ProfessionalClaimSubmissionPhoneNumber = [0, n2, _PCSPN, 8, 0];
var ProfessionalClaimSubmissionPlanName = [0, n2, _PCSPNr, 8, 0];
var ProfessionalClaimSubmissionPolicyOrGroupNumber = [0, n2, _PCSPOGN, 8, 0];
var ProfessionalClaimSubmissionPropertyCasualtyClaimNumber = [0, n2, _PCSPCCN, 8, 0];
var ProfessionalClaimSubmissionSsn = [0, n2, _PCSS, 8, 0];
var EventDestinationsSigningSecret = [0, n0, _EDSS, 8, 0];
exports.ClaimRejectionError$ = [3, n3, _CRE,
    0,
    [_d],
    [0], 1
];
exports.CreateProfessionalClaimSubmissionInput$ = [3, n2, _CPCSI,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI, _iK],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0], [0, { [_hH]: _IK }]], 8
];
exports.CreateProfessionalClaimSubmissionOutput$ = [3, n2, _CPCSO,
    0,
    [_cI, _sI, _er],
    [0, 0, () => ClaimRejectionErrors], 2
];
exports.GetProfessionalClaimSubmissionInput$ = [3, n2, _GPCSI,
    0,
    [_id],
    [[0, 1]], 1
];
exports.GetProfessionalClaimSubmissionOutput$ = [3, n2, _GPCSO,
    0,
    [_cI, _sI, _da, _pA, _sPI],
    [0, 0, [() => exports.ProfessionalClaimSubmissionData$, 0], 5, 0], 4
];
exports.ProfessionalClaimSubmissionAddress$ = [3, n2, _PCSA,
    8,
    [_aL, _ci, _aLd, _st, _pC],
    [0, 0, 0, 0, 0], 2
];
exports.ProfessionalClaimSubmissionAttachment$ = [3, n2, _PCSAr,
    0,
    [_rTC, _tC, _aCN, _aI],
    [0, 0, 0, 0], 2
];
exports.ProfessionalClaimSubmissionAuthorization$ = [3, n2, _PCSAro,
    0,
    [_pRMI, _iAA, _pAA, _pS],
    [0, 0, 0, 0], 4
];
exports.ProfessionalClaimSubmissionBilling$ = [3, n2, _PCSB,
    0,
    [_tI, _pCN, _tCo, _bP, _aP, _sF],
    [[() => exports.ProfessionalClaimSubmissionTaxId$, 0], [() => ProfessionalClaimSubmissionPatientControlNumber, 0], 0, [() => exports.ProfessionalClaimSubmissionBillingProvider$, 0], 0, [() => exports.ProfessionalClaimSubmissionServiceFacility$, 0]], 4
];
exports.ProfessionalClaimSubmissionBillingProvider$ = [3, n2, _PCSBP,
    0,
    [_n, _ad, _co, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => exports.ProfessionalClaimSubmissionContact$, 0], () => exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$], 2
];
exports.ProfessionalClaimSubmissionBillingProviderIdentifiers$ = [3, n2, _PCSBPI,
    0,
    [_np, _sLN, _tCa, _lN, _cN],
    [0, 0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionClinicalDates$ = [3, n2, _PCSCD,
    0,
    [_oOCI, _lMP, _iT, _lS, _aMOCC, _ac, _lX, _pr, _aC, _rC, _fVOC, _rR, _lW, _rTW, _uTW, _h],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => exports.ProfessionalClaimSubmissionDateRange$, () => exports.ProfessionalClaimSubmissionDateRange$]
];
exports.ProfessionalClaimSubmissionContact$ = [3, n2, _PCSC,
    0,
    [_n, _pN, _pE, _em, _fN],
    [0, [() => ProfessionalClaimSubmissionPhoneNumber, 0], 0, [() => ProfessionalClaimSubmissionEmail, 0], [() => ProfessionalClaimSubmissionPhoneNumber, 0]]
];
exports.ProfessionalClaimSubmissionData$ = [3, n2, _PCSD,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0]], 8
];
exports.ProfessionalClaimSubmissionDateRange$ = [3, n2, _PCSDR,
    0,
    [_sta, _end],
    [0, 0]
];
exports.ProfessionalClaimSubmissionDrugIdentification$ = [3, n2, _PCSDI,
    0,
    [_nDC, _uC, _uOM, _aN, _oN],
    [0, 0, 0, () => exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$, 0], 3
];
exports.ProfessionalClaimSubmissionEncounter$ = [3, n2, _PCSEr,
    0,
    [_pDC, _pPOS, _aDC, _pCa, _cC, _eRC, _cD, _rP, _pRP, _sP, _cNl, _at, _r, _rN],
    [0, 0, 64 | 0, () => exports.ProfessionalClaimSubmissionPatientCondition$, 64 | 0, 64 | 0, () => exports.ProfessionalClaimSubmissionClinicalDates$, [() => exports.ProfessionalClaimSubmissionReferringProvider$, 0], [() => exports.ProfessionalClaimSubmissionReferringProvider$, 0], [() => exports.ProfessionalClaimSubmissionSupervisingProvider$, 0], [() => exports.ProfessionalClaimSubmissionClaimNote$, 0], () => ProfessionalClaimSubmissionAttachmentList, () => exports.ProfessionalClaimSubmissionResubmission$, () => exports.ProfessionalClaimSubmissionReferenceNumbers$], 1
];
exports.ProfessionalClaimSubmissionInsured$ = [3, n2, _PCSI,
    0,
    [_iTn, _n, _pRLC, _mI, _ad, _pOGN, _dOB, _g, _ss, _pCCN, _pNl],
    [0, [() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], 0, [() => ProfessionalClaimSubmissionMemberId, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => ProfessionalClaimSubmissionPolicyOrGroupNumber, 0], [() => ProfessionalClaimSubmissionDateOfBirth, 0], [() => ProfessionalClaimSubmissionGenderCode, 0], [() => ProfessionalClaimSubmissionSsn, 0], [() => ProfessionalClaimSubmissionPropertyCasualtyClaimNumber, 0], [() => ProfessionalClaimSubmissionPlanName, 0]], 3
];
exports.ProfessionalClaimSubmissionOrderingProvider$ = [3, n2, _PCSOP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionOrderingProviderIdentifiers$ = [3, n2, _PCSOPI,
    0,
    [_np, _sLN, _cN],
    [0, 0, 0]
];
exports.ProfessionalClaimSubmissionOtherInsured$ = [3, n2, _PCSOI,
    0,
    [_n, _mI, _rL, _rTI, _cFI, _oP, _a, _ad, _pOGN, _pNl, _ss, _mSIT],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => ProfessionalClaimSubmissionMemberId, 0], 0, 0, 0, () => exports.ProfessionalClaimSubmissionOtherPayer$, () => exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], [() => ProfessionalClaimSubmissionPolicyOrGroupNumber, 0], [() => ProfessionalClaimSubmissionPlanName, 0], [() => ProfessionalClaimSubmissionSsn, 0], 0], 7
];
exports.ProfessionalClaimSubmissionOtherInsuredAuthorization$ = [3, n2, _PCSOIA,
    0,
    [_iAA, _pRMI, _pGPS],
    [0, 0, 2], 2
];
exports.ProfessionalClaimSubmissionOtherPayer$ = [3, n2, _PCSOPr,
    0,
    [_n, _id],
    [() => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, () => exports.ProfessionalClaimSubmissionOtherPayerId$], 2
];
exports.ProfessionalClaimSubmissionPatient$ = [3, n2, _PCSP,
    0,
    [_n, _dOB, _g, _ad, _rTI],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], [() => ProfessionalClaimSubmissionDateOfBirth, 0], [() => ProfessionalClaimSubmissionGenderCode, 0], [() => exports.ProfessionalClaimSubmissionAddress$, 0], 0], 5
];
exports.ProfessionalClaimSubmissionPatientCondition$ = [3, n2, _PCSPC,
    0,
    [_iER, _iAAR, _iOAR, _aAS],
    [2, 2, 2, 0]
];
exports.ProfessionalClaimSubmissionPayer$ = [3, n2, _PCSPr,
    0,
    [_id, _n, _ad, _rI],
    [0, () => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], 0], 1
];
exports.ProfessionalClaimSubmissionPersonName$ = [3, n2, _PCSPNro,
    8,
    [_lNa, _fNi, _mN, _suf],
    [0, 0, 0, 0], 1
];
exports.ProfessionalClaimSubmissionProcedureCode$ = [3, n2, _PCSPCr,
    0,
    [_cod, _mo],
    [0, 64 | 0], 1
];
exports.ProfessionalClaimSubmissionPurchasedService$ = [3, n2, _PCSPS,
    0,
    [_cA, _pro],
    [0, () => exports.ProfessionalClaimSubmissionPurchasedServiceProvider$], 2
];
exports.ProfessionalClaimSubmissionPurchasedServiceProvider$ = [3, n2, _PCSPSP,
    0,
    [_eT, _ide],
    [0, () => exports.ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers$], 2
];
exports.ProfessionalClaimSubmissionPurchasedServiceProviderIdentifiers$ = [3, n2, _PCSPSPI,
    0,
    [_np],
    [0], 1
];
exports.ProfessionalClaimSubmissionReferenceNumbers$ = [3, n2, _PCSRN,
    0,
    [_pAr, _re, _cl, _mC],
    [0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionReferringProvider$ = [3, n2, _PCSRP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionReferringProviderIdentifiers$ = [3, n2, _PCSRPI,
    0,
    [_np, _sLN, _cN],
    [0, 0, 0]
];
exports.ProfessionalClaimSubmissionRenderingProvider$ = [3, n2, _PCSRPr,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], () => exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionRenderingProviderIdentifiers$ = [3, n2, _PCSRPIr,
    0,
    [_np, _sLN, _cN, _lN, _tCa],
    [0, 0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionResubmission$ = [3, n2, _PCSR,
    0,
    [_cod, _oRN],
    [0, 0]
];
exports.ProfessionalClaimSubmissionServiceFacility$ = [3, n2, _PCSSF,
    0,
    [_n, _ad, _ide],
    [() => exports.ProfessionalClaimSubmissionQualifiedOrganizationName$, [() => exports.ProfessionalClaimSubmissionAddress$, 0], () => exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$], 2
];
exports.ProfessionalClaimSubmissionServiceFacilityIdentifiers$ = [3, n2, _PCSSFI,
    0,
    [_np, _sLN, _cN, _lN],
    [0, 0, 0, 0]
];
exports.ProfessionalClaimSubmissionServiceLine$ = [3, n2, _PCSSL,
    0,
    [_dOS, _pCr, _dC, _lICA, _u, _pOS, _iE, _iERs, _iFP, _rPe, _oPr, _pSu, _lICN, _dI, _nFUC, _at, _pAri],
    [() => exports.ProfessionalClaimSubmissionDateRange$, () => exports.ProfessionalClaimSubmissionProcedureCode$, 64 | 0, 0, 0, 0, 2, 2, 2, [() => exports.ProfessionalClaimSubmissionRenderingProvider$, 0], [() => exports.ProfessionalClaimSubmissionOrderingProvider$, 0], () => exports.ProfessionalClaimSubmissionPurchasedService$, 0, () => exports.ProfessionalClaimSubmissionDrugIdentification$, 0, () => ProfessionalClaimSubmissionAttachmentList, () => ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers], 5
];
exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$ = [3, n2, _PCSSLPAN,
    0,
    [_pAN, _oPPI],
    [0, 0], 1
];
exports.ProfessionalClaimSubmissionSubmitter$ = [3, n2, _PCSSr,
    0,
    [_n, _co, _et],
    [[() => exports.ProfessionalClaimSubmissionQualifiedName$, 0], [() => exports.ProfessionalClaimSubmissionContact$, 0], 0], 1
];
exports.ProfessionalClaimSubmissionSupervisingProvider$ = [3, n2, _PCSSP,
    0,
    [_n, _ide],
    [[() => exports.ProfessionalClaimSubmissionQualifiedPersonName$, 0], () => exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$], 1
];
exports.ProfessionalClaimSubmissionSupervisingProviderIdentifiers$ = [3, n2, _PCSSPI,
    0,
    [_np, _sLN, _cN, _lN],
    [0, 0, 0, 0]
];
exports.ValidateProfessionalClaimSubmissionInput$ = [3, n2, _VPCSI,
    0,
    [_p, _pa, _su, _i, _a, _en, _b, _sL, _pat, _oI],
    [0, [() => exports.ProfessionalClaimSubmissionPayer$, 0], [() => exports.ProfessionalClaimSubmissionSubmitter$, 0], [() => exports.ProfessionalClaimSubmissionInsured$, 0], () => exports.ProfessionalClaimSubmissionAuthorization$, [() => exports.ProfessionalClaimSubmissionEncounter$, 0], [() => exports.ProfessionalClaimSubmissionBilling$, 0], [() => ProfessionalClaimSubmissionServiceLines, 0], [() => exports.ProfessionalClaimSubmissionPatient$, 0], [() => ProfessionalClaimSubmissionOtherInsuredList, 0]], 8
];
exports.ValidateProfessionalClaimSubmissionOutput$ = [3, n2, _VPCSO,
    0,
    [_er],
    [() => ClaimRejectionErrors]
];
exports.ClaimDateRange$ = [3, n4, _CDR,
    0,
    [_sta, _end],
    [0, 0], 1
];
exports.ClaimAcknowledgmentSummary$ = [3, n5, _CAS,
    0,
    [_id, _stat, _rB, _sN, _pA],
    [0, 0, 0, 0, 5], 5
];
exports.ClaimPatientName$ = [3, n5, _CPN,
    0,
    [_fNi, _mN, _lNa, _suf],
    [0, 0, 0, 0]
];
exports.ClaimPaymentInformationSummary$ = [3, n5, _CPIS,
    0,
    [_id, _sC, _tCCA, _cPA, _pA, _pRA, _cOETN],
    [0, 0, 0, 0, 5, 0, 0], 5
];
exports.ClaimSubmissionSummary$ = [3, n5, _CSS,
    0,
    [_id, _pCN, _tCCA, _pA, _sPI, _pNa, _dOS],
    [0, 0, 0, 5, 0, () => exports.ClaimPatientName$, () => exports.ClaimDateRange$], 4
];
exports.ClaimSummary$ = [3, n5, _CS,
    0,
    [_id, _pCN, _stat, _sRB, _t, _tCCA, _sA, _sPI, _pNa, _tCPA, _dOS],
    [0, 0, 0, 0, 0, 0, 5, 0, () => exports.ClaimPatientName$, 0, () => exports.ClaimDateRange$], 7
];
exports.GetClaimInput$ = [3, n5, _GCI,
    0,
    [_id],
    [[0, 1]], 1
];
exports.GetClaimOutput$ = [3, n5, _GCO,
    0,
    [_id, _pCN, _stat, _sRB, _t, _tCCA, _sA, _sPI, _pNa, _tCPA, _dOS],
    [0, 0, 0, 0, 0, 0, 5, 0, () => exports.ClaimPatientName$, 0, () => exports.ClaimDateRange$], 7
];
exports.GetClaimTimelineInput$ = [3, n5, _GCTI,
    0,
    [_id, _pSa, _pT],
    [[0, 1], [1, { [_hQ]: _pSa }], [0, { [_hQ]: _pT }]], 1
];
exports.GetClaimTimelineOutput$ = [3, n5, _GCTO,
    0,
    [_it, _nPT],
    [() => ClaimTimelineEvents, 0], 1
];
exports.ListClaimsInput$ = [3, n5, _LCI,
    0,
    [_pSa, _pT, _stat, _pCNa, _sAu, _sB],
    [[1, { [_hQ]: _pSa }], [0, { [_hQ]: _pT }], [64 | 0, { [_hQ]: _stat }], [64 | 0, { [_hQ]: _pCNa }], [5, { [_hQ]: _sAu }], [5, { [_hQ]: _sB }]]
];
exports.ListClaimsOutput$ = [3, n5, _LCO,
    0,
    [_it, _nPT],
    [() => ClaimSummaries, 0], 1
];
exports.CreateEventDestinationInput$ = [3, n0, _CEDI,
    0,
    [_n, _eTv, _dU, _d, _cL, _stat, _iK],
    [0, 64 | 0, 0, 0, 1, 0, [0, { [_hH]: _IK, [_iTd]: 1 }]], 3
];
exports.CreateEventDestinationOutput$ = [3, n0, _CEDO,
    0,
    [_id, _cAr, _uA, _stat, _n, _d, _eTv, _dU, _sS, _lDT, _cL],
    [0, 5, 5, 0, 0, 0, 64 | 0, 0, [() => EventDestinationsSigningSecret, 0], 5, 1], 9
];
exports.DeleteEventDestinationInput$ = [3, n0, _DEDI,
    0,
    [_dIe, _iK],
    [[0, 1], [0, { [_hH]: _IK, [_iTd]: 1 }]], 1
];
exports.DeleteEventDestinationOutput$ = [3, n0, _DEDO,
    0,
    [],
    []
];
exports.EventDestinationsDestinationSummary$ = [3, n0, _EDDS,
    0,
    [_id, _cAr, _uA, _stat, _n, _d, _eTv, _dU, _lDT, _cL],
    [0, 5, 5, 0, 0, 0, 64 | 0, 0, 5, 1], 8
];
exports.EventDestinationsEventPayloadResourceRef$ = [3, n0, _EDEPRR,
    0,
    [_id, _t],
    [0, 0], 2
];
exports.EventDestinationsEventSummary$ = [3, n0, _EDES,
    0,
    [_id, _stat, _cAr, _eTve],
    [0, 0, 5, 0], 4
];
exports.EventDestinationsV1EventPayload$ = [3, n0, _EDVEP,
    0,
    [_o, _acc, _env, _cr, _res, _id, _t, _rRe],
    [0, 0, 0, 5, () => exports.EventDestinationsEventPayloadResourceRef$, 0, 0, () => EventDestinationsEventPayloadResourceRefList], 5
];
exports.GetEventDestinationEventInput$ = [3, n0, _GEDEI,
    0,
    [_eI],
    [[0, 1]], 1
];
exports.GetEventDestinationEventOutput$ = [3, n0, _GEDEO,
    0,
    [_id, _stat, _cAr, _eTve, _eP],
    [0, 0, 5, 0, () => exports.EventDestinationsEventPayload$], 5
];
exports.GetEventDestinationInput$ = [3, n0, _GEDI,
    0,
    [_dIe],
    [[0, 1]], 1
];
exports.GetEventDestinationOutput$ = [3, n0, _GEDO,
    0,
    [_id, _cAr, _uA, _stat, _n, _d, _eTv, _dU, _lDT, _cL],
    [0, 5, 5, 0, 0, 0, 64 | 0, 0, 5, 1], 8
];
exports.GetEventDestinationSecretInput$ = [3, n0, _GEDSI,
    0,
    [_dIe],
    [[0, 1]], 1
];
exports.GetEventDestinationSecretOutput$ = [3, n0, _GEDSO,
    0,
    [_sS, _pSEA],
    [[() => EventDestinationsSigningSecret, 0], 5], 1
];
exports.ListEventDestinationEventsInput$ = [3, n0, _LEDEI,
    0,
    [_pSa, _pT, _eI, _stat, _eTve, _cr],
    [[1, { [_hQ]: _pSa }], [0, { [_hQ]: _pT }], [0, { [_hQ]: _eI }], [64 | 0, { [_hQ]: _stat }], [0, { [_hQ]: _eTve }], [64 | 0, { [_hQ]: _cr }]]
];
exports.ListEventDestinationEventsOutput$ = [3, n0, _LEDEO,
    0,
    [_it, _nPT],
    [() => EventDestinationsEventSummaryList, 0], 1
];
exports.ListEventDestinationsInput$ = [3, n0, _LEDI,
    0,
    [_pSa, _pT, _stat, _eTve],
    [[1, { [_hQ]: _pSa }], [0, { [_hQ]: _pT }], [0, { [_hQ]: _stat }], [0, { [_hQ]: _eTve }]]
];
exports.ListEventDestinationsOutput$ = [3, n0, _LEDO,
    0,
    [_it, _nPT],
    [() => EventDestinationsDestinationSummaryList, 0], 1
];
exports.RotateEventDestinationSecretInput$ = [3, n0, _REDSI,
    0,
    [_dIe, _pSEH, _iK],
    [[0, 1], 1, [0, { [_hH]: _IK, [_iTd]: 1 }]], 1
];
exports.RotateEventDestinationSecretOutput$ = [3, n0, _REDSO,
    0,
    [_sS, _pSEA],
    [[() => EventDestinationsSigningSecret, 0], 5], 1
];
exports.UpdateEventDestinationInput$ = [3, n0, _UEDI,
    0,
    [_dIe, _n, _d, _eTv, _dU, _cL, _stat, _iK],
    [[0, 1], 0, 0, 64 | 0, 0, 1, 0, [0, { [_hH]: _IK, [_iTd]: 1 }]], 1
];
exports.UpdateEventDestinationOutput$ = [3, n0, _UEDO,
    0,
    [_id, _cAr, _uA, _stat, _n, _d, _eTv, _dU, _lDT, _cL],
    [0, 5, 5, 0, 0, 0, 64 | 0, 0, 5, 1], 8
];
exports.ValidationFailure$ = [3, n1, _VF,
    0,
    [_m, _path],
    [0, 0], 1
];
var ClaimRejectionErrors = [1, n3, _CREl,
    0, () => exports.ClaimRejectionError$
];
var ProfessionalClaimSubmissionAdditionalDiagnosisCodes = 64 | 0;
var ProfessionalClaimSubmissionAttachmentList = [1, n2, _PCSAL,
    0, () => exports.ProfessionalClaimSubmissionAttachment$
];
var ProfessionalClaimSubmissionClaimsCodeList = 64 | 0;
var ProfessionalClaimSubmissionEPSDTReferralConditionIndicatorList = 64 | 0;
var ProfessionalClaimSubmissionOtherInsuredList = [1, n2, _PCSOIL,
    0, [() => exports.ProfessionalClaimSubmissionOtherInsured$,
        0]
];
var ProfessionalClaimSubmissionProcedureModifierList = 64 | 0;
var ProfessionalClaimSubmissionServiceLineDiagnosisCodes = 64 | 0;
var ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumbers = [1, n2, _PCSSLPANr,
    0, () => exports.ProfessionalClaimSubmissionServiceLinePriorAuthorizationNumber$
];
var ProfessionalClaimSubmissionServiceLines = [1, n2, _PCSSLr,
    0, [() => exports.ProfessionalClaimSubmissionServiceLine$,
        0]
];
var ClaimPatientControlNumbersList = 64 | 0;
var ClaimStatusList = 64 | 0;
var ClaimSummaries = [1, n5, _CSl,
    0, () => exports.ClaimSummary$
];
var ClaimTimelineEvents = [1, n5, _CTE,
    0, () => exports.ClaimTimelineEvent$
];
var EventDestinationsDestinationSummaryList = [1, n0, _EDDSL,
    0, () => exports.EventDestinationsDestinationSummary$
];
var EventDestinationsEventPayloadResourceRefList = [1, n0, _EDEPRRL,
    0, () => exports.EventDestinationsEventPayloadResourceRef$
];
var EventDestinationsEventStatusList = 64 | 0;
var EventDestinationsEventSummaryList = [1, n0, _EDESL,
    0, () => exports.EventDestinationsEventSummary$
];
var EventDestinationsEventTypeList = 64 | 0;
var EventDestinationsTimestampFilter = 64 | 0;
var ValidationFailures = [1, n1, _VFa,
    0, () => exports.ValidationFailure$
];
exports.ProfessionalClaimSubmissionClaimNote$ = [4, n2, _PCSCN,
    0,
    [_aId, _cNe, _gRODP, _dD, _tPO],
    [[() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0], [() => ProfessionalClaimSubmissionClaimNoteText, 0]]
];
exports.ProfessionalClaimSubmissionOtherPayerId$ = [4, n2, _PCSOPIr,
    0,
    [_pI, _cPI],
    [0, 0]
];
exports.ProfessionalClaimSubmissionPrescriptionOrCompoundDrugAssociationNumber$ = [4, n2, _PCSPOCDAN,
    0,
    [_lSN, _pPN],
    [0, 0]
];
exports.ProfessionalClaimSubmissionQualifiedName$ = [4, n2, _PCSQN,
    0,
    [_or, _pe],
    [0, [() => exports.ProfessionalClaimSubmissionPersonName$, 0]]
];
exports.ProfessionalClaimSubmissionQualifiedOrganizationName$ = [4, n2, _PCSQON,
    0,
    [_or],
    [0]
];
exports.ProfessionalClaimSubmissionQualifiedPersonName$ = [4, n2, _PCSQPN,
    0,
    [_pe],
    [[() => exports.ProfessionalClaimSubmissionPersonName$, 0]]
];
exports.ProfessionalClaimSubmissionTaxId$ = [4, n2, _PCSTI,
    0,
    [_ss, _ei],
    [[() => ProfessionalClaimSubmissionSsn, 0], 0]
];
exports.ClaimTimelineEvent$ = [4, n5, _CTEl,
    0,
    [_pCS, _dCS, _iCS, _cAl, _cPIl],
    [() => exports.ClaimSubmissionSummary$, () => exports.ClaimSubmissionSummary$, () => exports.ClaimSubmissionSummary$, () => exports.ClaimAcknowledgmentSummary$, () => exports.ClaimPaymentInformationSummary$]
];
exports.EventDestinationsEventPayload$ = [4, n0, _EDEP,
    0,
    [_vE],
    [() => exports.EventDestinationsV1EventPayload$]
];
exports.CreateProfessionalClaimSubmission$ = [9, n2, _CPCS,
    { [_ht]: ["POST", "/2025-03-07/professional-claim-submissions", 201] }, () => exports.CreateProfessionalClaimSubmissionInput$, () => exports.CreateProfessionalClaimSubmissionOutput$
];
exports.GetProfessionalClaimSubmission$ = [9, n2, _GPCS,
    { [_ht]: ["GET", "/2025-03-07/professional-claim-submissions/{id}", 200] }, () => exports.GetProfessionalClaimSubmissionInput$, () => exports.GetProfessionalClaimSubmissionOutput$
];
exports.ValidateProfessionalClaimSubmission$ = [9, n2, _VPCS,
    { [_ht]: ["POST", "/2025-03-07/professional-claim-submissions/validate", 200] }, () => exports.ValidateProfessionalClaimSubmissionInput$, () => exports.ValidateProfessionalClaimSubmissionOutput$
];
exports.GetClaim$ = [9, n5, _GC,
    { [_ht]: ["GET", "/2025-03-07/claims/{id}", 200] }, () => exports.GetClaimInput$, () => exports.GetClaimOutput$
];
exports.GetClaimTimeline$ = [9, n5, _GCT,
    { [_ht]: ["GET", "/2025-03-07/claims/{id}/timeline", 200] }, () => exports.GetClaimTimelineInput$, () => exports.GetClaimTimelineOutput$
];
exports.ListClaims$ = [9, n5, _LC,
    { [_ht]: ["GET", "/2025-03-07/claims", 200] }, () => exports.ListClaimsInput$, () => exports.ListClaimsOutput$
];
exports.CreateEventDestination$ = [9, n0, _CED,
    { [_ht]: ["POST", "/2026-02-01/destinations", 201] }, () => exports.CreateEventDestinationInput$, () => exports.CreateEventDestinationOutput$
];
exports.DeleteEventDestination$ = [9, n0, _DED,
    { [_ht]: ["DELETE", "/2026-02-01/destinations/{destinationId}", 204] }, () => exports.DeleteEventDestinationInput$, () => exports.DeleteEventDestinationOutput$
];
exports.GetEventDestination$ = [9, n0, _GED,
    { [_ht]: ["GET", "/2026-02-01/destinations/{destinationId}", 200] }, () => exports.GetEventDestinationInput$, () => exports.GetEventDestinationOutput$
];
exports.GetEventDestinationEvent$ = [9, n0, _GEDE,
    { [_ht]: ["GET", "/2026-02-01/events/{eventId}", 200] }, () => exports.GetEventDestinationEventInput$, () => exports.GetEventDestinationEventOutput$
];
exports.GetEventDestinationSecret$ = [9, n0, _GEDS,
    { [_ht]: ["GET", "/2026-02-01/destinations/{destinationId}/secret", 200] }, () => exports.GetEventDestinationSecretInput$, () => exports.GetEventDestinationSecretOutput$
];
exports.ListEventDestinationEvents$ = [9, n0, _LEDE,
    { [_ht]: ["GET", "/2026-02-01/events", 200] }, () => exports.ListEventDestinationEventsInput$, () => exports.ListEventDestinationEventsOutput$
];
exports.ListEventDestinations$ = [9, n0, _LED,
    { [_ht]: ["GET", "/2026-02-01/destinations", 200] }, () => exports.ListEventDestinationsInput$, () => exports.ListEventDestinationsOutput$
];
exports.RotateEventDestinationSecret$ = [9, n0, _REDS,
    { [_ht]: ["POST", "/2026-02-01/destinations/{destinationId}/secret/rotate", 200] }, () => exports.RotateEventDestinationSecretInput$, () => exports.RotateEventDestinationSecretOutput$
];
exports.UpdateEventDestination$ = [9, n0, _UED,
    { [_ht]: ["POST", "/2026-02-01/destinations/{destinationId}", 200] }, () => exports.UpdateEventDestinationInput$, () => exports.UpdateEventDestinationOutput$
];
