import { createSlice } from '@reduxjs/toolkit'
export const GetRegisteredUsersSlice = createSlice({
  name: 'GetRegisteredUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getRegisteredUsers: (state) => {
      state.loading = true
    },
    getRegisteredUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getRegisteredUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getRegisteredUsers,
  getRegisteredUsersSuccess,
  getRegisteredUsersFailure,
} = GetRegisteredUsersSlice.actions

export default GetRegisteredUsersSlice.reducer
