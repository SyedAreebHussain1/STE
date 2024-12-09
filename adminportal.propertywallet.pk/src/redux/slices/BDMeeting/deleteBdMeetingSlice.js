import { createSlice } from '@reduxjs/toolkit'
export const deleteBdMeetingSlice = createSlice({
  name: 'deleteBdMeetingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteBdMeeting: (state) => {
      state.loading = true
    },
    deleteBdMeetingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteBdMeetingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearDeleteBdMeeting: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteBdMeeting,
  deleteBdMeetingSuccess,
  deleteBdMeetingFailure,
} = deleteBdMeetingSlice.actions

export default deleteBdMeetingSlice.reducer
