import { createPaginator } from "@smithy/core";
import { ListEventDestinationEventsCommand, } from "../commands/ListEventDestinationEventsCommand";
import { StediClient } from "../StediClient";
export const paginateListEventDestinationEvents = createPaginator(StediClient, ListEventDestinationEventsCommand, "pageToken", "nextPageToken", "");
