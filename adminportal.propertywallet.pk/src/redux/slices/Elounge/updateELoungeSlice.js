import { createSlice } from '@reduxjs/toolkit'

export const updateELoungeSlice = createSlice({
  name: 'updateELoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateELounge: (state) => {
      state.loading = true
    },
    updateELoungeSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    updateELoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { updateELounge, updateELoungeSuccess, updateELoungeFailure } =
  updateELoungeSlice.actions

export default updateELoungeSlice.reducer
