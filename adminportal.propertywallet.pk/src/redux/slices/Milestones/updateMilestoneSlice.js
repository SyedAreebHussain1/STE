import { createSlice } from '@reduxjs/toolkit'
export const updateMilestoneSlice = createSlice({
  name: 'updateMilestoneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateMilestone: (state) => {
      state.loading = true
    },
    updateMilestoneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateMilestoneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearUpdateMilestone: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updateMilestone,
  updateMilestoneSuccess,
  updateMilestoneFailure,
  clearUpdateMilestone,
} = updateMilestoneSlice.actions

export default updateMilestoneSlice.reducer
