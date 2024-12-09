import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postIdea1Type {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postIdea1Type = {
  data: null,
  loading: false,
  error: null,
};

const postIdea1Slice = createSlice({
  name: "postIdea1Slice",
  initialState,
  reducers: {
    postIdea1(state) {
      state.loading = true;
    },
    postIdea1Success(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postIdea1Failure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    postIdea1,
    postIdea1Success,
    postIdea1Failure,
} = postIdea1Slice.actions;

export default postIdea1Slice.reducer;
