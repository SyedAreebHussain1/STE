import { createSlice } from '@reduxjs/toolkit'

export const UnAssignEloungeAssignUserToLeadSlice = createSlice({
  name: 'UnAssignEloungeAssignUserToLeadSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    UnAssignEloungeAssignUserToLead: (state) => {
      state.loading = true
    },
    UnAssignEloungeAssignUserToLeadSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    UnAssignEloungeAssignUserToLeadFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  UnAssignEloungeAssignUserToLead,
  UnAssignEloungeAssignUserToLeadSuccess,
  UnAssignEloungeAssignUserToLeadFailure,
} = UnAssignEloungeAssignUserToLeadSlice.actions

export default UnAssignEloungeAssignUserToLeadSlice.reducer
