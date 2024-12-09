import { createSlice } from '@reduxjs/toolkit'
export const getAllInterestedLogsSlice = createSlice({
  name: 'getAllInterestedLogsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllInterestedLogs: (state) => {
      state.loading = true
    },
    getAllInterestedLogsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllInterestedLogsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearGetAllInterestedLogs: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  getAllInterestedLogs,
  getAllInterestedLogsSuccess,
  getAllInterestedLogsFailure,
  clearGetAllInterestedLogs,
} = getAllInterestedLogsSlice.actions

export default getAllInterestedLogsSlice.reducer
