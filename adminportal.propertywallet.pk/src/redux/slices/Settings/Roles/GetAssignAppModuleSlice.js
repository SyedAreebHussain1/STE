import { createSlice } from '@reduxjs/toolkit'

export const GetAssignAppModuleSlice = createSlice({
  name: 'GetAssignAppModuleSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAssignAppModule: (state) => {
      state.loading = true
    },
    getAssignAppModuleSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getAssignAppModuleFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAssignAppModule: (state) => {
      state.loading = false
      state.data = null
      state.error = null
    },
  },
})

export const {
  getAssignAppModule,
  getAssignAppModuleSuccess,
  getAssignAppModuleFailure,
  clearGetAssignAppModule,
} = GetAssignAppModuleSlice.actions

export default GetAssignAppModuleSlice.reducer
