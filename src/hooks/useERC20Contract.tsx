import { ERC20 } from "../abi";
import { useTypedSelector } from "../store";
import { useContract } from "./useContract";

type ERC20ContractMethods =
  | "name"
  | "approve"
  | "totalSupply"
  | "transferFrom"
  | "decimals"
  | "balanceOf"
  | "symbol"
  | "transfer"
  | "allowance";

export const useERC20Contract = ({ address }: { address: string }) => {
  const provider = useTypedSelector((state) => state.account.provider);

  const contract = useContract<ERC20ContractMethods>({
    address: address,
    abi: ERC20,
    provider: provider,
  });

  return contract;
};
