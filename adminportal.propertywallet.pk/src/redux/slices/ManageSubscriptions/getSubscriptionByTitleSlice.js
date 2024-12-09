import { createSlice } from '@reduxjs/toolkit'
export const getSubscriptionByTitleSlice = createSlice({
  name: 'getSubscriptionByTitleSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getSubscriptionByTitle: (state) => {
      state.loading = true
    },
    getSubscriptionByTitleSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getSubscriptionByTitleFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetSubscriptionByTitle: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getSubscriptionByTitle,
  getSubscriptionByTitleSuccess,
  getSubscriptionByTitleFailure,
  cleargetSubscriptionByTitle,
} = getSubscriptionByTitleSlice.actions

export default getSubscriptionByTitleSlice.reducer
