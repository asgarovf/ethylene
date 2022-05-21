/// <reference types="react" />
import { BigNumber } from "ethers";
export declare const useERC20Balance: ({ address, direct, deps, onSuccess, }: {
    address: string;
    direct?: boolean | undefined;
    deps?: any[] | undefined;
    onSuccess?: ((balance: BigNumber) => void) | undefined;
}) => {
    fetchBalance: (wait?: boolean | undefined) => Promise<void>;
    balance: BigNumber;
    setBalance: import("react").Dispatch<import("react").SetStateAction<BigNumber>>;
    isFetching: boolean;
    error: any;
};
//# sourceMappingURL=useERC20Balance.d.ts.map