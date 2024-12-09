import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProductStep3CashPlanSlice = createSlice({
  name: 'updatePropertyWalletProductStep3CashPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProductStep3CashPlan: (state) => {
      state.loading = true
    },
    updatePropertyWalletProductStep3CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProductStep3CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdatePropertyWalletProductStep3CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletProductStep3CashPlan,
  updatePropertyWalletProductStep3CashPlanSuccess,
  updatePropertyWalletProductStep3CashPlanFailure,
  clearUpdatePropertyWalletProductStep3CashPlan,
} = updatePropertyWalletProductStep3CashPlanSlice.actions

export default updatePropertyWalletProductStep3CashPlanSlice.reducer
