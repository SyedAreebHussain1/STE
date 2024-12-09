import { createSlice } from '@reduxjs/toolkit'
export const updateProjectInventoryStepTwoSlice = createSlice({
  name: 'updateProjectInventoryStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProjectInventoryStepTwo: (state) => {
      state.loading = true
    },
    updateProjectInventoryStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateProjectInventoryStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateProjectInventoryStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateProjectInventoryStepTwo,
  updateProjectInventoryStepTwoSuccess,
  updateProjectInventoryStepTwoFailure,
  clearupdateProjectInventoryStepTwo,
} = updateProjectInventoryStepTwoSlice.actions

export default updateProjectInventoryStepTwoSlice.reducer
