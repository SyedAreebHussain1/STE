import { createSlice } from '@reduxjs/toolkit'
export const meetingSlotSlice = createSlice({
  name: 'meetingSlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    meetingSlot: (state) => {
      state.loading = true
    },
    meetingSlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    meetingSlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  meetingSlot,
  meetingSlotSuccess,
  meetingSlotFailure,
  clearmeetingSlot,
} = meetingSlotSlice.actions

export default meetingSlotSlice.reducer
