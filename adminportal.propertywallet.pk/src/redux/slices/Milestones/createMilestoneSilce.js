import { createSlice } from '@reduxjs/toolkit'
export const createMilestoneSilce = createSlice({
  name: 'createMilestoneSilce', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createMilestone: (state) => {
      state.loading = true
    },
    createMilestoneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createMilestoneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearCreateMilestone: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createMilestone,
  createMilestoneSuccess,
  createMilestoneFailure,
  clearCreateMilestone,
} = createMilestoneSilce.actions

export default createMilestoneSilce.reducer
