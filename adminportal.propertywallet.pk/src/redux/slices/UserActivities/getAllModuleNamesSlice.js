import { createSlice } from '@reduxjs/toolkit'
export const getAllModuleNamesSlice = createSlice({
  name: 'getAllModuleNamesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllModuleNames: (state) => {
      state.loading = true
    },
    getAllModuleNamesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllModuleNamesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllModuleNames,
  getAllModuleNamesSuccess,
  getAllModuleNamesFailure,
} = getAllModuleNamesSlice.actions

export default getAllModuleNamesSlice.reducer
