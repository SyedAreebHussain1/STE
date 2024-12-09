import { createSlice } from '@reduxjs/toolkit'
export const excelProductUploadSlice = createSlice({
  name: 'excelProductUploadSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    excelProductUpload: (state) => {
      state.loading = true
    },
    excelProductUploadSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    excelProductUploadFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearexcelProductUpload: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  excelProductUpload,
  excelProductUploadSuccess,
  excelProductUploadFailure,
  clearexcelProductUpload,
} = excelProductUploadSlice.actions

export default excelProductUploadSlice.reducer
