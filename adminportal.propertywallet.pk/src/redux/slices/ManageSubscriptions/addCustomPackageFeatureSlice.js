import { createSlice } from '@reduxjs/toolkit'
export const addCustomPackageFeatureSlice = createSlice({
  name: 'addCustomPackageFeatureSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addCustomPackageFeature: (state) => {
      state.loading = true
    },
    addCustomPackageFeatureSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    addCustomPackageFeatureFailure: (state, action) => {
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
  addCustomPackageFeature,
  addCustomPackageFeatureSuccess,
  addCustomPackageFeatureFailure,
} = addCustomPackageFeatureSlice.actions

export default addCustomPackageFeatureSlice.reducer
