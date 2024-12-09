import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostLetterType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PostLetterType = {
  data: null,
  loading: false,
  error: null,
};

const PostLetterSlice = createSlice({
  name: "PostLetter",
  initialState,
  reducers: {
    PostLetter(state) {
      state.loading = true;
    },
    PostLetterSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    PostLetterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { PostLetter, PostLetterSuccess, PostLetterFailure } =
  PostLetterSlice.actions;

export default PostLetterSlice.reducer;
