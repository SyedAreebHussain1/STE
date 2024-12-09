import { createSlice } from '@reduxjs/toolkit'
export const coordinatorActiveStatusSlice = createSlice({
  name: 'coordinatorActiveStatusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    coordinatorActiveStatus: (state) => {
      state.loading = true
    },
    coordinatorActiveStatusSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    coordinatorActiveStatusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcoordinatorActiveStatus: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  coordinatorActiveStatus,
  coordinatorActiveStatusSuccess,
  coordinatorActiveStatusFailure,
  clearcoordinatorActiveStatus,
} = coordinatorActiveStatusSlice.actions

export default coordinatorActiveStatusSlice.reducer
