import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RequestApprovalForWalletType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: RequestApprovalForWalletType = {
  data: null,
  loading: false,
  error: null,
};

const requestApprovalForWalletSlice = createSlice({
  name: "requestApprovalForWalletSlice",
  initialState,
  reducers: {
    requestApprovalForWallet(state) {
      state.loading = true;
    },
    requestApprovalForWalletSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    requestApprovalForWalletFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  requestApprovalForWallet,
  requestApprovalForWalletSuccess,
  requestApprovalForWalletFailure,
} = requestApprovalForWalletSlice.actions;

export default requestApprovalForWalletSlice.reducer;
