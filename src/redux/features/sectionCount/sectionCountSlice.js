import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [],
};

export const sectionCountSlice = createSlice({
  name: "sectionCount",
  initialState,
  reducers: {
    increaseCount: (state, { payload }) => {
      if (state.sections.length === 0) {
        state.sections.push({
          _id: 1,
          ...payload,
        });
      } else {
        const lastElement = state.sections.at(-1);
        state.sections.push({
          _id: lastElement._id + 1,
          ...payload,
        });
      }
    },
    decreaseCount: (state, action) => {
      state.sections = state.sections.filter(
        (section) => section._id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseCount, decreaseCount } = sectionCountSlice.actions;

export default sectionCountSlice.reducer;
