import { createSlice } from '@reduxjs/toolkit'

export const createBDMeetingSessionSlice = createSlice({
  name: 'createBDMeetingSessionSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createBDMeetingSession: (state) => {
      state.loading = true
    },
    createBDMeetingSessionSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    createBDMeetingSessionFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  createBDMeetingSession,
  createBDMeetingSessionSuccess,
  createBDMeetingSessionFailure,
} = createBDMeetingSessionSlice.actions

export default createBDMeetingSessionSlice.reducer
