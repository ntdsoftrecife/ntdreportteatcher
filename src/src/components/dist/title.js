"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Title = function (_a) {
    var title = _a.title, _b = _a.subtitle, subtitle = _b === void 0 ? '' : _b;
    return react_1["default"].createElement("div", { className: 'center p10' },
        react_1["default"].createElement("div", { className: 'b f18' }, title),
        !subtitle ? null :
            react_1["default"].createElement("div", { className: 'f12 color-dark-grey' }, subtitle));
};
exports["default"] = Title;
