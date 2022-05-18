import { useTypedSelector } from "../store";
export var useAccount = function () {
    var _a = useTypedSelector(function (state) { return state.account; }), auth = _a.auth, provider = _a.provider, signer = _a.signer, address = _a.address;
    return { auth: auth, provider: provider, signer: signer, address: address };
};
