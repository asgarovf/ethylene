import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  auth: boolean;
  provider: any; //TODO: any ?
  account: string | undefined;
  signer: string | undefined;
} = {
  auth: false,
  provider: undefined,
  account: undefined,
  signer: undefined,
};

export const accountSlice = createSlice({
  name: "walletConnection",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setProvider: (state, action: PayloadAction<any>) => {
      state.provider = action.payload;
    },
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
    setSigner: (state, action: PayloadAction<string>) => {
      state.signer = action.payload;
    },
  },
});

export const { setAccount, setAuth, setProvider, setSigner } =
  accountSlice.actions;

export default accountSlice.reducer;
