// smithy-typescript generated code
import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

const a="stringEquals",
b={"ref":"Endpoint"},
c={"ref":"ServiceComponent"};
const _data={
  conditions: [
    ["isSet",[b]],
    [a,[c,"EventsService"]],
    [a,[c,"SdkClaimsService"]],
    [a,[c,"SdkEligibilityCheckService"]]
  ],
  results: [
    [-1],
    [b,{}],
    ["https://events.us.stedi.com",{}],
    ["https://claims.us.stedi.com",{}],
    ["https://healthcare.us.stedi.com",{}],
    [-1,"Unknown ServiceComponent"]
  ]
};

const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
  -1, 1, -1,
  0, r + 1, 3,
  1, r + 2, 4,
  2, r + 3, 5,
  3, r + 4, r + 5,
]);
export const bdd = BinaryDecisionDiagram.from(
  nodes, root, _data.conditions, _data.results
);
