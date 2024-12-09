import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CheckoutType = {
  data: null,
  loading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    checkout(state) {
      state.loading = true;
    },
    checkoutSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    checkoutFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCheckout(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { checkout, checkoutSuccess, checkoutFailure, clearCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
