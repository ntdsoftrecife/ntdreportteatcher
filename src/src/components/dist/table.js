"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Table = void 0;
var styled_components_1 = require("styled-components");
var Table = styled_components_1["default"].table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    th, td{\n        padding:5px 5px;\n        border:solid 1px var(--color-smooth);\n    }\n    thead th{\n        font-weight:bold;\n        background-color:var(--color-grey);\n    }\n    tbody tr:nth-child(2n+2) td{\n        background-color:var(--color-smoth); \n    }\n"], ["\n    border-collapse: collapse;\n    th, td{\n        padding:5px 5px;\n        border:solid 1px var(--color-smooth);\n    }\n    thead th{\n        font-weight:bold;\n        background-color:var(--color-grey);\n    }\n    tbody tr:nth-child(2n+2) td{\n        background-color:var(--color-smoth); \n    }\n"])));
exports.Table = Table;
var templateObject_1;
