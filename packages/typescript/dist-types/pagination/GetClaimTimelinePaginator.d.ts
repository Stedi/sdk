import type { Paginator } from "@smithy/types";
import { GetClaimTimelineCommandInput, GetClaimTimelineCommandOutput } from "../commands/GetClaimTimelineCommand";
import type { StediPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetClaimTimeline: (config: StediPaginationConfiguration, input: GetClaimTimelineCommandInput, ...rest: any[]) => Paginator<GetClaimTimelineCommandOutput>;
