import WalletConnectProvider from "@walletconnect/web3-provider";
import { EthyleneConnector } from "types/app";

declare let window: Window & any;

/* const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
 */
export const EthyleneInjectedConnector: EthyleneConnector = {
  name: "injected",
  provider: window.ethereum,
};

export const EthyleneWalletConnectConnector: EthyleneConnector = {
  name: "walletconnect",
  provider: WalletConnectProvider,
};

/* const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "web3-react-demo",
});
 */
