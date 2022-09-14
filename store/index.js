/** @format */

import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./mobile-slice";

const store = configureStore({
  reducer: {
    mobileSlice,
  },
});

export default store;
