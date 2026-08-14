"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stedi = void 0;
const client_1 = require("@smithy/core/client");
const CreateProfessionalClaimSubmissionCommand_1 = require("./commands/CreateProfessionalClaimSubmissionCommand");
const GetProfessionalClaimSubmissionCommand_1 = require("./commands/GetProfessionalClaimSubmissionCommand");
const ValidateProfessionalClaimSubmissionCommand_1 = require("./commands/ValidateProfessionalClaimSubmissionCommand");
const StediClient_1 = require("./StediClient");
const commands = {
    CreateProfessionalClaimSubmissionCommand: CreateProfessionalClaimSubmissionCommand_1.CreateProfessionalClaimSubmissionCommand,
    GetProfessionalClaimSubmissionCommand: GetProfessionalClaimSubmissionCommand_1.GetProfessionalClaimSubmissionCommand,
    ValidateProfessionalClaimSubmissionCommand: ValidateProfessionalClaimSubmissionCommand_1.ValidateProfessionalClaimSubmissionCommand,
};
class Stedi extends StediClient_1.StediClient {
}
exports.Stedi = Stedi;
(0, client_1.createAggregatedClient)(commands, Stedi);
