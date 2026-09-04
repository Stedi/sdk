"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClaimsCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class ListClaimsCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep1, commandBuilder_1._mw0, "ListClaims", schemas_0_1.ListClaims$) {
}
exports.ListClaimsCommand = ListClaimsCommand;
