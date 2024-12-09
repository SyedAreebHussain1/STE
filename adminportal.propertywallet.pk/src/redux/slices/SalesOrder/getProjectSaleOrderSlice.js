import { createSlice } from '@reduxjs/toolkit'

export const getProjectSaleOrderSlice = createSlice({
  name: 'getProjectSaleOrderSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectSaleOrder: (state) => {
      state.loading = true
    },
    getProjectSaleOrderSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectSaleOrderFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getProjectSaleOrder,
  getProjectSaleOrderSuccess,
  getProjectSaleOrderFailure,
} = getProjectSaleOrderSlice.actions

export default getProjectSaleOrderSlice.reducer
