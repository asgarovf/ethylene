import { Contract, ContractInterface } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
declare type MethodInterface<T extends string> = {
    [key in T]: {
        /**
         * @dev Execute a function from Smart Contract
         */
        execute: (...args: any) => Promise<any>;
        /**
         * @dev Execute a function from Smart Contract and wait for the transaction
         */
        executeAndWait: (...args: any) => Promise<any>;
        /**
         * @dev is the transaction loading
         */
        isLoading: boolean;
        /**
         * @dev is the transaction failed
         */
        isFailed: boolean;
    };
};
declare type EthyleneContractConstructorProps = {
    address: string;
    abi: ContractInterface;
    provider: Web3Provider;
};
export declare class EthyleneContract<T extends string> {
    ethersContract: Contract;
    methods: MethodInterface<T>;
    constructor({ address, abi, provider }: EthyleneContractConstructorProps);
}
export {};
//# sourceMappingURL=EthyleneContract.d.ts.map