import { createSlice } from '@reduxjs/toolkit'

export const GetAllReleaseHistorySlice = createSlice({
  name: 'GetAllReleaseHistorySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllReleaseHistory: (state) => {
      state.loading = true
    },
    GetAllReleaseHistorySuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllReleaseHistoryFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllReleaseHistory,
  GetAllReleaseHistorySuccess,
  GetAllReleaseHistoryFailure,
} = GetAllReleaseHistorySlice.actions

export default GetAllReleaseHistorySlice.reducer
