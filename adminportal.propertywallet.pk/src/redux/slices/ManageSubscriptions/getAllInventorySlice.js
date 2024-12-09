import { createSlice } from '@reduxjs/toolkit'
export const getAllInventorySlice = createSlice({
  name: 'getAllInventorySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllInventory: (state) => {
      state.loading = true
    },
    getAllInventorySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllInventoryFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllInventory,
  getAllInventorySuccess,
  getAllInventoryFailure,
} = getAllInventorySlice.actions

export default getAllInventorySlice.reducer
