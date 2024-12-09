import { createSlice } from '@reduxjs/toolkit'

export const GetAllCatalogueAgencyReviewSlice = createSlice({
  name: 'GetAllCatalogueAgencyReviewSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllCatalogueAgencyReview: (state) => {
      state.loading = true
    },
    GetAllCatalogueAgencyReviewSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllCatalogueAgencyReviewFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllCatalogueAgencyReview,
  GetAllCatalogueAgencyReviewSuccess,
  GetAllCatalogueAgencyReviewFailure,
} = GetAllCatalogueAgencyReviewSlice.actions

export default GetAllCatalogueAgencyReviewSlice.reducer
