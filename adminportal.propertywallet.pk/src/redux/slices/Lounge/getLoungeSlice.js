import { createSlice } from '@reduxjs/toolkit'
export const getLoungeSlice = createSlice({
  name: 'getLoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getLounge: (state) => {
      state.loading = true
    },
    getLoungeSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getLoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetLounge: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const { getLounge, getLoungeSuccess, getLoungeFailure, clearGetLounge } =
  getLoungeSlice.actions

export default getLoungeSlice.reducer
