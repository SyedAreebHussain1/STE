import { createSlice } from '@reduxjs/toolkit'

export const AgenciesCountSlice = createSlice({
  name: 'AgenciesCountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    allAgenciesCount: (state) => {
      state.loading = true
    },
    allAgenciesCountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    allAgenciesCountFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  allAgenciesCount,
  allAgenciesCountSuccess,
  allAgenciesCountFailure,
} = AgenciesCountSlice.actions

export default AgenciesCountSlice.reducer
