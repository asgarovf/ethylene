import { Contract, ContractInterface } from "ethers";
import { useEffect } from "react";
import { useTypedSelector } from "../store";

export const useContractEvent = <T,>(
  event: string,
  {
    address,
    callback,
    abi,
    deps = [],
  }: {
    address: string;
    abi: ContractInterface;
    callback: (...data: T[]) => void;
    deps?: any[];
  }
) => {
  const provider = useTypedSelector((state) => state.account.provider);

  useEffect(() => {
    if (!provider) return;
    const contract = new Contract(address, abi, provider);
    const fn = (data: T[]) => {
      callback(...data);
    };
    contract.on(event, fn);
    return () => {
      contract.off(event, fn);
    };
  }, [provider, ...deps]);
};
