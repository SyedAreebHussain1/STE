import { createSlice } from '@reduxjs/toolkit'

export const AllPropertiesLastDayCountSlice = createSlice({
  name: 'AllPropertiesLastDayCountSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    allPropertiesLastDayCount: (state) => {
      state.loading = true
    },
    allPropertiesLastDayCountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    allPropertiesLastDayCountFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  allPropertiesLastDayCount,
  allPropertiesLastDayCountSuccess,
  allPropertiesLastDayCountFailure,
} = AllPropertiesLastDayCountSlice.actions

export default AllPropertiesLastDayCountSlice.reducer
