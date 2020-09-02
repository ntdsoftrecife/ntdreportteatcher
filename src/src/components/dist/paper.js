"use strict";
exports.__esModule = true;
var react_1 = require("react");
var headerfoot_1 = require("./headerfoot");
var Paper = function (_a) {
    var children = _a.children, _b = _a.toTable, toTable = _b === void 0 ? false : _b, onLoad = _a.onLoad;
    if (toTable)
        return react_1["default"].createElement(headerfoot_1["default"], { onLoad: onLoad },
            react_1["default"].createElement("span", { className: 'flex-1' }, children));
    return react_1["default"].createElement("div", { className: 'paper h100-porcent flex-column' },
        react_1["default"].createElement(headerfoot_1["default"], null,
            react_1["default"].createElement("span", { className: 'flex-1' }, children)));
};
exports["default"] = Paper;
