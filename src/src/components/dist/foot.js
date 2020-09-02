"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-top:solid 1px var(--color-dark-grey);\n    border-bottom:solid 1px var(--color-dark-grey);\n"], ["\n    border-top:solid 1px var(--color-dark-grey);\n    border-bottom:solid 1px var(--color-dark-grey);\n"])));
var Foot = function () {
    return react_1["default"].createElement(Container, { className: 'flex-row' },
        react_1["default"].createElement("div", { className: 'flex-1 left' }, "Soft Gest\u00E3o escolar"),
        react_1["default"].createElement("div", { className: 'flex-1 right' }, "NTD Soft e Digital"));
};
exports["default"] = Foot;
var templateObject_1;
