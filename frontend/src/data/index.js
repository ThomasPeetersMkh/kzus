import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productApi from "./productApi";
import userSlice from "./user";
import loginApi from "./loginApi";
import schoolApi from "./schoolApi";

const store = configureStore({
  reducer: combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    [userSlice.name]: userSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [schoolApi.reducerPath]: schoolApi.reducer,
  }),
});

export default store;
