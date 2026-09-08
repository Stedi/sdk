import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";
import { type CreateEligibilityCheckCommandInput, type CreateEligibilityCheckCommandOutput } from "./commands/CreateEligibilityCheckCommand";
import { type CreateEventDestinationCommandInput, type CreateEventDestinationCommandOutput } from "./commands/CreateEventDestinationCommand";
import { type CreateProfessionalClaimSubmissionCommandInput, type CreateProfessionalClaimSubmissionCommandOutput } from "./commands/CreateProfessionalClaimSubmissionCommand";
import { type DeleteEventDestinationCommandInput, type DeleteEventDestinationCommandOutput } from "./commands/DeleteEventDestinationCommand";
import { type GetClaimCommandInput, type GetClaimCommandOutput } from "./commands/GetClaimCommand";
import { type GetClaimTimelineCommandInput, type GetClaimTimelineCommandOutput } from "./commands/GetClaimTimelineCommand";
import { type GetEventDestinationCommandInput, type GetEventDestinationCommandOutput } from "./commands/GetEventDestinationCommand";
import { type GetEventDestinationEventCommandInput, type GetEventDestinationEventCommandOutput } from "./commands/GetEventDestinationEventCommand";
import { type GetEventDestinationSecretCommandInput, type GetEventDestinationSecretCommandOutput } from "./commands/GetEventDestinationSecretCommand";
import { type GetProfessionalClaimSubmissionCommandInput, type GetProfessionalClaimSubmissionCommandOutput } from "./commands/GetProfessionalClaimSubmissionCommand";
import { type ListClaimsCommandInput, type ListClaimsCommandOutput } from "./commands/ListClaimsCommand";
import { type ListEventDestinationEventsCommandInput, type ListEventDestinationEventsCommandOutput } from "./commands/ListEventDestinationEventsCommand";
import { type ListEventDestinationsCommandInput, type ListEventDestinationsCommandOutput } from "./commands/ListEventDestinationsCommand";
import { type RotateEventDestinationSecretCommandInput, type RotateEventDestinationSecretCommandOutput } from "./commands/RotateEventDestinationSecretCommand";
import { type UpdateEventDestinationCommandInput, type UpdateEventDestinationCommandOutput } from "./commands/UpdateEventDestinationCommand";
import { type ValidateProfessionalClaimSubmissionCommandInput, type ValidateProfessionalClaimSubmissionCommandOutput } from "./commands/ValidateProfessionalClaimSubmissionCommand";
import { StediClient } from "./StediClient";
export interface Stedi {
    /**
     * @see {@link CreateProfessionalClaimSubmissionCommand}
     */
    createProfessionalClaimSubmission(args: CreateProfessionalClaimSubmissionCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfessionalClaimSubmissionCommandOutput>;
    createProfessionalClaimSubmission(args: CreateProfessionalClaimSubmissionCommandInput, cb: (err: any, data?: CreateProfessionalClaimSubmissionCommandOutput) => void): void;
    createProfessionalClaimSubmission(args: CreateProfessionalClaimSubmissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfessionalClaimSubmissionCommandOutput) => void): void;
    /**
     * @see {@link GetProfessionalClaimSubmissionCommand}
     */
    getProfessionalClaimSubmission(args: GetProfessionalClaimSubmissionCommandInput, options?: __HttpHandlerOptions): Promise<GetProfessionalClaimSubmissionCommandOutput>;
    getProfessionalClaimSubmission(args: GetProfessionalClaimSubmissionCommandInput, cb: (err: any, data?: GetProfessionalClaimSubmissionCommandOutput) => void): void;
    getProfessionalClaimSubmission(args: GetProfessionalClaimSubmissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfessionalClaimSubmissionCommandOutput) => void): void;
    /**
     * @see {@link ValidateProfessionalClaimSubmissionCommand}
     */
    validateProfessionalClaimSubmission(args: ValidateProfessionalClaimSubmissionCommandInput, options?: __HttpHandlerOptions): Promise<ValidateProfessionalClaimSubmissionCommandOutput>;
    validateProfessionalClaimSubmission(args: ValidateProfessionalClaimSubmissionCommandInput, cb: (err: any, data?: ValidateProfessionalClaimSubmissionCommandOutput) => void): void;
    validateProfessionalClaimSubmission(args: ValidateProfessionalClaimSubmissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ValidateProfessionalClaimSubmissionCommandOutput) => void): void;
    /**
     * @see {@link GetClaimCommand}
     */
    getClaim(args: GetClaimCommandInput, options?: __HttpHandlerOptions): Promise<GetClaimCommandOutput>;
    getClaim(args: GetClaimCommandInput, cb: (err: any, data?: GetClaimCommandOutput) => void): void;
    getClaim(args: GetClaimCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClaimCommandOutput) => void): void;
    /**
     * @see {@link GetClaimTimelineCommand}
     */
    getClaimTimeline(args: GetClaimTimelineCommandInput, options?: __HttpHandlerOptions): Promise<GetClaimTimelineCommandOutput>;
    getClaimTimeline(args: GetClaimTimelineCommandInput, cb: (err: any, data?: GetClaimTimelineCommandOutput) => void): void;
    getClaimTimeline(args: GetClaimTimelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClaimTimelineCommandOutput) => void): void;
    /**
     * @see {@link ListClaimsCommand}
     */
    listClaims(): Promise<ListClaimsCommandOutput>;
    listClaims(args: ListClaimsCommandInput, options?: __HttpHandlerOptions): Promise<ListClaimsCommandOutput>;
    listClaims(args: ListClaimsCommandInput, cb: (err: any, data?: ListClaimsCommandOutput) => void): void;
    listClaims(args: ListClaimsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClaimsCommandOutput) => void): void;
    /**
     * @see {@link CreateEligibilityCheckCommand}
     */
    createEligibilityCheck(args: CreateEligibilityCheckCommandInput, options?: __HttpHandlerOptions): Promise<CreateEligibilityCheckCommandOutput>;
    createEligibilityCheck(args: CreateEligibilityCheckCommandInput, cb: (err: any, data?: CreateEligibilityCheckCommandOutput) => void): void;
    createEligibilityCheck(args: CreateEligibilityCheckCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEligibilityCheckCommandOutput) => void): void;
    /**
     * @see {@link CreateEventDestinationCommand}
     */
    createEventDestination(args: CreateEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventDestinationCommandOutput>;
    createEventDestination(args: CreateEventDestinationCommandInput, cb: (err: any, data?: CreateEventDestinationCommandOutput) => void): void;
    createEventDestination(args: CreateEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventDestinationCommandOutput) => void): void;
    /**
     * @see {@link DeleteEventDestinationCommand}
     */
    deleteEventDestination(args: DeleteEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventDestinationCommandOutput>;
    deleteEventDestination(args: DeleteEventDestinationCommandInput, cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void): void;
    deleteEventDestination(args: DeleteEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void): void;
    /**
     * @see {@link GetEventDestinationCommand}
     */
    getEventDestination(args: GetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<GetEventDestinationCommandOutput>;
    getEventDestination(args: GetEventDestinationCommandInput, cb: (err: any, data?: GetEventDestinationCommandOutput) => void): void;
    getEventDestination(args: GetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventDestinationCommandOutput) => void): void;
    /**
     * @see {@link GetEventDestinationEventCommand}
     */
    getEventDestinationEvent(args: GetEventDestinationEventCommandInput, options?: __HttpHandlerOptions): Promise<GetEventDestinationEventCommandOutput>;
    getEventDestinationEvent(args: GetEventDestinationEventCommandInput, cb: (err: any, data?: GetEventDestinationEventCommandOutput) => void): void;
    getEventDestinationEvent(args: GetEventDestinationEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventDestinationEventCommandOutput) => void): void;
    /**
     * @see {@link GetEventDestinationSecretCommand}
     */
    getEventDestinationSecret(args: GetEventDestinationSecretCommandInput, options?: __HttpHandlerOptions): Promise<GetEventDestinationSecretCommandOutput>;
    getEventDestinationSecret(args: GetEventDestinationSecretCommandInput, cb: (err: any, data?: GetEventDestinationSecretCommandOutput) => void): void;
    getEventDestinationSecret(args: GetEventDestinationSecretCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventDestinationSecretCommandOutput) => void): void;
    /**
     * @see {@link ListEventDestinationEventsCommand}
     */
    listEventDestinationEvents(): Promise<ListEventDestinationEventsCommandOutput>;
    listEventDestinationEvents(args: ListEventDestinationEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventDestinationEventsCommandOutput>;
    listEventDestinationEvents(args: ListEventDestinationEventsCommandInput, cb: (err: any, data?: ListEventDestinationEventsCommandOutput) => void): void;
    listEventDestinationEvents(args: ListEventDestinationEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventDestinationEventsCommandOutput) => void): void;
    /**
     * @see {@link ListEventDestinationsCommand}
     */
    listEventDestinations(): Promise<ListEventDestinationsCommandOutput>;
    listEventDestinations(args: ListEventDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventDestinationsCommandOutput>;
    listEventDestinations(args: ListEventDestinationsCommandInput, cb: (err: any, data?: ListEventDestinationsCommandOutput) => void): void;
    listEventDestinations(args: ListEventDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventDestinationsCommandOutput) => void): void;
    /**
     * @see {@link RotateEventDestinationSecretCommand}
     */
    rotateEventDestinationSecret(args: RotateEventDestinationSecretCommandInput, options?: __HttpHandlerOptions): Promise<RotateEventDestinationSecretCommandOutput>;
    rotateEventDestinationSecret(args: RotateEventDestinationSecretCommandInput, cb: (err: any, data?: RotateEventDestinationSecretCommandOutput) => void): void;
    rotateEventDestinationSecret(args: RotateEventDestinationSecretCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RotateEventDestinationSecretCommandOutput) => void): void;
    /**
     * @see {@link UpdateEventDestinationCommand}
     */
    updateEventDestination(args: UpdateEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEventDestinationCommandOutput>;
    updateEventDestination(args: UpdateEventDestinationCommandInput, cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void): void;
    updateEventDestination(args: UpdateEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void): void;
    /**
     * @see {@link GetClaimTimelineCommand}
     * @param args - command input.
     * @param paginationConfig - optional pagination config.
     * @returns AsyncIterable of {@link GetClaimTimelineCommandOutput}.
     */
    paginateGetClaimTimeline(args: GetClaimTimelineCommandInput, paginationConfig?: Omit<PaginationConfiguration, "client">): Paginator<GetClaimTimelineCommandOutput>;
    /**
     * @see {@link ListClaimsCommand}
     * @param args - command input.
     * @param paginationConfig - optional pagination config.
     * @returns AsyncIterable of {@link ListClaimsCommandOutput}.
     */
    paginateListClaims(args?: ListClaimsCommandInput, paginationConfig?: Omit<PaginationConfiguration, "client">): Paginator<ListClaimsCommandOutput>;
    /**
     * @see {@link ListEventDestinationEventsCommand}
     * @param args - command input.
     * @param paginationConfig - optional pagination config.
     * @returns AsyncIterable of {@link ListEventDestinationEventsCommandOutput}.
     */
    paginateListEventDestinationEvents(args?: ListEventDestinationEventsCommandInput, paginationConfig?: Omit<PaginationConfiguration, "client">): Paginator<ListEventDestinationEventsCommandOutput>;
    /**
     * @see {@link ListEventDestinationsCommand}
     * @param args - command input.
     * @param paginationConfig - optional pagination config.
     * @returns AsyncIterable of {@link ListEventDestinationsCommandOutput}.
     */
    paginateListEventDestinations(args?: ListEventDestinationsCommandInput, paginationConfig?: Omit<PaginationConfiguration, "client">): Paginator<ListEventDestinationsCommandOutput>;
}
/**
 * The Stedi SDK — unified, typed access to Stedi's healthcare APIs.
 * @public
 */
export declare class Stedi extends StediClient implements Stedi {
}
