import type { Paginator } from "@smithy/types";
import { ListEventDestinationEventsCommandInput, ListEventDestinationEventsCommandOutput } from "../commands/ListEventDestinationEventsCommand";
import type { StediPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListEventDestinationEvents: (config: StediPaginationConfiguration, input: ListEventDestinationEventsCommandInput, ...rest: any[]) => Paginator<ListEventDestinationEventsCommandOutput>;
