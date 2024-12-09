import { createSlice } from '@reduxjs/toolkit'
export const getAllBDMeetingSessionByBDMeetingIdSlice = createSlice({
  name: 'getAllBDMeetingSessionByBDMeetingIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllBDMeetingSessionByBDMeetingId: (state) => {
      state.loading = true
    },
    getAllBDMeetingSessionByBDMeetingIdSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllBDMeetingSessionByBDMeetingIdFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllBDMeetingSessionByBDMeetingId: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllBDMeetingSessionByBDMeetingId,
  getAllBDMeetingSessionByBDMeetingIdSuccess,
  getAllBDMeetingSessionByBDMeetingIdFailure,
} = getAllBDMeetingSessionByBDMeetingIdSlice.actions

export default getAllBDMeetingSessionByBDMeetingIdSlice.reducer
