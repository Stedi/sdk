"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfessionalClaimSubmissionCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class GetProfessionalClaimSubmissionCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep0, commandBuilder_1._mw0, "GetProfessionalClaimSubmission", schemas_0_1.GetProfessionalClaimSubmission$) {
}
exports.GetProfessionalClaimSubmissionCommand = GetProfessionalClaimSubmissionCommand;
