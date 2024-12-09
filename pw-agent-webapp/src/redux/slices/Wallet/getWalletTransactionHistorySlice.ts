import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getWalletTransactionHistory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getWalletTransactionHistory = {
  data: null,
  loading: false,
  error: null,
};

const getWalletTransactionHistorySlice = createSlice({
  name: "getWalletTransactionHistory",
  initialState,
  reducers: {
    getWalletTransactionHistory(state) {
      state.loading = true;
    },
    getWalletTransactionHistorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getWalletTransactionHistoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getWalletTransactionHistory,
  getWalletTransactionHistorySuccess,
  getWalletTransactionHistoryFailure,
} = getWalletTransactionHistorySlice.actions;

export default getWalletTransactionHistorySlice.reducer;
