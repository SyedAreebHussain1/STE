import { createSlice } from '@reduxjs/toolkit'
export const getAllProductPlotSlice = createSlice({
  name: 'getAllProductPlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllProductPlot: (state) => {
      state.loading = true
    },
    getAllProductPlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllProductPlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllProductPlot: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllProductPlot,
  getAllProductPlotSuccess,
  getAllProductPlotFailure,
  cleargetAllProductPlot,
} = getAllProductPlotSlice.actions

export default getAllProductPlotSlice.reducer
