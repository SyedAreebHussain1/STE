import { createSlice } from '@reduxjs/toolkit'

export const AffiliateSignupSlice = createSlice({
  name: 'AffiliateSignupSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AffiliateSignup: (state) => {
      state.loading = true
    },
    AffiliateSignupSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    AffiliateSignupFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  AffiliateSignup,
  AffiliateSignupSuccess,
  AffiliateSignupFailure,
} = AffiliateSignupSlice.actions

export default AffiliateSignupSlice.reducer
