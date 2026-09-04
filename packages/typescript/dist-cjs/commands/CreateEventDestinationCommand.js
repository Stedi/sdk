"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventDestinationCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class CreateEventDestinationCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep0, commandBuilder_1._mw0, "CreateEventDestination", schemas_0_1.CreateEventDestination$) {
}
exports.CreateEventDestinationCommand = CreateEventDestinationCommand;
