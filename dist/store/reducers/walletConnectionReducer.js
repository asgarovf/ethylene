var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    providerName: undefined,
    isConnecting: false,
    isConnectionFailed: false,
};
export var walletConnectionSlice = createSlice({
    name: "walletConnection",
    initialState: initialState,
    reducers: {
        setIsConnecting: function (state, action) {
            state.isConnecting = action.payload;
        },
        setProviderName: function (state, action) {
            state.providerName = action.payload;
        },
        setisConnectionFailed: function (state, action) {
            state.isConnectionFailed = action.payload;
        },
    },
});
export var setIsConnecting = (_a = walletConnectionSlice.actions, _a.setIsConnecting), setProviderName = _a.setProviderName, setisConnectionFailed = _a.setisConnectionFailed;
export default walletConnectionSlice.reducer;
