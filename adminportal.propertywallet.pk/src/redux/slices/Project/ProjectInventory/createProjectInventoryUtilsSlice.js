import { createSlice } from '@reduxjs/toolkit'
export const createProjectInventoryUtilsSlice = createSlice({
  name: 'createProjectInventoryUtilsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProjectInventoryUtils: (state) => {
      state.loading = true
    },
    createProjectInventoryUtilsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProjectInventoryUtilsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreateProjectInventoryUtils: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createProjectInventoryUtils,
  createProjectInventoryUtilsSuccess,
  createProjectInventoryUtilsFailure,
  clearcreateProjectInventoryUtils,
} = createProjectInventoryUtilsSlice.actions

export default createProjectInventoryUtilsSlice.reducer
