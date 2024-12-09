import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteProductPromotionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteProductPromotionType = {
  data: null,
  loading: false,
  error: null,
};

const deleteProductPromotionSlice = createSlice({
  name: "deleteProductPromotionSlice",
  initialState,
  reducers: {
    deleteProductPromotion(state) {
      state.loading = true;
    },
    deleteProductPromotionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteProductPromotionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteProductPromotion,
  deleteProductPromotionSuccess,
  deleteProductPromotionFailure,
} = deleteProductPromotionSlice.actions;

export default deleteProductPromotionSlice.reducer;
