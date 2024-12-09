import { createSlice } from '@reduxjs/toolkit'

export const postEloungeManagmentUserWithdrawAmountSlice = createSlice({
  name: 'postEloungeManagmentUserWithdrawAmountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    postEloungeManagmentUserWithdrawAmount: (state) => {
      state.loading = true
    },
    postEloungeManagmentUserWithdrawAmountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    postEloungeManagmentUserWithdrawAmountFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  postEloungeManagmentUserWithdrawAmount,
  postEloungeManagmentUserWithdrawAmountSuccess,
  postEloungeManagmentUserWithdrawAmountFailure,
} = postEloungeManagmentUserWithdrawAmountSlice.actions

export default postEloungeManagmentUserWithdrawAmountSlice.reducer
