import { createSlice } from '@reduxjs/toolkit'

export const SuspendELoungeUserSlice = createSlice({
  name: 'SuspendELoungeUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    SuspendELoungeUser: (state) => {
      state.loading = true
    },
    SuspendELoungeUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    SuspendELoungeUserFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  SuspendELoungeUser,
  SuspendELoungeUserSuccess,
  SuspendELoungeUserFailure,
} = SuspendELoungeUserSlice.actions

export default SuspendELoungeUserSlice.reducer
