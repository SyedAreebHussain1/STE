import { createSlice } from '@reduxjs/toolkit'

export const AddELoungeInventorySlice = createSlice({
  name: 'AddELoungeInventorySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AddELoungeInventory: (state) => {
      state.loading = true
    },
    AddELoungeInventorySuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    AddELoungeInventoryFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  AddELoungeInventory,
  AddELoungeInventorySuccess,
  AddELoungeInventoryFailure,
} = AddELoungeInventorySlice.actions

export default AddELoungeInventorySlice.reducer
