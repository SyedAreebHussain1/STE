import { createSlice } from '@reduxjs/toolkit'
export const deleteProjectPhotoSlice = createSlice({
  name: 'deleteProjectPhotoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProjectPhoto: (state) => {
      state.loading = true
    },
    deleteProjectPhotoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteProjectPhotoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteProjectPhoto: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteProjectPhoto,
  deleteProjectPhotoSuccess,
  deleteProjectPhotoFailure,
  cleardeleteProjectPhoto,
} = deleteProjectPhotoSlice.actions

export default deleteProjectPhotoSlice.reducer
