import { createSlice } from '@reduxjs/toolkit'
export const getProjectInventoryUtilsSlice = createSlice({
  name: 'getProjectInventoryUtilsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectInventoryUtils: (state) => {
      state.loading = true
    },
    getProjectInventoryUtilsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectInventoryUtilsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProjectInventoryUtils: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProjectInventoryUtils,
  getProjectInventoryUtilsSuccess,
  getProjectInventoryUtilsFailure,
  cleargetProjectInventoryUtils,
} = getProjectInventoryUtilsSlice.actions

export default getProjectInventoryUtilsSlice.reducer
