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
import { useEffect, useState } from "react";
import { useTypedSelector } from "../store";
export var useRightNetwork = function (network) {
    var auth = useTypedSelector(function (state) { return state.account; }).auth;
    var _a = useState(true), isRightNetwork = _a[0], setIsRightNetwork = _a[1];
    var _b = useState({
        fn: function () { return undefined; },
    }), result = _b[0], setResult = _b[1];
    useEffect(function () {
        if (!auth) {
            setIsRightNetwork(false);
            return;
        }
        var fetch = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, checkIfRightNetwork(network, setIsRightNetwork)];
                    case 1:
                        res = _a.sent();
                        if (res.status === false) {
                            setIsRightNetwork(false);
                            setResult(function () {
                                return { fn: res.switchTo };
                            });
                        }
                        else {
                            setIsRightNetwork(true);
                            setResult(function () {
                                return { fn: function () { return undefined; } };
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        fetch();
    }, [auth]);
    return { isRightNetwork: isRightNetwork, switchTo: result.fn };
};
var checkIfRightNetwork = function (network, setIsRightNetwork) { return __awaiter(void 0, void 0, void 0, function () {
    var networkId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!window.ethereum)
                    return [2 /*return*/, { status: false, switchTo: function () { return undefined; } }];
                return [4 /*yield*/, window.ethereum.request({
                        method: "eth_chainId",
                    })];
            case 1:
                networkId = _a.sent();
                if (networkId != network.chainId) {
                    return [2 /*return*/, {
                            status: false,
                            switchTo: function () {
                                var _this = this;
                                var fn = function () { return __awaiter(_this, void 0, void 0, function () {
                                    var error_1, WALLET_ERROR_CODE, addError_1;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                _a.trys.push([0, 2, , 7]);
                                                return [4 /*yield*/, window.ethereum.request({
                                                        method: "wallet_switchEthereumChain",
                                                        params: [{ chainId: network.chainId }],
                                                    })];
                                            case 1:
                                                _a.sent();
                                                setIsRightNetwork(true);
                                                return [3 /*break*/, 7];
                                            case 2:
                                                error_1 = _a.sent();
                                                WALLET_ERROR_CODE = 4902;
                                                if (!(error_1.code === WALLET_ERROR_CODE)) return [3 /*break*/, 6];
                                                _a.label = 3;
                                            case 3:
                                                _a.trys.push([3, 5, , 6]);
                                                return [4 /*yield*/, window.ethereum.request({
                                                        method: "wallet_addEthereumChain",
                                                        params: [
                                                            {
                                                                chainId: network.chainId,
                                                                rpcUrls: network.rpcUrls,
                                                                nativeCurrency: network.nativeCurrency,
                                                                chainName: network.name,
                                                            },
                                                        ],
                                                    })];
                                            case 4:
                                                _a.sent();
                                                setIsRightNetwork(true);
                                                return [3 /*break*/, 6];
                                            case 5:
                                                addError_1 = _a.sent();
                                                console.log("[DEBUG] Network Add error", addError_1);
                                                return [2 /*return*/];
                                            case 6:
                                                console.log("[DEBUG] Switch Network Error");
                                                return [2 /*return*/];
                                            case 7: return [2 /*return*/];
                                        }
                                    });
                                }); };
                                fn().then().catch();
                            },
                        }];
                }
                else {
                    return [2 /*return*/, { status: true, switchTo: function () { return undefined; } }];
                }
                return [2 /*return*/];
        }
    });
}); };
