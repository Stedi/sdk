"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventDestinationCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class DeleteEventDestinationCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep0, commandBuilder_1._mw0, "DeleteEventDestination", schemas_0_1.DeleteEventDestination$) {
}
exports.DeleteEventDestinationCommand = DeleteEventDestinationCommand;
