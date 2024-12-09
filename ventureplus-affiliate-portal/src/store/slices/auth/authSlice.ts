import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userData: any;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
  isSetup: boolean;
}

const initialState: AuthState = {
  userData: null,
  isAuth: false,
  loading: false,
  error: null,
  isSetup: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.isAuth = true;
      state.userData = action.payload;
      state.loading = false;
      state.isSetup = true;
    },
    loginFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
      state.error = action.payload;
    },
  },
});

export const { login, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
