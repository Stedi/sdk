import { createPaginator } from "@smithy/core";
import { GetClaimTimelineCommand, } from "../commands/GetClaimTimelineCommand";
import { StediClient } from "../StediClient";
export const paginateGetClaimTimeline = createPaginator(StediClient, GetClaimTimelineCommand, "pageToken", "nextPageToken", "pageSize");
