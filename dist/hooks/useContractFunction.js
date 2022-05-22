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
import { Contract } from "ethers";
import { useState } from "react";
import { useTypedSelector } from "../store";
import { isProd } from "../utils/isProd";
export var useContractFunction = function (_a) {
    var address = _a.address, abi = _a.abi, method = _a.method, _b = _a.args, args = _b === void 0 ? [] : _b, _c = _a.connectSigner, connectSigner = _c === void 0 ? true : _c, onError = _a.onError, onSuccess = _a.onSuccess;
    var _d = useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = useState(false), isFailed = _e[0], setIsFailed = _e[1];
    var provider = useTypedSelector(function (state) { return state.account.provider; });
    var execute = function (wait) { return __awaiter(void 0, void 0, void 0, function () {
        var signer, contract, res, txn, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!provider && connectSigner) {
                        if (!isProd) {
                            console.error("Signer is not available, check the wallet connection");
                        }
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (provider === null || provider === void 0 ? void 0 : provider.getSigner())];
                case 1:
                    signer = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 9, , 10]);
                    contract = new Contract(address, abi, provider);
                    setIsLoading(true);
                    setIsFailed(false);
                    res = void 0;
                    txn = void 0;
                    if (!connectSigner) return [3 /*break*/, 4];
                    return [4 /*yield*/, (_a = contract.connect(signer))[method].apply(_a, args)];
                case 3:
                    res = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, contract[method].apply(contract, args)];
                case 5:
                    res = _b.sent();
                    _b.label = 6;
                case 6:
                    if (!wait) return [3 /*break*/, 8];
                    return [4 /*yield*/, res.wait()];
                case 7:
                    txn = _b.sent();
                    _b.label = 8;
                case 8:
                    setIsLoading(false);
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(wait ? txn : res);
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _b.sent();
                    setIsFailed(true);
                    setIsLoading(false);
                    onError === null || onError === void 0 ? void 0 : onError(err_1);
                    if (!isProd) {
                        console.error(err_1);
                    }
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var executeAndWait = function () {
        execute(true);
    };
    return { isLoading: isLoading, isFailed: isFailed, execute: execute, executeAndWait: executeAndWait };
};
