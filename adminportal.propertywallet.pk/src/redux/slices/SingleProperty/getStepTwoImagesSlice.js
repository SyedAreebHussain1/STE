import { createSlice } from '@reduxjs/toolkit'
export const getStepTwoImagesSlice = createSlice({
  name: 'getStepTwoImagesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getStepTwoImages: (state) => {
      state.loading = true
    },
    getStepTwoImagesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getStepTwoImagesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetStepTwoImages: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getStepTwoImages,
  getStepTwoImagesSuccess,
  getStepTwoImagesFailure,
  cleargetStepTwoImages,
} = getStepTwoImagesSlice.actions

export default getStepTwoImagesSlice.reducer
