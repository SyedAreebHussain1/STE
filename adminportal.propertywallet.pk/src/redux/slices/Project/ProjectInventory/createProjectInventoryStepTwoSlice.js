import { createSlice } from '@reduxjs/toolkit'
export const createProjectInventoryStepTwoSlice = createSlice({
  name: 'createProjectInventoryStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectInventoryStepTwo: (state) => {
      state.loading = true
    },
    createProjectInventoryStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectInventoryStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateProjectInventoryStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectInventoryStepTwo,
  createProjectInventoryStepTwoSuccess,
  createProjectInventoryStepTwoFailure,
  clearcreateProjectInventoryStepTwo,
} = createProjectInventoryStepTwoSlice.actions

export default createProjectInventoryStepTwoSlice.reducer
