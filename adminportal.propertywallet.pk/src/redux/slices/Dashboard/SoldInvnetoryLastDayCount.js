import { createSlice } from '@reduxjs/toolkit'

export const SoldInvnetoryLastDayCount = createSlice({
  name: 'SoldInvnetoryLastDayCount', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    soldPropertiesLastDayCount: (state) => {
      state.loading = true
    },
    soldPropertiesLastDayCountSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    soldPropertiesLastDayCountFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  soldPropertiesLastDayCount,
  soldPropertiesLastDayCountSuccess,
  soldPropertiesLastDayCountFailure,
} = SoldInvnetoryLastDayCount.actions

export default SoldInvnetoryLastDayCount.reducer
