"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdd = void 0;
const endpoints_1 = require("@smithy/core/endpoints");
const a = { "ref": "Endpoint" };
const _data = {
    conditions: [
        ["isSet", [a]],
        ["stringEquals", [{ ref: "ServiceComponent" }, "SdkClaimsService"]]
    ],
    results: [
        [-1],
        [a, {}],
        ["https://claims.us.stedi.com", {}],
        [-1, "Unknown ServiceComponent"]
    ]
};
const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
    -1, 1, -1,
    0, r + 1, 3,
    1, r + 2, r + 3,
]);
exports.bdd = endpoints_1.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
