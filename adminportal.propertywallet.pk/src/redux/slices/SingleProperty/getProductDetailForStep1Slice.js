import { createSlice } from '@reduxjs/toolkit'
export const getProductDetailForStep1Slice = createSlice({
  name: 'getProductDetailForStep1Slice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProductDetailForStep1: (state) => {
      state.loading = true
    },
    getProductDetailForStep1Success: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProductDetailForStep1Failure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProductDetailForStep1: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProductDetailForStep1,
  getProductDetailForStep1Success,
  getProductDetailForStep1Failure,
  cleargetProductDetailForStep1,
} = getProductDetailForStep1Slice.actions

export default getProductDetailForStep1Slice.reducer
