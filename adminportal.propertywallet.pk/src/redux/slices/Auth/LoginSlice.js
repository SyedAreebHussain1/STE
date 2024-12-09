import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'LoginSlice', //it doen't matter which name you are defining here
  initialState: {
    userData: null,
    isAuth: false,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.isAuth = true
      state.userData = action.payload
      state.loading = false
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.isAuth = false
      state.userData = null
      state.error = action.payload
    },
  },
})

export const { login, loginSuccess, loginFailure } = LoginSlice.actions

export default LoginSlice.reducer
