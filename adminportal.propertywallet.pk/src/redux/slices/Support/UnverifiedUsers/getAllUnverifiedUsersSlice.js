import { createSlice } from '@reduxjs/toolkit'
export const getAllUnverifiedUsersSlice = createSlice({
  name: 'getAllUnverifiedUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllUnverifiedUsers: (state) => {
      state.loading = true
    },
    getAllUnverifiedUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllUnverifiedUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  getAllUnverifiedUsers,
  getAllUnverifiedUsersSuccess,
  getAllUnverifiedUsersFailure,
} = getAllUnverifiedUsersSlice.actions

export default getAllUnverifiedUsersSlice.reducer
