import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState: {
    data: [],
    result: 0,
  },
  reducers: {
    setQestionData: (state, action) => {
      state.data = action.payload;
    },
    calculateResult: (state, action) => {
      const correctAnswers = action.payload;
      state.result = correctAnswers * 10;
    },
  },
});

export const { setQestionData, calculateResult } = questionSlice.actions;
export default questionSlice.reducer;
