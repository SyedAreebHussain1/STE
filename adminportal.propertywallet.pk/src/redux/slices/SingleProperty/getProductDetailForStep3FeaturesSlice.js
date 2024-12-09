import { createSlice } from '@reduxjs/toolkit'
export const getProductDetailForStep3FeaturesSlice = createSlice({
  name: 'getProductDetailForStep3FeaturesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProductDetailForStep3Features: (state) => {
      state.loading = true
    },
    getProductDetailForStep3FeaturesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProductDetailForStep3FeaturesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetProductDetailForStep3Features: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getProductDetailForStep3Features,
  getProductDetailForStep3FeaturesSuccess,
  getProductDetailForStep3FeaturesFailure,
  cleargetProductDetailForStep3Features,
} = getProductDetailForStep3FeaturesSlice.actions

export default getProductDetailForStep3FeaturesSlice.reducer
