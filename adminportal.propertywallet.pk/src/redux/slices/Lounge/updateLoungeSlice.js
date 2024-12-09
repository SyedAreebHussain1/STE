import { createSlice } from '@reduxjs/toolkit'
export const updateLoungeSlice = createSlice({
  name: 'updateLoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateLounge: (state) => {
      state.loading = true
    },
    updateLoungeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateLoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateLounge: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateLounge,
  updateLoungeSuccess,
  updateLoungeFailure,
  clearUpdateLounge,
} = updateLoungeSlice.actions

export default updateLoungeSlice.reducer
