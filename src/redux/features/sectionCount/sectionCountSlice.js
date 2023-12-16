import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const sectionCountSlice = createSlice({
  name: "sectionCount",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseCount } = sectionCountSlice.actions;

export default sectionCountSlice.reducer;
