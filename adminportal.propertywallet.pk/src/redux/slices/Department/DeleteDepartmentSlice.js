import { createSlice } from '@reduxjs/toolkit'

export const DeleteDepartmentSlice = createSlice({
  name: 'DeleteDepartmentSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    DeleteDepartment: (state) => {
      state.loading = true
    },
    DeleteDepartmentSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    DeleteDepartmentFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  DeleteDepartment,
  DeleteDepartmentSuccess,
  DeleteDepartmentFailure,
} = DeleteDepartmentSlice.actions

export default DeleteDepartmentSlice.reducer
