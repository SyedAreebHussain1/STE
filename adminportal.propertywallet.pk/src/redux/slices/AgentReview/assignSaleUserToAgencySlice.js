import { createSlice } from '@reduxjs/toolkit'
export const assignSaleUserToAgencySlice = createSlice({
  name: 'assignSaleUserToAgencySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    assignSaleUserToAgency: (state) => {
      state.loading = true
    },
    assignSaleUserToAgencySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    assignSaleUserToAgencyFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearassignSaleUserToAgency: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  assignSaleUserToAgency,
  assignSaleUserToAgencySuccess,
  assignSaleUserToAgencyFailure,
  clearassignSaleUserToAgency,
} = assignSaleUserToAgencySlice.actions

export default assignSaleUserToAgencySlice.reducer
