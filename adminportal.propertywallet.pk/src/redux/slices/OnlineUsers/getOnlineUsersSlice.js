import { createSlice } from '@reduxjs/toolkit'

export const GetAllUserSlice = createSlice({
  name: 'GetAllUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getOnlineUsers: (state) => {
      state.loading = true
    },
    getOnlineUsersSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getOnlineUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getOnlineUsers, getOnlineUsersSuccess, getOnlineUsersFailure } =
  GetAllUserSlice.actions

export default GetAllUserSlice.reducer
