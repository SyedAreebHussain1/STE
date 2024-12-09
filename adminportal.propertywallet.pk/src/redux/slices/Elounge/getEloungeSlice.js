import { createSlice } from '@reduxjs/toolkit'

export const getEloungeSlice = createSlice({
  name: 'getEloungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getElounge: (state) => {
      state.loading = true
    },
    getEloungeSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getEloungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getElounge, getEloungeSuccess, getEloungeFailure } =
  getEloungeSlice.actions

export default getEloungeSlice.reducer
