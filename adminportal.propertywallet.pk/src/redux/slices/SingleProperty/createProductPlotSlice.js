import { createSlice } from '@reduxjs/toolkit'
export const createProductPlotSlice = createSlice({
  name: 'createProductPlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProductPlot: (state) => {
      state.loading = true
    },
    createProductPlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProductPlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateProductPlot: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProductPlot,
  createProductPlotSuccess,
  createProductPlotFailure,
  clearcreateProductPlot,
} = createProductPlotSlice.actions

export default createProductPlotSlice.reducer
