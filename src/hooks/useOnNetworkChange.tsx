import { useEffect } from "react";
import { useTypedSelector } from "../store";

export const useOnNetworkChange = (callback: () => void, deps: any[] = []) => {
  const { provider } = useTypedSelector((state) => state.account);

  useEffect(() => {
    if (!provider) return;

    provider.on("network", (_newNetwork: any, oldNetwork: any) => {
      if (oldNetwork) callback();
    });

    return () => {
      provider.off("network");
    };
  }, [provider, ...deps]);
};
