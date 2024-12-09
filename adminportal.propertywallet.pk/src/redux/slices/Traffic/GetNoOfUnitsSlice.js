import { createSlice } from '@reduxjs/toolkit'
export const GetNoOfUnitsSlice = createSlice({
  name: 'GetNoOfUnitsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getNoOfUnits: (state) => {
      state.loading = true
    },
    getNoOfUnitsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getNoOfUnitsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getNoOfUnits, getNoOfUnitsSuccess, getNoOfUnitsFailure } =
  GetNoOfUnitsSlice.actions

export default GetNoOfUnitsSlice.reducer
