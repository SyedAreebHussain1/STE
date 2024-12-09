import { createSlice } from '@reduxjs/toolkit'

export const UploadAdvertisementSlice = createSlice({
  name: 'UploadAdvertisementSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadAdvertisement: (state) => {
      state.loading = true
    },
    uploadAdvertisementSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    uploadAdvertisementFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUploadAdvertisement: (state, action) => {
      state.loading = false
      state.data = null
      state.error = null
    },
  },
})

export const {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
  clearUploadAdvertisement,
} = UploadAdvertisementSlice.actions

export default UploadAdvertisementSlice.reducer
