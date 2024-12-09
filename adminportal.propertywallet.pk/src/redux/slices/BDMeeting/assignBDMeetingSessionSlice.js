import { createSlice } from '@reduxjs/toolkit'

export const assignBDMeetingSessionSlice = createSlice({
  name: 'assignBDMeetingSessionSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    assignBDMeetingSession: (state) => {
      state.loading = true
    },
    assignBDMeetingSessionSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    assignBDMeetingSessionFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  assignBDMeetingSession,
  assignBDMeetingSessionSuccess,
  assignBDMeetingSessionFailure,
} = assignBDMeetingSessionSlice.actions

export default assignBDMeetingSessionSlice.reducer
