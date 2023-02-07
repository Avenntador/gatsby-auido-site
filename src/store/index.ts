import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";

const createStore = () =>
  configureStore({
    devTools: true,
    reducer: {
      cart: cartReducer,
    },
  });

type ConfiguredStore = ReturnType<typeof createStore>;
type StoreGetState = ConfiguredStore["getState"];
export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore["dispatch"];

export default createStore;
