import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postReplyByReviewIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postReplyByReviewIdType = {
  data: null,
  loading: false,
  error: null,
};

const postReplyByReviewIdSlice = createSlice({
  name: "postReplyByReviewIdSlice",
  initialState,
  reducers: {
    postReplyByReviewId(state) {
      state.loading = true;
    },
    postReplyByReviewIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postReplyByReviewIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postReplyByReviewId,
  postReplyByReviewIdSuccess,
  postReplyByReviewIdFailure,
} = postReplyByReviewIdSlice.actions;

export default postReplyByReviewIdSlice.reducer;
