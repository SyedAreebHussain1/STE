import { createSlice } from '@reduxjs/toolkit'

export const postELWithdrawAmountSlice = createSlice({
  name: 'postELWithdrawAmountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    postELWithdrawAmount: (state) => {
      state.loading = true
    },
    postELWithdrawAmountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    postELWithdrawAmountFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  postELWithdrawAmount,
  postELWithdrawAmountSuccess,
  postELWithdrawAmountFailure,
} = postELWithdrawAmountSlice.actions

export default postELWithdrawAmountSlice.reducer
