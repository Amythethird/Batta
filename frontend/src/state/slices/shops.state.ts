import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Shop from "../../models/shop";
import { RootState } from "../store.state";

const initialState: Shop[] = [];

export const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    addShop: (state, action: PayloadAction<Shop>) => {
      state.push(action.payload);
    },
    removeShop: (state, action: PayloadAction<Shop>) => {
      state.filter((shop) => shop.id !== action.payload.id);
    },
    setShops: (state, action: PayloadAction<Shop[]>) => {
      return action.payload;
    },
  },
});

export const { addShop, removeShop, setShops } = shopsSlice.actions;
export const selectShops = (state: RootState) => state.shops;

export default shopsSlice.reducer;
