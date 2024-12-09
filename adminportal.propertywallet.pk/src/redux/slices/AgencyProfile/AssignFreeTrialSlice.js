import { createSlice } from '@reduxjs/toolkit'
export const AssignFreeTrialSlice = createSlice({
  name: 'AssignFreeTrialSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AssignFreeTrial: (state) => {
      state.loading = true
    },
    AssignFreeTrialSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    AssignFreeTrialFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearAssignFreeTrial: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  AssignFreeTrial,
  AssignFreeTrialSuccess,
  AssignFreeTrialFailure,
  clearAssignFreeTrial,
} = AssignFreeTrialSlice.actions

export default AssignFreeTrialSlice.reducer
