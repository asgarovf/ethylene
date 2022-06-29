import { ContractInterface } from "ethers";
import { useMemo, useReducer } from "react";
import { EthyleneContract } from "../classes/EthyleneContract";
import { abiLoadingExtractor } from "../utils/abiExtractor";
import { isProd } from "../utils/isProd";

function reducer(state: any, action: any) {
  return { ...state, [action.type]: action.payload };
}

export const useContract = <T extends string>({
  address,
  abi,
  provider,
}: {
  address: string;
  abi: ContractInterface;
  provider: any;
}) => {
  const initialState: any = useMemo(() => {
    return abiLoadingExtractor(abi);
  }, []);
  const [loadingState, dispatchLoading] = useReducer(reducer, initialState);
  const [failedState, dispatchFailed] = useReducer(reducer, initialState);

  const contract: EthyleneContract<T> | null = useMemo(() => {
    if (!provider) return null;

    const contract = new EthyleneContract({
      address: address,
      abi: abi,
      provider: provider,
    });

    let mainAbi: any = abi;
    mainAbi = mainAbi.filter((item: any) => item.type === "function");
    for (let i = 0; i < mainAbi.length; i++) {
      const key = mainAbi[i].name;

      contract.methods[key] = {
        execute: async function (...args: any) {
          try {
            dispatchLoading({ type: key, payload: true });
            const signer = await provider.getSigner();
            const res = await contract.ethersContract
              .connect(signer)
              [key](...args);
            dispatchLoading({ type: key, payload: false });
            return res;
          } catch (err) {
            if (!isProd) {
              console.error(err);
            }
            dispatchLoading({ type: key, payload: false });
            dispatchFailed({ type: key, payload: true });
          }
        },
        executeAndWait: async function (...args: any) {
          try {
            dispatchLoading({ type: key, payload: true });
            const signer = await provider.getSigner();
            const res = await contract.ethersContract
              .connect(signer)
              [key](...args);
            const txn = await res.wait();
            dispatchLoading({ type: key, payload: false });
            return txn;
          } catch (err) {
            if (!isProd) {
              console.error(err);
            }
            dispatchLoading({ type: key, payload: false });
            dispatchFailed({ type: key, payload: true });
          }
        },
        isLoading: loadingState[key],
        isFailed: failedState[key],
      };
    }

    return contract;
  }, [provider, loadingState]);

  return contract;
};
