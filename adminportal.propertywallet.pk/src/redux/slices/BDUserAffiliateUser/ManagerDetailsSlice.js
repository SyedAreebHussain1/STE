import { createSlice } from '@reduxjs/toolkit'

export const ManagerDetailsSlice = createSlice({
  name: 'ManagerDetailsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    ManagerDetails: (state) => {
      state.loading = true
    },
    ManagerDetailsSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    ManagerDetailsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { ManagerDetails, ManagerDetailsSuccess, ManagerDetailsFailure } =
  ManagerDetailsSlice.actions

export default ManagerDetailsSlice.reducer
