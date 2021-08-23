import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authLogin: false,
  menu: false,
};

const dashboardSlice = createSlice({
  initialState,
  name: "dashboard",
  reducers: {
    openMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});
export const { openMenu, createBlock, inputVal } = dashboardSlice.actions;
export const selectAuth = (state) => state.dashboard.authLogin;
export const selectMenu = (state) => state.dashboard.menu;
export const selectDashboard = (state) => state.dashboard.createDash;

export default dashboardSlice.reducer;
