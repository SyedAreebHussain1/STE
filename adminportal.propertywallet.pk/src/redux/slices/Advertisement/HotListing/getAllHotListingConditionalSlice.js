import { createSlice } from '@reduxjs/toolkit'
export const getAllHotListingConditionalSlice = createSlice({
  name: 'getAllHotListingConditionalSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllHotListingConditional: (state) => {
      state.loading = true
    },
    getAllHotListingConditionalSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllHotListingConditionalFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllHotListingConditional: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllHotListingConditional,
  getAllHotListingConditionalSuccess,
  getAllHotListingConditionalFailure,
  cleargetAllHotListingConditional,
} = getAllHotListingConditionalSlice.actions

export default getAllHotListingConditionalSlice.reducer
