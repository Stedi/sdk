import { createAggregatedClient } from "@smithy/core/client";
import { CreateProfessionalClaimSubmissionCommand, } from "./commands/CreateProfessionalClaimSubmissionCommand";
import { GetProfessionalClaimSubmissionCommand, } from "./commands/GetProfessionalClaimSubmissionCommand";
import { ValidateProfessionalClaimSubmissionCommand, } from "./commands/ValidateProfessionalClaimSubmissionCommand";
import { StediClient } from "./StediClient";
const commands = {
    CreateProfessionalClaimSubmissionCommand,
    GetProfessionalClaimSubmissionCommand,
    ValidateProfessionalClaimSubmissionCommand,
};
export class Stedi extends StediClient {
}
createAggregatedClient(commands, Stedi);
