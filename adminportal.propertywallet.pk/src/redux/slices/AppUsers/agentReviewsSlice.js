import { createSlice } from '@reduxjs/toolkit'
export const agentReviewsSlice = createSlice({
  name: 'agentReviewsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    agentReviews: (state) => {
      state.loading = true
    },
    agentReviewsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    agentReviewsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearagentReviews: (state, action) => {
      state.data = null
    },
  },
})

export const {
  agentReviews,
  agentReviewsSuccess,
  agentReviewsFailure,
  clearagentReviews,
} = agentReviewsSlice.actions

export default agentReviewsSlice.reducer
