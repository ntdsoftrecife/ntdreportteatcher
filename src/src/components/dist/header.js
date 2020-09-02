"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header = function (_a) {
    var foto = _a.foto;
    var scholl;
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("img", null)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", null, "name of escola"),
            react_1["default"].createElement("div", null, "street - neighbooard - city - state - cep"),
            react_1["default"].createElement("div", null, "email / fones")),
        !foto ? null :
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: foto })));
};
exports["default"] = Header;
