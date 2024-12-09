import { createSlice } from '@reduxjs/toolkit'

export const projectAssignToCoordinatorByIDSlice = createSlice({
  name: 'projectAssignToCoordinatorByIDSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    projectAssignToCoordinatorByID: (state) => {
      state.loading = true
    },
    projectAssignToCoordinatorByIDSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    projectAssignToCoordinatorByIDFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  projectAssignToCoordinatorByID,
  projectAssignToCoordinatorByIDSuccess,
  projectAssignToCoordinatorByIDFailure,
} = projectAssignToCoordinatorByIDSlice.actions

export default projectAssignToCoordinatorByIDSlice.reducer
