import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletInstallmentTokenSlice = createSlice({
  name: 'createPropertyWalletInstallmentTokenSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletInstallmentToken: (state) => {
      state.loading = true
    },
    createPropertyWalletInstallmentTokenSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletInstallmentTokenFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreatePropertyWalletInstallmentToken: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletInstallmentToken,
  createPropertyWalletInstallmentTokenSuccess,
  createPropertyWalletInstallmentTokenFailure,
  clearcreatePropertyWalletInstallmentToken,
} = createPropertyWalletInstallmentTokenSlice.actions

export default createPropertyWalletInstallmentTokenSlice.reducer
