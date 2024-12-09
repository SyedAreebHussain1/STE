import { createSlice } from '@reduxjs/toolkit'

export const GetOwnersSlice = createSlice({
  name: 'GetOwnersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getOwners: (state) => {
      state.loading = true
    },
    getOwnersSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    getOwnersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getOwners, getOwnersSuccess, getOwnersFailure } =
  GetOwnersSlice.actions

export default GetOwnersSlice.reducer
