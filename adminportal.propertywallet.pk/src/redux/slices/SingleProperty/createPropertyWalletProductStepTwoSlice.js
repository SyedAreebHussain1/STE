import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletProductStepTwoSlice = createSlice({
  name: 'createPropertyWalletProductStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletProductStepTwo: (state) => {
      state.loading = true
    },
    createPropertyWalletProductStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletProductStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreatePropertyWalletProductStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletProductStepTwo,
  createPropertyWalletProductStepTwoSuccess,
  createPropertyWalletProductStepTwoFailure,
  clearcreatePropertyWalletProductStepTwo,
} = createPropertyWalletProductStepTwoSlice.actions

export default createPropertyWalletProductStepTwoSlice.reducer
