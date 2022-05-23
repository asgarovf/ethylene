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

export const ETHEREUM_MAINNET: EthyleneNetwork = {
  chainId: "0x01",
  name: "Ethereum",
  rpcUrls: ["https://api.mycryptoapi.com/eth"],
  nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
};

export const RINKEBY: EthyleneNetwork = {
  chainId: "0x04",
  name: "Rinkeby",
  rpcUrls: ["https://rinkeby.infura.io/v3/"],
  nativeCurrency: { name: "Rinkeby Ether", decimals: 18, symbol: "RIN" },
};

export const BSC_MAINNET: EthyleneNetwork = {
  chainId: "0x38",
  name: "Binance Smart Chain Mainnet",
  rpcUrls: [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-dataseed3.defibit.io",
    "https://bsc-dataseed4.defibit.io",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed2.ninicoin.io",
    "https://bsc-dataseed3.ninicoin.io",
    "https://bsc-dataseed4.ninicoin.io",
  ],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    decimals: 18,
    symbol: "BNB",
  },
};

export const BSC_TESTNET: EthyleneNetwork = {
  chainId: "0x61",
  name: "Binance Smart Chain Testnet",
  rpcUrls: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://data-seed-prebsc-1-s3.binance.org:8545",
    "https://data-seed-prebsc-2-s3.binance.org:8545",
  ],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    decimals: 18,
    symbol: "tBNB",
  },
};

export const POLYGON_MAINNET: EthyleneNetwork = {
  chainId: "0x89",
  name: "Polygon",
  rpcUrls: ["https://polygon-rpc.com"],
  nativeCurrency: { name: "Matic", decimals: 18, symbol: "MATIC" },
};

export const MUMBAI_MAINNET: EthyleneNetwork = {
  chainId: "0x13881",
  name: "Mumbai",
  rpcUrls: ["https://mumbai.polygonscan.com"],
  nativeCurrency: { name: "Matic", decimals: 18, symbol: "MATIC" },
};