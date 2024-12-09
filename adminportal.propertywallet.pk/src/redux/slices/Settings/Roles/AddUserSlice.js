import { createSlice } from '@reduxjs/toolkit'

export const AddUserSlice = createSlice({
  name: 'AddUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state) => {
      state.loading = true
    },
    addUserSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    addUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { addUser, addUserSuccess, addUserFailure } = AddUserSlice.actions

export default AddUserSlice.reducer
