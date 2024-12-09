import { createSlice } from '@reduxjs/toolkit'
export const deleteProductPlotSlice = createSlice({
  name: 'deleteProductPlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProductPlot: (state) => {
      state.loading = true
    },
    deleteProductPlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteProductPlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteProductPlot: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteProductPlot,
  deleteProductPlotSuccess,
  deleteProductPlotFailure,
  cleardeleteProductPlot,
} = deleteProductPlotSlice.actions

export default deleteProductPlotSlice.reducer
