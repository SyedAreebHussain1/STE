import { createSlice } from '@reduxjs/toolkit'
export const createProjectInventoryStepOneSlice = createSlice({
  name: 'createProjectInventoryStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectInventoryStepOne: (state) => {
      state.loading = true
    },
    createProjectInventoryStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectInventoryStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateProjectInventoryStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectInventoryStepOne,
  createProjectInventoryStepOneSuccess,
  createProjectInventoryStepOneFailure,
  clearCreateProjectInventoryStepOne,
} = createProjectInventoryStepOneSlice.actions

export default createProjectInventoryStepOneSlice.reducer
