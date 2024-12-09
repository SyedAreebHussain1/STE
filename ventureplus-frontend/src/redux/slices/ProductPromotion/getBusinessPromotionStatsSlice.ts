import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessPromotionStatsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessPromotionStatsType = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessPromotionStatsSlice = createSlice({
  name: "getBusinessPromotionStats",
  initialState,
  reducers: {
    getBusinessPromotionStats(state) {
      state.loading = true;
    },
    getBusinessPromotionStatsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessPromotionStatsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessPromotionStats,
  getBusinessPromotionStatsSuccess,
  getBusinessPromotionStatsFailure,
} = getBusinessPromotionStatsSlice.actions;

export default getBusinessPromotionStatsSlice.reducer;
