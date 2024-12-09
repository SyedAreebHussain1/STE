import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiscountType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DiscountType = {
  data: null,
  loading: false,
  error: null,
};

const discountSlice = createSlice({
  name: "discountSlice",
  initialState,
  reducers: {
    discount(state) {
      state.loading = true;
    },
    discountSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    discountFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearDiscount(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { discount, discountSuccess, discountFailure, clearDiscount } =
  discountSlice.actions;

export default discountSlice.reducer;
