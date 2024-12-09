import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletUtilSlice = createSlice({
  name: 'createPropertyWalletUtilSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletUtil: (state) => {
      state.loading = true
    },
    createPropertyWalletUtilSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletUtilFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearcreatePropertyWalletUtil: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  createPropertyWalletUtil,
  createPropertyWalletUtilSuccess,
  createPropertyWalletUtilFailure,
  clearcreatePropertyWalletUtil,
} = createPropertyWalletUtilSlice.actions

export default createPropertyWalletUtilSlice.reducer
