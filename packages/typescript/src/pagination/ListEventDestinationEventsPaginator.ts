// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventDestinationEventsCommand,
  ListEventDestinationEventsCommandInput,
  ListEventDestinationEventsCommandOutput,
} from "../commands/ListEventDestinationEventsCommand";
import { StediClient } from "../StediClient";
import type { StediPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventDestinationEvents: (
  config: StediPaginationConfiguration,
  input: ListEventDestinationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListEventDestinationEventsCommandOutput> = createPaginator<
  StediPaginationConfiguration,
  ListEventDestinationEventsCommandInput,
  ListEventDestinationEventsCommandOutput
>(StediClient, ListEventDestinationEventsCommand, "pageToken", "nextPageToken", "");
