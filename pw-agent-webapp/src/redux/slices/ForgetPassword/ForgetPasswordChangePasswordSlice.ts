import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPasswordChangePassword {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ForgetPasswordChangePassword = {
  data: null,
  loading: false,
  error: null,
};

const ForgetPasswordChangePasswordSlice = createSlice({
  name: "ForgetPasswordChangePassword",
  initialState,
  reducers: {
    ForgetPasswordChangePassword(state) {
      state.loading = true;
    },
    ForgetPasswordChangePasswordSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ForgetPasswordChangePasswordFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  ForgetPasswordChangePassword,
  ForgetPasswordChangePasswordSuccess,
  ForgetPasswordChangePasswordFailure,
} = ForgetPasswordChangePasswordSlice.actions;

export default ForgetPasswordChangePasswordSlice.reducer;
