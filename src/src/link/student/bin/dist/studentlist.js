"use strict";
exports.__esModule = true;
var react_1 = require("react");
var paper_1 = require("../../../components/paper");
var title_1 = require("../../../components/title");
var student_1 = require("../../../service/student");
var table_1 = require("../../../components/table");
var StudentList = function () {
    var _a = student_1.useStudentsList(), data = _a.data, loaded = _a.loaded, erro = _a.erro, errocode = _a.errocode;
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
    var studentsList = data.sort(function (a, b) { return a.Nome.toLowerCase() < b.Nome.toLowerCase() ? -1 : 1; });
    return react_1["default"].createElement(paper_1["default"], { toTable: true, onLoad: function (e) { return setLoadPaper(true); } },
        react_1["default"].createElement(title_1["default"], { title: 'Turmas' }),
        react_1["default"].createElement(table_1.Table, null,
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "C\u00F3digo"),
                    react_1["default"].createElement("th", null, "Aluno"),
                    react_1["default"].createElement("th", null, "Respons\u00E1vel"))),
            react_1["default"].createElement("tbody", null, data.map(function (classData) {
                return react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null, classData.Codigo),
                    react_1["default"].createElement("td", null, classData.Nome),
                    react_1["default"].createElement("td", null, classData.Responsavel));
            })),
            react_1["default"].createElement("tfoot", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", { colSpan: 5 },
                        data.length,
                        " registros")))));
};
exports["default"] = StudentList;
