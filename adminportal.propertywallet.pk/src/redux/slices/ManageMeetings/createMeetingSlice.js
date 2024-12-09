import { createSlice } from '@reduxjs/toolkit'
export const createMeetingSlice = createSlice({
  name: 'createMeetingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createMeeting: (state) => {
      state.loading = true
    },
    createMeetingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createMeetingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const { createMeeting, createMeetingSuccess, createMeetingFailure } =
  createMeetingSlice.actions

export default createMeetingSlice.reducer
