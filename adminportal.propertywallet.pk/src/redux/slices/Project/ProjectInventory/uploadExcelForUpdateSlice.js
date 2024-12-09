import { createSlice } from '@reduxjs/toolkit'
export const uploadExcelForUpdateSlice = createSlice({
  name: 'uploadExcelForUpdateSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    uploadExcelForUpdate: (state) => {
      state.loading = true
    },
    uploadExcelForUpdateSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    uploadExcelForUpdateFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearuploadExcelForUpdate: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  uploadExcelForUpdate,
  uploadExcelForUpdateSuccess,
  uploadExcelForUpdateFailure,
  clearuploadExcelForUpdate,
} = uploadExcelForUpdateSlice.actions

export default uploadExcelForUpdateSlice.reducer
