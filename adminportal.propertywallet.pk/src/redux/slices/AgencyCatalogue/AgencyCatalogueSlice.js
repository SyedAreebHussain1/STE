import { createSlice } from '@reduxjs/toolkit'
export const AgencyCatalogueSlice = createSlice({
  name: 'AgencyCatalogueSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AgencyCatalogue: (state) => {
      state.loading = true
    },
    AgencyCatalogueSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    AgencyCatalogueFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearAgencyCatalogue: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  AgencyCatalogue,
  AgencyCatalogueSuccess,
  AgencyCatalogueFailure,
  clearAgencyCatalogue,
} = AgencyCatalogueSlice.actions

export default AgencyCatalogueSlice.reducer
