"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListEventDestinations = void 0;
const core_1 = require("@smithy/core");
const ListEventDestinationsCommand_1 = require("../commands/ListEventDestinationsCommand");
const StediClient_1 = require("../StediClient");
exports.paginateListEventDestinations = (0, core_1.createPaginator)(StediClient_1.StediClient, ListEventDestinationsCommand_1.ListEventDestinationsCommand, "pageToken", "nextPageToken", "");
