import { createSlice } from '@reduxjs/toolkit'

export const getAllInventoriesSlice = createSlice({
  name: 'getAllInventoriesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllInventories: (state) => {
      state.loading = true
    },
    getAllInventoriesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getAllInventoriesFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  getAllInventories,
  getAllInventoriesSuccess,
  getAllInventoriesFailure,
} = getAllInventoriesSlice.actions

export default getAllInventoriesSlice.reducer
