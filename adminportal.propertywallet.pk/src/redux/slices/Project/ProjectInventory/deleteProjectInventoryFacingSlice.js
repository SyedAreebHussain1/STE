import { createSlice } from '@reduxjs/toolkit'
export const deleteProjectInventoryFacingSlice = createSlice({
  name: 'deleteProjectInventoryFacingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProjectInventoryFacing: (state) => {
      state.loading = true
    },
    deleteProjectInventoryFacingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteProjectInventoryFacingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteProjectInventoryFacing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteProjectInventoryFacing,
  deleteProjectInventoryFacingSuccess,
  deleteProjectInventoryFacingFailure,
  cleardeleteProjectInventoryFacing,
} = deleteProjectInventoryFacingSlice.actions

export default deleteProjectInventoryFacingSlice.reducer
