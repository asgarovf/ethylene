import { EthyleneConnector } from "../types/app";
export declare const useConnection: ({ connector, onError, onMetamaskError, }?: {
    connector?: EthyleneConnector | undefined;
    onError?: ((err: Error) => void) | undefined;
    onMetamaskError?: (() => void) | undefined;
}) => {
    connect: () => Promise<void>;
    disconnect: () => void;
    providerName: import("../types/app").EthyleneConnectorName | undefined;
    isConnectionFailed: boolean;
    isConnecting: boolean;
};
//# sourceMappingURL=useConnection.d.ts.map