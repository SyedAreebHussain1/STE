import { createSlice } from '@reduxjs/toolkit'
export const getAllMilestonesSlice = createSlice({
  name: 'getAllMilestonesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllMilestones: (state) => {
      state.loading = true
    },
    getAllMilestonesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllMilestonesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllMilestones: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllMilestones,
  getAllMilestonesSuccess,
  getAllMilestonesFailure,
  clearGetAllMilestones,
} = getAllMilestonesSlice.actions

export default getAllMilestonesSlice.reducer
