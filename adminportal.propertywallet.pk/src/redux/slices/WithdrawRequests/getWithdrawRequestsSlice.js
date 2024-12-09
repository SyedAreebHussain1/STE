import { createSlice } from '@reduxjs/toolkit'
export const getWithdrawRequestsSlice = createSlice({
  name: 'getWithdrawRequestsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getWithdrawRequests: (state) => {
      state.loading = true
    },
    getWithdrawRequestsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getWithdrawRequestsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetWithdrawRequests: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getWithdrawRequests,
  getWithdrawRequestsFailure,
  getWithdrawRequestsSuccess,
  cleargetWithdrawRequests,
} = getWithdrawRequestsSlice.actions

export default getWithdrawRequestsSlice.reducer
