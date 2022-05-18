export declare type EthyleneConnectorName = "injected" | "walletconnect" | "coinbase";
export declare type EthyleneConnector = {
    name: EthyleneConnectorName;
    provider: any;
};
export declare type EthyleneNetwork = {
    chainId: string;
    name: string;
    rpcUrls: string[];
    nativeCurrency: {
        name?: string;
        decimals?: number;
        symbol?: string;
    };
};
//# sourceMappingURL=app.d.ts.map