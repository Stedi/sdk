import { createAggregatedClient } from "@smithy/core/client";
import { CreateEligibilityCheckCommand, } from "./commands/CreateEligibilityCheckCommand";
import { CreateEventDestinationCommand, } from "./commands/CreateEventDestinationCommand";
import { CreateProfessionalClaimSubmissionCommand, } from "./commands/CreateProfessionalClaimSubmissionCommand";
import { DeleteEventDestinationCommand, } from "./commands/DeleteEventDestinationCommand";
import { GetClaimCommand } from "./commands/GetClaimCommand";
import { GetClaimTimelineCommand, } from "./commands/GetClaimTimelineCommand";
import { GetEventDestinationCommand, } from "./commands/GetEventDestinationCommand";
import { GetEventDestinationEventCommand, } from "./commands/GetEventDestinationEventCommand";
import { GetEventDestinationSecretCommand, } from "./commands/GetEventDestinationSecretCommand";
import { GetProfessionalClaimSubmissionCommand, } from "./commands/GetProfessionalClaimSubmissionCommand";
import { ListClaimsCommand, } from "./commands/ListClaimsCommand";
import { ListEventDestinationEventsCommand, } from "./commands/ListEventDestinationEventsCommand";
import { ListEventDestinationsCommand, } from "./commands/ListEventDestinationsCommand";
import { RotateEventDestinationSecretCommand, } from "./commands/RotateEventDestinationSecretCommand";
import { UpdateEventDestinationCommand, } from "./commands/UpdateEventDestinationCommand";
import { ValidateProfessionalClaimSubmissionCommand, } from "./commands/ValidateProfessionalClaimSubmissionCommand";
import { paginateGetClaimTimeline } from "./pagination/GetClaimTimelinePaginator";
import { paginateListClaims } from "./pagination/ListClaimsPaginator";
import { paginateListEventDestinationEvents } from "./pagination/ListEventDestinationEventsPaginator";
import { paginateListEventDestinations } from "./pagination/ListEventDestinationsPaginator";
import { StediClient } from "./StediClient";
const commands = {
    CreateProfessionalClaimSubmissionCommand,
    GetProfessionalClaimSubmissionCommand,
    ValidateProfessionalClaimSubmissionCommand,
    GetClaimCommand,
    GetClaimTimelineCommand,
    ListClaimsCommand,
    CreateEligibilityCheckCommand,
    CreateEventDestinationCommand,
    DeleteEventDestinationCommand,
    GetEventDestinationCommand,
    GetEventDestinationEventCommand,
    GetEventDestinationSecretCommand,
    ListEventDestinationEventsCommand,
    ListEventDestinationsCommand,
    RotateEventDestinationSecretCommand,
    UpdateEventDestinationCommand,
};
const paginators = {
    paginateGetClaimTimeline,
    paginateListClaims,
    paginateListEventDestinationEvents,
    paginateListEventDestinations,
};
export class Stedi extends StediClient {
}
createAggregatedClient(commands, Stedi, { paginators });
