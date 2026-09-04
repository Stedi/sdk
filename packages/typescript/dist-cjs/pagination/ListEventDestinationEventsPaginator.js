"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEventDestinationEvents = void 0;
const core_1 = require("@smithy/core");
const ListEventDestinationEventsCommand_1 = require("../commands/ListEventDestinationEventsCommand");
const StediClient_1 = require("../StediClient");
exports.paginateListEventDestinationEvents = (0, core_1.createPaginator)(StediClient_1.StediClient, ListEventDestinationEventsCommand_1.ListEventDestinationEventsCommand, "pageToken", "nextPageToken", "");
