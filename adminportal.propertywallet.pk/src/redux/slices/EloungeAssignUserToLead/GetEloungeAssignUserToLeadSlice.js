import { createSlice } from '@reduxjs/toolkit'

export const GetEloungeAssignUserToLeadSlice = createSlice({
  name: 'GetEloungeAssignUserToLeadSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetEloungeAssignUserToLead: (state) => {
      state.loading = true
    },
    GetEloungeAssignUserToLeadSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetEloungeAssignUserToLeadFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetEloungeAssignUserToLead,
  GetEloungeAssignUserToLeadSuccess,
  GetEloungeAssignUserToLeadFailure,
} = GetEloungeAssignUserToLeadSlice.actions

export default GetEloungeAssignUserToLeadSlice.reducer
