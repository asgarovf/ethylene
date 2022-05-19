import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  auth: boolean;
  provider: Web3Provider | undefined;
  address: string | undefined;
  signer: JsonRpcSigner | undefined;
} = {
  auth: false,
  provider: undefined,
  address: undefined,
  signer: undefined,
};

export const accountSlice = createSlice({
  name: "walletConnection",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setProvider: (state, action: PayloadAction<Web3Provider>) => {
      state.provider = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setSigner: (state, action: PayloadAction<JsonRpcSigner>) => {
      state.signer = action.payload;
    },
    disconnectWallet: (state) => {
      return initialState;
    },
  },
});

export const { setAddress, setAuth, setProvider, setSigner, disconnectWallet } =
  accountSlice.actions;

export default accountSlice.reducer;
