import { createSlice } from "@reduxjs/toolkit";

export const getReviewForAgencyByIdSlice = createSlice({
  name: "getReviewForAgencyByIdSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getReviewForAgencyById: (state) => {
      state.loading = true;
    },
    getReviewForAgencyByIdSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getReviewForAgencyByIdFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getReviewForAgencyById,
  getReviewForAgencyByIdSuccess,
  getReviewForAgencyByIdFailure,
} = getReviewForAgencyByIdSlice.actions;

export default getReviewForAgencyByIdSlice.reducer;
