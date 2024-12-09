import { createSlice } from '@reduxjs/toolkit'
export const updateProjectStepTwoSlice = createSlice({
  name: 'updateProjectStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProjectStepTwo: (state) => {
      state.loading = true
    },
    updateProjectStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateProjectStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateProjectStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateProjectStepTwo,
  updateProjectStepTwoSuccess,
  updateProjectStepTwoFailure,
  clearUpdateProjectStepTwo,
} = updateProjectStepTwoSlice.actions

export default updateProjectStepTwoSlice.reducer
