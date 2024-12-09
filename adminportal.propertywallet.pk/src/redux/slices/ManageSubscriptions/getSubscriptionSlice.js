import { createSlice } from '@reduxjs/toolkit'
export const getSubscriptionSlice = createSlice({
  name: 'getSubscriptionSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getSubscription: (state) => {
      state.loading = true
    },
    getSubscriptionSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getSubscriptionFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getSubscription,
  getSubscriptionSuccess,
  getSubscriptionFailure,
} = getSubscriptionSlice.actions

export default getSubscriptionSlice.reducer
