import { createSlice } from '@reduxjs/toolkit'

export const getEloungeManagmentUserWithdrawListSlice = createSlice({
  name: 'getEloungeManagmentUserWithdrawListSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getEloungeManagmentUserWithdrawList: (state) => {
      state.loading = true
    },
    getEloungeManagmentUserWithdrawListSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getEloungeManagmentUserWithdrawListFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  getEloungeManagmentUserWithdrawList,
  getEloungeManagmentUserWithdrawListSuccess,
  getEloungeManagmentUserWithdrawListFailure,
} = getEloungeManagmentUserWithdrawListSlice.actions

export default getEloungeManagmentUserWithdrawListSlice.reducer
