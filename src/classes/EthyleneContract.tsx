import { Contract, ContractInterface } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

type MethodInterface<T extends string> = {
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

type EthyleneContractConstructorProps = {
  address: string;
  abi: ContractInterface;
  provider: Web3Provider;
};

export class EthyleneContract<T extends string> {
  ethersContract: Contract;
  methods = {} as MethodInterface<T>;

  constructor({ address, abi, provider }: EthyleneContractConstructorProps) {
    const contract = new Contract(address, abi, provider);
    this.ethersContract = contract;
  }
}
