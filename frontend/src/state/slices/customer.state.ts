import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Customer from "../../models/customer";
import { RootState } from "../store.state";

const initialState: Customer = {};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<Customer>) => {
      return action.payload;
    },
  },
});

export const { setCustomer } = customerSlice.actions;
export const selectCustomer = (state: RootState) => state.customer;

export default customerSlice.reducer;
