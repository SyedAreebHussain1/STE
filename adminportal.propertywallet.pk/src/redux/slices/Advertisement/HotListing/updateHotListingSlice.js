import { createSlice } from '@reduxjs/toolkit'
export const updateHotListingSlice = createSlice({
  name: 'updateHotListingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateHotListing: (state) => {
      state.loading = true
    },
    updateHotListingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateHotListingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateHotListing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateHotListing,
  updateHotListingSuccess,
  updateHotListingFailure,
  clearupdateHotListing,
} = updateHotListingSlice.actions

export default updateHotListingSlice.reducer
