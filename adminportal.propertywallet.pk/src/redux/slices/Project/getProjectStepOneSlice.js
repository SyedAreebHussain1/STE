import { createSlice } from '@reduxjs/toolkit'
export const getProjectStepOneSlice = createSlice({
  name: 'getProjectStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectStepOne: (state) => {
      state.loading = true
    },
    getProjectStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectStepOne,
  getProjectStepOneSuccess,
  getProjectStepOneFailure,
  cleargetProjectStepOne,
} = getProjectStepOneSlice.actions

export default getProjectStepOneSlice.reducer
