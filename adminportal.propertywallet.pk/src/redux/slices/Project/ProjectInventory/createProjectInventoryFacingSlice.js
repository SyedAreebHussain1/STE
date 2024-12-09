import { createSlice } from '@reduxjs/toolkit'
export const createProjectInventoryFacingSlice = createSlice({
  name: 'createProjectInventoryFacingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectInventoryFacing: (state) => {
      state.loading = true
    },
    createProjectInventoryFacingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectInventoryFacingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateProjectInventoryFacing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectInventoryFacing,
  createProjectInventoryFacingSuccess,
  createProjectInventoryFacingFailure,
  clearcreateProjectInventoryFacing,
} = createProjectInventoryFacingSlice.actions

export default createProjectInventoryFacingSlice.reducer
