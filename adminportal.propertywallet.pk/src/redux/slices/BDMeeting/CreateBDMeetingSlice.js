import { createSlice } from '@reduxjs/toolkit'

export const CreateBDMeetingSlice = createSlice({
  name: 'CreateBDMeetingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    CreateBDMeeting: (state) => {
      state.loading = true
    },
    CreateBDMeetingSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    CreateBDMeetingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  CreateBDMeeting,
  CreateBDMeetingSuccess,
  CreateBDMeetingFailure,
} = CreateBDMeetingSlice.actions

export default CreateBDMeetingSlice.reducer
