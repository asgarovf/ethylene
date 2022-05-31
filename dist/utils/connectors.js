import WalletConnectProvider from "@walletconnect/web3-provider";
export var EthyleneInjectedConnector = {
    name: "injected",
    provider: window.ethereum,
};
var walletConnectProvider = new WalletConnectProvider({
    rpc: {
        1: "https://mainnet.mycustomnode.com",
        2: "https://ropsten.mycustomnode.com",
        100: "https://dai.poa.network",
    },
});
export var EthyleneWalletConnectConnector = {
    name: "walletconnect",
    provider: walletConnectProvider,
};
