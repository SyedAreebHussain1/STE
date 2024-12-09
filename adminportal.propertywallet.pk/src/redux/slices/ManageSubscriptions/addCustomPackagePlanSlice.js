import { createSlice } from '@reduxjs/toolkit'
export const addCustomPackagePlanSlice = createSlice({
  name: 'addCustomPackagePlanSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addCustomPackagePlan: (state) => {
      state.loading = true
    },
    addCustomPackagePlanSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    addCustomPackagePlanFailure: (state, action) => {
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
  addCustomPackagePlan,
  addCustomPackagePlanSuccess,
  addCustomPackagePlanFailure,
} = addCustomPackagePlanSlice.actions

export default addCustomPackagePlanSlice.reducer
