var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { useMemo, useReducer } from "react";
import { EthyleneContract } from "../classes/EthyleneContract";
import { abiLoadingExtractor } from "../utils/abiExtractor";
import { isProd } from "../utils/isProd";
function reducer(state, action) {
    var _a;
    return __assign(__assign({}, state), (_a = {}, _a[action.type] = action.payload, _a));
}
export var useContract = function (_a) {
    var address = _a.address, abi = _a.abi, provider = _a.provider;
    var initialState = useMemo(function () {
        return abiLoadingExtractor(abi);
    }, []);
    var _b = useReducer(reducer, initialState), loadingState = _b[0], dispatchLoading = _b[1];
    var _c = useReducer(reducer, initialState), failedState = _c[0], dispatchFailed = _c[1];
    var contract = useMemo(function () {
        if (!provider)
            return null;
        var contract = new EthyleneContract({
            address: address,
            abi: abi,
            provider: provider,
        });
        var mainAbi = abi;
        mainAbi = mainAbi.filter(function (item) { return item.type === "function"; });
        var _loop_1 = function (i) {
            var key = mainAbi[i].name;
            contract.methods[key] = {
                execute: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(this, void 0, void 0, function () {
                        var signer, res, err_1;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 3, , 4]);
                                    dispatchLoading({ type: key, payload: true });
                                    return [4 /*yield*/, provider.getSigner()];
                                case 1:
                                    signer = _b.sent();
                                    return [4 /*yield*/, (_a = contract.ethersContract
                                            .connect(signer))[key].apply(_a, args)];
                                case 2:
                                    res = _b.sent();
                                    dispatchLoading({ type: key, payload: false });
                                    return [2 /*return*/, res];
                                case 3:
                                    err_1 = _b.sent();
                                    if (!isProd) {
                                        console.error(err_1);
                                    }
                                    dispatchLoading({ type: key, payload: false });
                                    dispatchFailed({ type: key, payload: true });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                },
                executeAndWait: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(this, void 0, void 0, function () {
                        var signer, res, txn, err_2;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 4, , 5]);
                                    dispatchLoading({ type: key, payload: true });
                                    return [4 /*yield*/, provider.getSigner()];
                                case 1:
                                    signer = _b.sent();
                                    return [4 /*yield*/, (_a = contract.ethersContract
                                            .connect(signer))[key].apply(_a, args)];
                                case 2:
                                    res = _b.sent();
                                    return [4 /*yield*/, res.wait()];
                                case 3:
                                    txn = _b.sent();
                                    dispatchLoading({ type: key, payload: false });
                                    return [2 /*return*/, txn];
                                case 4:
                                    err_2 = _b.sent();
                                    if (!isProd) {
                                        console.error(err_2);
                                    }
                                    dispatchLoading({ type: key, payload: false });
                                    dispatchFailed({ type: key, payload: true });
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                },
                isLoading: loadingState[key],
                isFailed: failedState[key],
            };
        };
        for (var i = 0; i < mainAbi.length; i++) {
            _loop_1(i);
        }
        return contract;
    }, [provider, loadingState]);
    return contract;
};
