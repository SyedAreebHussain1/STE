import { createSlice } from '@reduxjs/toolkit'

export const AssignModuleRoleSlice = createSlice({
  name: 'AssignModuleRoleSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    assignModuleRole: (state) => {
      state.loading = true
    },
    assignModuleRoleSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    assignModuleRoleFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  assignModuleRole,
  assignModuleRoleSuccess,
  assignModuleRoleFailure,
} = AssignModuleRoleSlice.actions

export default AssignModuleRoleSlice.reducer
