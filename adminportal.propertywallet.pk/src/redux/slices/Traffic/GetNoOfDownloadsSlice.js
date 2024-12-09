import { createSlice } from '@reduxjs/toolkit'
export const GetNoOfDownloadsSlice = createSlice({
  name: 'GetNoOfDownloadsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetNoOfDownloads: (state) => {
      state.loading = true
    },
    GetNoOfDownloadsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetNoOfDownloadsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetNoOfDownloads,
  GetNoOfDownloadsSuccess,
  GetNoOfDownloadsFailure,
} = GetNoOfDownloadsSlice.actions

export default GetNoOfDownloadsSlice.reducer
