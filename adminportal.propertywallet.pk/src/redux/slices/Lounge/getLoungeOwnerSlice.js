import { createSlice } from '@reduxjs/toolkit'
export const getLoungeOwnerSlice = createSlice({
  name: 'getLoungeOwnerSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getLoungeOwner: (state) => {
      state.loading = true
    },
    getLoungeOwnerSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getLoungeOwnerFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetLoungeOwner: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getLoungeOwner,
  getLoungeOwnerSuccess,
  getLoungeOwnerFailure,
  clearGetLoungeOwner,
} = getLoungeOwnerSlice.actions

export default getLoungeOwnerSlice.reducer
