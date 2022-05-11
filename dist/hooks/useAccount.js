import { useTypedSelector } from "../store";
export var useAccount = function () {
    var auth = useTypedSelector(function (state) { return state.account; }).auth;
    return { auth: auth };
};
