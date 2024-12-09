import { createSlice } from '@reduxjs/toolkit'

export const ApproveOrRejectSlice = createSlice({
  name: 'ApproveOrRejectSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    ApproveOrReject: (state) => {
      state.loading = true
    },
    ApproveOrRejectSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    ApproveOrRejectFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  ApproveOrReject,
  ApproveOrRejectSuccess,
  ApproveOrRejectFailure,
} = ApproveOrRejectSlice.actions

export default ApproveOrRejectSlice.reducer
