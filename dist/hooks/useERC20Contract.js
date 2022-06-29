import { ERC20 } from "../abi";
import { useTypedSelector } from "../store";
import { useContract } from "./useContract";
export var useERC20Contract = function (_a) {
    var address = _a.address;
    var provider = useTypedSelector(function (state) { return state.account.provider; });
    var contract = useContract({
        address: address,
        abi: ERC20,
        provider: provider,
    });
    return contract;
};
