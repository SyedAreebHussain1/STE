import { createSlice } from '@reduxjs/toolkit'

export const EloungePostRolesSlice = createSlice({
  name: 'EloungePostRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EloungePostRoles: (state) => {
      state.loading = true
    },
    EloungePostRolesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    EloungePostRolesFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  EloungePostRoles,
  EloungePostRolesSuccess,
  EloungePostRolesFailure,
} = EloungePostRolesSlice.actions

export default EloungePostRolesSlice.reducer
