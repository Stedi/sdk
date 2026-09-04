import type { Paginator } from "@smithy/types";
import { ListClaimsCommandInput, ListClaimsCommandOutput } from "../commands/ListClaimsCommand";
import type { StediPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListClaims: (config: StediPaginationConfiguration, input: ListClaimsCommandInput, ...rest: any[]) => Paginator<ListClaimsCommandOutput>;
