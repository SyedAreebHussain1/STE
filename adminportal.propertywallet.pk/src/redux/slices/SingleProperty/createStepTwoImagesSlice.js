import { createSlice } from '@reduxjs/toolkit'
export const createStepTwoImagesSlice = createSlice({
  name: 'createStepTwoImagesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createStepTwoImages: (state) => {
      state.loading = true
    },
    createStepTwoImagesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createStepTwoImagesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateStepTwoImages: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createStepTwoImages,
  createStepTwoImagesSuccess,
  createStepTwoImagesFailure,
  clearcreateStepTwoImages,
} = createStepTwoImagesSlice.actions

export default createStepTwoImagesSlice.reducer
