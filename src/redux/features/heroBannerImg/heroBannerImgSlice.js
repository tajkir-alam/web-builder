import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerImgSrc: "/ComponentsBannerImg/banner1.png",
};

export const heroBannerImgSlice = createSlice({
  name: "heroBannerImg",
  initialState,
  reducers: {
    updateBannerImgSrc: (state, { payload }) => {
      state.bannerImgSrc = payload;
    },
  },
});

export const { updateBannerImgSrc } = heroBannerImgSlice.actions;

export default heroBannerImgSlice.reducer;
