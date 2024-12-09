import { createSlice } from '@reduxjs/toolkit'

export const getAllProjectCoodinatorSlice = createSlice({
  name: 'getAllBankRequestSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectCoodinator: (state) => {
      state.loading = true
    },
    getProjectCoodinatorSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getProjectCoodinatorFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getProjectCoodinator,
  getProjectCoodinatorSuccess,
  getProjectCoodinatorFailure,
} = getAllProjectCoodinatorSlice.actions

export default getAllProjectCoodinatorSlice.reducer
