import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface paymentByBlinq {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: paymentByBlinq = {
  data: null,
  loading: false,
  error: null,
};

const paymentByBlinqSlice = createSlice({
  name: "paymentByBlinq",
  initialState,
  reducers: {
    paymentByBlinq(state) {
      state.loading = true;
    },
    paymentByBlinqSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    paymentByBlinqFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { paymentByBlinq, paymentByBlinqSuccess, paymentByBlinqFailure } =
  paymentByBlinqSlice.actions;

export default paymentByBlinqSlice.reducer;
