import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { ERC20 } from "../abi";
import { useTypedSelector } from "../store";
import { useContractFunction } from "./useContractFunction";

export const useERC20Balance = ({
  address,
  direct = true,
  deps = [],
  onSuccess,
}: {
  address: string;
  direct?: boolean;
  deps?: any[];
  onSuccess?: (balance: BigNumber) => void;
}) => {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
  const { provider, address: userAddress } = useTypedSelector(
    (state) => state.account
  );
  const [error, setError] = useState<any>(null);

  const { execute, isLoading } = useContractFunction<BigNumber>({
    abi: ERC20,
    address: address,
    method: "balanceOf",
    connectSigner: false,
    onError: (err) => {
      setError(err);
    },
    onSuccess: (res) => {
      onSuccess?.(res);
      setBalance(res);
    },
    args: [userAddress],
  });

  useEffect(() => {
    if (!provider) return;
    if (direct) {
      execute();
    }
  }, [provider, ...deps]);

  return {
    fetchBalance: execute,
    balance,
    setBalance,
    isFetching: isLoading,
    error,
  };
};
