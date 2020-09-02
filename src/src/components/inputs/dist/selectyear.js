"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SelectYear = react_1.memo(function (_a) {
    var _b = _a.defaultNull, defaultNull = _b === void 0 ? false : _b, value = _a.value, onChange = _a.onChange, autoFocus = _a.autoFocus;
    var years = [];
    var yearNow = (new Date()).getFullYear();
    for (var year = yearNow - 30; year <= yearNow + 10; year++)
        years.push(year);
    return react_1["default"].createElement("select", { value: value, onChange: onChange, autoFocus: autoFocus },
        !defaultNull ? null :
            react_1["default"].createElement("option", { value: '', key: 0 }, "Escolha o ano"),
        years.map(function (year) { return react_1["default"].createElement("option", { value: year, key: year }, year); }));
});
exports["default"] = SelectYear;
