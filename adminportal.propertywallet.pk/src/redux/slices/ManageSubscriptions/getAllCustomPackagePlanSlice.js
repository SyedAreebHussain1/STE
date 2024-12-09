import { createSlice } from '@reduxjs/toolkit'
export const getAllCustomPackagePlanSlice = createSlice({
  name: 'getAllCustomPackagePlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllCustomPackagePlan: (state) => {
      state.loading = true
    },
    getAllCustomPackagePlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllCustomPackagePlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllCustomPackagePlan,
  getAllCustomPackagePlanSuccess,
  getAllCustomPackagePlanFailure,
} = getAllCustomPackagePlanSlice.actions

export default getAllCustomPackagePlanSlice.reducer
