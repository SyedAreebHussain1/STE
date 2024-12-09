import { createSlice } from '@reduxjs/toolkit'

export const AddInventorySlice = createSlice({
  name: 'AddInventorySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addInventory: (state) => {
      state.loading = true
    },
    addInventorySuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    addInventoryFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { addInventory, addInventorySuccess, addInventoryFailure } =
  AddInventorySlice.actions

export default AddInventorySlice.reducer
