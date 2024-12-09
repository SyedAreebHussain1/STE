import { createSlice } from '@reduxjs/toolkit'

export const deleteFreelancerSlice = createSlice({
  name: 'deleteFreelancerSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteFreelancer: (state) => {
      state.loading = true
    },
    deleteFreelancerSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    deleteFreelancerFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  deleteFreelancer,
  deleteFreelancerSuccess,
  deleteFreelancerFailure,
} = deleteFreelancerSlice.actions

export default deleteFreelancerSlice.reducer
