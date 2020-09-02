"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var school_1 = require("../service/school");
var styled_components_1 = require("styled-components");
var Header = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border:solid 1px #000;\n    border-radius:5px;\n    img{\n        max-width:100px;\n        max-height:50px;\n    }\n"], ["\n    border:solid 1px #000;\n    border-radius:5px;\n    img{\n        max-width:100px;\n        max-height:50px;\n    }\n"])));
var Foot = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-top:solid 1px var(--color-dark-grey);\n    border-bottom:solid 1px var(--color-dark-grey);\n    padding:2px 10px;\n    margin-top:10px;\n"], ["\n    border-top:solid 1px var(--color-dark-grey);\n    border-bottom:solid 1px var(--color-dark-grey);\n    padding:2px 10px;\n    margin-top:10px;\n"])));
var HeaderFoot = function (_a) {
    var children = _a.children, _b = _a.foto, foto = _b === void 0 ? '' : _b, onLoad = _a.onLoad;
    var _c = school_1["default"](), data = _c.data, loaded = _c.loaded, erro = _c.erro, errocode = _c.errocode;
    if (!loaded)
        return react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, "CARREGANDO DADOS DA EMPRESA");
    if (erro)
        return react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, erro);
    if (!data)
        return react_1["default"].createElement("div", { className: 'flex-row center h100-porcent' }, "dados da empresa n\u00E3o retornados");
    if (onLoad)
        onLoad(data);
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header, { className: 'flex-row gap10 p10 center' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: "https://ntdsoft.net.br:8114/scholl/logoscholl?token=" + localStorage.getItem('tokenProfessor') })),
            react_1["default"].createElement("div", { className: 'flex-1 center' },
                react_1["default"].createElement("div", null, data.Nome),
                react_1["default"].createElement("div", null,
                    data.Endereco,
                    " - ",
                    data.Bairro,
                    " - ",
                    data.Cidade,
                    " - ",
                    data.UF,
                    " - ",
                    data.CEP),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("b", null, "Email:"),
                    " ",
                    data.Email,
                    " / ",
                    react_1["default"].createElement("b", null, "Fone:"),
                    " ",
                    data.Fone,
                    " ",
                    data.Fax ? '/ ' + data.Fax : '')),
            !foto ? null :
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("img", { src: foto }))),
        children,
        react_1["default"].createElement(Foot, { className: 'flex-row f10' },
            react_1["default"].createElement("div", { className: 'flex-1 left' }, "Soft Gest\u00E3o escolar"),
            react_1["default"].createElement("div", { className: 'flex-1 right' }, "NTD Soft e Digital")));
};
exports["default"] = HeaderFoot;
var templateObject_1, templateObject_2;
