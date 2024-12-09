import { createSlice } from '@reduxjs/toolkit'
export const deletePlotSlice = createSlice({
  name: 'deletePlotSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deletePlot: (state) => {
      state.loading = true
    },
    deletePlotSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deletePlotFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeletePlot: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deletePlot,
  deletePlotSuccess,
  deletePlotFailure,
  cleardeletePlot,
} = deletePlotSlice.actions

export default deletePlotSlice.reducer
