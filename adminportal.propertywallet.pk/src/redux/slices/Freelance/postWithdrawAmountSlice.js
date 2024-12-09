import { createSlice } from '@reduxjs/toolkit'

export const postWithdrawAmountSlice = createSlice({
  name: 'postWithdrawAmountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    withdrawAmount: (state) => {
      state.loading = true
    },
    withdrawAmountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    withdrawAmountFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const { withdrawAmount, withdrawAmountSuccess, withdrawAmountFailure } =
  postWithdrawAmountSlice.actions

export default postWithdrawAmountSlice.reducer
