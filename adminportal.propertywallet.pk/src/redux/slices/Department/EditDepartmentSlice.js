import { createSlice } from '@reduxjs/toolkit'

export const EditDepartmentSlice = createSlice({
  name: 'EditDepartmentSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EditDepartment: (state) => {
      state.loading = true
    },
    EditDepartmentSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    EditDepartmentFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { EditDepartment, EditDepartmentSuccess, EditDepartmentFailure } =
  EditDepartmentSlice.actions

export default EditDepartmentSlice.reducer
