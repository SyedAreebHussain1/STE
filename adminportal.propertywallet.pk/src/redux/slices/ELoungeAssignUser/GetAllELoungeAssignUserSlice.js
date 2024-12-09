import { createSlice } from '@reduxjs/toolkit'

export const GetAllELoungeAssignUserSlice = createSlice({
  name: 'GetAllELoungeAssignUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllELoungeAssignUser: (state) => {
      state.loading = true
    },
    GetAllELoungeAssignUserSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllELoungeAssignUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllELoungeAssignUser,
  GetAllELoungeAssignUserSuccess,
  GetAllELoungeAssignUserFailure,
} = GetAllELoungeAssignUserSlice.actions

export default GetAllELoungeAssignUserSlice.reducer
