import { useTypedSelector } from "../store";
export var useAuth = function () {
    var auth = useTypedSelector(function (state) { return state.account.auth; });
    return auth;
};
