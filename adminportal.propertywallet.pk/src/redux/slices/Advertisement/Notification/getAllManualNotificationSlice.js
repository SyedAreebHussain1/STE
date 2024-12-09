import { createSlice } from '@reduxjs/toolkit'
export const getAllManualNotificationSlice = createSlice({
  name: 'getAllManualNotificationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllManualNotification: (state) => {
      state.loading = true
    },
    getAllManualNotificationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllManualNotificationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllManualNotification: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllManualNotification,
  getAllManualNotificationSuccess,
  getAllManualNotificationFailure,
  cleargetAllManualNotification,
} = getAllManualNotificationSlice.actions

export default getAllManualNotificationSlice.reducer
