import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface gethoursChart {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: gethoursChart = {
  data: null,
  loading: false,
  error: null,
};

const getHoursChartSlice = createSlice({
  name: "gethoursChart",
  initialState,
  reducers: {
    getHoursChart(state) {
      state.loading = true;
    },
    getHoursChartSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getHoursChartFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getHoursChart, getHoursChartSuccess, getHoursChartFailure } =
  getHoursChartSlice.actions;

export default getHoursChartSlice.reducer;
