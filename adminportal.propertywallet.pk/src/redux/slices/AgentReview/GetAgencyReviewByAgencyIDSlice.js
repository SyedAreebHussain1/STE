import { createSlice } from '@reduxjs/toolkit'
export const GetAgencyReviewByAgencyIDSlice = createSlice({
  name: 'GetAgencyReviewByAgencyIDSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAgencyReviewByAgencyID: (state) => {
      state.loading = true
    },
    GetAgencyReviewByAgencyIDSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetAgencyReviewByAgencyIDFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAgencyReviewByAgencyID: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  GetAgencyReviewByAgencyID,
  GetAgencyReviewByAgencyIDSuccess,
  GetAgencyReviewByAgencyIDFailure,
  clearGetAgencyReviewByAgencyID,
} = GetAgencyReviewByAgencyIDSlice.actions

export default GetAgencyReviewByAgencyIDSlice.reducer
