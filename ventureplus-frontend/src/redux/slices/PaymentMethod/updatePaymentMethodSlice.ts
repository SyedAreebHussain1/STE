import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updatePaymentMethod {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updatePaymentMethod = {
  data: null,
  loading: false,
  error: null,
};

const updatePaymentMethodSlice = createSlice({
  name: "updatePaymentMethod",
  initialState,
  reducers: {
    updatePaymentMethod(state) {
      state.loading = true;
    },
    updatePaymentMethodSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updatePaymentMethodFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updatePaymentMethod,
  updatePaymentMethodSuccess,
  updatePaymentMethodFailure,
} = updatePaymentMethodSlice.actions;

export default updatePaymentMethodSlice.reducer;
