import { createSlice } from '@reduxjs/toolkit'
export const getProjectInventoryStepOneSlice = createSlice({
  name: 'getProjectInventoryStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectInventoryStepOne: (state) => {
      state.loading = true
    },
    getProjectInventoryStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectInventoryStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectInventoryStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectInventoryStepOne,
  getProjectInventoryStepOneSuccess,
  getProjectInventoryStepOneFailure,
  cleargetProjectInventoryStepOne,
} = getProjectInventoryStepOneSlice.actions

export default getProjectInventoryStepOneSlice.reducer
