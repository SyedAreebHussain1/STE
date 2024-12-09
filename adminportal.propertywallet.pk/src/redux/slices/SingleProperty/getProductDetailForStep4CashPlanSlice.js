import { createSlice } from '@reduxjs/toolkit'
export const getProductDetailForStep4CashPlanSlice = createSlice({
  name: 'getProductDetailForStep4CashPlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProductDetailForStep4CashPlan: (state) => {
      state.loading = true
    },
    getProductDetailForStep4CashPlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProductDetailForStep4CashPlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetProductDetailForStep4CashPlan: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProductDetailForStep4CashPlan,
  getProductDetailForStep4CashPlanSuccess,
  getProductDetailForStep4CashPlanFailure,
  clearGetProductDetailForStep4CashPlan,
} = getProductDetailForStep4CashPlanSlice.actions

export default getProductDetailForStep4CashPlanSlice.reducer
