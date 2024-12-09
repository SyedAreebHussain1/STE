import { createSlice } from '@reduxjs/toolkit'
export const updateCustomPackagePlanSlice = createSlice({
  name: 'updateCustomPackagePlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateCustomPackagePlan: (state) => {
      state.loading = true
    },
    updateCustomPackagePlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateCustomPackagePlanFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  updateCustomPackagePlan,
  updateCustomPackagePlanSuccess,
  updateCustomPackagePlanFailure,
} = updateCustomPackagePlanSlice.actions

export default updateCustomPackagePlanSlice.reducer
