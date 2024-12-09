import { createSlice } from '@reduxjs/toolkit'

export const GetAllCatalogueAgentReviewSlice = createSlice({
  name: 'GetAllCatalogueAgentReviewSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllCatalogueAgentReview: (state) => {
      state.loading = true
    },
    GetAllCatalogueAgentReviewSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllCatalogueAgentReviewFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllCatalogueAgentReview,
  GetAllCatalogueAgentReviewSuccess,
  GetAllCatalogueAgentReviewFailure,
} = GetAllCatalogueAgentReviewSlice.actions

export default GetAllCatalogueAgentReviewSlice.reducer
