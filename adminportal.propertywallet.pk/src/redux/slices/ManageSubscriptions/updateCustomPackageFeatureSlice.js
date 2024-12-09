import { createSlice } from '@reduxjs/toolkit'
export const updateCustomPackageFeatureSlice = createSlice({
  name: 'updateCustomPackageFeatureSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateCustomPackageFeature: (state) => {
      state.loading = true
    },
    updateCustomPackageFeatureSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateCustomPackageFeatureFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  updateCustomPackageFeature,
  updateCustomPackageFeatureSuccess,
  updateCustomPackageFeatureFailure,
} = updateCustomPackageFeatureSlice.actions

export default updateCustomPackageFeatureSlice.reducer
