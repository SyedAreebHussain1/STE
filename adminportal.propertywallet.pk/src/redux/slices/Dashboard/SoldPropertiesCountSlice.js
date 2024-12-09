import { createSlice } from '@reduxjs/toolkit'

export const SoldPropertiesCountSlice = createSlice({
  name: 'SoldPropertiesCountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    soldPropertiesCount: (state) => {
      state.loading = true
    },
    soldPropertiesCountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    soldPropertiesCountFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  soldPropertiesCount,
  soldPropertiesCountSuccess,
  soldPropertiesCountFailure,
} = SoldPropertiesCountSlice.actions

export default SoldPropertiesCountSlice.reducer
