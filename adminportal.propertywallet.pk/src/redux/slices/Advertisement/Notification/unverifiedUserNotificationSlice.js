import { createSlice } from '@reduxjs/toolkit'
export const unverifiedUserNotificationSlice = createSlice({
  name: 'unverifiedUserNotificationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    unverifiedUserNotification: (state) => {
      state.loading = true
    },
    unverifiedUserNotificationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    unverifiedUserNotificationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearunverifiedUserNotification: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  unverifiedUserNotification,
  unverifiedUserNotificationSuccess,
  unverifiedUserNotificationFailure,
  clearunverifiedUserNotification,
} = unverifiedUserNotificationSlice.actions

export default unverifiedUserNotificationSlice.reducer
