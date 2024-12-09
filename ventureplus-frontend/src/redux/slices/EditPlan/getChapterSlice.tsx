import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getChapter {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getChapter = {
  data: null,
  loading: false,
  error: null,
};

const getChapterSlice = createSlice({
  name: "getChapter",
  initialState,
  reducers: {
    getChapter(state) {
      state.loading = true;
    },
    getChapterSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getChapterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getChapter, getChapterSuccess, getChapterFailure } =
  getChapterSlice.actions;

export default getChapterSlice.reducer;
