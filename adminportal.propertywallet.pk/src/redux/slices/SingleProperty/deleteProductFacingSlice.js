import { createSlice } from '@reduxjs/toolkit'
export const deleteProductFacingSlice = createSlice({
  name: 'deleteProductFacingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProductFacing: (state) => {
      state.loading = true
    },
    deleteProductFacingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteProductFacingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteProductFacing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteProductFacing,
  deleteProductFacingSuccess,
  deleteProductFacingFailure,
  cleardeleteProductFacing,
} = deleteProductFacingSlice.actions

export default deleteProductFacingSlice.reducer
