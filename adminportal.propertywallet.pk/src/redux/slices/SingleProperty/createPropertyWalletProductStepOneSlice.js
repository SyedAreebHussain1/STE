import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletProductStepOneSlice = createSlice({
  name: 'createPropertyWalletProductStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletProductStepOne: (state) => {
      state.loading = true
    },
    createPropertyWalletProductStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletProductStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreatePropertyWalletProductStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletProductStepOne,
  createPropertyWalletProductStepOneSuccess,
  createPropertyWalletProductStepOneFailure,
  clearCreatePropertyWalletProductStepOne,
} = createPropertyWalletProductStepOneSlice.actions

export default createPropertyWalletProductStepOneSlice.reducer
