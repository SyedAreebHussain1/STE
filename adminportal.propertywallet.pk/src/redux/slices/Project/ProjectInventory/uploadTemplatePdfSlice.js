import { createSlice } from '@reduxjs/toolkit'
export const uploadTemplatePdfSlice = createSlice({
  name: 'uploadTemplatePdfSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadTemplatePdf: (state) => {
      state.loading = true
    },
    uploadTemplatePdfSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    uploadTemplatePdfFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUploadTemplatePdf: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  uploadTemplatePdf,
  uploadTemplatePdfSuccess,
  uploadTemplatePdfFailure,
  clearUploadTemplatePdf,
} = uploadTemplatePdfSlice.actions

export default uploadTemplatePdfSlice.reducer
