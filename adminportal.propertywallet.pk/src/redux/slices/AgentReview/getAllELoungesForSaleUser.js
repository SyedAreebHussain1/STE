import { createSlice } from '@reduxjs/toolkit'
export const getAllELoungesForSaleUserSlice = createSlice({
  name: 'getAllELoungesForSaleUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllELoungesForSaleUser: (state) => {
      state.loading = true
    },
    getAllELoungesForSaleUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllELoungesForSaleUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllELoungesForSaleUser: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  getAllELoungesForSaleUser,
  getAllELoungesForSaleUserSuccess,
  getAllELoungesForSaleUserFailure,
  cleargetAllELoungesForSaleUser,
} = getAllELoungesForSaleUserSlice.actions

export default getAllELoungesForSaleUserSlice.reducer
