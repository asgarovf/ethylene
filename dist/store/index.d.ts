import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    walletConnection: {
        providerName: import("../types/app").EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    };
    account: {
        auth: boolean;
        provider: import("@ethersproject/providers").Web3Provider | undefined;
        address: string | undefined;
        signer: import("@ethersproject/providers").JsonRpcSigner | undefined;
    };
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<{
    walletConnection: {
        providerName: import("../types/app").EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    };
    account: {
        auth: boolean;
        provider: import("@ethersproject/providers").Web3Provider | undefined;
        address: string | undefined;
        signer: import("@ethersproject/providers").JsonRpcSigner | undefined;
    };
}, import("redux").AnyAction, undefined>]>>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    walletConnection: {
        providerName: import("../types/app").EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    };
    account: {
        auth: boolean;
        provider: import("@ethersproject/providers").Web3Provider | undefined;
        address: string | undefined;
        signer: import("@ethersproject/providers").JsonRpcSigner | undefined;
    };
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useTypedSelector: TypedUseSelectorHook<RootState>;
//# sourceMappingURL=index.d.ts.map