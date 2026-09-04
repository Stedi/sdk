"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEventDestinationsCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class ListEventDestinationsCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep0, commandBuilder_1._mw0, "ListEventDestinations", schemas_0_1.ListEventDestinations$) {
}
exports.ListEventDestinationsCommand = ListEventDestinationsCommand;
