import { createSlice } from '@reduxjs/toolkit'
export const getAllPWInstallmentPaymentPlanSlice = createSlice({
  name: 'getAllPWInstallmentPaymentPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllPWInstallmentPaymentPlan: (state) => {
      state.loading = true
    },
    getAllPWInstallmentPaymentPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllPWInstallmentPaymentPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  getAllPWInstallmentPaymentPlan,
  getAllPWInstallmentPaymentPlanSuccess,
  getAllPWInstallmentPaymentPlanFailure,
} = getAllPWInstallmentPaymentPlanSlice.actions

export default getAllPWInstallmentPaymentPlanSlice.reducer
