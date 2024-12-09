import { createSlice } from '@reduxjs/toolkit'

export const ActiveOrDeactiveBDUserSlice = createSlice({
  name: 'ActiveOrDeactiveBDUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    ActiveOrDeactiveBDUser: (state) => {
      state.loading = true
    },
    ActiveOrDeactiveBDUserSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    ActiveOrDeactiveBDUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  ActiveOrDeactiveBDUser,
  ActiveOrDeactiveBDUserSuccess,
  ActiveOrDeactiveBDUserFailure,
} = ActiveOrDeactiveBDUserSlice.actions

export default ActiveOrDeactiveBDUserSlice.reducer
