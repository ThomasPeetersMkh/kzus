import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  name: "",
  type: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    login(state, { payload }) {
      state.firstname = payload.firstname;
      state.name = payload.name;
      state.type = payload.type;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.firstname = "";
      state.name = "";
      state.type = "";
      state.isLoggedIn = false;
    },
  },
});

export default userSlice;
export const { login, logout } = userSlice.actions;
