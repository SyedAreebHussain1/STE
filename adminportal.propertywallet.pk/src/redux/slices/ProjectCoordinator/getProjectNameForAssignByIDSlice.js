import { createSlice } from '@reduxjs/toolkit'
export const getProjectNameForAssignByIDSlice = createSlice({
  name: 'getProjectNameForAssignByIDSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectNameForAssignByID: (state) => {
      state.loading = true
    },
    getProjectNameForAssignByIDSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectNameForAssignByIDFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectNameForAssignByID: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectNameForAssignByID,
  getProjectNameForAssignByIDSuccess,
  getProjectNameForAssignByIDFailure,
  cleargetProjectNameForAssignByID,
} = getProjectNameForAssignByIDSlice.actions

export default getProjectNameForAssignByIDSlice.reducer
