import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadStatsForChartType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadStatsForChartType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadStatsForChartSlice = createSlice({
  name: "getLeadStatsForChartSlice",
  initialState,
  reducers: {
    getLeadStatsForChart(state) {
      state.loading = true;
    },
    getLeadStatsForChartSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadStatsForChartFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadStatsForChart(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadStatsForChart,
  getLeadStatsForChartSuccess,
  getLeadStatsForChartFailure,
  clearGetLeadStatsForChart,
} = getLeadStatsForChartSlice.actions;

export default getLeadStatsForChartSlice.reducer;
