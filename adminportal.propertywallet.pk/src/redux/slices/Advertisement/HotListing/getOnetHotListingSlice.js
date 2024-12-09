import { createSlice } from '@reduxjs/toolkit'
export const getOnetHotListingSlice = createSlice({
  name: 'getOnetHotListingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getOnetHotListing: (state) => {
      state.loading = true
    },
    getOnetHotListingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getOnetHotListingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetOnetHotListing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getOnetHotListing,
  getOnetHotListingSuccess,
  getOnetHotListingFailure,
  cleargetOnetHotListing,
} = getOnetHotListingSlice.actions

export default getOnetHotListingSlice.reducer
