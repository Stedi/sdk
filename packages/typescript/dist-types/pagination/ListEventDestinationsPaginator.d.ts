import type { Paginator } from "@smithy/types";
import { ListEventDestinationsCommandInput, ListEventDestinationsCommandOutput } from "../commands/ListEventDestinationsCommand";
import type { StediPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListEventDestinations: (config: StediPaginationConfiguration, input: ListEventDestinationsCommandInput, ...rest: any[]) => Paginator<ListEventDestinationsCommandOutput>;
