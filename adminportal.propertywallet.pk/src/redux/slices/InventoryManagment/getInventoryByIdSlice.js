import { createSlice } from '@reduxjs/toolkit'

export const getInventoryByIdSlice = createSlice({
  name: 'getInventoryByIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getInventoryById: (state) => {
      state.loading = true
    },
    getInventoryByIdSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getInventoryByIdFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  getInventoryById,
  getInventoryByIdSuccess,
  getInventoryByIdFailure,
} = getInventoryByIdSlice.actions

export default getInventoryByIdSlice.reducer
