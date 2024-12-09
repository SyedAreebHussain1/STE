import { createSlice } from '@reduxjs/toolkit'

export const getAllCommissionRequestSlice = createSlice({
  name: 'getAllCommissionRequestSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllCommissionRequest: (state) => {
      state.loading = true
    },
    getAllCommissionRequestSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getAllCommissionRequestFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllCommissionRequest,
  getAllCommissionRequestSuccess,
  getAllCommissionRequestFailure,
} = getAllCommissionRequestSlice.actions

export default getAllCommissionRequestSlice.reducer
