import { createSlice } from '@reduxjs/toolkit'
export const getAllVouchersSlice = createSlice({
  name: 'getAllVouchersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllVouchers: (state) => {
      state.loading = true
    },
    getAllVouchersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllVouchersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getAllVouchers, getAllVouchersSuccess, getAllVouchersFailure } =
  getAllVouchersSlice.actions

export default getAllVouchersSlice.reducer
