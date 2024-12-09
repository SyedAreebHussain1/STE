import { createSlice } from '@reduxjs/toolkit'
export const getAllProductListSlice = createSlice({
  name: 'getAllProductListSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllProductList: (state) => {
      state.loading = true
    },
    getAllProductListSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllProductListFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllProductList: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllProductList,
  getAllProductListSuccess,
  getAllProductListFailure,
  cleargetAllProductList,
} = getAllProductListSlice.actions

export default getAllProductListSlice.reducer
