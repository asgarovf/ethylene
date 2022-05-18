import { Contract, ContractInterface } from "ethers";
declare type MethodInterface<T extends string> = {
    [key in T]: {
        /**
         * @dev Execute a function from Smart Contract
         */
        execute: (...args: any) => void;
        /**
         * @dev Execute a function from Smart Contract and wait for the transaction
         */
        executeAndWait: (...args: any) => void;
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
    provider: any;
};
export declare class EthyleneContract<T extends string> {
    ethersContract: Contract;
    methods: MethodInterface<T>;
    constructor({ address, abi, provider }: EthyleneContractConstructorProps);
}
export {};
//# sourceMappingURL=EthyleneContract.d.ts.map