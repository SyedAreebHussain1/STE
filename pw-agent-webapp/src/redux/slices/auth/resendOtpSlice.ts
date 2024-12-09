import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface resendOtpType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: resendOtpType = {
  data: null,
  loading: false,
  error: null,
};

const resendOtpSlice = createSlice({
  name: "resendOtpSlice",
  initialState,
  reducers: {
    resendOtp(state) {
      state.loading = true;
    },
    resendOtpSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    resendOtpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { resendOtp, resendOtpSuccess, resendOtpFailure } =
  resendOtpSlice.actions;
export default resendOtpSlice.reducer;
