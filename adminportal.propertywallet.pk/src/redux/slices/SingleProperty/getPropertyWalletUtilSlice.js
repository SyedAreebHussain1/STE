import { createSlice } from '@reduxjs/toolkit'
export const getPropertyWalletUtilSlice = createSlice({
  name: 'getPropertyWalletUtilSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getPropertyWalletUtil: (state) => {
      state.loading = true
    },
    getPropertyWalletUtilSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getPropertyWalletUtilFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetPropertyWalletUtil: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getPropertyWalletUtil,
  getPropertyWalletUtilSuccess,
  getPropertyWalletUtilFailure,
  cleargetPropertyWalletUtil,
} = getPropertyWalletUtilSlice.actions

export default getPropertyWalletUtilSlice.reducer
