import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetPaymentMethod {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetPaymentMethod = {
  data: null,
  loading: false,
  error: null,
};

const GetPaymentMethodSlice = createSlice({
  name: "GetPaymentMethod",
  initialState,
  reducers: {
    GetPaymentMethod(state) {
      state.loading = true;
    },
    GetPaymentMethodSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    GetPaymentMethodFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  GetPaymentMethod,
  GetPaymentMethodSuccess,
  GetPaymentMethodFailure,
} = GetPaymentMethodSlice.actions;

export default GetPaymentMethodSlice.reducer;
