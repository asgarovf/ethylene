import { Contract } from "ethers";
var EthyleneContract = /** @class */ (function () {
    function EthyleneContract(_a) {
        var address = _a.address, abi = _a.abi, provider = _a.provider;
        this.methods = {};
        var contract = new Contract(address, abi, provider);
        this.ethersContract = contract;
    }
    return EthyleneContract;
}());
export { EthyleneContract };
