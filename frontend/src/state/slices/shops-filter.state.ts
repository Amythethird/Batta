import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.state";

const initialState: string = "";

export const shopsFilterSlice = createSlice({
  name: "shopsFilter",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { set } = shopsFilterSlice.actions;
export const selectShopsFilter = (state: RootState) => state.shopsFilter;

export default shopsFilterSlice.reducer;
