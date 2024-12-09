import { createSlice } from '@reduxjs/toolkit'
export const GetNoOfRegisteredStaffSlice = createSlice({
  name: 'GetNoOfRegisteredStaffSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getNoOfRegisteredStaff: (state) => {
      state.loading = true
    },
    getNoOfRegisteredStaffSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getNoOfRegisteredStaffFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getNoOfRegisteredStaff,
  getNoOfRegisteredStaffSuccess,
  getNoOfRegisteredStaffFailure,
} = GetNoOfRegisteredStaffSlice.actions

export default GetNoOfRegisteredStaffSlice.reducer
