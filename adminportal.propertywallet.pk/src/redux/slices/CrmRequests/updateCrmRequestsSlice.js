import { createSlice } from '@reduxjs/toolkit'
export const updateCrmRequestsSlice = createSlice({
  name: 'updateCrmRequestsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateCrmRequests: (state) => {
      state.loading = true
    },
    updateCrmRequestsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateCrmRequestsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdateCrmRequests: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateCrmRequests,
  updateCrmRequestsSuccess,
  updateCrmRequestsFailure,
  clearupdateCrmRequests,
} = updateCrmRequestsSlice.actions

export default updateCrmRequestsSlice.reducer
