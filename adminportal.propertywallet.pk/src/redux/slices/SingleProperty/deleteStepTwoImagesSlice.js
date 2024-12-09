import { createSlice } from '@reduxjs/toolkit'
export const deleteStepTwoImagesSlice = createSlice({
  name: 'deleteStepTwoImagesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteStepTwoImages: (state) => {
      state.loading = true
    },
    deleteStepTwoImagesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteStepTwoImagesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteStepTwoImages: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteStepTwoImages,
  deleteStepTwoImagesSuccess,
  deleteStepTwoImagesFailure,
  cleardeleteStepTwoImages,
} = deleteStepTwoImagesSlice.actions

export default deleteStepTwoImagesSlice.reducer
