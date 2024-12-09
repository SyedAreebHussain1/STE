import { createSlice } from '@reduxjs/toolkit'

export const getAllLeadsForAdminSlice = createSlice({
  name: 'getAllLeadsForAdminSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllLeadsForAdmin: (state) => {
      state.loading = true
    },
    getAllLeadsForAdminSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getAllLeadsForAdminFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllLeadsForAdmin,
  getAllLeadsForAdminSuccess,
  getAllLeadsForAdminFailure,
} = getAllLeadsForAdminSlice.actions

export default getAllLeadsForAdminSlice.reducer
