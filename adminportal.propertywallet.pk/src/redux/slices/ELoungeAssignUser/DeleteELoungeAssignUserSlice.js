import { createSlice } from '@reduxjs/toolkit'

export const DeleteELoungeAssignUserSlice = createSlice({
  name: 'DeleteELoungeAssignUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    DeleteELoungeAssignUser: (state) => {
      state.loading = true
    },
    DeleteELoungeAssignUserSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    DeleteELoungeAssignUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  DeleteELoungeAssignUser,
  DeleteELoungeAssignUserSuccess,
  DeleteELoungeAssignUserFailure,
} = DeleteELoungeAssignUserSlice.actions

export default DeleteELoungeAssignUserSlice.reducer
