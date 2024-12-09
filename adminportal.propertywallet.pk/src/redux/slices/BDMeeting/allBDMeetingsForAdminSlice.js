import { createSlice } from '@reduxjs/toolkit'
export const allBDMeetingsForAdminSlice = createSlice({
  name: 'allBDMeetingsForAdminSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    allBDMeetingsForAdmin: (state) => {
      state.loading = true
    },
    allBDMeetingsForAdminSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    allBDMeetingsForAdminFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearAllBDMeetingsForAdmin: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  allBDMeetingsForAdmin,
  allBDMeetingsForAdminSuccess,
  allBDMeetingsForAdminFailure,
} = allBDMeetingsForAdminSlice.actions

export default allBDMeetingsForAdminSlice.reducer
