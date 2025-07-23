import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "user_info",
  initialState: {
    user_info: {},
  },
  reducers: {
    userInfoHandler: (state, action) => {
      state.user_info = action.payload;
    },
  },
});

export const { userInfoHandler } = userInfoSlice.actions;
export default userInfoSlice.reducer;
