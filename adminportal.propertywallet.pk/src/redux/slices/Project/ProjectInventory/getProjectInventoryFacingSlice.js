import { createSlice } from '@reduxjs/toolkit'
export const getProjectInventoryFacingSlice = createSlice({
  name: 'getProjectInventoryFacingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectInventoryFacing: (state) => {
      state.loading = true
    },
    getProjectInventoryFacingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectInventoryFacingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectInventoryFacing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectInventoryFacing,
  getProjectInventoryFacingSuccess,
  getProjectInventoryFacingFailure,
  cleargetProjectInventoryFacing,
} = getProjectInventoryFacingSlice.actions

export default getProjectInventoryFacingSlice.reducer
