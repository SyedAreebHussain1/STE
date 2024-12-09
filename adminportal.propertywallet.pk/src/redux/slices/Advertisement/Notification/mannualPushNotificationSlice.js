import { createSlice } from '@reduxjs/toolkit'
export const mannualPushNotificationSlice = createSlice({
  name: 'mannualPushNotificationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    mannualPushNotification: (state) => {
      state.loading = true
    },
    mannualPushNotificationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    mannualPushNotificationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearmannualPushNotification: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  mannualPushNotification,
  mannualPushNotificationSuccess,
  mannualPushNotificationFailure,
  clearmannualPushNotification,
} = mannualPushNotificationSlice.actions

export default mannualPushNotificationSlice.reducer
