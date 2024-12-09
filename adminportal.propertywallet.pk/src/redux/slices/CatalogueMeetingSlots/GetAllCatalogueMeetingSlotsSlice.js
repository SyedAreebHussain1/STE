import { createSlice } from '@reduxjs/toolkit'

export const GetAllCatalogueMeetingSlotsSlice = createSlice({
  name: 'GetAllCatalogueMeetingSlotsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllCatalogueMeetingSlots: (state) => {
      state.loading = true
    },
    GetAllCatalogueMeetingSlotsSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllCatalogueMeetingSlotsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllCatalogueMeetingSlots,
  GetAllCatalogueMeetingSlotsSuccess,
  GetAllCatalogueMeetingSlotsFailure,
} = GetAllCatalogueMeetingSlotsSlice.actions

export default GetAllCatalogueMeetingSlotsSlice.reducer
