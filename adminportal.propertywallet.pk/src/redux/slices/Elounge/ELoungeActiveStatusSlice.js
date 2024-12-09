import { createSlice } from '@reduxjs/toolkit'

export const ELoungeActiveStatusSlice = createSlice({
  name: 'ELoungeActiveStatusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    ELoungeActiveStatus: (state) => {
      state.loading = true
    },
    ELoungeActiveStatusSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    ELoungeActiveStatusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  ELoungeActiveStatus,
  ELoungeActiveStatusSuccess,
  ELoungeActiveStatusFailure,
} = ELoungeActiveStatusSlice.actions

export default ELoungeActiveStatusSlice.reducer
