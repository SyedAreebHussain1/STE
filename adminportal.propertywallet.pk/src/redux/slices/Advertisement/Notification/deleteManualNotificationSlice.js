import { createSlice } from '@reduxjs/toolkit'
export const deleteManualNotificationSlice = createSlice({
  name: 'deleteManualNotificationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteManualNotification: (state) => {
      state.loading = true
    },
    deleteManualNotificationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteManualNotificationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteManualNotification: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteManualNotification,
  deleteManualNotificationSuccess,
  deleteManualNotificationFailure,
  cleardeleteManualNotification,
} = deleteManualNotificationSlice.actions

export default deleteManualNotificationSlice.reducer
