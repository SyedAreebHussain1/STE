import { createSlice } from '@reduxjs/toolkit'

export const PostRolesSlice = createSlice({
  name: 'PostRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    postRoles: (state) => {
      state.loading = true
    },
    postRolesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    postRolesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { postRoles, postRolesSuccess, postRolesFailure } =
  PostRolesSlice.actions

export default PostRolesSlice.reducer
