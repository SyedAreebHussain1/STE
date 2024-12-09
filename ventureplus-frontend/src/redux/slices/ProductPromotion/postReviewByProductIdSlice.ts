import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postReviewByProductIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postReviewByProductIdType = {
  data: null,
  loading: false,
  error: null,
};

const postReviewByProductIdSlice = createSlice({
  name: "postReviewByProductIdSlice",
  initialState,
  reducers: {
    postReviewByProductId(state) {
      state.loading = true;
    },
    postReviewByProductIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postReviewByProductIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postReviewByProductId,
  postReviewByProductIdSuccess,
  postReviewByProductIdFailure,
} = postReviewByProductIdSlice.actions;

export default postReviewByProductIdSlice.reducer;
