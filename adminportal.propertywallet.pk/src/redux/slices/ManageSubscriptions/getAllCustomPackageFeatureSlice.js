import { createSlice } from '@reduxjs/toolkit'
export const getAllCustomPackageFeatureSlice = createSlice({
  name: 'getAllCustomPackageFeatureSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllCustomPackageFeature: (state) => {
      state.loading = true
    },
    getAllCustomPackageFeatureSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllCustomPackageFeatureFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  getAllCustomPackageFeature,
  getAllCustomPackageFeatureSuccess,
  getAllCustomPackageFeatureFailure,
} = getAllCustomPackageFeatureSlice.actions

export default getAllCustomPackageFeatureSlice.reducer
