import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostPaymentMethod {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PostPaymentMethod = {
  data: null,
  loading: false,
  error: null,
};

const PostPaymentMethodSlice = createSlice({
  name: "PostPaymentMethod",
  initialState,
  reducers: {
    PostPaymentMethod(state) {
      state.loading = true;
    },
    PostPaymentMethodSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    PostPaymentMethodFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  PostPaymentMethod,
  PostPaymentMethodSuccess,
  PostPaymentMethodFailure,
} = PostPaymentMethodSlice.actions;

export default PostPaymentMethodSlice.reducer;
