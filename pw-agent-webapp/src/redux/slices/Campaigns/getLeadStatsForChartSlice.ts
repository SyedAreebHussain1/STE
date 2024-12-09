import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadStatsForChart {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadStatsForChart = {
  data: null,
  loading: false,
  error: null,
};

const getLeadStatsForChartSlice = createSlice({
  name: "getLeadStatsForChart",
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
  },
});

export const {
  getLeadStatsForChart,
  getLeadStatsForChartSuccess,
  getLeadStatsForChartFailure,
} = getLeadStatsForChartSlice.actions;

export default getLeadStatsForChartSlice.reducer;