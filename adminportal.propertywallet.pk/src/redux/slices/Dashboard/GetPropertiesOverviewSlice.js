import { createSlice } from '@reduxjs/toolkit'

export const GetPropertiesOverviewSlice = createSlice({
  name: 'GetPropertiesOverviewSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetPropertiesOverview: (state) => {
      state.loading = true
    },
    GetPropertiesOverviewSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    GetPropertiesOverviewFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetPropertiesOverview,
  GetPropertiesOverviewSuccess,
  GetPropertiesOverviewFailure,
} = GetPropertiesOverviewSlice.actions

export default GetPropertiesOverviewSlice.reducer
