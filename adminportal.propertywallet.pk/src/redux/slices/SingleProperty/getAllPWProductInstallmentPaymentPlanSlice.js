import { createSlice } from '@reduxjs/toolkit'
export const getAllPWProductInstallmentPaymentPlanSlice = createSlice({
  name: 'getAllPWProductInstallmentPaymentPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllPWProductInstallmentPaymentPlan: (state) => {
      state.loading = true
    },
    getAllPWProductInstallmentPaymentPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllPWProductInstallmentPaymentPlanFailure: (state, action) => {
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
  getAllPWProductInstallmentPaymentPlan,
  getAllPWProductInstallmentPaymentPlanSuccess,
  getAllPWProductInstallmentPaymentPlanFailure,
} = getAllPWProductInstallmentPaymentPlanSlice.actions

export default getAllPWProductInstallmentPaymentPlanSlice.reducer
