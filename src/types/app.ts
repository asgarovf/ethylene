export type EthyleneConnectorName = "injected" | "walletconnect" | "coinbase";
export type EthyleneConnector = {
  name: EthyleneConnectorName;
  provider: any;
};
export type EthyleneNetwork = {
  chainId: string;
  name: string;
  rpcUrls: string[];
  nativeCurrency: { name?: string; decimals?: number; symbol?: string };
};
