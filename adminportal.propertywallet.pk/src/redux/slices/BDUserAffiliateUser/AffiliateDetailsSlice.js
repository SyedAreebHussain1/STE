import { createSlice } from '@reduxjs/toolkit'

export const AffiliateDetailsSlice = createSlice({
  name: 'AffiliateDetailsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AffiliateDetails: (state) => {
      state.loading = true
    },
    AffiliateDetailsSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    AffiliateDetailsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  AffiliateDetails,
  AffiliateDetailsSuccess,
  AffiliateDetailsFailure,
} = AffiliateDetailsSlice.actions

export default AffiliateDetailsSlice.reducer
