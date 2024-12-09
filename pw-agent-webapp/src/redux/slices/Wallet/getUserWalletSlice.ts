import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUserWallet {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUserWallet = {
  data: null,
  loading: false,
  error: null,
};

const getUserWalletSlice = createSlice({
  name: "getUserWallet",
  initialState,
  reducers: {
    getUserWallet(state) {
      state.loading = true;
    },
    getUserWalletSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUserWalletFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getUserWallet, getUserWalletSuccess, getUserWalletFailure } =
  getUserWalletSlice.actions;

export default getUserWalletSlice.reducer;
