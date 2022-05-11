var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    auth: false,
    provider: undefined,
    address: undefined,
    signer: undefined,
};
export var accountSlice = createSlice({
    name: "walletConnection",
    initialState: initialState,
    reducers: {
        setAuth: function (state, action) {
            state.auth = action.payload;
        },
        setProvider: function (state, action) {
            state.provider = action.payload;
        },
        setAddress: function (state, action) {
            state.address = action.payload;
        },
        setSigner: function (state, action) {
            state.signer = action.payload;
        },
        disconnectWallet: function (state) {
            return initialState;
        },
    },
});
export var setAddress = (_a = accountSlice.actions, _a.setAddress), setAuth = _a.setAuth, setProvider = _a.setProvider, setSigner = _a.setSigner, disconnectWallet = _a.disconnectWallet;
export default accountSlice.reducer;
