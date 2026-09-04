import { createPaginator } from "@smithy/core";
import { ListEventDestinationsCommand, } from "../commands/ListEventDestinationsCommand";
import { StediClient } from "../StediClient";
export const paginateListEventDestinations = createPaginator(StediClient, ListEventDestinationsCommand, "pageToken", "nextPageToken", "");
