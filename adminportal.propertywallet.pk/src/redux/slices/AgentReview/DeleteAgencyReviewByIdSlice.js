import { createSlice } from '@reduxjs/toolkit'
export const DeleteAgencyReviewSlice = createSlice({
  name: 'DeleteAgencyReviewSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    DeleteAgencyReview: (state) => {
      state.loading = true
    },
    DeleteAgencyReviewSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    DeleteAgencyReviewFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearDeleteAgencyReview: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  DeleteAgencyReview,
  DeleteAgencyReviewSuccess,
  DeleteAgencyReviewFailure,
  clearDeleteAgencyReview,
} = DeleteAgencyReviewSlice.actions

export default DeleteAgencyReviewSlice.reducer
