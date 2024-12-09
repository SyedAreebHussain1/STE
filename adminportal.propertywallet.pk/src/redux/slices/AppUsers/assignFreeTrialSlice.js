import { createSlice } from '@reduxjs/toolkit'
export const assignFreeTrialSlice = createSlice({
  name: 'assignFreeTrialSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    assignFreeTrial: (state) => {
      state.loading = true
    },
    assignFreeTrialSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    assignFreeTrialFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  assignFreeTrial,
  assignFreeTrialSuccess,
  assignFreeTrialFailure,
  clearassignFreeTrial,
} = assignFreeTrialSlice.actions

export default assignFreeTrialSlice.reducer
