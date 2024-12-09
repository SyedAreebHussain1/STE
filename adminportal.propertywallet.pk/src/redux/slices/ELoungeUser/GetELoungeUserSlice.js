import { createSlice } from '@reduxjs/toolkit'

export const GetELoungeUserSlice = createSlice({
  name: 'GetELoungeUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetELoungeUser: (state) => {
      state.loading = true
    },
    GetELoungeUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    GetELoungeUserFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const { GetELoungeUser, GetELoungeUserSuccess, GetELoungeUserFailure } =
  GetELoungeUserSlice.actions

export default GetELoungeUserSlice.reducer
