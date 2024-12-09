import { createSlice } from '@reduxjs/toolkit'
export const GetTotalSaleOrderSlice = createSlice({
  name: 'GetTotalSaleOrderSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getTotalSaleOrder: (state) => {
      state.loading = true
    },
    getTotalSaleOrderSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getTotalSaleOrderFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getTotalSaleOrder,
  getTotalSaleOrderSuccess,
  getTotalSaleOrderFailure,
} = GetTotalSaleOrderSlice.actions

export default GetTotalSaleOrderSlice.reducer
