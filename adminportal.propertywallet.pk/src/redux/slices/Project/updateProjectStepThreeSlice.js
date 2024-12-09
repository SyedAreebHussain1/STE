import { createSlice } from '@reduxjs/toolkit'
export const updateProjectStepThreeSlice = createSlice({
  name: 'updateProjectStepThreeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProjectStepThree: (state) => {
      state.loading = true
    },
    updateProjectStepThreeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateProjectStepThreeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateProjectStepThree: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateProjectStepThree,
  updateProjectStepThreeSuccess,
  updateProjectStepThreeFailure,
  clearUpdateProjectStepThree,
} = updateProjectStepThreeSlice.actions

export default updateProjectStepThreeSlice.reducer
