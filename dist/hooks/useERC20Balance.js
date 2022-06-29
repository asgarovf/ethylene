var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { ERC20 } from "../abi";
import { useTypedSelector } from "../store";
import { useContractFunction } from "./useContractFunction";
export var useERC20Balance = function (_a) {
    var address = _a.address, _b = _a.direct, direct = _b === void 0 ? true : _b, _c = _a.deps, deps = _c === void 0 ? [] : _c, onSuccess = _a.onSuccess;
    var _d = useState(BigNumber.from(0)), balance = _d[0], setBalance = _d[1];
    var _e = useTypedSelector(function (state) { return state.account; }), provider = _e.provider, userAddress = _e.address;
    var _f = useState(null), error = _f[0], setError = _f[1];
    var _g = useContractFunction({
        abi: ERC20,
        address: address,
        method: "balanceOf",
        connectSigner: false,
        onError: function (err) {
            setError(err);
        },
        onSuccess: function (res) {
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res);
            setBalance(res);
        },
        args: [userAddress],
    }), execute = _g.execute, isLoading = _g.isLoading;
    useEffect(function () {
        if (!provider)
            return;
        if (direct) {
            execute();
        }
    }, __spreadArray([provider], deps, true));
    return {
        fetchBalance: execute,
        balance: balance,
        setBalance: setBalance,
        isFetching: isLoading,
        error: error,
    };
};
