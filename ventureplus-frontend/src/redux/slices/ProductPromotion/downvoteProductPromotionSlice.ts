import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface downvoteProductPromotionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: downvoteProductPromotionType = {
  data: null,
  loading: false,
  error: null,
};

const downvoteProductPromotionSlice = createSlice({
  name: "downvoteProductPromotionSlice",
  initialState,
  reducers: {
    downvoteProductPromotion(state) {
      state.loading = true;
    },
    downvoteProductPromotionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    downvoteProductPromotionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  downvoteProductPromotion,
  downvoteProductPromotionSuccess,
  downvoteProductPromotionFailure,
} = downvoteProductPromotionSlice.actions;

export default downvoteProductPromotionSlice.reducer;
