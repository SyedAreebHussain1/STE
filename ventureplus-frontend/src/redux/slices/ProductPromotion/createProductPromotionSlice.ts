import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createProductPromotionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createProductPromotionType = {
  data: null,
  loading: false,
  error: null,
};

const createProductPromotionSlice = createSlice({
  name: "createProductPromotionSlice",
  initialState,
  reducers: {
    createProductPromotion(state) {
      state.loading = true;
    },
    createProductPromotionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createProductPromotionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createProductPromotion,
  createProductPromotionSuccess,
  createProductPromotionFailure,
} = createProductPromotionSlice.actions;

export default createProductPromotionSlice.reducer;
