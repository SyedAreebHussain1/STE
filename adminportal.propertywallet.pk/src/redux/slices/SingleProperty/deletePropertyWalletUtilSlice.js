import { createSlice } from '@reduxjs/toolkit'
export const deletePropertyWalletUtilSlice = createSlice({
  name: 'deletePropertyWalletUtilSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deletePropertyWalletUtil: (state) => {
      state.loading = true
    },
    deletePropertyWalletUtilSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deletePropertyWalletUtilFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    cleardeletePropertyWalletUtil: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  deletePropertyWalletUtil,
  deletePropertyWalletUtilSuccess,
  deletePropertyWalletUtilFailure,
  cleardeletePropertyWalletUtil,
} = deletePropertyWalletUtilSlice.actions

export default deletePropertyWalletUtilSlice.reducer
