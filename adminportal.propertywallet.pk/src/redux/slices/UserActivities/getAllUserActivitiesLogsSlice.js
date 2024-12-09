import { createSlice } from '@reduxjs/toolkit'
export const getAllUserActivitiesLogsSlice = createSlice({
  name: 'getAllUserActivitiesLogsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllUserActivitiesLogs: (state) => {
      state.loading = true
    },
    getAllUserActivitiesLogsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllUserActivitiesLogsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllUserActivitiesLogs,
  getAllUserActivitiesLogsSuccess,
  getAllUserActivitiesLogsFailure,
} = getAllUserActivitiesLogsSlice.actions

export default getAllUserActivitiesLogsSlice.reducer
