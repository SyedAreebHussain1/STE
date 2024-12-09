import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface couponsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: couponsType = {
  data: null,
  loading: false,
  error: null,
};

const couponsSlice = createSlice({
  name: "couponsSlice",
  initialState,
  reducers: {
    coupons(state) {
      state.loading = true;
    },
    couponsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    couponsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getCoupon(state) {
      state.loading = true;
    },
    getCouponSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCouponFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteCoupon(state) {
      state.loading = true;
    },
    deleteCouponSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteCouponFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { coupons, couponsSuccess, couponsFailure, getCoupon, getCouponFailure, getCouponSuccess, deleteCoupon, deleteCouponFailure, deleteCouponSuccess } =
  couponsSlice.actions;

export default couponsSlice.reducer;
