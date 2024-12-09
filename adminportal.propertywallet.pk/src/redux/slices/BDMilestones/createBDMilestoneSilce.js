import { createSlice } from '@reduxjs/toolkit'
export const createBDMilestoneSilce = createSlice({
  name: 'createBDMilestoneSilce', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createBDMilestone: (state) => {
      state.loading = true
    },
    createBDMilestoneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createBDMilestoneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateBDMilestone: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createBDMilestone,
  createBDMilestoneSuccess,
  createBDMilestoneFailure,
  clearCreateBDMilestone,
} = createBDMilestoneSilce.actions

export default createBDMilestoneSilce.reducer
