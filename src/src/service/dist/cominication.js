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
exports.HOST = exports.useComunication = void 0;
var react_1 = require("react");
var axios = require('axios');
var TEST = 0;
var HOST = TEST === 1 ? 'http://localhost:8888/' :
    'https://ntdsoft.net.br:8114/';
exports.HOST = HOST;
var api = axios.create({
    baseURL: HOST,
    headers: {
        token: window.localStorage.getItem('tokenProfessor')
    }
});
var getToken = function () {
    return window.localStorage.getItem('tokenProfessor') | '';
};
function get(url, props) {
    if (props === void 0) { props = {}; }
    return __awaiter(this, void 0, Promise, function () {
        var result, erro_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.get(url, props)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 2:
                    erro_1 = _a.sent();
                    return [2 /*return*/, { erro: erro_1, errocode: erro_1.code }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function post(url, data, props) {
    if (props === void 0) { props = {}; }
    return __awaiter(this, void 0, Promise, function () {
        var result, erro_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.post(url, data, props)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 2:
                    erro_2 = _a.sent();
                    return [2 /*return*/, { erro: erro_2, errocode: erro_2.code }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function put(url, data, props) {
    if (props === void 0) { props = {}; }
    return __awaiter(this, void 0, Promise, function () {
        var result, erro_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.put(url, data, props)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 2:
                    erro_3 = _a.sent();
                    return [2 /*return*/, { erro: erro_3, errocode: erro_3.code }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteFunction(url, props) {
    if (props === void 0) { props = {}; }
    return __awaiter(this, void 0, Promise, function () {
        var result, erro_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api["delete"](url, props)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 2:
                    erro_4 = _a.sent();
                    return [2 /*return*/, { erro: erro_4, errocode: erro_4.code }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var comunication = { get: get, post: post, put: put, "delete": deleteFunction };
function useComunication(url) {
    var _a = react_1.useState(false), loaded = _a[0], setLoaded = _a[1];
    var _b = react_1.useState(null), data = _b[0], setData = _b[1];
    var _c = react_1.useState(''), erro = _c[0], setErro = _c[1];
    var _d = react_1.useState(''), errocode = _d[0], setErrocode = _d[1];
    var _e = react_1.useState(0), refreshData = _e[0], setRefreshData = _e[1];
    react_1.useEffect(function () {
        comunication.get(url)
            .then(function (result) {
            setData(result);
            setLoaded(true);
            if (result.erro)
                setErro(result.erro);
            if (result.errocode)
                setErro(result.errocode);
        })["catch"](function (erro) {
            setErro(erro + '');
            setLoaded(true);
        });
    }, []);
    return {
        loaded: loaded, data: data, erro: erro, errocode: errocode,
        refresh: function () { return setRefreshData(Math.round(Math.random() * 100000000)); },
        randomRefreshNumber: refreshData
    };
}
exports.useComunication = useComunication;
exports["default"] = comunication;
