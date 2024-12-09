import { createSlice } from '@reduxjs/toolkit'

export const AssignAffiliateToManagerSlice = createSlice({
  name: 'AssignAffiliateToManagerSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AssignAffiliateToManager: (state) => {
      state.loading = true
    },
    AssignAffiliateToManagerSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    AssignAffiliateToManagerFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearAssignAffiliateToManager: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  AssignAffiliateToManager,
  AssignAffiliateToManagerSuccess,
  AssignAffiliateToManagerFailure,
  clearAssignAffiliateToManager,
} = AssignAffiliateToManagerSlice.actions

export default AssignAffiliateToManagerSlice.reducer
