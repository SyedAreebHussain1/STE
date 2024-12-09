import { createSlice } from '@reduxjs/toolkit'
export const updateWithdrawRequestsSlice = createSlice({
  name: 'updateWithdrawRequestsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateWithdrawRequests: (state) => {
      state.loading = true
    },
    updateWithdrawRequestsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateWithdrawRequestsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateWithdrawRequests: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateWithdrawRequests,
  updateWithdrawRequestsFailure,
  updateWithdrawRequestsSuccess,
  clearupdateWithdrawRequests,
} = updateWithdrawRequestsSlice.actions

export default updateWithdrawRequestsSlice.reducer
