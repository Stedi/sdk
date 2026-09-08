"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEligibilityCheckCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class CreateEligibilityCheckCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep0, commandBuilder_1._mw0, "CreateEligibilityCheck", schemas_0_1.CreateEligibilityCheck$) {
}
exports.CreateEligibilityCheckCommand = CreateEligibilityCheckCommand;
