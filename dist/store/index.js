import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import accountReducer from "./reducers/accountReducer";
import walletConnectionSlice from "./reducers/walletConnectionReducer";
export var store = configureStore({
    reducer: {
        walletConnection: walletConnectionSlice,
        account: accountReducer,
    },
    middleware: function (getDefaultMiddleware) {
        var customizedMiddleware = getDefaultMiddleware({
            serializableCheck: false,
        });
        return customizedMiddleware;
    },
});
export var useAppDispatch = function () { return useDispatch(); };
export var useTypedSelector = useSelector;
