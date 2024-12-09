import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetWithdrawRequestType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetWithdrawRequestType = {
  data: null,
  loading: false,
  error: null,
};

const getWithdrawRequestSlice = createSlice({
  name: "getWithdrawRequestSlice",
  initialState,
  reducers: {
    getWithdrawRequest(state) {
      state.loading = true;
    },
    getWithdrawRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getWithdrawRequestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getWithdrawRequest,
  getWithdrawRequestSuccess,
  getWithdrawRequestFailure,
} = getWithdrawRequestSlice.actions;

export default getWithdrawRequestSlice.reducer;
