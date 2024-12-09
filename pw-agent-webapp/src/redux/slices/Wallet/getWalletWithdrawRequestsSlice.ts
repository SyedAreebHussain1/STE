import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getWalletWithdrawRequests {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getWalletWithdrawRequests = {
  data: null,
  loading: false,
  error: null,
};

const getWalletWithdrawRequestsSlice = createSlice({
  name: "getWalletWithdrawRequests",
  initialState,
  reducers: {
    getWalletWithdrawRequests(state) {
      state.loading = true;
    },
    getWalletWithdrawRequestsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getWalletWithdrawRequestsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getWalletWithdrawRequests,
  getWalletWithdrawRequestsSuccess,
  getWalletWithdrawRequestsFailure,
} = getWalletWithdrawRequestsSlice.actions;

export default getWalletWithdrawRequestsSlice.reducer;
