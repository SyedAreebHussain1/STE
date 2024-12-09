import { createSlice } from '@reduxjs/toolkit'

export const updateDiscountSlice = createSlice({
  name: 'updateDiscountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateDiscount: (state) => {
      state.loading = true
    },
    updateDiscountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    updateDiscountFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const { updateDiscount, updateDiscountSuccess, updateDiscountFailure } =
  updateDiscountSlice.actions

export default updateDiscountSlice.reducer
