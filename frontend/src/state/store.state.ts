import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login.state";
import customerReducer from "./slices/customer.state";
import shopsReducer from "./slices/shops.state";
import shopsFilterReducer from "./slices/shops-filter.state";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    customer: customerReducer,
    shops: shopsReducer,
    shopsFilter: shopsFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
