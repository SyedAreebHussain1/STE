import { createSlice } from '@reduxjs/toolkit'

export const PostReleaseSalariesSlice = createSlice({
  name: 'PostReleaseSalariesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    PostReleaseSalaries: (state) => {
      state.loading = true
    },
    PostReleaseSalariesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    PostReleaseSalariesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  PostReleaseSalaries,
  PostReleaseSalariesSuccess,
  PostReleaseSalariesFailure,
} = PostReleaseSalariesSlice.actions

export default PostReleaseSalariesSlice.reducer
