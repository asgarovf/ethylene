import { useTypedSelector } from "../store";
export var useAddress = function () {
    var address = useTypedSelector(function (state) { return state.account.address; });
    return address;
};
