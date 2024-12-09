import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProductPromotionStatsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProductPromotionStatsType = {
  data: null,
  loading: false,
  error: null,
};

const getProductPromotionStatsSlice = createSlice({
  name: "getProductPromotionStats",
  initialState,
  reducers: {
    getProductPromotionStats(state) {
      state.loading = true;
    },
    getProductPromotionStatsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProductPromotionStatsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProductPromotionStats,
  getProductPromotionStatsSuccess,
  getProductPromotionStatsFailure,
} = getProductPromotionStatsSlice.actions;

export default getProductPromotionStatsSlice.reducer;
