import { JsonRpcSigner } from "@ethersproject/providers";
import { Contract, ContractInterface } from "ethers";
import { useState } from "react";
import { useTypedSelector } from "../store";
import { isProd } from "../utils/isProd";

export const useContractFunction = <T,>({
  address,
  abi,
  method,
  args = [],
  connectSigner = true,
  onError,
  onSuccess,
}: {
  address: string;
  abi: ContractInterface;
  method: string;
  connectSigner?: boolean;
  onError?: (err: any) => void;
  onSuccess?: (res: T) => void;
  args: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const provider = useTypedSelector((state) => state.account.provider);

  const execute = async (wait?: boolean) => {
    if (!provider && connectSigner) {
      if (!isProd) {
        console.error("Signer is not available, check the wallet connection");
      }
      return;
    }

    const signer = await provider?.getSigner();

    try {
      const contract = new Contract(address, abi, provider);
      setIsLoading(true);
      setIsFailed(false);
      let res;
      let txn;
      if (connectSigner) {
        res = await contract.connect(signer as JsonRpcSigner)[method](...args);
      } else {
        res = await contract[method](...args);
      }
      if (wait) {
        txn = await res.wait();
      }
      setIsLoading(false);
      onSuccess?.(wait ? txn : res);
    } catch (err) {
      setIsFailed(true);
      setIsLoading(false);
      onError?.(err);
      if (!isProd) {
        console.error(err);
      }
    }
  };

  const executeAndWait = () => {
    execute(true);
  };

  return { isLoading, isFailed, execute, executeAndWait };
};
