"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetClaimTimeline = void 0;
const core_1 = require("@smithy/core");
const GetClaimTimelineCommand_1 = require("../commands/GetClaimTimelineCommand");
const StediClient_1 = require("../StediClient");
exports.paginateGetClaimTimeline = (0, core_1.createPaginator)(StediClient_1.StediClient, GetClaimTimelineCommand_1.GetClaimTimelineCommand, "pageToken", "nextPageToken", "pageSize");
