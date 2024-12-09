import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogsCategoryType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: BlogsCategoryType = {
  data: null,
  loading: false,
  error: null,
};

const blogsCategorySlice = createSlice({
  name: "blogsCategorySlice",
  initialState,
  reducers: {
    getBlogsCategorySlice(state) {
      state.loading = true;
    },
    getBlogsCategorySliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBlogsCategorySliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBlogsCategorySlice,
  getBlogsCategorySliceFailure,
  getBlogsCategorySliceSuccess,
} = blogsCategorySlice.actions;

export default blogsCategorySlice.reducer;
