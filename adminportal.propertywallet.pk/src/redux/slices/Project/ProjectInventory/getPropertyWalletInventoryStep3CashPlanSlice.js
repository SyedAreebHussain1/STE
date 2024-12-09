import { createSlice } from '@reduxjs/toolkit'
export const getPropertyWalletInventoryStep3CashPlanSlice = createSlice({
  name: 'getPropertyWalletInventoryStep3CashPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getPropertyWalletInventoryStep3CashPlan: (state) => {
      state.loading = true
    },
    getPropertyWalletInventoryStep3CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getPropertyWalletInventoryStep3CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetPropertyWalletInventoryStep3CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getPropertyWalletInventoryStep3CashPlan,
  getPropertyWalletInventoryStep3CashPlanSuccess,
  getPropertyWalletInventoryStep3CashPlanFailure,
  cleargetPropertyWalletInventoryStep3CashPlan,
} = getPropertyWalletInventoryStep3CashPlanSlice.actions

export default getPropertyWalletInventoryStep3CashPlanSlice.reducer
