import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletProductStep3CashPlanSlice = createSlice({
  name: 'createPropertyWalletProductStep3CashPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletProductStep3CashPlan: (state) => {
      state.loading = true
    },
    createPropertyWalletProductStep3CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletProductStep3CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreatePropertyWalletProductStep3CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletProductStep3CashPlan,
  createPropertyWalletProductStep3CashPlanSuccess,
  createPropertyWalletProductStep3CashPlanFailure,
  clearCreatePropertyWalletProductStep3CashPlan,
  // clearCreatePropertyWalletProductStepThree,
} = createPropertyWalletProductStep3CashPlanSlice.actions

export default createPropertyWalletProductStep3CashPlanSlice.reducer
