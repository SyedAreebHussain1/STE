import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userData: any;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userData: null,
  isAuth: false,
  loading: false,
  error: null,
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
    },
    loginFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
      state.error = action.payload;
    },

    signOut(state) {
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
    },
    signUpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
      state.error = action.payload;
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
} = authSlice.actions;

export default authSlice.reducer;
