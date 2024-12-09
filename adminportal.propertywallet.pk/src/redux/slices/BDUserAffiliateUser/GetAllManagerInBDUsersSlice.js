import { createSlice } from '@reduxjs/toolkit'

export const GetAllManagerInBDUsersSlice = createSlice({
  name: 'GetAllManagerInBDUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllManagerInBDUsers: (state) => {
      state.loading = true
    },
    GetAllManagerInBDUsersSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllManagerInBDUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllManagerInBDUsers,
  GetAllManagerInBDUsersSuccess,
  GetAllManagerInBDUsersFailure,
} = GetAllManagerInBDUsersSlice.actions

export default GetAllManagerInBDUsersSlice.reducer
