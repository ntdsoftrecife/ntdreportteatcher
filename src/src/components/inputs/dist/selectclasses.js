"use strict";
exports.__esModule = true;
var react_1 = require("react");
var class_1 = require("../../service/class");
var SelectClass = react_1.memo(function (_a) {
    var _b = _a.defaultNull, defaultNull = _b === void 0 ? true : _b, value = _a.value, onChange = _a.onChange, autoFocus = _a.autoFocus;
    var _c = class_1.useClassList(), data = _c.data, loaded = _c.loaded, erro = _c.erro, errocode = _c.errocode;
    if (!loaded)
        return react_1["default"].createElement("span", { className: 'h100-porcent flex-row center b p10' }, "CARREGANDO...");
    if (erro)
        return react_1["default"].createElement("span", { className: 'h100-porcent flex-row center b p10' },
            erro,
            " - ",
            errocode);
    if (!data)
        return react_1["default"].createElement("span", { className: 'h100-porcent flex-row center b p10' },
            erro,
            " - ",
            errocode);
    return react_1["default"].createElement("select", { value: value, onChange: onChange, autoFocus: autoFocus },
        !defaultNull ? null :
            react_1["default"].createElement("option", { value: '', key: 0 }, "Escolha a turma"),
        data.map(function (classData) { return react_1["default"].createElement("option", { value: classData.Codigo, key: classData.Codigo },
            classData.Turma,
            " ",
            classData.Turma_Tipo,
            " ",
            classData.Turno,
            " ",
            classData.Curso_Grau); }));
});
exports["default"] = SelectClass;
