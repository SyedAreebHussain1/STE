import { createSlice } from '@reduxjs/toolkit'
export const GetAllAgencyForAgentReviewSlice = createSlice({
  name: 'GetAllAgencyForAgentReviewSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllAgencyForAgentReview: (state) => {
      state.loading = true
    },
    GetAllAgencyForAgentReviewSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetAllAgencyForAgentReviewFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllAgencyForAgentReview: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  GetAllAgencyForAgentReview,
  GetAllAgencyForAgentReviewSuccess,
  GetAllAgencyForAgentReviewFailure,
  clearGetAllAgencyForAgentReview,
} = GetAllAgencyForAgentReviewSlice.actions

export default GetAllAgencyForAgentReviewSlice.reducer
