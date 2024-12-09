import { createSlice } from '@reduxjs/toolkit'
export const getAllAgenciesForSaleUsersSlice = createSlice({
  name: 'getAllAgenciesForSaleUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllAgenciesForSaleUsers: (state) => {
      state.loading = true
    },
    getAllAgenciesForSaleUsersSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllAgenciesForSaleUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllAgenciesForSaleUsers: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  getAllAgenciesForSaleUsers,
  getAllAgenciesForSaleUsersSuccess,
  getAllAgenciesForSaleUsersFailure,
  cleargetAllAgenciesForSaleUsers,
} = getAllAgenciesForSaleUsersSlice.actions

export default getAllAgenciesForSaleUsersSlice.reducer
