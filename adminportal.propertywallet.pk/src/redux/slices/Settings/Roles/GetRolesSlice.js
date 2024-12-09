import { createSlice } from '@reduxjs/toolkit'

export const GetRolesSlice = createSlice({
  name: 'GetRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getRoles: (state) => {
      state.loading = true
    },
    getRolesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getRolesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getRoles, getRolesSuccess, getRolesFailure } =
  GetRolesSlice.actions

export default GetRolesSlice.reducer
