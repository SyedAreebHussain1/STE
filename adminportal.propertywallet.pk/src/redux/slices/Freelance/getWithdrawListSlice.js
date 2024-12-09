import { createSlice } from '@reduxjs/toolkit'

export const getWithdrawListSlice = createSlice({
  name: 'getWithdrawListSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    withdrawList: (state) => {
      state.loading = true
    },
    withdrawListSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    withdrawListFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const { withdrawList, withdrawListSuccess, withdrawListFailure } =
  getWithdrawListSlice.actions

export default getWithdrawListSlice.reducer
