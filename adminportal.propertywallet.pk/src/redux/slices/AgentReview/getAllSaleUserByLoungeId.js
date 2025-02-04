import { createSlice } from '@reduxjs/toolkit'
export const getAllSaleUserByLoungeIdSlice = createSlice({
  name: 'getAllSaleUserByLoungeIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllSaleUserByLoungeId: (state) => {
      state.loading = true
    },
    getAllSaleUserByLoungeIdSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllSaleUserByLoungeIdFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllSaleUserByLoungeId: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  getAllSaleUserByLoungeId,
  getAllSaleUserByLoungeIdSuccess,
  getAllSaleUserByLoungeIdFailure,
  cleargetAllSaleUserByLoungeId,
} = getAllSaleUserByLoungeIdSlice.actions

export default getAllSaleUserByLoungeIdSlice.reducer
