"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventDestinationCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class GetEventDestinationCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep1, commandBuilder_1._mw0, "GetEventDestination", schemas_0_1.GetEventDestination$) {
}
exports.GetEventDestinationCommand = GetEventDestinationCommand;
