import { createSlice } from '@reduxjs/toolkit'
export const getAllBDMilestonesSlice = createSlice({
  name: 'getAllBDMilestonesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllBDMilestones: (state) => {
      state.loading = true
    },
    getAllBDMilestonesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllBDMilestonesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllBDMilestones: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllBDMilestones,
  getAllBDMilestonesSuccess,
  getAllBDMilestonesFailure,
  clearGetAllBDMilestones,
} = getAllBDMilestonesSlice.actions

export default getAllBDMilestonesSlice.reducer
