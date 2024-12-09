import { createSlice } from '@reduxjs/toolkit'

export const GetAllBankRequestSlice = createSlice({
  name: 'GetAllBankRequestSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getBankRequests: (state) => {
      state.loading = true
    },
    getBankRequestsSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getBankRequestsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getBankRequests,
  getBankRequestsSuccess,
  getBankRequestsFailure,
} = GetAllBankRequestSlice.actions

export default GetAllBankRequestSlice.reducer
