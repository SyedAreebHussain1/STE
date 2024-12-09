import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getWebEstateAnalytics {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getWebEstateAnalytics = {
  data: null,
  loading: false,
  error: null,
};

const getWebEstateAnalyticsSlice = createSlice({
  name: "getWebEstateAnalytics",
  initialState,
  reducers: {
    getWebEstateAnalytics(state) {
      state.loading = true;
    },
    getWebEstateAnalyticsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getWebEstateAnalyticsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getWebEstateAnalytics,
  getWebEstateAnalyticsSuccess,
  getWebEstateAnalyticsFailure,
} = getWebEstateAnalyticsSlice.actions;

export default getWebEstateAnalyticsSlice.reducer;
