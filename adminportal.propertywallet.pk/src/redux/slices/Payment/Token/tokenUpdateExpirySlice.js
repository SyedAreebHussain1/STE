import { createSlice } from '@reduxjs/toolkit'
export const tokenUpdateExpirySlice = createSlice({
  name: 'tokenUpdateExpirySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    tokenUpdateExpiry: (state) => {
      state.loading = true
    },
    tokenUpdateExpirySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    tokenUpdateExpiryFailure: (state, action) => {
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
  tokenUpdateExpiry,
  tokenUpdateExpirySuccess,
  tokenUpdateExpiryFailure,
} = tokenUpdateExpirySlice.actions

export default tokenUpdateExpirySlice.reducer
