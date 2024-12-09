import { createSlice } from '@reduxjs/toolkit'
export const createProjectStepThreeSlice = createSlice({
  name: 'createProjectStepThreeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectStepThree: (state) => {
      state.loading = true
    },
    createProjectStepThreeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectStepThreeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateProjectStepThree: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectStepThree,
  createProjectStepThreeSuccess,
  createProjectStepThreeFailure,
  clearcreateProjectStepThree,
} = createProjectStepThreeSlice.actions

export default createProjectStepThreeSlice.reducer
