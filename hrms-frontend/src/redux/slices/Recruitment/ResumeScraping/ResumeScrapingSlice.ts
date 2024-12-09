import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ResumeScapingType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ResumeScapingType = {
  data: null,
  loading: false,
  error: null,
};

const resumeScrapingSlice = createSlice({
  name: "resumeScrapingSlice",
  initialState,
  reducers: {
    resumeScraping(state) {
      state.loading = true;
    },
    resumeScrapingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    resumeScrapingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  resumeScraping,
  resumeScrapingSuccess,
  resumeScrapingFailure,
} = resumeScrapingSlice.actions;

export default resumeScrapingSlice.reducer;
