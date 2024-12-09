import { createSlice } from '@reduxjs/toolkit'

export const getAllRolesForProjectCoordinatorSlice = createSlice({
  name: 'getAllRolesForProjectCoordinatorSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllRolesForProjectCoordinator: (state) => {
      state.loading = true
    },
    getAllRolesForProjectCoordinatorSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getAllRolesForProjectCoordinatorFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllRolesForProjectCoordinator,
  getAllRolesForProjectCoordinatorSuccess,
  getAllRolesForProjectCoordinatorFailure,
} = getAllRolesForProjectCoordinatorSlice.actions

export default getAllRolesForProjectCoordinatorSlice.reducer
