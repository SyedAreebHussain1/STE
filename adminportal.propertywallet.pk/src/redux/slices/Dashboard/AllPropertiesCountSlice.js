import { createSlice } from '@reduxjs/toolkit'

export const AllPropertiesCountSlice = createSlice({
  name: 'AllPropertiesCountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    allPropertiesCount: (state) => {
      state.loading = true
    },
    allPropertiesCountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    allPropertiesCountFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  allPropertiesCount,
  allPropertiesCountSuccess,
  allPropertiesCountFailure,
} = AllPropertiesCountSlice.actions

export default AllPropertiesCountSlice.reducer
