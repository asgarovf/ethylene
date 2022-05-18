import { Dispatch, useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../store";
import { EthyleneNetwork } from "../types/app";

declare let window: Window & any;

export const useRightNetwork = (network: EthyleneNetwork) => {
  const { auth } = useTypedSelector((state) => state.account);
  const [isRightNetwork, setIsRightNetwork] = useState(true);
  const [result, setResult] = useState<{
    fn: () => void;
  }>({
    fn: () => undefined,
  });

  useEffect(() => {
    if (!auth) {
      setIsRightNetwork(false);
      return;
    }

    const fetch = async () => {
      const res = await checkIfRightNetwork(network, setIsRightNetwork);
      if (res.status === false) {
        setIsRightNetwork(false);
        setResult(() => {
          return { fn: res.switchTo };
        });
      } else {
        setIsRightNetwork(true);
        setResult(() => {
          return { fn: () => undefined };
        });
      }
    };
    fetch();
  }, [auth]);

  return { isRightNetwork, switchTo: result.fn };
};

const checkIfRightNetwork = async (
  network: EthyleneNetwork,
  setIsRightNetwork: (to: boolean) => void
) => {
  if (!window.ethereum) return { status: false, switchTo: () => undefined };
  const networkId = await window.ethereum.request({
    method: "eth_chainId",
  });

  if (networkId != network.chainId) {
    return {
      status: false,
      switchTo: function () {
        const fn = async () => {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: network.chainId }],
            });
            setIsRightNetwork(true);
          } catch (error: any) {
            const WALLET_ERROR_CODE = 4902;

            if (error.code === WALLET_ERROR_CODE) {
              try {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: network.chainId,
                      rpcUrls: network.rpcUrls,
                      nativeCurrency: network.nativeCurrency,
                      chainName: network.name,
                    },
                  ],
                });
                setIsRightNetwork(true);
              } catch (addError) {
                console.log("[DEBUG] Network Add error", addError);
                return;
              }
            }
            console.log("[DEBUG] Switch Network Error");
            return;
          }
        };
        fn().then().catch();
      },
    };
  } else {
    return { status: true, switchTo: () => undefined };
  }
};
