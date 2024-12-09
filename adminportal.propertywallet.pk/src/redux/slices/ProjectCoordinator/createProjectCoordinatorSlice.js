import { createSlice } from '@reduxjs/toolkit'
export const createProjectCoordinatorSlice = createSlice({
  name: 'createProjectCoordinatorSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectCoordinator: (state) => {
      state.loading = true
    },
    createProjectCoordinatorSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectCoordinatorFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateProjectCoordinator: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectCoordinator,
  createProjectCoordinatorSuccess,
  createProjectCoordinatorFailure,
  clearcreateProjectCoordinator,
} = createProjectCoordinatorSlice.actions

export default createProjectCoordinatorSlice.reducer
