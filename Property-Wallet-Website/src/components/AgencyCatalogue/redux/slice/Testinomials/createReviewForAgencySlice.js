import { createSlice } from "@reduxjs/toolkit";

export const createReviewForAgencySlice = createSlice({
  name: "createReviewForAgencySlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createReviewForAgency: (state) => {
      state.loading = true;
    },
    createReviewForAgencySuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    createReviewForAgencyFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createReviewForAgency,
  createReviewForAgencySuccess,
  createReviewForAgencyFailure,
} = createReviewForAgencySlice.actions;

export default createReviewForAgencySlice.reducer;
