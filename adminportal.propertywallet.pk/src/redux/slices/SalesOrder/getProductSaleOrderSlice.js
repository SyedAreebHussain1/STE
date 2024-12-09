import { createSlice } from '@reduxjs/toolkit'

export const getProductSaleOrderSlice = createSlice({
  name: 'getProductSaleOrderSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProductSaleOrder: (state) => {
      state.loading = true
    },
    getProductSaleOrderSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProductSaleOrderFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getProductSaleOrder,
  getProductSaleOrderSuccess,
  getProductSaleOrderFailure,
} = getProductSaleOrderSlice.actions

export default getProductSaleOrderSlice.reducer
