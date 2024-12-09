import { createSlice } from '@reduxjs/toolkit'

export const UpdateRolesSlice = createSlice({
  name: 'UpdateRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    patchRoles: (state) => {
      state.loading = true
    },
    patchRolesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    patchRolesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { patchRoles, patchRolesSuccess, patchRolesFailure } =
  UpdateRolesSlice.actions

export default UpdateRolesSlice.reducer
