import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from "./slices/shops.state";

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
