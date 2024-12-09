import { createSlice } from '@reduxjs/toolkit'
export const uploadExcelSheetSlice = createSlice({
  name: 'uploadExcelSheetSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadExcelSheet: (state) => {
      state.loading = true
    },
    uploadExcelSheetSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    uploadExcelSheetFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearuploadExcelSheet: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  uploadExcelSheet,
  uploadExcelSheetSuccess,
  uploadExcelSheetFailure,
  clearuploadExcelSheet,
} = uploadExcelSheetSlice.actions

export default uploadExcelSheetSlice.reducer
