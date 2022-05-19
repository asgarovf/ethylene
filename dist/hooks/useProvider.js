import { useTypedSelector } from "../store";
export var useProvider = function () {
    var provider = useTypedSelector(function (state) { return state.account.provider; });
    return provider;
};
