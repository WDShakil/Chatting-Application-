import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    CLEAR_USER_INFO: (state) => {
      state.userInfo = null;
    },
  },
});

export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
