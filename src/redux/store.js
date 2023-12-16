import { configureStore } from "@reduxjs/toolkit";
import sectionCountSlice from "./features/sectionCount/sectionCountSlice";
import textEditorSlice from "./features/textEditor/textEditorSlice";
import heroBannerImgSlice from "./features/heroBannerImg/heroBannerImgSlice";

export const store = configureStore({
  reducer: {
    sectionCount: sectionCountSlice,
    textEditor: textEditorSlice,
    heroBannerImg: heroBannerImgSlice,
  },
});
