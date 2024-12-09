import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getChapterContent {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getChapterContent = {
  data: null,
  loading: false,
  error: null,
};

const getChapterContentSlice = createSlice({
  name: "getChapterContent",
  initialState,
  reducers: {
    getChapterContent(state) {
      state.loading = true;
    },
    getChapterContentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getChapterContentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearChapterContent(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getChapterContent,
  getChapterContentSuccess,
  getChapterContentFailure,
  clearChapterContent,
} = getChapterContentSlice.actions;

export default getChapterContentSlice.reducer;
