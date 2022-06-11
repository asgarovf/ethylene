declare type ERC20ContractMethods = "name" | "approve" | "totalSupply" | "transferFrom" | "decimals" | "balanceOf" | "symbol" | "transfer" | "allowance";
export declare const useERC20Contract: ({ address }: {
    address: string;
}) => import("../utils").EthyleneContract<ERC20ContractMethods> | null;
export {};
//# sourceMappingURL=useERC20Contract.d.ts.map