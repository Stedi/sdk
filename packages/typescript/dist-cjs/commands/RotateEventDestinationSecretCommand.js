"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateEventDestinationSecretCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class RotateEventDestinationSecretCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep1, commandBuilder_1._mw0, "RotateEventDestinationSecret", schemas_0_1.RotateEventDestinationSecret$) {
}
exports.RotateEventDestinationSecretCommand = RotateEventDestinationSecretCommand;
