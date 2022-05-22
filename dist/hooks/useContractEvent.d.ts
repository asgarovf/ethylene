import { ContractInterface } from "ethers";
export declare const useContractEvent: <T>(event: string, { address, callback, abi, deps, }: {
    address: string;
    abi: ContractInterface;
    callback: (...data: T[]) => void;
    deps?: any[] | undefined;
}) => void;
//# sourceMappingURL=useContractEvent.d.ts.map