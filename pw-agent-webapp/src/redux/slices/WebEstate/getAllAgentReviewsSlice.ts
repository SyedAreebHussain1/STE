import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllAgentReviews {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllAgentReviews = {
  data: null,
  loading: false,
  error: null,
};

const getAllAgentReviewsSlice = createSlice({
  name: "getAllAgentReviews",
  initialState,
  reducers: {
    getAllAgentReviews(state) {
      state.loading = true;
    },
    getAllAgentReviewsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllAgentReviewsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllAgentReviews,
  getAllAgentReviewsSuccess,
  getAllAgentReviewsFailure,
} = getAllAgentReviewsSlice.actions;

export default getAllAgentReviewsSlice.reducer;
