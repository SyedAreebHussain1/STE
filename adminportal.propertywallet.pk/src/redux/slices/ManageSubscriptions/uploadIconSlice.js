import { createSlice } from '@reduxjs/toolkit'
export const uploadIconSlice = createSlice({
  name: 'uploadIconSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadIcon: (state) => {
      state.loading = true
    },
    uploadIconSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    uploadIconFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUploadIconImage: (state, action) => {
      state.loading = false
      state.data = null
      state.error = null
    },
  },
})

export const {
  uploadIcon,
  uploadIconSuccess,
  uploadIconFailure,
  clearUploadIconImage,
} = uploadIconSlice.actions

export default uploadIconSlice.reducer
