"use strict";
//@ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var paper_1 = require("../../../components/paper");
var lack_1 = require("../../../service/lack");
var table_1 = require("../../../components/table");
var title_1 = require("../../../components/title");
var react_router_dom_1 = require("react-router-dom");
var class_1 = require("../../../service/class");
var stylecompile_1 = require("../../../components/stylecompile");
var printpanel_1 = require("../../../components/printpanel");
var selectyear_1 = require("../../../components/inputs/selectyear");
var selectclasses_1 = require("../../../components/inputs/selectclasses");
var selectmonth_1 = require("../../../components/inputs/selectmonth");
var monthsName = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
var Presences = function () {
    var _a = react_1.useState(0), year = _a[0], setYear = _a[1];
    var _b = react_1.useState(0), classCode = _b[0], setClassCode = _b[1];
    var _c = react_1.useState(0), month = _c[0], setMonth = _c[1];
    var _d = react_1.useState([]), data = _d[0], setData = _d[1];
    var _e = react_1.useState(false), loaded = _e[0], setLoaded = _e[1];
    var _f = react_1.useState(), dataClass = _f[0], setdataClass = _f[1];
    var params = react_router_dom_1.useParams();
    react_1.useEffect(function () {
        stylecompile_1.printLandscape();
    }, []);
    // const { data, loaded, erro, errocode, refresh } = useMatriculeList( year, classCode, month)
    // const { data:dataClass, loaded:loadClass, erro:erroClass, errocode:erroCodeClass, refresh:refreshClass } = useClassData(classCode)
    react_1.useEffect(function () {
        if (year && classCode && month)
            lack_1.matriculeListDays(year, classCode, month).then(function (matricules) {
                if (matricules.erro)
                    return window.alert(matricules.erro);
                setData(matricules);
            })["catch"](function (erro) {
                window.alert('ERRO ao tentar consultar a lista de matriculas\n' + erro);
            });
    }, []);
    react_1.useEffect(function () {
        class_1.classData(classCode).then(function (classData) {
            setdataClass(classData);
        })["catch"](function (erro) {
            window.alert('erro');
        });
    }, [classCode]);
    var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoaded(false);
                    return [4 /*yield*/, lack_1.matriculeListDays(year, classCode, month)];
                case 1:
                    result = _a.sent();
                    setData(result);
                    setLoaded(true);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        loadData();
    }, [year, classCode, month]);
    react_1.useEffect(function () {
        handleChangeInfos();
    }, [params]);
    var handleChangeInfos = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setYear(Number(params.year));
                    setClassCode(Number(params["class"]));
                    setMonth(Number(params.month));
                    return [4 /*yield*/, loadData()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handlePrint = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            window.print();
            return [2 /*return*/];
        });
    }); };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(printpanel_1["default"], { load: !loaded || !year || !classCode || !month || (!(data || []).length), onPrint: handlePrint },
            react_1["default"].createElement("div", { className: 'grid-data' },
                react_1["default"].createElement("div", null, "ANO: "),
                react_1["default"].createElement(selectyear_1["default"], { value: year, onChange: function (e) { return setYear(Number(e.target.value)); } }),
                react_1["default"].createElement("div", null, "TURMA: "),
                react_1["default"].createElement(selectclasses_1["default"], { value: classCode, onChange: function (e) { return setClassCode(Number(e.target.value)); } }),
                react_1["default"].createElement("div", null, "M\u00CAS: "),
                react_1["default"].createElement(selectmonth_1["default"], { value: month, onChange: function (e) { return setMonth(Number(e.target.value)); } }),
                react_1["default"].createElement("div", { style: { gridColumn: '1/3' } }, !(data || []).length ? 'Nenhum registro encontrado nesta seleção' : ''))),
        (!loaded) ?
            react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, "AGUARDANDO...") :
            (!data) ?
                react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, "SEM INFORMA\u00C7\u00D4ES RETORNADAS") :
                (data && (data === null || data === void 0 ? void 0 : data.erro)) ?
                    react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' },
                        "ERRO: ", data === null || data === void 0 ? void 0 :
                        data.erro,
                        " - ", data === null || data === void 0 ? void 0 :
                        data.errocode) :
                    (!(data || []).length) ?
                        react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, "NENHUM REGISTRO ENCONTRADO") :
                        (function () {
                            var adjustTable = [];
                            data.map(function (day) {
                                day.map(function (student, index) {
                                    if (!adjustTable[index])
                                        adjustTable[index] = [];
                                    adjustTable[index].push(student);
                                });
                            });
                            return react_1["default"].createElement(paper_1["default"], { toTable: true },
                                react_1["default"].createElement(title_1["default"], { title: 'PRESEN\u00C7A DA TURMA', subtitle: (dataClass === null || dataClass === void 0 ? void 0 : dataClass.Turma) + " " + (dataClass === null || dataClass === void 0 ? void 0 : dataClass.Turma_Tipo) + " " + (dataClass === null || dataClass === void 0 ? void 0 : dataClass.Turno) + " - " + (dataClass === null || dataClass === void 0 ? void 0 : dataClass.Curso_Grau) + " - " + year + " - " + monthsName[month - 1] }),
                                !adjustTable.length ?
                                    react_1["default"].createElement("div", null, "Nenhum aluno encontrado nesta turma neste ano") :
                                    react_1["default"].createElement(table_1.Table, null,
                                        react_1["default"].createElement("thead", null,
                                            react_1["default"].createElement("tr", null,
                                                react_1["default"].createElement("th", null, "Cod."),
                                                react_1["default"].createElement("th", null, "Aluno"),
                                                data.map(function (day, index) { return react_1["default"].createElement("th", { key: index }, ('00' + (index + 1)).substr(-2)); }))),
                                        react_1["default"].createElement("tbody", null, adjustTable
                                            .sort(function (a, b) { return a[0].alunoNome.toLowerCase() < b[0].alunoNome.toLowerCase() ? -1 : 1; })
                                            .map(function (student) {
                                            return react_1["default"].createElement("tr", { key: student[0].matriculaCode },
                                                react_1["default"].createElement("td", null, student[0].alunoCodigo),
                                                react_1["default"].createElement("td", null, student[0].alunoNome),
                                                student.map(function (days, index) {
                                                    return react_1["default"].createElement("td", { key: index, title: days.description || undefined }, days.lack);
                                                }));
                                        }))),
                                react_1["default"].createElement("div", { className: 'f10 color-dark-grey flex-row p5' },
                                    react_1["default"].createElement("div", { className: 'left' },
                                        adjustTable.length,
                                        " registros"),
                                    react_1["default"].createElement("div", { className: 'right flex-1 flex-row gap20' },
                                        react_1["default"].createElement("div", null, "c - Compareceu"),
                                        react_1["default"].createElement("div", null, "fj - Falta justificada"),
                                        react_1["default"].createElement("div", null, "fnj - Falta n\u00E3o justificada"))));
                        })());
};
exports["default"] = Presences;
