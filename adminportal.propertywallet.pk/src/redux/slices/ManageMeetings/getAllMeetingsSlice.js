import { createSlice } from '@reduxjs/toolkit'
export const getAllMeetingsSlice = createSlice({
  name: 'getAllMeetingsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllMeetings: (state) => {
      state.loading = true
    },
    getAllMeetingsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllMeetingsFailure: (state, action) => {
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

export const { getAllMeetings, getAllMeetingsSuccess, getAllMeetingsFailure } =
  getAllMeetingsSlice.actions

export default getAllMeetingsSlice.reducer
