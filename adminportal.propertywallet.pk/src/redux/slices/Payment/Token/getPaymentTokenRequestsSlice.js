import { createSlice } from '@reduxjs/toolkit'
export const getPaymentTokenRequestsSlice = createSlice({
  name: 'getPaymentTokenRequestsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getPaymentTokenRequests: (state) => {
      state.loading = true
    },
    getPaymentTokenRequestsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getPaymentTokenRequestsFailure: (state, action) => {
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
  getPaymentTokenRequests,
  getPaymentTokenRequestsSuccess,
  getPaymentTokenRequestsFailure,
} = getPaymentTokenRequestsSlice.actions

export default getPaymentTokenRequestsSlice.reducer
