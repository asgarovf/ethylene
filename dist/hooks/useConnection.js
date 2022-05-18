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
import { batch, useDispatch } from "react-redux";
import { disconnectWallet, setAddress, setAuth, setProvider, setSigner, } from "../store/reducers/accountReducer";
import { setIsConnecting } from "../store/reducers/walletConnectionReducer";
import { useTypedSelector } from "../store";
import { EthyleneInjectedConnector } from "../utils/connectors";
import { isProd } from "../utils/isProd";
import { ethers } from "ethers";
var defaultConnector = EthyleneInjectedConnector;
export var useConnection = function (_a) {
    var _b = _a === void 0 ? {} : _a, connector = _b.connector, onError = _b.onError, onMetamaskError = _b.onMetamaskError;
    var _c = useTypedSelector(function (state) { return state.walletConnection; }), isConnecting = _c.isConnecting, isConnectionFailed = _c.isConnectionFailed, providerName = _c.providerName;
    var dispatch = useDispatch();
    var auth = useTypedSelector(function (state) { return state.account; }).auth;
    var connect = function () { return __awaiter(void 0, void 0, void 0, function () {
        var mainConnector, appliedProvider, provider, signer_1, address_1, _a, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (auth)
                        return [2 /*return*/];
                    mainConnector = connector !== null && connector !== void 0 ? connector : defaultConnector;
                    if (!mainConnector.provider) {
                        onMetamaskError === null || onMetamaskError === void 0 ? void 0 : onMetamaskError();
                        return [2 /*return*/];
                    }
                    appliedProvider = mainConnector.provider;
                    provider = new ethers.providers.Web3Provider(appliedProvider, "any");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    dispatch(setIsConnecting(true));
                    return [4 /*yield*/, provider.send("eth_requestAccounts", [])];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, provider.getSigner()];
                case 3:
                    signer_1 = _b.sent();
                    return [4 /*yield*/, signer_1.getAddress()];
                case 4:
                    address_1 = _b.sent();
                    batch(function () {
                        dispatch(setSigner(signer_1));
                        dispatch(setProvider(provider));
                        dispatch(setAddress(address_1));
                        dispatch(setAuth(true));
                        dispatch(setIsConnecting(false));
                    });
                    return [3 /*break*/, 6];
                case 5:
                    _a = _b.sent();
                    dispatch(setIsConnecting(false));
                    error = new Error("Failed to connect the walled");
                    onError === null || onError === void 0 ? void 0 : onError(error);
                    if (!isProd) {
                        console.error(error);
                        throw error;
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var disconnect = function () {
        if (!auth)
            return;
        dispatch(disconnectWallet());
    };
    return {
        connect: connect,
        disconnect: disconnect,
        providerName: providerName,
        isConnectionFailed: isConnectionFailed,
        isConnecting: isConnecting,
    };
};
