import { ethers } from "ethers";
import { batch, useDispatch } from "react-redux";
import {
  setIsConnecting,
  setisConnectionFailed,
} from "store/reducers/walletConnectionReducer";
import { useTypedSelector } from "store/store";
import { EthyleneConnector } from "types/app";

export const useConnection = () => {
  const { isConnecting, isConnectionFailed, providerName } = useTypedSelector(
    (state) => state.walletConnection
  );
  const dispatch = useDispatch();

  const connectWallet = (
    connector: EthyleneConnector,
    onError?: (error: any) => void
  ) => {
    const appliedProivder = connector.provider;
    console.log(appliedProivder);

    const provider = new ethers.providers.Web3Provider(appliedProivder, "any");

    console.log(provider);

    try {
      batch(() => {
        dispatch(setIsConnecting(true));
        dispatch(setIsConnecting(false));
      });
    } catch (err) {
      dispatch(setIsConnecting(false));
      throw new Error("Failed to connect the walled");
    }
  };

  return {
    connectWallet,
    providerName,
    isConnectionFailed,
    isConnecting,
  };
};
