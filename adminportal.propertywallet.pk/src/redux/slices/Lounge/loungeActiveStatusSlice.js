import { createSlice } from '@reduxjs/toolkit'
export const loungeActiveStatusSlice = createSlice({
  name: 'loungeActiveStatusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    loungeActiveStatus: (state) => {
      state.loading = true
    },
    loungeActiveStatusSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    loungeActiveStatusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearLoungeActiveStatus: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  loungeActiveStatus,
  loungeActiveStatusSuccess,
  loungeActiveStatusFailure,
  clearLoungeActiveStatus,
} = loungeActiveStatusSlice.actions

export default loungeActiveStatusSlice.reducer
