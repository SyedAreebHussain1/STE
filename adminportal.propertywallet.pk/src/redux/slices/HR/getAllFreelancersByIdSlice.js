import { createSlice } from '@reduxjs/toolkit'

export const getAllFreelancersByIdSlice = createSlice({
  name: 'getAllFreelancersByIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllFreelancersById: (state) => {
      state.loading = true
    },
    getAllFreelancersByIdSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getAllFreelancersByIdFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  getAllFreelancersById,
  getAllFreelancersByIdSuccess,
  getAllFreelancersByIdFailure,
} = getAllFreelancersByIdSlice.actions

export default getAllFreelancersByIdSlice.reducer
