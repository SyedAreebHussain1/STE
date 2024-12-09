import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForgetPasswordEmail {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ForgetPasswordEmail = {
  data: null,
  loading: false,
  error: null,
};

const ForgetPasswordEmailSlice = createSlice({
  name: "ForgetPasswordEmail",
  initialState,
  reducers: {
    ForgetPasswordEmail(state) {
      state.loading = true;
    },
    ForgetPasswordEmailSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ForgetPasswordEmailFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  ForgetPasswordEmail,
  ForgetPasswordEmailSuccess,
  ForgetPasswordEmailFailure,
} = ForgetPasswordEmailSlice.actions;

export default ForgetPasswordEmailSlice.reducer;
