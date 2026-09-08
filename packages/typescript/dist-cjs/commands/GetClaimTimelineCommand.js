"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClaimTimelineCommand = void 0;
const commandBuilder_1 = require("../commandBuilder");
const schemas_0_1 = require("../schemas/schemas_0");
class GetClaimTimelineCommand extends (0, commandBuilder_1.command)(commandBuilder_1._ep2, commandBuilder_1._mw0, "GetClaimTimeline", schemas_0_1.GetClaimTimeline$) {
}
exports.GetClaimTimelineCommand = GetClaimTimelineCommand;
