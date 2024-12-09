import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadStats {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadStats = {
  data: null,
  loading: false,
  error: null,
};

const getLeadStatsSlice = createSlice({
  name: "getLeadStats",
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
  },
});

export const {
  getLeadStats,
  getLeadStatsSuccess,
  getLeadStatsFailure,
} = getLeadStatsSlice.actions;

export default getLeadStatsSlice.reducer;