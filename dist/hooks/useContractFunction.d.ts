import { ContractInterface } from "ethers";
export declare const useContractFunction: <T>({ address, abi, method, args, connectSigner, onError, onSuccess, }: {
    address: string;
    abi: ContractInterface;
    method: string;
    connectSigner?: boolean | undefined;
    onError?: ((err: any) => void) | undefined;
    onSuccess?: ((res: T) => void) | undefined;
    args: any;
}) => {
    isLoading: boolean;
    isFailed: boolean;
    execute: (wait?: boolean) => Promise<void>;
    executeAndWait: () => void;
};
//# sourceMappingURL=useContractFunction.d.ts.map