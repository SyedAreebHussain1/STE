import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface paymentByPayMob {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: paymentByPayMob = {
  data: null,
  loading: false,
  error: null,
};

const paymentByPayMobSlice = createSlice({
  name: "paymentByPayMob",
  initialState,
  reducers: {
    paymentByPayMob(state) {
      state.loading = true;
    },
    paymentByPayMobSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    paymentByPayMobFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  paymentByPayMob,
  paymentByPayMobSuccess,
  paymentByPayMobFailure,
} = paymentByPayMobSlice.actions;

export default paymentByPayMobSlice.reducer;
