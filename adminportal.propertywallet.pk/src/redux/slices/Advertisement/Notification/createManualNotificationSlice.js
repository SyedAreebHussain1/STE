import { createSlice } from '@reduxjs/toolkit'
export const createManualNotificationSlice = createSlice({
  name: 'createManualNotificationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createManualNotification: (state) => {
      state.loading = true
    },
    createManualNotificationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createManualNotificationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateManualNotification: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createManualNotification,
  createManualNotificationSuccess,
  createManualNotificationFailure,
  clearcreateManualNotification,
} = createManualNotificationSlice.actions

export default createManualNotificationSlice.reducer
