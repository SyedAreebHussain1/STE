import { createSlice } from '@reduxjs/toolkit'
export const getAllHotListingSlice = createSlice({
  name: 'getAllHotListingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllHotListing: (state) => {
      state.loading = true
    },
    getAllHotListingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllHotListingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllHotListing: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllHotListing,
  getAllHotListingSuccess,
  getAllHotListingFailure,
  cleargetAllHotListing,
} = getAllHotListingSlice.actions

export default getAllHotListingSlice.reducer
