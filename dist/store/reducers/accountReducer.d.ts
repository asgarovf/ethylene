import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { PayloadAction } from "@reduxjs/toolkit";
export declare const accountSlice: import("@reduxjs/toolkit").Slice<{
    auth: boolean;
    provider: Web3Provider | undefined;
    address: string | undefined;
    signer: JsonRpcSigner | undefined;
}, {
    setAuth: (state: import("immer/dist/internal").WritableDraft<{
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    }>, action: PayloadAction<boolean>) => void;
    setProvider: (state: import("immer/dist/internal").WritableDraft<{
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    }>, action: PayloadAction<Web3Provider>) => void;
    setAddress: (state: import("immer/dist/internal").WritableDraft<{
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    }>, action: PayloadAction<string>) => void;
    setSigner: (state: import("immer/dist/internal").WritableDraft<{
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    }>, action: PayloadAction<JsonRpcSigner>) => void;
    disconnectWallet: (state: import("immer/dist/internal").WritableDraft<{
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    }>) => {
        auth: boolean;
        provider: Web3Provider | undefined;
        address: string | undefined;
        signer: JsonRpcSigner | undefined;
    };
}, "walletConnection">;
export declare const setAddress: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setAuth: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setProvider: import("@reduxjs/toolkit").ActionCreatorWithPayload<Web3Provider, string>, setSigner: import("@reduxjs/toolkit").ActionCreatorWithPayload<JsonRpcSigner, string>, disconnectWallet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<{
    auth: boolean;
    provider: Web3Provider | undefined;
    address: string | undefined;
    signer: JsonRpcSigner | undefined;
}, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=accountReducer.d.ts.map