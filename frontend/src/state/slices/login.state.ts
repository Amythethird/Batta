import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LoginData from "../../api-utils/models/login-data";
import { RootState } from "../store.state";

const initialState: LoginData = { jwt: "", user: { id: 0 } };

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginData>) => {
      return action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
