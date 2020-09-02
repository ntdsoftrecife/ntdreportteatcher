"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SelectMonth = react_1.memo(function (_a) {
    var _b = _a.defaultNull, defaultNull = _b === void 0 ? true : _b, value = _a.value, onChange = _a.onChange, autoFocus = _a.autoFocus;
    return react_1["default"].createElement("select", { value: value, onChange: onChange, autoFocus: autoFocus },
        !defaultNull ? null :
            react_1["default"].createElement("option", { value: '', key: 0 }, "Escolha o m\u00EAs"),
        react_1["default"].createElement("option", { value: 1 }, "Janeiro"),
        react_1["default"].createElement("option", { value: 2 }, "Fevereiro"),
        react_1["default"].createElement("option", { value: 3 }, "Mar\u00E7o"),
        react_1["default"].createElement("option", { value: 4 }, "Abril"),
        react_1["default"].createElement("option", { value: 5 }, "Maio"),
        react_1["default"].createElement("option", { value: 6 }, "Junho"),
        react_1["default"].createElement("option", { value: 7 }, "Julho"),
        react_1["default"].createElement("option", { value: 8 }, "Agosto"),
        react_1["default"].createElement("option", { value: 9 }, "Setembro"),
        react_1["default"].createElement("option", { value: 10 }, "Outubro"),
        react_1["default"].createElement("option", { value: 11 }, "Novembro"),
        react_1["default"].createElement("option", { value: 12 }, "Dezembro"));
});
exports["default"] = SelectMonth;
