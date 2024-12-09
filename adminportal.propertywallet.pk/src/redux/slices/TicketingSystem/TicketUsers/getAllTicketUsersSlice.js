import { createSlice } from '@reduxjs/toolkit'
export const getAllTicketUsersSlice = createSlice({
  name: 'getAllTicketUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllTicketUsers: (state) => {
      state.loading = true
    },
    getAllTicketUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllTicketUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllTicketUsers: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllTicketUsers,
  getAllTicketUsersSuccess,
  getAllTicketUsersFailure,
} = getAllTicketUsersSlice.actions

export default getAllTicketUsersSlice.reducer
