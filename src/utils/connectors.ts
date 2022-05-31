import { EthyleneConnector } from "../types/app";
import WalletConnectProvider from "@walletconnect/web3-provider";

declare let window: Window & any;

export const EthyleneInjectedConnector: EthyleneConnector = {
  name: "injected",
  provider: window.ethereum,
};

const walletConnectProvider = new WalletConnectProvider({
  rpc: {
    1: "https://mainnet.mycustomnode.com",
    2: "https://ropsten.mycustomnode.com",
    100: "https://dai.poa.network",
  },
});

export const EthyleneWalletConnectConnector: EthyleneConnector = {
  name: "walletconnect",
  provider: walletConnectProvider,
};
