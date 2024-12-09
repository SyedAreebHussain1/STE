import { createSlice } from '@reduxjs/toolkit'
export const createProjectStepOneSlice = createSlice({
  name: 'createProjectStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectStepOne: (state) => {
      state.loading = true
    },
    createProjectStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateProjectStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectStepOne,
  createProjectStepOneSuccess,
  createProjectStepOneFailure,
  clearCreateProjectStepOne,
} = createProjectStepOneSlice.actions

export default createProjectStepOneSlice.reducer
