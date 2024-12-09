import { createSlice } from '@reduxjs/toolkit'

export const GetDepartmentSlice = createSlice({
  name: 'GetDepartmentSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetDepartment: (state) => {
      state.loading = true
    },
    GetDepartmentSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetDepartmentFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { GetDepartment, GetDepartmentSuccess, GetDepartmentFailure } =
  GetDepartmentSlice.actions

export default GetDepartmentSlice.reducer
