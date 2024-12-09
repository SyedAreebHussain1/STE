import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostTableValues {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PostTableValues = {
  data: null,
  loading: false,
  error: null,
};

const postTableValuesSlice = createSlice({
  name: "postTableValuesSlice",
  initialState,
  reducers: {
    postTableValues(state) {
      state.loading = true;
    },
    postTableValuesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postTableValuesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPostTableValues(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  postTableValues,
  postTableValuesSuccess,
  postTableValuesFailure,
  clearPostTableValues,
} = postTableValuesSlice.actions;

export default postTableValuesSlice.reducer;
