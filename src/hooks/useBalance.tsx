import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../store";

export const useBalance = ({ direct = true }: { direct?: boolean }) => {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
  const { provider, address } = useTypedSelector((state) => state.account);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetch = async () => {
    if (!provider || !address) return;
    try {
      setIsFetching(true);
      const balance = await provider.getBalance(address);
      setBalance(balance);
      setIsFetching(false);
      setError(null);
    } catch (err) {
      setIsFetching(false);
      setError(err);
    }
  };

  const fetchBalance = () => {
    refetch();
  };

  useEffect(() => {
    if (!provider) return;
    if (direct) {
      fetchBalance();
    }
  }, [provider]);

  return { balance, fetchBalance, setBalance, isFetching, error };
};
