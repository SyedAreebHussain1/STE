import { createSlice } from '@reduxjs/toolkit'

export const getAllFreelancersForHRSlice = createSlice({
  name: 'getAllFreelancersForHRSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllFreelancersForHR: (state) => {
      state.loading = true
    },
    getAllFreelancersForHRSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getAllFreelancersForHRFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  getAllFreelancersForHR,
  getAllFreelancersForHRSuccess,
  getAllFreelancersForHRFailure,
} = getAllFreelancersForHRSlice.actions

export default getAllFreelancersForHRSlice.reducer
