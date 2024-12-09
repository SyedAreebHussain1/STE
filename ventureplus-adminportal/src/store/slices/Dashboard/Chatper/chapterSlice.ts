import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChapterType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ChapterType = {
  data: null,
  loading: false,
  error: null,
};

const chapterSlice = createSlice({
  name: "chapterSlice",
  initialState,
  reducers: {
    postChapterSlice(state) {
      state.loading = true;
    },
    postChapterSliceSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postChapterSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPostChapter(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    updateChapter(state) {
      state.loading = true;
    },
    updateChapterSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    updateChapterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateChapter(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getChapterAdminSlice(state) {
      state.loading = true;
    },
    getChapterAdminSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getChapterAdminSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetChapterAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteChapter(state) {
      state.loading = true;
    },
    deleteChapterSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteChapterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getAllChaptersSlice(state) {
      state.loading = true;
    },
    getAllChaptersSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllChaptersSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postChapterSlice,
  postChapterSliceSuccess,
  postChapterSliceFailure,
  clearPostChapter,
  getChapterAdminSlice,
  getChapterAdminSliceSuccess,
  getChapterAdminSliceFailure,
  clearGetChapterAdmin,
  updateChapter,
  updateChapterSuccess,
  updateChapterFailure,
  deleteChapter,
  deleteChapterSuccess,
  deleteChapterFailure,
  getAllChaptersSlice,
  getAllChaptersSliceFailure,
  getAllChaptersSliceSuccess
} = chapterSlice.actions;

export default chapterSlice.reducer;
