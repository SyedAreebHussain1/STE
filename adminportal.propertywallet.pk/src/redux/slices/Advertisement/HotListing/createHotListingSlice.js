import { createSlice } from '@reduxjs/toolkit'
export const createHotListingSlice = createSlice({
  name: 'createHotListingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createHotListing: (state) => {
      state.loading = true
    },
    createHotListingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createHotListingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateHotListing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createHotListing,
  createHotListingSuccess,
  createHotListingFailure,
  clearcreateHotListing,
} = createHotListingSlice.actions

export default createHotListingSlice.reducer
