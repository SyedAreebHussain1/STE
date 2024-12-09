import { createSlice } from '@reduxjs/toolkit'
export const getProjectDetailsStepTwoSlice = createSlice({
  name: 'getProjectDetailsStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectDetailsStepTwo: (state) => {
      state.loading = true
    },
    getProjectDetailsStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectDetailsStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectDetailsStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectDetailsStepTwo,
  getProjectDetailsStepTwoSuccess,
  getProjectDetailsStepTwoFailure,
  cleargetProjectDetailsStepTwo,
} = getProjectDetailsStepTwoSlice.actions

export default getProjectDetailsStepTwoSlice.reducer
