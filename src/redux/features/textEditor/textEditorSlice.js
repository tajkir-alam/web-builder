import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const textEditorSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { } = textEditorSlice.actions

export default textEditorSlice.reducer