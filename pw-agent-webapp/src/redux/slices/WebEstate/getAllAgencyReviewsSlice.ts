import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllAgencyReviews {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllAgencyReviews = {
  data: null,
  loading: false,
  error: null,
};

const getAllAgencyReviewsSlice = createSlice({
  name: "getAllAgencyReviews",
  initialState,
  reducers: {
    getAllAgencyReviews(state) {
      state.loading = true;
    },
    getAllAgencyReviewsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllAgencyReviewsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllAgencyReviews,
  getAllAgencyReviewsSuccess,
  getAllAgencyReviewsFailure,
} = getAllAgencyReviewsSlice.actions;

export default getAllAgencyReviewsSlice.reducer;
