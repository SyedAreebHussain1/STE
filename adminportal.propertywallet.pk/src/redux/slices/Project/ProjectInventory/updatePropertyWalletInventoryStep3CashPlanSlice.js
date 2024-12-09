import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletInventoryStep3CashPlanSlice = createSlice({
  name: 'updatePropertyWalletInventoryStep3CashPlanoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletInventoryStep3CashPlan: (state) => {
      state.loading = true
    },
    updatePropertyWalletInventoryStep3CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletInventoryStep3CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletInventoryStep3CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletInventoryStep3CashPlan,
  updatePropertyWalletInventoryStep3CashPlanSuccess,
  updatePropertyWalletInventoryStep3CashPlanFailure,
  clearupdatePropertyWalletInventoryStep3CashPlan,
} = updatePropertyWalletInventoryStep3CashPlanSlice.actions

export default updatePropertyWalletInventoryStep3CashPlanSlice.reducer
