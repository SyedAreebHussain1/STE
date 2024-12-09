import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostEvaluationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PostEvaluationType = {
  data: null,
  loading: false,
  error: null,
};

const PostEvaluationSlice = createSlice({
  name: "PostEvaluationSlice",
  initialState,
  reducers: {
    PostEvaluation(state) {
      state.loading = true;
    },
    PostEvaluationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    PostEvaluationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  PostEvaluation,
  PostEvaluationSuccess,
  PostEvaluationFailure,
} = PostEvaluationSlice.actions;

export default PostEvaluationSlice.reducer;
