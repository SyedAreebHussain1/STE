import { createSlice } from '@reduxjs/toolkit'

export const AddDepartmentSlice = createSlice({
  name: 'AddDepartmentSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AddDepartment: (state) => {
      state.loading = true
    },
    AddDepartmentSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    AddDepartmentFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { AddDepartment, AddDepartmentSuccess, AddDepartmentFailure } =
  AddDepartmentSlice.actions

export default AddDepartmentSlice.reducer
