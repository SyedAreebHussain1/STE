import { createSlice } from '@reduxjs/toolkit'

export const deleteDiscountSlice = createSlice({
  name: 'deleteDiscountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteDiscount: (state) => {
      state.loading = true
    },
    deleteDiscountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    deleteDiscountFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const { deleteDiscount, deleteDiscountSuccess, deleteDiscountFailure } =
  deleteDiscountSlice.actions

export default deleteDiscountSlice.reducer
