import { createSlice } from '@reduxjs/toolkit'
export const GetAllMarketingRequirmentSlice = createSlice({
  name: 'GetAllMarketingRequirmentSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllMarketingRequirment: (state) => {
      state.loading = true
    },
    GetAllMarketingRequirmentSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetAllMarketingRequirmentFailure: (state, action) => {
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
  GetAllMarketingRequirment,
  GetAllMarketingRequirmentSuccess,
  GetAllMarketingRequirmentFailure,
} = GetAllMarketingRequirmentSlice.actions

export default GetAllMarketingRequirmentSlice.reducer
