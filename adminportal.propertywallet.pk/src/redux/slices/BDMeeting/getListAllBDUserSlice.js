import { createSlice } from '@reduxjs/toolkit'
export const getListAllBDUserSlice = createSlice({
  name: 'getListAllBDUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getListAllBDUser: (state) => {
      state.loading = true
    },
    getListAllBDUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getListAllBDUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetListAllBDUser: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getListAllBDUser,
  getListAllBDUserSuccess,
  getListAllBDUserFailure,
  clearGetListAllBDUser,
} = getListAllBDUserSlice.actions

export default getListAllBDUserSlice.reducer
