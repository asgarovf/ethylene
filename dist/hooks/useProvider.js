import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
import { setProvider as setProviderAction } from "../store/reducers/accountReducer";
export var useProvider = function () {
    var dispatch = useDispatch();
    var provider = useTypedSelector(function (state) { return state.account.provider; });
    var setProvider = function (provider) {
        dispatch(setProviderAction(provider));
    };
    return { setProvider: setProvider, provider: provider };
};
