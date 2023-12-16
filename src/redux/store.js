import { configureStore } from "@reduxjs/toolkit";
import sectionCountSlice from "./features/sectionCount/sectionCountSlice";
import textEditorSlice from "./features/textEditor/textEditorSlice";

export const store = configureStore({
  reducer: {
    sectionCount: sectionCountSlice,
    textEditor: textEditorSlice,
  },
});
