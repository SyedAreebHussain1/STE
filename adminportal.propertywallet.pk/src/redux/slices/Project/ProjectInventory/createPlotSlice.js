import { createSlice } from '@reduxjs/toolkit'
export const createPlotSlice = createSlice({
  name: 'createPlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPlot: (state) => {
      state.loading = true
    },
    createPlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreatePlot: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPlot,
  createPlotSuccess,
  createPlotFailure,
  clearcreatePlot,
} = createPlotSlice.actions

export default createPlotSlice.reducer
