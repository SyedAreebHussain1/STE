import { createSlice } from '@reduxjs/toolkit'
export const getAllTicketsForAdminSideSlice = createSlice({
  name: 'getAllTicketsForAdminSideSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllTicketsForAdminSide: (state) => {
      state.loading = true
    },
    getAllTicketsForAdminSideSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllTicketsForAdminSideFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllTicketsForAdminSide: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllTicketsForAdminSide,
  getAllTicketsForAdminSideSuccess,
  getAllTicketsForAdminSideFailure,
} = getAllTicketsForAdminSideSlice.actions

export default getAllTicketsForAdminSideSlice.reducer
