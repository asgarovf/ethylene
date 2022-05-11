import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EthyleneConnectorName } from "../../types/app";

const initialState: {
  providerName: EthyleneConnectorName | undefined;
  isConnecting: boolean;
  isConnectionFailed: boolean;
} = {
  providerName: undefined,
  isConnecting: false,
  isConnectionFailed: false,
};

export const walletConnectionSlice = createSlice({
  name: "walletConnection",
  initialState,
  reducers: {
    setIsConnecting: (state, action: PayloadAction<boolean>) => {
      state.isConnecting = action.payload;
    },
    setProviderName: (
      state,
      action: PayloadAction<EthyleneConnectorName | undefined>
    ) => {
      state.providerName = action.payload;
    },
    setisConnectionFailed: (state, action: PayloadAction<boolean>) => {
      state.isConnectionFailed = action.payload;
    },
  },
});

export const { setIsConnecting, setProviderName, setisConnectionFailed } =
  walletConnectionSlice.actions;

export default walletConnectionSlice.reducer;
