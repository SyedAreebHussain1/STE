import { createSlice } from '@reduxjs/toolkit'
export const deleteMeetingSlice = createSlice({
  name: 'deleteMeetingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteMeeting: (state) => {
      state.loading = true
    },
    deleteMeetingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteMeetingFailure: (state, action) => {
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

export const { deleteMeeting, deleteMeetingSuccess, deleteMeetingFailure } =
  deleteMeetingSlice.actions

export default deleteMeetingSlice.reducer
