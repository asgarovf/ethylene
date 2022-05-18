import { ContractInterface } from "ethers";
import { EthyleneContract } from "../classes/EthyleneContract";
export declare const useContract: <T extends string>({ address, abi, provider, }: {
    address: string;
    abi: ContractInterface;
    provider: any;
}) => EthyleneContract<T> | null;
//# sourceMappingURL=useContract.d.ts.map