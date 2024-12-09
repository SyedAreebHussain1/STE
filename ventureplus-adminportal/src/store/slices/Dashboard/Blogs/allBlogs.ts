import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllBlogsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AllBlogsType = {
  data: null,
  loading: false,
  error: null,
};

const allBlogsSlice = createSlice({
  name: "allBlogsSlice",
  initialState,
  reducers: {
    postallBlogsSlice(state) {
      state.loading = true;
    },
    postallBlogsSliceSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postallBlogsSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getallBlogsSlice(state) {
      state.loading = true;
    },
    getallBlogsSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getallBlogsSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteAllBlogs(state) {
      state.loading = true;
    },
    deleteAllBlogsSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteAllBlogsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    updateAllBlogs(state) {
      state.loading = true;
    },
    updateAllBlogsSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    updateAllBlogsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteAllBlogPictures(state) {
      state.loading = true;
    },
    deleteAllBlogPicturesSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteAllBlogPicturesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postallBlogsSlice,
  postallBlogsSliceSuccess,
  postallBlogsSliceFailure,
  getallBlogsSlice,
  getallBlogsSliceFailure,
  getallBlogsSliceSuccess,
  deleteAllBlogs,
  deleteAllBlogsFailure,
  deleteAllBlogsSuccess,
  updateAllBlogs,
  updateAllBlogsFailure,
  updateAllBlogsSuccess,
  deleteAllBlogPictures,
  deleteAllBlogPicturesFailure,
  deleteAllBlogPicturesSuccess
} = allBlogsSlice.actions;

export default allBlogsSlice.reducer;
