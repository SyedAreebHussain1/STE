import { createSlice } from '@reduxjs/toolkit'
export const updateBDMilestoneSlice = createSlice({
  name: 'updateBDMilestoneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateBDMilestone: (state) => {
      state.loading = true
    },
    updateBDMilestoneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateBDMilestoneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateBDMilestone: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateBDMilestone,
  updateBDMilestoneSuccess,
  updateBDMilestoneFailure,
  clearUpdateBDMilestone,
} = updateBDMilestoneSlice.actions

export default updateBDMilestoneSlice.reducer
