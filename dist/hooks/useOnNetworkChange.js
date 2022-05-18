var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect } from "react";
import { useTypedSelector } from "../store";
export var useOnNetworkChange = function (callback, deps) {
    if (deps === void 0) { deps = []; }
    var provider = useTypedSelector(function (state) { return state.account; }).provider;
    useEffect(function () {
        if (!provider)
            return;
        provider.on("network", function (_newNetwork, oldNetwork) {
            if (oldNetwork)
                callback();
        });
        return function () {
            provider.off("network");
        };
    }, __spreadArray([provider], deps, true));
};
