import { createSlice } from '@reduxjs/toolkit'

export const GetAllAffilateForAssignToManagerSlice = createSlice({
  name: 'GetAllAffilateForAssignToManagerSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllAffilateForAssignToManager: (state) => {
      state.loading = true
    },
    GetAllAffilateForAssignToManagerSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllAffilateForAssignToManagerFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllAffilateForAssignToManager: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  GetAllAffilateForAssignToManager,
  GetAllAffilateForAssignToManagerSuccess,
  GetAllAffilateForAssignToManagerFailure,
  clearGetAllAffilateForAssignToManager,
} = GetAllAffilateForAssignToManagerSlice.actions

export default GetAllAffilateForAssignToManagerSlice.reducer
