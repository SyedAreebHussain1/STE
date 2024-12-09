import { createSlice } from '@reduxjs/toolkit'

export const GetInvestorSlice = createSlice({
  name: 'GetInvestorSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getInvestor: (state) => {
      state.loading = true
    },
    getInvestorSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getInvestorFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getInvestor, getInvestorSuccess, getInvestorFailure } =
  GetInvestorSlice.actions

export default GetInvestorSlice.reducer
