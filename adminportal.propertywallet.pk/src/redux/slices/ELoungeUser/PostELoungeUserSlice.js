import { createSlice } from '@reduxjs/toolkit'

export const PostELoungeUserSlice = createSlice({
  name: 'PostELoungeUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    PostELoungeUser: (state) => {
      state.loading = true
    },
    PostELoungeUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    PostELoungeUserFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  PostELoungeUser,
  PostELoungeUserSuccess,
  PostELoungeUserFailure,
} = PostELoungeUserSlice.actions

export default PostELoungeUserSlice.reducer
