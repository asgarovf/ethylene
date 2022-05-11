import { PayloadAction } from "@reduxjs/toolkit";
import { EthyleneConnectorName } from "../../types/app";
export declare const walletConnectionSlice: import("@reduxjs/toolkit").Slice<{
    providerName: EthyleneConnectorName | undefined;
    isConnecting: boolean;
    isConnectionFailed: boolean;
}, {
    setIsConnecting: (state: import("immer/dist/internal").WritableDraft<{
        providerName: EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    }>, action: PayloadAction<boolean>) => void;
    setProviderName: (state: import("immer/dist/internal").WritableDraft<{
        providerName: EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    }>, action: PayloadAction<EthyleneConnectorName | undefined>) => void;
    setisConnectionFailed: (state: import("immer/dist/internal").WritableDraft<{
        providerName: EthyleneConnectorName | undefined;
        isConnecting: boolean;
        isConnectionFailed: boolean;
    }>, action: PayloadAction<boolean>) => void;
}, "walletConnection">;
export declare const setIsConnecting: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setProviderName: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<EthyleneConnectorName | undefined, string>, setisConnectionFailed: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
declare const _default: import("redux").Reducer<{
    providerName: EthyleneConnectorName | undefined;
    isConnecting: boolean;
    isConnectionFailed: boolean;
}, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=walletConnectionReducer.d.ts.map