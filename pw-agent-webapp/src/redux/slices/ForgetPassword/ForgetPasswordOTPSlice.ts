import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPasswordOTP {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ForgetPasswordOTP = {
  data: null,
  loading: false,
  error: null,
};

const ForgetPasswordOTPSlice = createSlice({
  name: "ForgetPasswordOTP",
  initialState,
  reducers: {
    ForgetPasswordOTP(state) {
      state.loading = true;
    },
    ForgetPasswordOTPSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ForgetPasswordOTPFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  ForgetPasswordOTP,
  ForgetPasswordOTPSuccess,
  ForgetPasswordOTPFailure,
} = ForgetPasswordOTPSlice.actions;

export default ForgetPasswordOTPSlice.reducer;
