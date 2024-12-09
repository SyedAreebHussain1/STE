import { createSlice } from '@reduxjs/toolkit'
export const getAllProjectsSlice = createSlice({
  name: 'getAllProjectsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllProjects: (state) => {
      state.loading = true
    },
    getAllProjectsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllProjectsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllProjects: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllProjects,
  getAllProjectsSuccess,
  getAllProjectsFailure,
  cleargetAllProjects,
} = getAllProjectsSlice.actions

export default getAllProjectsSlice.reducer
