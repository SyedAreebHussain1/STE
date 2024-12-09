import { createSlice } from '@reduxjs/toolkit'
export const updateStepTwoImagesSlice = createSlice({
  name: 'updateStepTwoImagesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateStepTwoImages: (state) => {
      state.loading = true
    },
    updateStepTwoImagesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateStepTwoImagesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateStepTwoImages: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateStepTwoImages,
  updateStepTwoImagesSuccess,
  updateStepTwoImagesFailure,
  clearupdateStepTwoImages,
} = updateStepTwoImagesSlice.actions

export default updateStepTwoImagesSlice.reducer
