import { createSlice } from '@reduxjs/toolkit'
export const updateProjectStepOneSlice = createSlice({
  name: 'updateProjectStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProjectStepOne: (state) => {
      state.loading = true
    },
    updateProjectStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateProjectStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateProjectStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateProjectStepOne,
  updateProjectStepOneSuccess,
  updateProjectStepOneFailure,
  clearUpdateProjectStepOne,
} = updateProjectStepOneSlice.actions

export default updateProjectStepOneSlice.reducer
