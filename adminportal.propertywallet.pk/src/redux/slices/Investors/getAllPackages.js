import { createSlice } from '@reduxjs/toolkit'

export const GetPackagesSlice = createSlice({
  name: 'GetPackagesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getPackages: (state) => {
      state.loading = true
    },
    getPackagesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getPackagesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getPackages, getPackagesSuccess, getPackagesFailure } =
  GetPackagesSlice.actions

export default GetPackagesSlice.reducer
