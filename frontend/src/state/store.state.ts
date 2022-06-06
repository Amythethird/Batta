import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from "./slices/shops.state";
import shopsFilterReducer from "./slices/shops-filter.state";

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    shopsFilter: shopsFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
