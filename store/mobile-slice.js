/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileOpen: false,
};

const mobileSlice = createSlice({
  name: "mobile-slice",
  initialState,
  reducers: {
    mobileOpen(state) {
      state.isMobileOpen = true;
    },
    mobileClose(state) {
      state.isMobileOpen = false;
    },
  },
});

export const { mobileClose, mobileOpen } = mobileSlice.actions;
export default mobileSlice.reducer;
