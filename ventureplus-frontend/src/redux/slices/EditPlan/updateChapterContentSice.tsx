import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateChapterContent {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateChapterContent = {
  data: null,
  loading: false,
  error: null,
};

const updateChapterContentSice = createSlice({
  name: "updateChapterContent",
  initialState,
  reducers: {
    updateChapterContent(state) {
      state.loading = true;
    },
    updateChapterContentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateChapterContentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateChapterContent,
  updateChapterContentSuccess,
  updateChapterContentFailure,
} = updateChapterContentSice.actions;

export default updateChapterContentSice.reducer;
