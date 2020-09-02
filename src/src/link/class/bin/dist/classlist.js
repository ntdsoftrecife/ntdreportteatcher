"use strict";
exports.__esModule = true;
var react_1 = require("react");
var paper_1 = require("../../../components/paper");
var title_1 = require("../../../components/title");
var class_1 = require("../../../service/class");
var table_1 = require("../../../components/table");
var ClassList = function () {
    var _a = class_1.useClassList(), data = _a.data, loaded = _a.loaded, erro = _a.erro, errocode = _a.errocode;
    var _b = react_1.useState(false), loadPaper = _b[0], setLoadPaper = _b[1];
    react_1.useEffect(function () {
        if (loadPaper && data)
            window.print();
    }, [loadPaper, data]);
    if (!loaded)
        return react_1["default"].createElement("div", { className: 'flex-row center flex-1' }, "CARREGANDO LISTA DE TURMAS...");
    if (erro)
        return react_1["default"].createElement("div", { className: 'flex-row center flex-1' },
            erro,
            " - ",
            errocode);
    if (!(data || []).length)
        return react_1["default"].createElement("div", { className: 'flex-row center flex-1' }, "NENHUM REGISTRO ENCONTRADO");
    return react_1["default"].createElement(paper_1["default"], { toTable: true, onLoad: function (e) { return setLoadPaper(true); } },
        react_1["default"].createElement(title_1["default"], { title: 'Turmas' }),
        react_1["default"].createElement(table_1.Table, null,
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "C\u00F3digo"),
                    react_1["default"].createElement("th", null, "Turma"),
                    react_1["default"].createElement("th", null, "Tipo"),
                    react_1["default"].createElement("th", null, "Turno"),
                    react_1["default"].createElement("th", null, "Curso/Grau"))),
            react_1["default"].createElement("tbody", null, data.map(function (classData) {
                return react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, classData.Codigo),
                    react_1["default"].createElement("td", null, classData.Turma),
                    react_1["default"].createElement("td", null, classData.Turma_Tipo),
                    react_1["default"].createElement("td", null, classData.Turno),
                    react_1["default"].createElement("td", null, classData.Curso_Grau));
            })),
            react_1["default"].createElement("tfoot", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", { colSpan: 5 },
                        data.length,
                        " registros")))));
};
exports["default"] = ClassList;
