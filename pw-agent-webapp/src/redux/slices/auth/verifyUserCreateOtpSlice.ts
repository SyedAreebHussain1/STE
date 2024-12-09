import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface verifyUserCreateOtpType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: verifyUserCreateOtpType = {
  data: null,
  loading: false,
  error: null,
};

const verifyUserCreateOtpSlice = createSlice({
  name: "verifyUserCreateOtpSlice",
  initialState,
  reducers: {
    verifyUserCreateOtp(state) {
      state.loading = true;
    },
    verifyUserCreateOtpSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    verifyUserCreateOtpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  verifyUserCreateOtp,
  verifyUserCreateOtpSuccess,
  verifyUserCreateOtpFailure,
} = verifyUserCreateOtpSlice.actions;
export default verifyUserCreateOtpSlice.reducer;
