import { createSlice } from '@reduxjs/toolkit'
export const getInventoryDetailStepTwoSlice = createSlice({
  name: 'getInventoryDetailStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getInventoryDetailStepTwo: (state) => {
      state.loading = true
    },
    getInventoryDetailStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getInventoryDetailStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetgetInventoryDetailStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getInventoryDetailStepTwo,
  getInventoryDetailStepTwoSuccess,
  getInventoryDetailStepTwoFailure,
  cleargetgetInventoryDetailStepTwo,
} = getInventoryDetailStepTwoSlice.actions

export default getInventoryDetailStepTwoSlice.reducer
