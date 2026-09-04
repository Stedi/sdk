// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventDestinationsCommand,
  ListEventDestinationsCommandInput,
  ListEventDestinationsCommandOutput,
} from "../commands/ListEventDestinationsCommand";
import { StediClient } from "../StediClient";
import type { StediPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventDestinations: (
  config: StediPaginationConfiguration,
  input: ListEventDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListEventDestinationsCommandOutput> = createPaginator<
  StediPaginationConfiguration,
  ListEventDestinationsCommandInput,
  ListEventDestinationsCommandOutput
>(StediClient, ListEventDestinationsCommand, "pageToken", "nextPageToken", "");
