import { createSlice } from "@reduxjs/toolkit";

export const createReviewSlice = createSlice({
  name: "createReviewSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createReview: (state) => {
      state.loading = true;
    },
    createReviewSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    createReviewFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createReview, createReviewSuccess, createReviewFailure } =
  createReviewSlice.actions;

export default createReviewSlice.reducer;
