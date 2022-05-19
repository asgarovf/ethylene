import { useTypedSelector } from "../store";
export var useSigner = function () {
    var signer = useTypedSelector(function (state) { return state.account.signer; });
    return signer;
};
