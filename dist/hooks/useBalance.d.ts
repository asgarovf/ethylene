/// <reference types="react" />
import { BigNumber } from "ethers";
export declare const useBalance: ({ direct }: {
    direct: boolean;
}) => {
    balance: BigNumber;
    fetchBalance: () => void;
    setBalance: import("react").Dispatch<import("react").SetStateAction<BigNumber>>;
    isFetching: boolean;
    error: any;
};
//# sourceMappingURL=useBalance.d.ts.map