import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transactionHistory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: transactionHistory = {
  data: null,
  loading: false,
  error: null,
};

const transactionHistorySlice = createSlice({
  name: "transactionHistory",
  initialState,
  reducers: {
    getTransactionHistory(state) {
      state.loading = true;
    },
    getTransactionHistorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTransactionHistoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTransactionHistory, getTransactionHistorySuccess, getTransactionHistoryFailure } =
  transactionHistorySlice.actions;

export default transactionHistorySlice.reducer;
