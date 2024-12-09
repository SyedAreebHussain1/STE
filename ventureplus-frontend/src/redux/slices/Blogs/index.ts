import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllBlogs {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllBlogs = {
  data: null,
  loading: false,
  error: null,
};

const getAllBlogsSlice = createSlice({
  name: "getAllBlogs",
  initialState,
  reducers: {
    getAllBlogs(state) {
      state.loading = true;
    },
    getAllBlogsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllBlogsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllBlogs,
  getAllBlogsSuccess,
  getAllBlogsFailure,
} = getAllBlogsSlice.actions;

export default getAllBlogsSlice.reducer;
