import { createSlice } from '@reduxjs/toolkit'
export const mannualPushNotificationUnsiginUpSlice = createSlice({
  name: 'mannualPushNotificationUnsiginUpSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    mannualPushNotificationUnsiginUp: (state) => {
      state.loading = true
    },
    mannualPushNotificationUnsiginUpSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    mannualPushNotificationUnsiginUpFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearmannualPushNotificationUnsiginUp: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  mannualPushNotificationUnsiginUp,
  mannualPushNotificationUnsiginUpSuccess,
  mannualPushNotificationUnsiginUpFailure,
  clearmannualPushNotificationUnsiginUp,
} = mannualPushNotificationUnsiginUpSlice.actions

export default mannualPushNotificationUnsiginUpSlice.reducer
