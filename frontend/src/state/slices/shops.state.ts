import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Shop from "../../models/shop";
import { RootState } from "../store.state";

const initialState: Shop[] = [];

export const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Shop>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<Shop>) => {
      state.filter((shop) => shop.name !== action.payload.name);
    },
    set: (state, action: PayloadAction<Shop[]>) => {
      state = action.payload;
    },
  },
});

export const { add, remove, set } = shopsSlice.actions;
export const selectShops = (state: RootState) => state.shops;

export default shopsSlice.reducer;
