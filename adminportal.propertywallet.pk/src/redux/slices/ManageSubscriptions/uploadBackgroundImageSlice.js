import { createSlice } from '@reduxjs/toolkit'
export const uploadBackgroundImageSlice = createSlice({
  name: 'uploadBackgroundImageSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadBackgroundImage: (state) => {
      state.loading = true
    },
    uploadBackgroundImageSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    uploadBackgroundImageFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUploadBackgroundImage: (state, action) => {
      state.loading = false
      state.data = null
      state.error = null
    },
  },
})

export const {
  uploadBackgroundImage,
  uploadBackgroundImageSuccess,
  uploadBackgroundImageFailure,
  clearUploadBackgroundImage,
} = uploadBackgroundImageSlice.actions

export default uploadBackgroundImageSlice.reducer
