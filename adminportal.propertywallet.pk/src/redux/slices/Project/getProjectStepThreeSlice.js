import { createSlice } from '@reduxjs/toolkit'
export const getProjectStepThreeSlice = createSlice({
  name: 'getProjectStepThreeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectStepThree: (state) => {
      state.loading = true
    },
    getProjectStepThreeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectStepThreeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectStepThree: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectStepThree,
  getProjectStepThreeSuccess,
  getProjectStepThreeFailure,
  cleargetProjectStepThree,
} = getProjectStepThreeSlice.actions

export default getProjectStepThreeSlice.reducer
