import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getStopHistory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getStopHistory = {
  data: null,
  loading: false,
  error: null,
};

const getStopHistorySlice = createSlice({
  name: "getStopHistory",
  initialState,
  reducers: {
    getStopHistory(state) {
      state.loading = true;
    },
    getStopHistorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getStopHistoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getStopHistory, getStopHistorySuccess, getStopHistoryFailure } =
  getStopHistorySlice.actions;

export default getStopHistorySlice.reducer;
