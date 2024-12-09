import { createSlice } from '@reduxjs/toolkit'
export const getAllPlotsSlice = createSlice({
  name: 'getAllPlotsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllPlots: (state) => {
      state.loading = true
    },
    getAllPlotsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllPlotsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllPlots: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllPlots,
  getAllPlotsSuccess,
  getAllPlotsFailure,
  cleargetAllPlots,
} = getAllPlotsSlice.actions

export default getAllPlotsSlice.reducer
