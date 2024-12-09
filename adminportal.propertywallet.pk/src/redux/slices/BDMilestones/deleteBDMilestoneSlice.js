import { createSlice } from '@reduxjs/toolkit'
export const deleteBDMilestoneSlice = createSlice({
  name: 'deleteBDMilestoneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteBDMilestone: (state) => {
      state.loading = true
    },
    deleteBDMilestoneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteBDMilestoneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearDeleteBDMilestone: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteBDMilestone,
  deleteBDMilestoneSuccess,
  deleteBDMilestoneFailure,
  clearDeleteBDMilestone,
} = deleteBDMilestoneSlice.actions

export default deleteBDMilestoneSlice.reducer
