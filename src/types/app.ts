export type EthyleneConnectorName = "injected" | "walletconnect" | "coinbase";
export type EthyleneConnector = {
  name: EthyleneConnectorName;
  provider: any;
};
