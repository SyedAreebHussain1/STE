import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateProductPromotionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateProductPromotionType = {
  data: null,
  loading: false,
  error: null,
};

const updateProductPromotionSlice = createSlice({
  name: "updateProductPromotionSlice",
  initialState,
  reducers: {
    updateProductPromotion(state) {
      state.loading = true;
    },
    updateProductPromotionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateProductPromotionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateProductPromotion,
  updateProductPromotionSuccess,
  updateProductPromotionFailure,
} = updateProductPromotionSlice.actions;

export default updateProductPromotionSlice.reducer;
