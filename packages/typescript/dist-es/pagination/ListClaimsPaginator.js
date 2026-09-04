import { createPaginator } from "@smithy/core";
import { ListClaimsCommand } from "../commands/ListClaimsCommand";
import { StediClient } from "../StediClient";
export const paginateListClaims = createPaginator(StediClient, ListClaimsCommand, "pageToken", "nextPageToken", "pageSize");
