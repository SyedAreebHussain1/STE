import { createSlice } from '@reduxjs/toolkit'

export const EloungePatchRolesSlice = createSlice({
  name: 'EloungePatchRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EloungePatchRoles: (state) => {
      state.loading = true
    },
    EloungePatchRolesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    EloungePatchRolesFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  EloungePatchRoles,
  EloungePatchRolesSuccess,
  EloungePatchRolesFailure,
} = EloungePatchRolesSlice.actions

export default EloungePatchRolesSlice.reducer
