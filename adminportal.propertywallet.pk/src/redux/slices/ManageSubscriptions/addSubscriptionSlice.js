import { createSlice } from '@reduxjs/toolkit'
export const addSubscriptionSlice = createSlice({
  name: 'addSubscriptionSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addSubscription: (state) => {
      state.loading = true
    },
    addSubscriptionSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    addSubscriptionFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  addSubscription,
  addSubscriptionSuccess,
  addSubscriptionFailure,
} = addSubscriptionSlice.actions

export default addSubscriptionSlice.reducer
