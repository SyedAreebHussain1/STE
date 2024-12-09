import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getStaffReview {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getStaffReview = {
  data: null,
  loading: false,
  error: null,
};

const getStaffReviewSlicer = createSlice({
  name: "getStaffReview",
  initialState,
  reducers: {
    getStaffReview(state) {
      state.loading = true;
    },
    getStaffReviewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getStaffReviewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getStaffReview, getStaffReviewSuccess, getStaffReviewFailure } =
  getStaffReviewSlicer.actions;

export default getStaffReviewSlicer.reducer;
