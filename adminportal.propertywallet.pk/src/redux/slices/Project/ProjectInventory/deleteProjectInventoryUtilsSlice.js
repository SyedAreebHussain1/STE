import { createSlice } from '@reduxjs/toolkit'
export const deleteProjectInventoryUtilsSlice = createSlice({
  name: 'deleteProjectInventoryUtilsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteProjectInventoryUtils: (state) => {
      state.loading = true
    },
    deleteProjectInventoryUtilsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteProjectInventoryUtilsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeleteProjectInventoryUtils: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deleteProjectInventoryUtils,
  deleteProjectInventoryUtilsSuccess,
  deleteProjectInventoryUtilsFailure,
  cleardeleteProjectInventoryUtils,
} = deleteProjectInventoryUtilsSlice.actions

export default deleteProjectInventoryUtilsSlice.reducer
