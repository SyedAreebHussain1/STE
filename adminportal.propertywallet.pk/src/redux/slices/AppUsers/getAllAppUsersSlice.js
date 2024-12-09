import { createSlice } from '@reduxjs/toolkit'
export const getAllAppUsersSlice = createSlice({
  name: 'getAllAppUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllAppUsers: (state) => {
      state.loading = true
    },
    getAllAppUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllAppUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllAppUsers: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllAppUsers,
  getAllAppUsersSuccess,
  getAllAppUsersFailure,
  cleargetAllAppUsers,
} = getAllAppUsersSlice.actions

export default getAllAppUsersSlice.reducer
