"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessionalClaimSubmissionCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class CreateProfessionalClaimSubmissionCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep2, commandBuilder_1._mw0, "CreateProfessionalClaimSubmission", schemas_0_1.CreateProfessionalClaimSubmission$) {
}
exports.CreateProfessionalClaimSubmissionCommand = CreateProfessionalClaimSubmissionCommand;
