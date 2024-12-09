import { createSlice } from '@reduxjs/toolkit'

export const getAllDiscountsSlice = createSlice({
  name: 'getAllDiscountsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllDiscounts: (state) => {
      state.loading = true
    },
    getAllDiscountsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getAllDiscountsFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  getAllDiscounts,
  getAllDiscountsSuccess,
  getAllDiscountsFailure,
} = getAllDiscountsSlice.actions

export default getAllDiscountsSlice.reducer
