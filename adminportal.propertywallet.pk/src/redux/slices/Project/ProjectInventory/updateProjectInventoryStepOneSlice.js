import { createSlice } from '@reduxjs/toolkit'
export const updateProjectInventoryStepOneSlice = createSlice({
  name: 'updateProjectInventoryStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateProjectInventoryStepOne: (state) => {
      state.loading = true
    },
    updateProjectInventoryStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateProjectInventoryStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateProjectInventoryStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateProjectInventoryStepOne,
  updateProjectInventoryStepOneSuccess,
  updateProjectInventoryStepOneFailure,
  clearupdateProjectInventoryStepOne,
} = updateProjectInventoryStepOneSlice.actions

export default updateProjectInventoryStepOneSlice.reducer
