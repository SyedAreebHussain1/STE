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
    //login
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

    signOut(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
    },
    //signup
    signUp(state) {
      state.loading = true;
    },
    signUpSuccess(state, action: PayloadAction<any>) {
      state.isAuth = true;
      state.userData = action.payload;
      state.loading = false;
      state.isSetup = false;
    },
    signUpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
      state.error = action.payload;
      state.isSetup = false;
    },
    isSetupTrue(state, action: PayloadAction<any>) {
      state.isSetup = action.payload || false;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  signOut,
  signUp,
  signUpSuccess,
  signUpFailure,
  isSetupTrue,
} = authSlice.actions;

export default authSlice.reducer;
