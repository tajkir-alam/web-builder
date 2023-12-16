import { configureStore } from "@reduxjs/toolkit";
import sectionCountSlice from "./features/sectionCount/sectionCountSlice";

export const store = configureStore({
  reducer: {
    sectionCount: sectionCountSlice,
  },
});
