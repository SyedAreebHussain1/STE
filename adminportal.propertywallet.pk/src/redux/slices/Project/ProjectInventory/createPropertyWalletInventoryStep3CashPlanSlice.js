import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletInventoryStep3CashPlanSlice = createSlice({
  name: 'createPropertyWalletInventoryStep3CashPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletInventoryStep3CashPlan: (state) => {
      state.loading = true
    },
    createPropertyWalletInventoryStep3CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletInventoryStep3CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreatePropertyWalletInventoryStep3CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletInventoryStep3CashPlan,
  createPropertyWalletInventoryStep3CashPlanSuccess,
  createPropertyWalletInventoryStep3CashPlanFailure,
  clearCreatePropertyWalletInventoryStep3CashPlan,
} = createPropertyWalletInventoryStep3CashPlanSlice.actions

export default createPropertyWalletInventoryStep3CashPlanSlice.reducer
