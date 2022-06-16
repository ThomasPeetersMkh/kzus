import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productApi from "./productApi";

const store = configureStore({
  reducer: combineReducers({
    [productApi.reducerPath]: productApi.reducer,
  }),
});

export default store;
