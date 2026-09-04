"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListClaims = void 0;
const core_1 = require("@smithy/core");
const ListClaimsCommand_1 = require("../commands/ListClaimsCommand");
const StediClient_1 = require("../StediClient");
exports.paginateListClaims = (0, core_1.createPaginator)(StediClient_1.StediClient, ListClaimsCommand_1.ListClaimsCommand, "pageToken", "nextPageToken", "pageSize");
