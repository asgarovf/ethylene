var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Contract } from "ethers";
import { useEffect } from "react";
import { useTypedSelector } from "../store";
export var useContractEvent = function (event, _a) {
    var address = _a.address, callback = _a.callback, abi = _a.abi, _b = _a.deps, deps = _b === void 0 ? [] : _b;
    var provider = useTypedSelector(function (state) { return state.account.provider; });
    useEffect(function () {
        if (!provider)
            return;
        var contract = new Contract(address, abi, provider);
        var fn = function (data) {
            callback.apply(void 0, data);
        };
        contract.on(event, fn);
        return function () {
            contract.off(event, fn);
        };
    }, __spreadArray([provider], deps, true));
};
