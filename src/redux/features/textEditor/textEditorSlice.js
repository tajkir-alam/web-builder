import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textValue: "",
};

export const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    updatedText: (state, { payload }) => {
      state.textValue = payload;
    },
  },
});

export const { updatedText } = textEditorSlice.actions;

export default textEditorSlice.reducer;
