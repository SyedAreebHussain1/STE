import { createSlice } from '@reduxjs/toolkit'
export const createProjectStepTwoSlice = createSlice({
  name: 'createProjectStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectStepTwo: (state) => {
      state.loading = true
    },
    createProjectStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateProjectStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectStepTwo,
  createProjectStepTwoSuccess,
  createProjectStepTwoFailure,
  clearCreateProjectStepTwo,
} = createProjectStepTwoSlice.actions

export default createProjectStepTwoSlice.reducer
