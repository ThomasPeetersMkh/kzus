import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productApi from "./productApi";
import userSlice from "./user";
import loginApi from "./loginApi";
import schoolApi from "./schoolApi";
import categoryApi from "./categoryApi";
import userApi from "./userApi";

const store = configureStore({
  reducer: combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    [userSlice.name]: userSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [schoolApi.reducerPath]: schoolApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    productApi.middleware,
    schoolApi.middleware,
    userApi.middleware
  ]
});

export default store;
