import { createSlice } from '@reduxjs/toolkit'
export const GetRevenueSlice = createSlice({
  name: 'GetRevenueSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getRevenue: (state) => {
      state.loading = true
    },
    getRevenueSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getRevenueFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getRevenue, getRevenueSuccess, getRevenueFailure } =
  GetRevenueSlice.actions

export default GetRevenueSlice.reducer
