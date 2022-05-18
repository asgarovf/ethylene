import { EthyleneNetwork } from "../types/app";

export const AVAX_FUJI_C_CHAIN: EthyleneNetwork = {
  chainId: "0xa869",
  name: "Avalanche Fuji C Chain",
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" },
};

export const AVAX_MAINNET: EthyleneNetwork = {
  chainId: "0xa86a",
  name: "Avalanche",
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" },
};
