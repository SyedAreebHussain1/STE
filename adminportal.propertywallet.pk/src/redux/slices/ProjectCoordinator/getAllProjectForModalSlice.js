import { createSlice } from '@reduxjs/toolkit'
export const getAllProjectForModalSlice = createSlice({
  name: 'getAllProjectForModalSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllProjectForModal: (state) => {
      state.loading = true
    },
    getAllProjectForModalSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllProjectForModalFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleargetAllProjectForModal: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllProjectForModal,
  getAllProjectForModalSuccess,
  getAllProjectForModalFailure,
  cleargetAllProjectForModal,
} = getAllProjectForModalSlice.actions

export default getAllProjectForModalSlice.reducer
