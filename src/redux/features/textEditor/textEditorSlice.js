import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

export const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    updatedText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export const { updatedText } = textEditorSlice.actions;

export default textEditorSlice.reducer;
