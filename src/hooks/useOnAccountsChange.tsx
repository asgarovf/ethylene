import { useEffect } from "react";
import { useTypedSelector } from "../store";

export const useOnAccountsChange = (
  callback: () => void,
  { deps = [], interval = 1000 }: { deps?: any[]; interval?: number }
) => {
  const { provider, address } = useTypedSelector((state) => state.account);

  useEffect(() => {
    if (!provider) return;

    const timer = setInterval(() => {
      const fetch = async () => {
        await provider.send("eth_requestAccounts", []);
        let signer = await provider.getSigner();
        const newAddress = await signer.getAddress();
        if (newAddress !== address) {
          callback?.();
        }
      };
      fetch();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [provider, ...deps]);
};
