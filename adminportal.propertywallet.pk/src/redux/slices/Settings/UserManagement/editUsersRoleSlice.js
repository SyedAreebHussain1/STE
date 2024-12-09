import { createSlice } from '@reduxjs/toolkit'

export const editUsersRoleSlice = createSlice({
  name: 'editUsersRoleSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    editUsersRole: (state) => {
      state.loading = true
    },
    editUsersRoleSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    editUsersRoleFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { editUsersRole, editUsersRoleSuccess, editUsersRoleFailure } =
  editUsersRoleSlice.actions

export default editUsersRoleSlice.reducer
