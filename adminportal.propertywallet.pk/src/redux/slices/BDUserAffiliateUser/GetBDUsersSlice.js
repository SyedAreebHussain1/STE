import { createSlice } from '@reduxjs/toolkit'

export const GetBDUsersSlice = createSlice({
  name: 'GetBDUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetBDUsers: (state) => {
      state.loading = true
    },
    GetBDUsersSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetBDUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { GetBDUsers, GetBDUsersSuccess, GetBDUsersFailure } =
  GetBDUsersSlice.actions

export default GetBDUsersSlice.reducer
