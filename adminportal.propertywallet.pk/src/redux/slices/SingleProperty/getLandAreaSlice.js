import { createSlice } from '@reduxjs/toolkit'
export const getLandAreaSlice = createSlice({
  name: 'getLandAreaSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getLandArea: (state) => {
      state.loading = true
    },
    getLandAreaSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getLandAreaFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { getLandArea, getLandAreaSuccess, getLandAreaFailure } =
  getLandAreaSlice.actions

export default getLandAreaSlice.reducer
