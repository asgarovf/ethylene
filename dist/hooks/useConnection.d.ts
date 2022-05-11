import { EthyleneConnector } from "../types/app";
export declare const useConnection: () => {
    connect: ({ connector, onError, onMetamaskError, }?: {
        connector?: EthyleneConnector | undefined;
        onError?: ((err: Error) => void) | undefined;
        onMetamaskError?: (() => void) | undefined;
    }) => Promise<void>;
    disconnect: () => void;
    providerName: import("../types/app").EthyleneConnectorName | undefined;
    isConnectionFailed: boolean;
    isConnecting: boolean;
};
//# sourceMappingURL=useConnection.d.ts.map