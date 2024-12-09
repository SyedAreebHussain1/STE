import { createSlice } from '@reduxjs/toolkit'
export const getTicketDataByIdSlice = createSlice({
  name: 'getTicketDataByIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getTicketDataById: (state) => {
      state.loading = true
    },
    getTicketDataByIdSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getTicketDataByIdFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetTicketDataById: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getTicketDataById,
  getTicketDataByIdSuccess,
  getTicketDataByIdFailure,
} = getTicketDataByIdSlice.actions

export default getTicketDataByIdSlice.reducer
