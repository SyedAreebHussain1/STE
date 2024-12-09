import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResetPasswordState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ResetPasswordState = {
  data: null,
  loading: false,
  error: null,
};

const ResetPasswordSlice = createSlice({
  name: "ResetPassword",
  initialState,
  reducers: {
    ResetPassword(state) {
      state.loading = true;
    },
    ResetPasswordSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ResetPasswordFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    ResetPasswordUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    ResetPasswordUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  ResetPassword,
  ResetPasswordSuccess,
  ResetPasswordFailure,
  ResetPasswordUserSuccess,
  ResetPasswordUserFailure,
} = ResetPasswordSlice.actions;

export default ResetPasswordSlice.reducer;
