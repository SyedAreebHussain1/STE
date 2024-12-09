import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadStatsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadStatsType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadStatsSlice = createSlice({
  name: "getLeadStatsSlice",
  initialState,
  reducers: {
    getLeadStats(state) {
      state.loading = true;
    },
    getLeadStatsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadStatsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadStats(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadStats,
  getLeadStatsSuccess,
  getLeadStatsFailure,
  clearGetLeadStats,
} = getLeadStatsSlice.actions;

export default getLeadStatsSlice.reducer;
