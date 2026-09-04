// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListClaimsCommand, ListClaimsCommandInput, ListClaimsCommandOutput } from "../commands/ListClaimsCommand";
import { StediClient } from "../StediClient";
import type { StediPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClaims: (
  config: StediPaginationConfiguration,
  input: ListClaimsCommandInput,
  ...rest: any[]
) => Paginator<ListClaimsCommandOutput> = createPaginator<
  StediPaginationConfiguration,
  ListClaimsCommandInput,
  ListClaimsCommandOutput
>(StediClient, ListClaimsCommand, "pageToken", "nextPageToken", "pageSize");
