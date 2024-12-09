import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPassword {
  loading: boolean;
  error: string | null;
  isSetup: boolean;
}

const initialState: ForgetPassword = {
  loading: false,
  error: null,
  isSetup: false,
};

const forgetPasswordSlice = createSlice({
  name: "forgetPasswordSlice",
  initialState,
  reducers: {
    forgetPassword(state) {
      state.loading = true;
    },
    forgetPasswordSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isSetup = true;
    },
    forgetPasswordFailure(state, action: PayloadAction<any>) {
      state.loading = false;
    },
  },
});

export const { forgetPassword, forgetPasswordSuccess, forgetPasswordFailure } =
  forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
