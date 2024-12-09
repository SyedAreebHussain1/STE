import { createSlice } from '@reduxjs/toolkit'
export const getCrmRequestsSlice = createSlice({
  name: 'getCrmRequestsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getCrmRequests: (state) => {
      state.loading = true
    },
    getCrmRequestsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getCrmRequestsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetCrmRequests: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getCrmRequests,
  getCrmRequestsSuccess,
  getCrmRequestsFailure,
  cleargetCrmRequests,
} = getCrmRequestsSlice.actions

export default getCrmRequestsSlice.reducer
