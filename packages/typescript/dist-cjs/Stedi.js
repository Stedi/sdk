"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stedi = void 0;
const client_1 = require("@smithy/core/client");
const CreateEventDestinationCommand_1 = require("./commands/CreateEventDestinationCommand");
const CreateProfessionalClaimSubmissionCommand_1 = require("./commands/CreateProfessionalClaimSubmissionCommand");
const DeleteEventDestinationCommand_1 = require("./commands/DeleteEventDestinationCommand");
const GetClaimCommand_1 = require("./commands/GetClaimCommand");
const GetClaimTimelineCommand_1 = require("./commands/GetClaimTimelineCommand");
const GetEventDestinationCommand_1 = require("./commands/GetEventDestinationCommand");
const GetEventDestinationEventCommand_1 = require("./commands/GetEventDestinationEventCommand");
const GetEventDestinationSecretCommand_1 = require("./commands/GetEventDestinationSecretCommand");
const GetProfessionalClaimSubmissionCommand_1 = require("./commands/GetProfessionalClaimSubmissionCommand");
const ListClaimsCommand_1 = require("./commands/ListClaimsCommand");
const ListEventDestinationEventsCommand_1 = require("./commands/ListEventDestinationEventsCommand");
const ListEventDestinationsCommand_1 = require("./commands/ListEventDestinationsCommand");
const RotateEventDestinationSecretCommand_1 = require("./commands/RotateEventDestinationSecretCommand");
const UpdateEventDestinationCommand_1 = require("./commands/UpdateEventDestinationCommand");
const ValidateProfessionalClaimSubmissionCommand_1 = require("./commands/ValidateProfessionalClaimSubmissionCommand");
const GetClaimTimelinePaginator_1 = require("./pagination/GetClaimTimelinePaginator");
const ListClaimsPaginator_1 = require("./pagination/ListClaimsPaginator");
const ListEventDestinationEventsPaginator_1 = require("./pagination/ListEventDestinationEventsPaginator");
const ListEventDestinationsPaginator_1 = require("./pagination/ListEventDestinationsPaginator");
const StediClient_1 = require("./StediClient");
const commands = {
    CreateProfessionalClaimSubmissionCommand: CreateProfessionalClaimSubmissionCommand_1.CreateProfessionalClaimSubmissionCommand,
    GetProfessionalClaimSubmissionCommand: GetProfessionalClaimSubmissionCommand_1.GetProfessionalClaimSubmissionCommand,
    ValidateProfessionalClaimSubmissionCommand: ValidateProfessionalClaimSubmissionCommand_1.ValidateProfessionalClaimSubmissionCommand,
    GetClaimCommand: GetClaimCommand_1.GetClaimCommand,
    GetClaimTimelineCommand: GetClaimTimelineCommand_1.GetClaimTimelineCommand,
    ListClaimsCommand: ListClaimsCommand_1.ListClaimsCommand,
    CreateEventDestinationCommand: CreateEventDestinationCommand_1.CreateEventDestinationCommand,
    DeleteEventDestinationCommand: DeleteEventDestinationCommand_1.DeleteEventDestinationCommand,
    GetEventDestinationCommand: GetEventDestinationCommand_1.GetEventDestinationCommand,
    GetEventDestinationEventCommand: GetEventDestinationEventCommand_1.GetEventDestinationEventCommand,
    GetEventDestinationSecretCommand: GetEventDestinationSecretCommand_1.GetEventDestinationSecretCommand,
    ListEventDestinationEventsCommand: ListEventDestinationEventsCommand_1.ListEventDestinationEventsCommand,
    ListEventDestinationsCommand: ListEventDestinationsCommand_1.ListEventDestinationsCommand,
    RotateEventDestinationSecretCommand: RotateEventDestinationSecretCommand_1.RotateEventDestinationSecretCommand,
    UpdateEventDestinationCommand: UpdateEventDestinationCommand_1.UpdateEventDestinationCommand,
};
const paginators = {
    paginateGetClaimTimeline: GetClaimTimelinePaginator_1.paginateGetClaimTimeline,
    paginateListClaims: ListClaimsPaginator_1.paginateListClaims,
    paginateListEventDestinationEvents: ListEventDestinationEventsPaginator_1.paginateListEventDestinationEvents,
    paginateListEventDestinations: ListEventDestinationsPaginator_1.paginateListEventDestinations,
};
class Stedi extends StediClient_1.StediClient {
}
exports.Stedi = Stedi;
(0, client_1.createAggregatedClient)(commands, Stedi, { paginators });
