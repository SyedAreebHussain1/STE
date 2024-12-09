import { createSlice } from '@reduxjs/toolkit'
export const getAllSubscriptionSlice = createSlice({
  name: 'getAllSubscriptionSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllSubscription: (state) => {
      state.loading = true
    },
    getAllSubscriptionSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllSubscriptionFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllSubscription,
  getAllSubscriptionSuccess,
  getAllSubscriptionFailure,
} = getAllSubscriptionSlice.actions

export default getAllSubscriptionSlice.reducer
