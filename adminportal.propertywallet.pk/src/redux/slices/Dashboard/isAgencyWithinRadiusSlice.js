import { createSlice } from '@reduxjs/toolkit'

export const isAgencyWithinRadiusSlice = createSlice({
  name: 'isAgencyWithinRadiusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    isAgencyWithinRadius: (state) => {
      state.loading = true
    },
    isAgencyWithinRadiusSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    isAgencyWithinRadiusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearisAgencyWithinRadius: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  isAgencyWithinRadius,
  isAgencyWithinRadiusSuccess,
  isAgencyWithinRadiusFailure,
  clearisAgencyWithinRadius,
} = isAgencyWithinRadiusSlice.actions

export default isAgencyWithinRadiusSlice.reducer
