import { createSlice } from '@reduxjs/toolkit'
export const deleteHotListingSlice = createSlice({
  name: 'deleteHotListingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteHotListing: (state) => {
      state.loading = true
    },
    deleteHotListingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteHotListingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteHotListing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteHotListing,
  deleteHotListingSuccess,
  deleteHotListingFailure,
  cleardeleteHotListing,
} = deleteHotListingSlice.actions

export default deleteHotListingSlice.reducer
