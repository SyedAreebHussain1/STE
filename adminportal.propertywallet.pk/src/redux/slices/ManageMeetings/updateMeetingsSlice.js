import { createSlice } from '@reduxjs/toolkit'
export const updateMeetingsSlice = createSlice({
  name: 'updateMeetingsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateMeetings: (state) => {
      state.loading = true
    },
    updateMeetingsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateMeetingsFailure: (state, action) => {
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

export const { updateMeetings, updateMeetingsSuccess, updateMeetingsFailure } =
  updateMeetingsSlice.actions

export default updateMeetingsSlice.reducer
