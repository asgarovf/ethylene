import { batch, useDispatch } from "react-redux";
import {
  disconnectWallet,
  setAddress,
  setAuth,
  setProvider,
  setSigner,
} from "../store/reducers/accountReducer";
import { setIsConnecting } from "../store/reducers/walletConnectionReducer";
import { useTypedSelector } from "../store";
import { EthyleneConnector } from "../types/app";
import { EthyleneInjectedConnector } from "../utils/connectors";
import { isProd } from "../utils/isProd";
import { ethers } from "ethers";
import { useEffect } from "react";

const defaultConnector = EthyleneInjectedConnector;

export const useConnection = ({
  connector,
  onError,
  onMetamaskError,
}: {
  connector?: EthyleneConnector;
  onError?: (err: Error) => void;
  onMetamaskError?: () => void;
} = {}) => {
  const { isConnecting, isConnectionFailed, providerName } = useTypedSelector(
    (state) => state.walletConnection
  );
  const dispatch = useDispatch();
  const { auth } = useTypedSelector((state) => state.account);

  const connect = async () => {
    if (auth) return;

    let mainConnector = connector ?? defaultConnector;

    if (!mainConnector.provider) {
      onMetamaskError?.();
      return;
    }

    const appliedProvider = mainConnector.provider;
    const provider = new ethers.providers.Web3Provider(appliedProvider, "any");

    try {
      dispatch(setIsConnecting(true));
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      batch(() => {
        dispatch(setSigner(signer));
        dispatch(setProvider(provider));
        dispatch(setAddress(address));
        dispatch(setAuth(true));
        dispatch(setIsConnecting(false));
      });
    } catch {
      dispatch(setIsConnecting(false));
      const error = new Error("Failed to connect the walled");
      onError?.(error);
      if (!isProd) {
        console.error(error);
        throw error;
      }
    }
  };

  const disconnect = () => {
    if (!auth) return;
    dispatch(disconnectWallet());
  };

  return {
    connect,
    disconnect,
    providerName,
    isConnectionFailed,
    isConnecting,
  };
};
