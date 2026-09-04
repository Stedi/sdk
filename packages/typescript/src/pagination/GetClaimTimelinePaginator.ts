// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetClaimTimelineCommand,
  GetClaimTimelineCommandInput,
  GetClaimTimelineCommandOutput,
} from "../commands/GetClaimTimelineCommand";
import { StediClient } from "../StediClient";
import type { StediPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetClaimTimeline: (
  config: StediPaginationConfiguration,
  input: GetClaimTimelineCommandInput,
  ...rest: any[]
) => Paginator<GetClaimTimelineCommandOutput> = createPaginator<
  StediPaginationConfiguration,
  GetClaimTimelineCommandInput,
  GetClaimTimelineCommandOutput
>(StediClient, GetClaimTimelineCommand, "pageToken", "nextPageToken", "pageSize");
