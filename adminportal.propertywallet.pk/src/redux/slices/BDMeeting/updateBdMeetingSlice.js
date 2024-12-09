import { createSlice } from '@reduxjs/toolkit'
export const updateBdMeetingSlice = createSlice({
  name: 'updateBdMeetingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateBdMeeting: (state) => {
      state.loading = true
    },
    updateBdMeetingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateBdMeetingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateBdMeeting: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateBdMeeting,
  updateBdMeetingSuccess,
  updateBdMeetingFailure,
} = updateBdMeetingSlice.actions

export default updateBdMeetingSlice.reducer
