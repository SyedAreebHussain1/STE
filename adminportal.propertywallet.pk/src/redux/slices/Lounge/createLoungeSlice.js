import { createSlice } from '@reduxjs/toolkit'
export const createLoungeSlice = createSlice({
  name: 'createLoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createLounge: (state) => {
      state.loading = true
    },
    createLoungeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createLoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateLounge: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createLounge,
  createLoungeSuccess,
  createLoungeFailure,
  clearCreateLounge,
} = createLoungeSlice.actions

export default createLoungeSlice.reducer
